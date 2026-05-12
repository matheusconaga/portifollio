import Footer from "@/widgets/footer";
import { Header } from "../../widgets/header/ui/Header";
import { FloatingContacts } from "@/widgets/header/ui/FloatingContacts";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <FloatingContacts/>
      
      <main className="pt-24 md:pt-28 overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
}
