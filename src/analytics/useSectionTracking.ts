import { useEffect } from "react";

import { ANALYTICS_EVENTS } from "./events";
import { trackEvent } from "./analytics";

export function useSectionTracking(
  element: HTMLElement | null,
  section: string,
) {
  useEffect(() => {
    if (!element) {
      return;
    }

    let hasTracked = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !hasTracked
        ) {
          hasTracked = true;

          trackEvent(
            ANALYTICS_EVENTS.SECTION_VIEW,
            {
              page: window.location.pathname,
              metadata: {
                section,
              },
            },
          );

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, section]);
}