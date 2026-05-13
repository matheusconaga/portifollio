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
