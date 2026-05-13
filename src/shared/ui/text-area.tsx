import * as React from "react"

import { cn } from "@/lib/utils"

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function Textarea({
  className,
  label,
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          className="
            text-base
            font-semibold
            text-gray
          "
        >
          {label}
        </label>
      )}

      <textarea
        className={cn(
          `
            min-h-[120px]
            w-full

            resize-none

            rounded-2xl

            border border-white/10

            bg-glass-input

            px-5 py-4

            text-gray
            text-sm

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