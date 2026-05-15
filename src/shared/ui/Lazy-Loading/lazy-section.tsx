import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback: ReactNode;
  offset?: string;
}

export function LazySection({
  children,
  fallback,
  offset = "200px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: offset,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [offset]);

  return (
    <div ref={containerRef} className="w-full">
      {isVisible ? children : fallback}
    </div>
  );
}
