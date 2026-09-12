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

const MIN_LOADING_TIME = 2000;
const MAX_ANALYTICS_WAIT = 4000;

const MAIN_DOMAIN = "matheusconaga.dev";

const WWW_DOMAIN = "www.matheusconaga.dev";

const ANALYTICS_DOMAIN = "analytics.matheusconaga.dev";

const SERVER_DOMAIN = "server.matheusconaga.dev";

export default function App() {
  const hostname = window.location.hostname;

  const pathname = window.location.pathname;

  /*
   * Production subdomains.
   */
  const isAnalyticsDomain = hostname === ANALYTICS_DOMAIN;

  const isServerDomain = hostname === SERVER_DOMAIN;

  /*
   * Local development.
   */
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

  const isLocalAnalyticsRoute =
    isLocalhost && (pathname === "/analytics" || pathname === "/analytics/");

  const isLocalServerRoute =
    isLocalhost && (pathname === "/server" || pathname === "/server/");

  /*
   * Main portfolio domain.
   */
  const isMainDomain = hostname === MAIN_DOMAIN || hostname === WWW_DOMAIN;

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
    isMainDomain && (pathname === "/analytics" || pathname === "/analytics/");

  const isLegacyServerRoute =
    isMainDomain && (pathname === "/server" || pathname === "/server/");

  const isLegacyPrivateRoute = isLegacyAnalyticsRoute || isLegacyServerRoute;

  /*
   * Private applications.
   */
  const isAnalyticsApp = isAnalyticsDomain || isLocalAnalyticsRoute;

  const isServerApp = isServerDomain || isLocalServerRoute;

  const isPrivateApp = isAnalyticsApp || isServerApp;

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
    isPrivateApp ? null : false,
  );

  const [isLoading, setIsLoading] = useState(
    !isPrivateApp && !isLegacyPrivateRoute,
  );

  /*
   * Redirect legacy private routes
   * to their respective subdomains.
   */
  useEffect(() => {
    if (!isLegacyPrivateRoute) {
      return;
    }

    const targetDomain = isLegacyServerRoute ? SERVER_DOMAIN : ANALYTICS_DOMAIN;

    const newUrl =
      `https://${targetDomain}` +
      `${window.location.search}` +
      `${window.location.hash}`;

    window.location.replace(newUrl);
  }, [isLegacyPrivateRoute, isLegacyServerRoute]);

  useEffect(() => {
    /*
     * Don't initialize anything
     * while waiting for redirect.
     */
    if (isLegacyPrivateRoute) {
      return;
    }

    /*
     * Private dashboards authentication.
     */
    if (isPrivateApp) {
      void checkAuth().then(setIsAuthenticated);

      return;
    }

    /*
     * Portfolio loading.
     */
    document.body.style.overflow = "hidden";

    let cancelled = false;

    const sleep = (milliseconds: number) =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, milliseconds);
      });

    async function startAnalytics() {
      try {
        await initializeAnalytics();

        startActivityTracking();

        await trackEvent("page_view", {
          page: window.location.pathname,
        });
      } catch (error) {
        console.error("Failed to start analytics:", error);
      }
    }

    async function initializeApp() {
      const minimumLoading = sleep(MIN_LOADING_TIME);

      const analytics = startAnalytics();

      const analyticsTimeout = sleep(MAX_ANALYTICS_WAIT);

      await Promise.all([
        minimumLoading,

        Promise.race([analytics, analyticsTimeout]),
      ]);

      if (cancelled) {
        return;
      }

      setIsLoading(false);

      document.body.style.overflow = "auto";
    }

    void initializeApp();

    return () => {
      cancelled = true;

      document.body.style.overflow = "auto";
    };
  }, [isPrivateApp, isLegacyPrivateRoute]);

  /*
   * Wait for redirect.
   */
  if (isLegacyPrivateRoute) {
    return null;
  }

  /*
   * Private applications.
   */
  if (isPrivateApp) {
    if (isAuthenticated === null) {
      return null;
    }

    if (!isAuthenticated) {
      return (
        <PrivateLogin
          onAuthenticated={() => setIsAuthenticated(true)}
          title={isServerApp ? "Mini Server" : "Analytics"}
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
      return <ServerDashboard onLogout={() => setIsAuthenticated(false)} />;
    }

    /*
     * Analytics dashboard.
     */
    return <AnalyticsDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  /*
   * Portfolio.
   */
  return (
    <>
      <AppLoader isLoading={isLoading} />

      {!isLoading && (
        <MainLayout>
          <Homepage />
        </MainLayout>
      )}
    </>
  );
}
