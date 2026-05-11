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
          w-[90%]

          max-w-[1400px]

          mx-auto

          px-2
          sm:px-4
          md:px-6
          lg:px-8
        `,
        className
      )}
    >
      {children}
    </div>
  )
}