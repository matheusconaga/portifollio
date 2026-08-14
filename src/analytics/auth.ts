const API_URL =
  import.meta.env.VITE_ANALYTICS_API_URL;

interface LoginResponse {
  authenticated: boolean;
}

interface MeResponse {
  authenticated: boolean;
  role?: "admin";
}

export async function login(
  password: string,
): Promise<boolean> {
  const response = await fetch(
    `${API_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        password,
      }),
    },
  );

  if (!response.ok) {
    return false;
  }

  const data: LoginResponse =
    await response.json();

  return data.authenticated;
}

export async function checkAuth(): Promise<boolean> {
  try {
    const response = await fetch(
      `${API_URL}/api/auth/me`,
      {
        credentials: "include",
      },
    );

    if (!response.ok) {
      return false;
    }

    const data: MeResponse =
      await response.json();

    return data.authenticated;
  } catch {
    return false;
  }
}

export async function logout(): Promise<void> {
  await fetch(
    `${API_URL}/api/auth/logout`,
    {
      method: "POST",
      credentials: "include",
    },
  );
}