import * as React from "react"
import { cn } from "@/lib/utils"

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4 pb-2", className)} {...props} />
  )
}