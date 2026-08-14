const API_URL =
  import.meta.env.VITE_ANALYTICS_API_URL;

const VISITOR_STORAGE_KEY =
  "portfolio_analytics_visitor_id";

const SESSION_STORAGE_KEY =
  "portfolio_analytics_session_id";

const LAST_ACTIVITY_STORAGE_KEY =
  "portfolio_analytics_last_activity";

const SESSION_TIMEOUT =
  30 * 60 * 1000;

const ACTIVITY_INTERVAL =
  30_000;

interface SessionResponse {
  visitorId: string;
  sessionId: string;
}

let initializationPromise:
  Promise<void> | null =
  null;

let activityTrackingStarted =
  false;

/*
 * Cria ou recupera uma sessão válida.
 */
async function createOrRestoreSession(): Promise<void> {
  const existingSessionId =
    sessionStorage.getItem(
      SESSION_STORAGE_KEY,
    );

  const lastActivity =
    sessionStorage.getItem(
      LAST_ACTIVITY_STORAGE_KEY,
    );

  /*
   * Já existe uma sessão válida.
   */
  if (
    existingSessionId &&
    lastActivity
  ) {
    const elapsed =
      Date.now() -
      Number(lastActivity);

    if (
      Number.isFinite(elapsed) &&
      elapsed < SESSION_TIMEOUT
    ) {
      return;
    }
  }

  /*
   * Sessão inexistente ou expirada.
   */
  sessionStorage.removeItem(
    SESSION_STORAGE_KEY,
  );

  sessionStorage.removeItem(
    LAST_ACTIVITY_STORAGE_KEY,
  );

  const visitorId =
    localStorage.getItem(
      VISITOR_STORAGE_KEY,
    );

  const response =
    await fetch(
      `${API_URL}/api/analytics/session`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          visitorId
            ? {
                visitorId,
              }
            : {},
        ),
      },
    );

  if (!response.ok) {
    throw new Error(
      `Failed to initialize analytics: ${response.status}`,
    );
  }

  const data: SessionResponse =
    await response.json();

  localStorage.setItem(
    VISITOR_STORAGE_KEY,
    data.visitorId,
  );

  sessionStorage.setItem(
    SESSION_STORAGE_KEY,
    data.sessionId,
  );

  sessionStorage.setItem(
    LAST_ACTIVITY_STORAGE_KEY,
    Date.now().toString(),
  );
}

/*
 * Inicializa o analytics.
 *
 * Se duas chamadas acontecerem ao mesmo
 * tempo, ambas aguardam a mesma Promise.
 */
export async function initializeAnalytics(): Promise<void> {
  const existingSessionId =
    sessionStorage.getItem(
      SESSION_STORAGE_KEY,
    );

  const lastActivity =
    sessionStorage.getItem(
      LAST_ACTIVITY_STORAGE_KEY,
    );

  /*
   * Podemos retornar imediatamente
   * se já existe uma sessão válida.
   */
  if (
    existingSessionId &&
    lastActivity
  ) {
    const elapsed =
      Date.now() -
      Number(lastActivity);

    if (
      Number.isFinite(elapsed) &&
      elapsed < SESSION_TIMEOUT
    ) {
      return;
    }
  }

  /*
   * Se uma inicialização já está
   * acontecendo, aguarda ela.
   */
  if (initializationPromise) {
    return initializationPromise;
  }

  initializationPromise =
    createOrRestoreSession();

  try {
    await initializationPromise;
  } catch (error) {
    console.error(
      "Analytics initialization failed:",
      error,
    );

    throw error;
  } finally {
    initializationPromise =
      null;
  }
}

/*
 * Envia eventos do portfólio.
 */
export async function trackEvent(
  type: string,
  data: {
    page?: string;
    projectSlug?: string;

    metadata?: Record<
      string,
      unknown
    >;
  } = {},
): Promise<void> {
  try {
    const sessionId =
      sessionStorage.getItem(
        SESSION_STORAGE_KEY,
      );

    if (!sessionId) {
      console.warn(
        "Analytics session not initialized",
      );

      return;
    }

    const response =
      await fetch(
        `${API_URL}/api/analytics/event`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            sessionId,
            type,
            ...data,
          }),
        },
      );

    if (!response.ok) {
      throw new Error(
        `Failed to track event: ${response.status}`,
      );
    }
  } catch (error) {
    console.error(
      "Analytics event failed:",
      error,
    );
  }
}

/*
 * Atualiza a atividade da sessão.
 */
async function sendActivity(): Promise<void> {
  try {
    const sessionId =
      sessionStorage.getItem(
        SESSION_STORAGE_KEY,
      );

    if (!sessionId) {
      return;
    }

    /*
     * Não contabiliza atividade
     * enquanto a aba estiver escondida.
     */
    if (
      document.visibilityState !==
      "visible"
    ) {
      return;
    }

    const response =
      await fetch(
        `${API_URL}/api/analytics/activity`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            sessionId,
          }),

          keepalive: true,
        },
      );

    if (!response.ok) {
      throw new Error(
        `Failed to update analytics activity: ${response.status}`,
      );
    }

    sessionStorage.setItem(
      LAST_ACTIVITY_STORAGE_KEY,
      Date.now().toString(),
    );
  } catch (error) {
    console.error(
      "Analytics activity update failed:",
      error,
    );
  }
}

/*
 * Inicia o acompanhamento
 * da atividade da sessão.
 */
export function startActivityTracking(): void {
  if (
    activityTrackingStarted
  ) {
    return;
  }

  activityTrackingStarted = true;

  /*
   * Atividade inicial.
   */
  void sendActivity();

  /*
   * Heartbeat a cada 30 segundos.
   */
  setInterval(() => {
    void sendActivity();
  }, ACTIVITY_INTERVAL);

  /*
   * Se voltar para a aba,
   * registra atividade imediatamente.
   */
  document.addEventListener(
    "visibilitychange",
    () => {
      if (
        document.visibilityState ===
        "visible"
      ) {
        void sendActivity();
      }
    },
  );
}