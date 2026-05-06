import * as React from "react"
import { cn } from "@/lib/utils"

type Variant =
  | "primary"
  | "primary-xl"
  | "outline"
  | "outline-xl"
  | "ghost"
  | "glass"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Button({
  className,
  variant = "primary",
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition px-8 py-2",

        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-accent cursor-pointer",

        variant === "primary-xl" &&
          "bg-primary text-primary-foreground hover:bg-accent cursor-pointer font-bold text-1.5xl px-12",

        variant === "outline" &&
          "border border-border text-foreground hover:bg-muted",

        variant === "outline-xl" &&
          "border border-border text-foreground hover:bg-glass-dark text-1.5xl font-bold px-12 py-3 cursor-pointer text-primary",

        variant === "ghost" &&
          "text-foreground hover:bg-muted",

        variant === "glass" &&
          "bg-glass-blue backdrop-blur-md border border-white/10 text-white hover:bg-white/10",

        className
      )}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      {children}

      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  )
}