import type { ReactNode, ButtonHTMLAttributes } from "react";

interface MobileItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function MobileItem({
  children,
  className,
  ...props
}: MobileItemProps) {
  return (
    <button
      className={`
        w-full

        py-4
        px-2

        flex
        items-center

        border-b border-white/5

        text-white/80
        font-medium

        hover:text-primary

        active:text-primary
        active:scale-[0.99]

        transition-all duration-300

        ${className || ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
