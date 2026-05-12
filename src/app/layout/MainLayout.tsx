import Footer from "@/widgets/footer";
import { Header } from "../../widgets/header/ui/Header";
import { FloatingContacts } from "@/widgets/header/ui/FloatingContacts";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <FloatingContacts/>
      
      <main className=" overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
}
