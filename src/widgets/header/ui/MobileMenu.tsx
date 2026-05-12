interface MobileItemProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export default function MobileItem({
  children,
  href,
  onClick,
}: MobileItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        py-4
        px-2

        border-b border-white/5

        text-white/80
        font-medium

        hover:text-primary

        transition-colors duration-300
      "
    >
      {children}
    </a>
  );
}