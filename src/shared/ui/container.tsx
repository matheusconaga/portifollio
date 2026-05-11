import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        `
          w-full

          max-w-[1600px]

          mx-auto

          px-4
          sm:px-6
          lg:px-10
          xl:px-16
        `,
        className
      )}
    >
      {children}
    </div>
  )
}