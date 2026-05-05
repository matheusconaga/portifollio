import * as React from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "outline" | "ghost" | "glass"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
}

export function Button({
    className,
    variant = "primary",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-full text-sm font-medium transition px-8 py-2",

                variant === "primary" &&
                "bg-primary text-primary-foreground hover:bg-accent cursor-pointer",

                variant === "outline" &&
                "border border-border text-foreground hover:bg-muted",

                variant === "ghost" &&
                "text-foreground hover:bg-muted",

                variant === "glass" &&
                "bg-glass-blue backdrop-blur-md border border-white/10 text-white hover:bg-white/10",

                className
            )}
            {...props}
        />
    )
}