import * as React from "react"
import { cn } from "@/lib/utils"

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-white/70", className)} {...props} />
  )
}