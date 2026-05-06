import * as React from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary" | "outline" | "ghost" | "glass" | "tag"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
  imageSrc?: string
  imageAlt?: string
}

export function Badge({
  className,
  variant = "primary",
  imageSrc,
  imageAlt,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full text-xs font-medium px-2 py-0.5 transition",

        variant === "primary" &&
          "bg-primary text-primary-foreground",

        variant === "secondary" &&
          "bg-accent text-accent-foreground",

        variant === "outline" &&
          "border border-border text-foreground",

        variant === "ghost" &&
          "text-foreground hover:bg-muted/20",

        variant === "glass" &&
          "bg-glass-blue backdrop-blur-md border border-white/10 text-white px-4 py-1.5",

        variant === "tag" &&
          "bg-glass-blue hover:bg-glass-dark text-secondary-foreground text-1.5xl px-7 py-2 border border-white/10",

        className
      )}
      {...props}
    >
      {/* 👇 imagem só aparece no tipo tag */}
      {variant === "tag" && imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || "tag"}
          className="w-6 h-6 rounded-full object-cover"
        />
      )}

      {children}
    </span>
  )
}