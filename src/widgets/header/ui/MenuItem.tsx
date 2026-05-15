import type { ReactNode, ButtonHTMLAttributes } from "react";

interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function MenuItem({ children, className, ...props }: MenuItemProps) {
  return (
    <button
      className={`
        group
        relative
        inline-flex

        cursor-pointer

        font-semibold
        text-white/80

        transition-all duration-300

        hover:text-primary
        hover:-translate-y-1

        active:scale-[0.98]
        active:text-primary

        hover:after:w-full

        after:absolute
        after:-bottom-1
        after:left-0

        after:w-0
        after:h-0.5

        after:bg-primary
        after:duration-300

        ${className || ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
