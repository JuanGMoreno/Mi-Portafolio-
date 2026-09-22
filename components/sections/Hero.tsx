import {
  RiArrowDownLine,
  RiFileTextLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "@remixicon/react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import * as motion from "motion/react-client";

import heroImage from "@/public/images/hero-image.webp";
import { heroContainer, heroItem } from "@/lib/motion";

import { buttonVariants } from "../ui/button";

export default async function Hero() {
  const locale = await getLocale();
  const t = await getTranslations("Hero");
  const cvHref = locale === "en"
    ? "/docs/CV_Juan_Guillermo_Moreno_EN.pdf"
    : "/docs/CV_Juan_Guillermo_Moreno.pdf";

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-10 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-10 md:py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16"
    >
      <motion.div
        className="max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={heroContainer}
      >
        <motion.p className="tech-chip mb-4 gap-2 text-signal" variants={heroItem}>
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-status-success shadow-[0_0_12px_rgb(52_211_153/0.75)]"
          />
          {t("eyebrow")}
        </motion.p>
        <motion.div variants={heroItem}>
          <p className="mb-2 text-base font-semibold tracking-[0.02em] text-text-primary sm:text-lg">
            Juan Guillermo Moreno
          </p>
          <h1
            id="hero-title"
            className="mb-4 max-w-3xl text-[2.75rem] leading-[1.08] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            {t("title")}
          </h1>
        </motion.div>
        <motion.div variants={heroItem}>
          <span className="technical-label text-[0.8125rem] leading-5 text-signal sm:text-sm">
            {t("summary-skills")}
          </span>
          <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary md:text-lg">
            {t("description")}
          </p>
        </motion.div>
        <motion.div className="mt-6 flex flex-wrap gap-4" variants={heroItem}>
          <motion.a
            href="#projects"
            className={buttonVariants({ variant: "default", size: "lg" })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("view-projects")}
            <RiArrowDownLine aria-hidden="true" />
          </motion.a>
          <motion.a
            href="#contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("contact-me")}
            <RiMailLine aria-hidden="true" />
          </motion.a>
        </motion.div>
        <motion.div
          className="technical-label mt-6 flex flex-wrap gap-x-6 gap-y-4 text-[0.8125rem] leading-5 sm:gap-x-8 sm:text-sm"
          variants={heroItem}
        >
          <a href="https://github.com/JuanGMoreno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-signal transition-colors duration-200">
            <RiGithubFill aria-hidden="true" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/juan-guillermo-moreno-galvez-9a42a7330/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-signal transition-colors duration-200">
            <RiLinkedinBoxFill aria-hidden="true" /> LinkedIn
          </a>
          <a href={cvHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-signal transition-colors duration-200">
            <RiFileTextLine aria-hidden="true" /> CV (PDF)
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative isolate mx-auto hidden w-full max-w-64 md:block lg:mx-0 lg:max-w-80"
        initial={{ opacity: 0, scale: 0.94, x: 24 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -5 }}
      >
        <div
          aria-hidden="true"
          className="absolute -inset-6 -z-10 rounded-2xl bg-signal/10 blur-2xl"
        />
        <div className="relative aspect-square overflow-hidden rounded-xl border border-surface-highlight bg-surface-1 p-2 shadow-glow">
          <div className="relative size-full overflow-hidden rounded-lg bg-surface-canvas">
            <Image
              src={heroImage}
              alt={t("image-alt")}
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 288px"
              preload
              placeholder="blur"
              className="scale-[1.02] object-cover transition-transform duration-500 hover:scale-[1.055]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,transparent_58%,rgb(56_189_248/0.09))] ring-1 ring-inset ring-white/5"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
