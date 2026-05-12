import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        `
          relative

          py-12
          md:py-16
          xl:py-20

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
