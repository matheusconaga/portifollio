import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import Homepage from "@/pages/home";

import { MainLayout } from "@/app/layout/MainLayout";
import { PageTransition } from "./page-transition";

import ProjectDetailsPage from "@/pages/project-details-page";

export function AnimatedRoutes() {
  const location = useLocation();
  const { i18n } = useTranslation();

  const targetLanguage =
    location.pathname === "/en" || location.pathname.startsWith("/en/")
      ? "en"
      : "pt";

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        if (i18n.language.split("-")[0] !== targetLanguage) {
          void i18n.changeLanguage(targetLanguage);
        }
      }}
    >
      <Routes location={location} key={location.pathname}>
        {/* PORTUGUÊS */}
        <Route
          path="/"
          element={
            <MainLayout>
              <PageTransition>
                <Homepage />
              </PageTransition>
            </MainLayout>
          }
        />

        <Route
          path="/projects/:slug"
          element={
            <PageTransition>
              <ProjectDetailsPage />
            </PageTransition>
          }
        />

        {/* INGLÊS */}
        <Route
          path="/en"
          element={
            <MainLayout>
              <PageTransition>
                <Homepage />
              </PageTransition>
            </MainLayout>
          }
        />

        <Route
          path="/en/projects/:slug"
          element={
            <PageTransition>
              <ProjectDetailsPage />
            </PageTransition>
          }
        />

        {/* ROTA NÃO ENCONTRADA */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
