
import NavBar from "@/components/common/NavBar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/projects/Projects";
import Experiencie from "@/components/sections/Experiencie";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/common/Footer";
import { getTranslations } from "next-intl/server";
import * as motion from "motion/react-client";

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

      <motion.header
        className="sticky top-0 z-50 border-b border-border/80 bg-canvas/82 backdrop-blur-xl"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="site-container py-3.5">
          <NavBar />
        </div>
      </motion.header>

      <main id="main-content" className="site-container min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiencie />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
