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

const OLD_RENDER_DOMAIN =
  "portifoliomatheuslula.onrender.com";

const NEW_DOMAIN =
  "matheusconaga.dev";

export default function App() {
  const isOldRenderDomain =
    window.location.hostname ===
    OLD_RENDER_DOMAIN;

  const isAnalyticsRoute =
    window.location.pathname ===
    "/analytics";

  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState<boolean | null>(
    isAnalyticsRoute
      ? null
      : false,
  );

  const [
    isLoading,
    setIsLoading,
  ] = useState(
    !isAnalyticsRoute,
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
    /*
     * Don't initialize anything
     * while redirecting.
     */
    if (isOldRenderDomain) {
      return;
    }

    /*
     * Analytics dashboard authentication.
     */
    if (isAnalyticsRoute) {
      void checkAuth().then(
        setIsAuthenticated,
      );

      return;
    }

    /*
     * Prevent scrolling while
     * the initial loader is visible.
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

    /*
     * Analytics starts immediately,
     * but does not block the UI.
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

    /*
     * Initial application startup.
     */
    async function initializeApp() {
      /*
       * Fire and forget:
       * analytics starts immediately.
       */
      void startAnalytics();

      /*
       * Keep loader visible for
       * the minimum animation time.
       */
      await sleep(
        MIN_LOADING_TIME,
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
    isAnalyticsRoute,
    isOldRenderDomain,
  ]);

  /*
   * Prevent the old domain from
   * briefly rendering the portfolio
   * before redirecting.
   */
  if (isOldRenderDomain) {
    return null;
  }

  /*
   * Analytics route.
   */
  if (isAnalyticsRoute) {
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
   *
   * Homepage is mounted immediately
   * behind the loader so React and
   * the browser can prepare the page
   * while the loader is visible.
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