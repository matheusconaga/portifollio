import { Header } from "../../widgets/header/ui/Header";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-32">{children}</main>
    </>
  )
}