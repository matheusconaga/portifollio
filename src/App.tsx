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

export default function App() {
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

  useEffect(() => {
    if (isAnalyticsRoute) {
      checkAuth().then(
        setIsAuthenticated,
      );

      return;
    }

    document.body.style.overflow =
      "hidden";

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

    void startAnalytics();

    const timer =
      setTimeout(() => {
        setIsLoading(false);

        document.body.style.overflow =
          "auto";
      }, 1800);

    return () => {
      clearTimeout(timer);

      document.body.style.overflow =
        "auto";
    };
  }, [isAnalyticsRoute]);

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