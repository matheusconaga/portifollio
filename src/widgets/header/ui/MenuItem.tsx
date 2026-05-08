import type { ReactNode } from "react"

interface MenuItemProps {
  children: ReactNode
  href: string
}

export function MenuItem({
  children,
  href,
}: MenuItemProps) {
  return (
    <a
      href={href}
      className="
    group
    relative
    inline-flex

    cursor-pointer

    font-semibold
    text-white/80

    transition-all duration-300

    hover:text-primary
    hover:-translate-y-1
    transition: width 0.3s ease;
    hover:after:w-full
    after:absolute
    after:-bottom-1

    after:left-0
    after:w-0
    after:h-0.5
    after:bg-primary
    after:duration-300

  "
    >
      {children}

    </a>
  )
}