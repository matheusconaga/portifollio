import * as React from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/shared/ui/badge";

type Variant = "sm" | "md" | "lg";

interface StackCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ElementType;

  name: string;

  variant?: Variant;
}

export function StackCard({
  icon: Icon,
  name,

  variant = "md",

  className,
  ...props
}: StackCardProps) {
  return (
    <Badge
      variant="glass"
      className={cn(
        `
          group

          flex items-center gap-2 md:gap-3

          rounded-full

          hover:border-primary/30
          hover:shadow-lg
          hover:shadow-primary/10
          hover:-translate-y-1

          transition-all duration-300
        `,

        /* SM */
        variant === "sm" &&
          `
            px-3 py-1.5
            md:px-4 md:py-2
          `,

        /* MD */
        variant === "md" &&
          `
            px-3 py-1.5
            md:px-5 md:py-2
            lg:px-6
          `,

        /* LG */
        variant === "lg" &&
          `
            px-4 py-2
            md:px-6 md:py-3
          `,

        className
      )}
      {...props}
    >
      <Icon
        className={cn(
          `
            text-primary

            transition-all duration-300

            group-hover:rotate-6
            group-hover:scale-110
          `,

          variant === "sm" &&
            `
              size-4
              md:size-5
            `,

          variant === "md" &&
            `
              size-4
              md:size-5
              lg:size-6
            `,

          variant === "lg" &&
            `
              size-5
              md:size-7
            `
        )}
      />

      <span
        className={cn(
          `
            text-white
            font-medium
            whitespace-nowrap
          `,

          variant === "sm" &&
            `
              text-xs
              md:text-sm
            `,

          variant === "md" &&
            `
              text-xs
              md:text-sm
              lg:text-base
            `,

          variant === "lg" &&
            `
              text-sm
              md:text-base
            `
        )}
      >
        {name}
      </span>
    </Badge>
  );
}