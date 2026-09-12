import {
  useEffect,
  useState,
} from "react";

import Homepage from "./pages/home";

import {
  MainLayout,
} from "./app/layout/MainLayout";

import {
  AppLoader,
} from "./shared/ui/app-loader";

import {
  initializeAnalytics,
  startActivityTracking,
  trackEvent,
} from "./analytics/analytics";

import {
  checkAuth,
} from "./analytics/auth";

import AnalyticsLogin from "./analytics/pages/AnalyticsLogin";
import AnalyticsDashboard from "./analytics/pages/AnalyticsDashboard";

const MOBILE_LOADING_TIME = 1000;
const DESKTOP_LOADING_TIME = 2000;

const OLD_RENDER_DOMAIN =
  "portifoliomatheuslula.onrender.com";

const NEW_DOMAIN =
  "matheusconaga.dev";

const ANALYTICS_DOMAIN =
  "analytics.matheusconaga.dev";

export default function App() {
  const hostname =
    window.location.hostname;

  const pathname =
    window.location.pathname;

  const isOldRenderDomain =
    hostname === OLD_RENDER_DOMAIN;

  /*
   * Novo domínio do dashboard.
   */
  const isAnalyticsDomain =
    hostname === ANALYTICS_DOMAIN;

  /*
   * Mantemos /analytics funcionando
   * durante a migração e no ambiente local.
   */
  const isAnalyticsRoute =
    pathname === "/analytics";

  const isAnalyticsApp =
    isAnalyticsDomain ||
    isAnalyticsRoute;

  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState<boolean | null>(
    isAnalyticsApp
      ? null
      : false,
  );

  const [
    isLoading,
    setIsLoading,
  ] = useState(
    !isAnalyticsApp,
  );

  /*
   * Redirect old Render domain
   * to the custom domain.
   */
  useEffect(() => {
    if (!isOldRenderDomain) {
      return;
    }

    const newUrl =
      `https://${NEW_DOMAIN}` +
      `${window.location.pathname}` +
      `${window.location.search}` +
      `${window.location.hash}`;

    window.location.replace(
      newUrl,
    );
  }, [isOldRenderDomain]);

  /*
   * Initialize analytics and loader.
   */
  useEffect(() => {
    if (isOldRenderDomain) {
      return;
    }

    /*
     * Analytics dashboard authentication.
     */
    if (isAnalyticsApp) {
      void checkAuth().then(
        setIsAuthenticated,
      );

      return;
    }

    document.body.style.overflow =
      "hidden";

    let cancelled = false;

    const sleep = (
      milliseconds: number,
    ) =>
      new Promise<void>(
        (resolve) => {
          setTimeout(
            resolve,
            milliseconds,
          );
        },
      );

    /*
     * Analytics starts immediately
     * and does not block the UI.
     */
    async function startAnalytics() {
      try {
        await initializeAnalytics();

        startActivityTracking();

        await trackEvent(
          "page_view",
          {
            page:
              window.location.pathname,
          },
        );
      } catch (error) {
        console.error(
          "Failed to start analytics:",
          error,
        );
      }
    }

    async function initializeApp() {
      /*
       * Start analytics immediately.
       */
      void startAnalytics();

      const isMobile =
        window.matchMedia(
          "(max-width: 767px)",
        ).matches;

      const loadingTime =
        isMobile
          ? MOBILE_LOADING_TIME
          : DESKTOP_LOADING_TIME;

      await sleep(
        loadingTime,
      );

      if (cancelled) {
        return;
      }

      setIsLoading(false);

      document.body.style.overflow =
        "auto";
    }

    void initializeApp();

    return () => {
      cancelled = true;

      document.body.style.overflow =
        "auto";
    };
  }, [
    isAnalyticsApp,
    isOldRenderDomain,
  ]);

  /*
   * Prevent old domain from
   * rendering before redirect.
   */
  if (isOldRenderDomain) {
    return null;
  }


  if (isAnalyticsApp) {
    if (
      isAuthenticated === null
    ) {
      return null;
    }

    if (
      !isAuthenticated
    ) {
      return (
        <AnalyticsLogin
          onAuthenticated={() =>
            setIsAuthenticated(
              true,
            )
          }
        />
      );
    }

    return (
      <AnalyticsDashboard
        onLogout={() =>
          setIsAuthenticated(
            false,
          )
        }
      />
    );
  }

  /*
   * Portfolio.
   */
  return (
    <>
      <MainLayout>
        <Homepage />
      </MainLayout>

      <AppLoader
        isLoading={isLoading}
      />
    </>
  );
}