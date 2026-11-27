import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Homepage from "@/pages/home";

import { MainLayout } from "@/app/layout/MainLayout";
import { PageTransition } from "./page-transition";

import ProjectDetailsPage from "@/pages/project-details-page";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
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
