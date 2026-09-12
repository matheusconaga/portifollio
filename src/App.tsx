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

const MIN_LOADING_TIME = 2000;
const MAX_ANALYTICS_WAIT = 4000;

const MAIN_DOMAIN =
  "matheusconaga.dev";

const WWW_DOMAIN =
  "www.matheusconaga.dev";

const ANALYTICS_DOMAIN =
  "analytics.matheusconaga.dev";

export default function App() {
  const hostname =
    window.location.hostname;

  const pathname =
    window.location.pathname;

  /*
   * Analytics dashboard running
   * on its dedicated subdomain.
   */
  const isAnalyticsDomain =
    hostname === ANALYTICS_DOMAIN;

  /*
   * Keep /analytics available
   * locally for development.
   */
  const isLocalAnalyticsRoute =
    (
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    ) &&
    (
      pathname === "/analytics" ||
      pathname === "/analytics/"
    );

  /*
   * Old production route.
   *
   * matheusconaga.dev/analytics
   * now redirects to:
   *
   * analytics.matheusconaga.dev
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

  /*
   * Determines whether the current
   * page is the Analytics application.
   */
  const isAnalyticsApp =
    isAnalyticsDomain ||
    isLocalAnalyticsRoute;

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
    !isAnalyticsApp &&
    !isLegacyAnalyticsRoute,
  );

  /*
   * Redirect the old analytics route
   * to the dedicated subdomain.
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
    /*
     * The old /analytics route
     * is waiting for redirect.
     */
    if (
      isLegacyAnalyticsRoute
    ) {
      return;
    }

    /*
     * Analytics dashboard
     * authentication.
     */
    if (isAnalyticsApp) {
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
    isAnalyticsApp,
    isLegacyAnalyticsRoute,
  ]);

  /*
   * Do not render anything while
   * redirecting the old route.
   */
  if (
    isLegacyAnalyticsRoute
  ) {
    return null;
  }

  /*
   * Analytics application.
   */
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

