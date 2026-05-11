import Footer from "@/widgets/footer";
import { Header } from "../../widgets/header/ui/Header";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      
      <main className="pt-24 md:pt-28 overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
}
