
import NavBar from "@/components/common/NavBar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import PortfolioSections from "@/components/sections/PortfolioSections";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("Accessibility");

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground transition-transform focus:translate-y-0"
      >
        {t("skip-to-content")}
      </a>

      <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/82 backdrop-blur-xl">
        <div className="site-container py-3.5">
          <NavBar />
        </div>
      </header>

      <main id="main-content" className="site-container min-h-screen">
        <Hero />
        <About />
        <PortfolioSections />
      </main>
    </>
  );
}
