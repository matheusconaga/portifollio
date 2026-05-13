import * as React from "react"

import { cn } from "@/lib/utils"

type Variant =
  | "glass"
  | "primary"
  | "outline"

type Size =
  | "sm"
  | "md"
  | "lg"
  | "xl"

interface CircleBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant
  size?: Size

  clickable?: boolean
}

export function CircleBadge({
  className,
  variant = "glass",
  size = "md",
  clickable = false,
  children,
  ...props
}: CircleBadgeProps) {
  return (
    <div
      className={cn(
        `
          flex items-center justify-center

          rounded-full

          transition-all duration-300
        `,

        clickable &&
          `
            cursor-pointer

            hover:-translate-y-1
            hover:scale-105

            hover:border-primary/30
            hover:shadow-lg
            hover:shadow-primary/10
          `,

        variant === "glass" &&
          `
            bg-glass-light
            backdrop-blur-xl

            border border-white/10
          `,

        variant === "primary" &&
          `
            bg-primary
            text-primary-foreground
          `,

        variant === "outline" &&
          `
            border border-white/10
            bg-transparent
          `,

        size === "sm" && "w-10 h-10",
        size === "md" && "w-12 h-12",
        size === "lg" && "w-14 h-14",
        size === "xl" && "w-20 h-20",

        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}