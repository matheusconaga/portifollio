import {
  type ReactNode,
  useState,
} from "react";

import { cn } from "@/lib/utils";
import { useSectionTracking } from "@/analytics/useSectionTracking";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  trackView?: boolean;
}

export function Section({
  children,
  className,
  id,
  trackView = false,
}: SectionProps) {
  const [element, setElement] =
    useState<HTMLElement | null>(null);

  useSectionTracking(
    trackView ? element : null,
    id ?? "",
  );

  return (
    <section
      ref={trackView ? setElement : undefined}
      id={id}
      className={cn(
        `
          relative
          py-8
          md:py-12
          xl:py-4
          scroll-mt-24
          md:scroll-mt-28
          overflow-hidden
        `,
        className,
      )}
    >
      {children}
    </section>
  );
}