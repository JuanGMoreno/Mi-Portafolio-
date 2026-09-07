import {
  RiArrowDownLine,
  RiFileTextLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "@remixicon/react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import heroImage from "@/public/images/hero-image.webp";

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
      className="grid min-h-[calc(100svh-4.5rem)] scroll-mt-24 items-center gap-10 py-10 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-10 md:py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16"
    >
      <div className="max-w-3xl">
        <p className="tech-chip mb-4 gap-2 text-signal">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-status-success shadow-[0_0_12px_rgb(52_211_153/0.75)]"
          />
          {t("eyebrow")}
        </p>
        <p className="mb-2 text-base font-semibold tracking-[0.02em] text-text-primary sm:text-lg">
          Juan Guillermo Moreno
        </p>
        <h1
          id="hero-title"
          className="mb-4 max-w-3xl text-[2.75rem] leading-[1.08] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-7xl"
        >
          {t("title")}
        </h1>
        <span className="technical-label text-[0.8125rem] leading-5 text-signal sm:text-sm">
          {t("summary-skills")}
        </span>
        <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary md:text-lg">
          {t("description")}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#projects" className={buttonVariants({ variant: "default", size: "lg" })}>
            {t("view-projects")}
            <RiArrowDownLine aria-hidden="true" />
          </a>
          <a href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
            {t("contact-me")}
            <RiMailLine aria-hidden="true" />
          </a>
        </div>
        <div className="technical-label mt-6 flex flex-wrap gap-x-6 gap-y-4 text-[0.8125rem] leading-5 sm:gap-x-8 sm:text-sm">
          <a href="https://github.com/JuanGMoreno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-signal transition-colors duration-200">
            <RiGithubFill aria-hidden="true" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/juan-guillermo-moreno-galvez-9a42a7330/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-signal transition-colors duration-200">
            <RiLinkedinBoxFill aria-hidden="true" /> LinkedIn
          </a>
          <a href={cvHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-signal transition-colors duration-200">
            <RiFileTextLine aria-hidden="true" /> CV (PDF)
          </a>
        </div>
      </div>

      <div className="relative isolate mx-auto hidden w-full max-w-64 md:block lg:mx-0 lg:max-w-80">
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
      </div>
    </section>
  );
}
