import * as React from "react"
import { cn } from "@/lib/utils"

type Fit = "cover" | "contain"

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fit?: Fit
  position?: "center" | "bottom-right"
}

export function CardImage({
  className,
  fit = "cover",
  position = "center",
  ...props
}: CardImageProps) {
  return (
    <img
      className={cn(
        "w-full h-full",

        fit === "cover" && "object-cover",
        fit === "contain" && "object-contain",

        position === "bottom-right" &&
         "absolute top-auto right-0 bottom-[-10%] left-auto",

        className
      )}
      {...props}
    />
  )
}