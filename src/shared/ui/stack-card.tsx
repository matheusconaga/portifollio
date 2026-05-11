import * as React from "react"

import { cn } from "@/lib/utils"

import { Badge } from "@/shared/ui/badge"

type Variant = "sm" | "md" | "lg"

interface StackCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ElementType

  name: string

  variant?: Variant
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

          flex items-center gap-3

          rounded-full

          hover:border-primary/30
          hover:shadow-lg
          hover:shadow-primary/10
          hover:-translate-y-1

          duration-300
        `,

        variant === "sm" &&
          "px-4 py-2",

        variant === "md" &&
          "px-6 py-2",

        variant === "lg" &&
          "px-6 py-3",

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
            "size-5",

          variant === "md" &&
            "size-6",

          variant === "lg" &&
            "size-7"
        )}
      />

      <span
        className={cn(
          `
            text-white
            font-medium
          `,

          variant === "sm" &&
            "text-sm",

          variant === "md" &&
            "text-base",

          variant === "lg" &&
            "text-base"
        )}
      >
        {name}
      </span>
    </Badge>
  )
}