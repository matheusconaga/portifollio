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

import AnalyticsLogin from "./shared/pages/PrivateLogin";
import AnalyticsDashboard from "./analytics/pages/AnalyticsDashboard";
import ServerDashboard from "./server/pages/ServerDashboard";

const MIN_LOADING_TIME = 2000;
const MAX_ANALYTICS_WAIT = 4000;

const MAIN_DOMAIN =
  "matheusconaga.dev";

const WWW_DOMAIN =
  "www.matheusconaga.dev";

const ANALYTICS_DOMAIN =
  "analytics.matheusconaga.dev";

const SERVER_DOMAIN =
  "server.matheusconaga.dev";

export default function App() {
  const hostname =
    window.location.hostname;

  const pathname =
    window.location.pathname;

  /*
   * Production subdomains.
   */
  const isAnalyticsDomain =
    hostname === ANALYTICS_DOMAIN;

  const isServerDomain =
    hostname === SERVER_DOMAIN;

  /*
   * Local development routes.
   */
  const isLocalhost =
    hostname === "localhost" ||
    hostname === "127.0.0.1";

  const isLocalAnalyticsRoute =
    isLocalhost &&
    (
      pathname === "/analytics" ||
      pathname === "/analytics/"
    );

  const isLocalServerRoute =
    isLocalhost &&
    (
      pathname === "/server" ||
      pathname === "/server/"
    );

  /*
   * Legacy Analytics route.
   */
  const isLegacyAnalyticsRoute =
    (
      hostname === MAIN_DOMAIN ||
      hostname === WWW_DOMAIN
    ) &&
    (
      pathname === "/analytics" ||
      pathname === "/analytics/"
    );

  const isAnalyticsApp =
    isAnalyticsDomain ||
    isLocalAnalyticsRoute;

  const isServerApp =
    isServerDomain ||
    isLocalServerRoute;

  /*
   * Both dashboards are private
   * and use the same authentication.
   */
  const isPrivateApp =
    isAnalyticsApp ||
    isServerApp;

  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState<boolean | null>(
    isPrivateApp
      ? null
      : false,
  );

  const [
    isLoading,
    setIsLoading,
  ] = useState(
    !isPrivateApp &&
    !isLegacyAnalyticsRoute,
  );

  /*
   * Redirect old Analytics route.
   */
  useEffect(() => {
    if (
      !isLegacyAnalyticsRoute
    ) {
      return;
    }

    const newUrl =
      `https://${ANALYTICS_DOMAIN}` +
      `${window.location.search}` +
      `${window.location.hash}`;

    window.location.replace(
      newUrl,
    );
  }, [
    isLegacyAnalyticsRoute,
  ]);

  useEffect(() => {
    if (
      isLegacyAnalyticsRoute
    ) {
      return;
    }

    /*
     * Private dashboards authentication.
     */
    if (isPrivateApp) {
      void checkAuth().then(
        setIsAuthenticated,
      );

      return;
    }

    /*
     * Portfolio loading.
     */
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
      const minimumLoading =
        sleep(
          MIN_LOADING_TIME,
        );

      const analytics =
        startAnalytics();

      const analyticsTimeout =
        sleep(
          MAX_ANALYTICS_WAIT,
        );

      await Promise.all([
        minimumLoading,

        Promise.race([
          analytics,
          analyticsTimeout,
        ]),
      ]);

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
    isPrivateApp,
    isLegacyAnalyticsRoute,
  ]);

  /*
   * Wait for redirect.
   */
  if (
    isLegacyAnalyticsRoute
  ) {
    return null;
  }

  /*
   * Private applications.
   */
  if (isPrivateApp) {
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

    /*
     * Server dashboard.
     */
    if (isServerApp) {
      return (
        <ServerDashboard
          onLogout={() =>
            setIsAuthenticated(
              false,
            )
          }
        />
      );
    }

    /*
     * Analytics dashboard.
     */
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
      <AppLoader
        isLoading={
          isLoading
        }
      />

      {!isLoading && (
        <MainLayout>
          <Homepage />
        </MainLayout>
      )}
    </>
  );
}