import * as React from "react"
import { cn } from "@/lib/utils"

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4 pt-2 flex items-center justify-between", className)} {...props} />
  )
}