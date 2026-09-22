import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
} from "@remixicon/react";
import { getTranslations } from "next-intl/server";
import * as motion from "motion/react-client";

import { revealUp, viewportOnce } from "@/lib/motion";

const professionalLinks = [
  {
    href: "https://github.com/JuanGMoreno",
    icon: RiGithubFill,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/juan-guillermo-moreno-galvez-9a42a7330/",
    icon: RiLinkedinBoxFill,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "mailto:juguimo16@gmail.com",
    icon: RiMailLine,
    label: "Email",
    external: false,
  },
] as const;

export default async function Footer() {
  const t = await getTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-1/25">
      <motion.div
        className="site-container py-6 sm:py-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewportOnce, amount: 0.4 }}
        variants={revealUp}
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.02em] text-text-primary">
              Juan Guillermo Moreno
            </p>
            <p className="mt-1 text-sm text-text-secondary">{t("role")}</p>
          </div>

          <nav
            aria-label={t("social-label")}
            className="technical-label flex flex-wrap gap-x-5 gap-y-3 text-xs"
          >
            {professionalLinks.map(
              ({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-signal focus-visible:text-signal"
                  rel={external ? "noopener noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </a>
              ),
            )}
          </nav>
        </div>

        <div className="mt-5 flex flex-col gap-1.5 border-t border-border/70 pt-4 font-mono text-[0.6875rem] leading-5 text-text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright", { year: currentYear })}</p>
          <p>{t("built-with")}</p>
        </div>
      </motion.div>
    </footer>
  );
}
