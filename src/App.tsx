import { useEffect, useState } from "react";

import Homepage from "./pages/home";

import { MainLayout } from "./app/layout/MainLayout";

import { AppLoader } from "./shared/ui/app-loader";

import {
  initializeAnalytics,
  startActivityTracking,
  trackEvent,
} from "./analytics/analytics";

import { checkAuth } from "./analytics/auth";

import PrivateLogin from "./shared/pages/PrivateLogin";
import AnalyticsDashboard from "./analytics/pages/AnalyticsDashboard";
import ServerDashboard from "./server/pages/ServerDashboard";

const MIN_LOADING_TIME = 600;
const ANALYTICS_START_DELAY = 5000;

/*
 * Domains
 */
const OLD_RENDER_DOMAIN =
  "portifoliomatheuslula.onrender.com";

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
   * Old Render domain.
   *
   * portifoliomatheuslula.onrender.com
   * → matheusconaga.dev
   */
  const isOldRenderDomain =
    hostname === OLD_RENDER_DOMAIN;

  /*
   * Production subdomains.
   */
  const isAnalyticsDomain =
    hostname === ANALYTICS_DOMAIN;

  const isServerDomain =
    hostname === SERVER_DOMAIN;

  /*
   * Local development.
   */
  const isLocalhost =
    hostname === "localhost" ||
    hostname === "127.0.0.1";

  const isLocalAnalyticsRoute =
    isLocalhost &&
    (pathname === "/analytics" ||
      pathname === "/analytics/");

  const isLocalServerRoute =
    isLocalhost &&
    (pathname === "/server" ||
      pathname === "/server/");

  /*
   * Main portfolio domain.
   */
  const isMainDomain =
    hostname === MAIN_DOMAIN ||
    hostname === WWW_DOMAIN;

  /*
   * Legacy private routes.
   *
   * matheusconaga.dev/analytics
   * → analytics.matheusconaga.dev
   *
   * matheusconaga.dev/server
   * → server.matheusconaga.dev
   */
  const isLegacyAnalyticsRoute =
    isMainDomain &&
    (pathname === "/analytics" ||
      pathname === "/analytics/");

  const isLegacyServerRoute =
    isMainDomain &&
    (pathname === "/server" ||
      pathname === "/server/");

  const isLegacyPrivateRoute =
    isLegacyAnalyticsRoute ||
    isLegacyServerRoute;

  /*
   * Private applications.
   */
  const isAnalyticsApp =
    isAnalyticsDomain ||
    isLocalAnalyticsRoute;

  const isServerApp =
    isServerDomain ||
    isLocalServerRoute;

  const isPrivateApp =
    isAnalyticsApp ||
    isServerApp;

  /*
   * Any route that must redirect
   * before rendering the application.
   */
  const isRedirecting =
    isOldRenderDomain ||
    isLegacyPrivateRoute;

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
      !isRedirecting,
  );

  /*
   * Redirect old Render domain
   * to the official portfolio domain.
   *
   * Keeps pathname, query params
   * and hash.
   *
   * Example:
   *
   * portifoliomatheuslula.onrender.com/projects?id=1#demo
   *
   * →
   *
   * matheusconaga.dev/projects?id=1#demo
   */
  useEffect(() => {
    if (!isOldRenderDomain) {
      return;
    }

    const newUrl =
      `https://${MAIN_DOMAIN}` +
      `${window.location.pathname}` +
      `${window.location.search}` +
      `${window.location.hash}`;

    window.location.replace(
      newUrl,
    );
  }, [isOldRenderDomain]);

  /*
   * Redirect legacy private routes
   * to their respective subdomains.
   */
  useEffect(() => {
    if (
      !isLegacyPrivateRoute
    ) {
      return;
    }

    const targetDomain =
      isLegacyServerRoute
        ? SERVER_DOMAIN
        : ANALYTICS_DOMAIN;

    const newUrl =
      `https://${targetDomain}` +
      `${window.location.search}` +
      `${window.location.hash}`;

    window.location.replace(
      newUrl,
    );
  }, [
    isLegacyPrivateRoute,
    isLegacyServerRoute,
  ]);

  useEffect(() => {
    /*
     * Don't initialize anything
     * while waiting for redirect.
     */
    if (isRedirecting) {
      return;
    }

    /*
     * Private dashboards
     * authentication.
     */
    if (isPrivateApp) {
      void checkAuth().then(
        setIsAuthenticated,
      );

      return;
    }

    /*
     * Portfolio.
     */
    document.body.style.overflow =
      "hidden";

    let cancelled = false;

    let analyticsStarted =
      false;

    let analyticsTimer:
      | ReturnType<
          typeof setTimeout
        >
      | null = null;

    /*
     * Start Analytics only after
     * the visitor has remained on
     * the visible page long enough.
     */
    async function startAnalytics() {
      if (
        cancelled ||
        analyticsStarted
      ) {
        return;
      }

      /*
       * Set before awaiting so another
       * visibility event cannot start
       * Analytics a second time.
       */
      analyticsStarted = true;

      try {
        await initializeAnalytics();

        if (cancelled) {
          return;
        }

        startActivityTracking();

        await trackEvent(
          "page_view",
          {
            page:
              window.location
                .pathname,
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
     * Schedule Analytics only while
     * the page is actually visible.
     */
    function scheduleAnalytics() {
      if (
        cancelled ||
        analyticsStarted ||
        analyticsTimer !== null ||
        document.visibilityState !==
          "visible"
      ) {
        return;
      }

      analyticsTimer =
        setTimeout(() => {
          analyticsTimer =
            null;

          void startAnalytics();
        }, ANALYTICS_START_DELAY);
    }

    /*
     * If the tab goes to background
     * before reaching the minimum
     * time, cancel the timer.
     *
     * When it becomes visible again,
     * the 5-second countdown restarts.
     */
    function handleVisibilityChange() {
      if (
        document.visibilityState ===
        "hidden"
      ) {
        if (
          analyticsTimer !== null
        ) {
          clearTimeout(
            analyticsTimer,
          );

          analyticsTimer =
            null;
        }

        return;
      }

      scheduleAnalytics();
    }

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    /*
     * Start initial Analytics
     * countdown.
     */
    scheduleAnalytics();

    /*
     * Loader is independent
     * from Analytics.
     */
    const loadingTimer =
      setTimeout(() => {
        if (cancelled) {
          return;
        }

        setIsLoading(false);

        document.body.style.overflow =
          "auto";
      }, MIN_LOADING_TIME);

    return () => {
      cancelled = true;

      clearTimeout(
        loadingTimer,
      );

      if (
        analyticsTimer !== null
      ) {
        clearTimeout(
          analyticsTimer,
        );
      }

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );

      document.body.style.overflow =
        "auto";
    };
  }, [
    isPrivateApp,
    isRedirecting,
  ]);

  /*
   * Wait for redirect.
   *
   * Prevents Portfolio, Analytics
   * or Server from rendering for
   * a fraction of a second before
   * location.replace().
   */
  if (isRedirecting) {
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

    if (!isAuthenticated) {
      return (
        <PrivateLogin
          onAuthenticated={() =>
            setIsAuthenticated(
              true,
            )
          }
          title={
            isServerApp
              ? "Mini Server"
              : "Analytics"
          }
          description={
            isServerApp
              ? "Entre para acessar o monitoramento do servidor."
              : "Entre para visualizar as métricas do portfólio."
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
        isLoading={isLoading}
      />

      {!isLoading && (
        <MainLayout>
          <Homepage />
        </MainLayout>
      )}
    </>
  );
}