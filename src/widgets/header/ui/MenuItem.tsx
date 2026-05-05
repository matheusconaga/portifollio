export function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative cursor-pointer font-semibold">
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
    </span>
  )
}