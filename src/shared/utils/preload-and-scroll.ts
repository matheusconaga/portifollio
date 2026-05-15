import { scrollToSection } from "./scroll-to-section";

export async function preloadAndScroll(
  importFn: () => Promise<unknown>,
  sectionId: string,
) {
  await importFn();

  setTimeout(() => {
    scrollToSection(sectionId);
  }, 100); 
}
