import * as React from "react"
import { cn } from "@/lib/utils"

type Variant = "glass-blue" | "glass-light" | "glass-dark"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant
}

export function Card({
  className,
  variant = "glass-blue",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border backdrop-blur-md transition",

        variant === "glass-blue" &&
          "bg-glass-blue border-white/10 text-white",

        variant === "glass-light" &&
          "bg-glass-light border-white/20 text-foreground",

        variant === "glass-dark" &&
          "bg-glass-dark border-white/10 text-white",

        "hover:scale-[1.01] hover:border-white/20",

        className
      )}
      {...props}
    />
  )
}