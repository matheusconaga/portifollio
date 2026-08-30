import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback: ReactNode;
  offset?: string;
}

export function LazySection({
  children,
  fallback,
  offset = "800px 0px",
}: LazySectionProps) {
  const [
    shouldRender,
    setShouldRender,
  ] = useState(false);

  const containerRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element =
      containerRef.current;

    if (
      !element ||
      shouldRender
    ) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            !entry.isIntersecting
          ) {
            return;
          }

          setShouldRender(true);

          observer.disconnect();
        },
        {
          root: null,
          rootMargin: offset,
          threshold: 0,
        },
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [
    offset,
    shouldRender,
  ]);

  return (
    <div
      ref={containerRef}
      className="w-full"
    >
      {shouldRender
        ? children
        : fallback}
    </div>
  );
}