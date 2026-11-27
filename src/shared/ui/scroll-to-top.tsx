import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isProjectPage =
      pathname.startsWith("/projects/") || pathname.startsWith("/en/projects/");

    if (isProjectPage) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
}
