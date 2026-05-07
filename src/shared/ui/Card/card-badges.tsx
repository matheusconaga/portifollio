import * as React from "react"
import { cn } from "@/lib/utils"

export function CardBadges({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        className
      )}
      {...props}
    />
  )
}