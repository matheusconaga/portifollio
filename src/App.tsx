import { useEffect, useState } from "react";

import Homepage from "./pages/home";
import { MainLayout } from "./app/layout/MainLayout";

import { AppLoader } from "./shared/ui/app-loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);

      document.body.style.overflow = "auto";
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

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