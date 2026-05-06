import * as React from "react"
import { cn } from "@/lib/utils"

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4 pt-0", className)} {...props} />
  )
}