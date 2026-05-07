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
  "
    >
      {children}

    </a>
  )
}