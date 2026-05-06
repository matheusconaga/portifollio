import * as React from "react"
import { cn } from "@/lib/utils"

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-semibold", className)} {...props} />
  )
}

