import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({
  className,
  label,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          className="
            text-lg
            font-semibold
            text-gray
          "
        >
          {label}
        </label>
      )}

      <input
        className={cn(
          `
            w-full

            rounded-2xl

            border border-white/10

            bg-glass-input

            px-5 py-2

            text-white

            outline-none

            backdrop-blur-xl

            transition-all duration-300

            placeholder:text-gray

            focus:border-primary/40
            focus:shadow-lg
            focus:shadow-primary/10
          `,
          className
        )}
        {...props}
      />
    </div>
  )
}