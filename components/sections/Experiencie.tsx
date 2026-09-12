import {
  RiArrowRightUpLine,
  RiBriefcase4Line,
  RiCodeBoxLine,
} from "@remixicon/react";
import { getTranslations } from "next-intl/server";

const experienceItems = [
  {
    key: "freelance",
    number: "01",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    key: "nimrod",
    number: "02",
    technologies: ["Next.js", "TypeScript", "AWS", "Jest"],
  },
] as const;

const achievementKeys = [
  "achievement-1",
  "achievement-2",
  "achievement-3",
] as const;

function translationKey(...segments: string[]) {
  return segments.join(".");
}

export default async function Experiencie() {
  const t = await getTranslations("Experiencie");

  return (
    <section
      aria-labelledby="experience-title"
      className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-center border-t border-border py-16 lg:py-20"
      id="experience"
    >
      <div className="max-w-2xl">
        <p className="technical-label text-signal">04 // {t("eyebrow")}</p>
        <h2 id="experience-title" className="mt-3 text-3xl md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-3 max-w-xl text-base leading-7 text-text-secondary">
          {t("description")}
        </p>
      </div>

      <ol
        aria-label={t("timeline-label")}
        className="relative mt-8 space-y-5 before:absolute before:bottom-6 before:left-[1.375rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-signal-blue/20 before:via-signal before:to-signal/20 before:content-[''] lg:mt-10 lg:space-y-6"
      >
        {experienceItems.map((item, index) => (
          <li
            key={item.key}
            className="relative pl-14 after:absolute after:left-[2.75rem] after:top-[1.375rem] after:h-px after:w-3 after:bg-signal/40 after:content-[''] sm:pl-16 sm:after:w-5 md:pl-20 md:after:w-9"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 z-10 flex size-11 items-center justify-center rounded-full border border-signal/45 bg-canvas shadow-[0_0_0_6px_rgb(10_15_29),0_0_24px_rgb(56_189_248/0.22)]"
            >
              <span className="font-mono text-xs font-semibold text-signal">
                {item.number}
              </span>
            </div>

            <article className="group relative overflow-hidden rounded-lg border border-border bg-surface-1/80 shadow-glow transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-signal/35">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-signal/80 to-transparent"
              />

              <div className="flex items-center justify-between gap-4 border-b border-border/80 bg-surface-2/55 px-5 py-3">
                <div className="flex items-center gap-2 font-mono text-xs text-text-tertiary">
                  {index === 0 ? (
                    <RiCodeBoxLine
                      aria-hidden="true"
                      className="size-4 shrink-0 text-signal"
                    />
                  ) : (
                    <RiBriefcase4Line
                      aria-hidden="true"
                      className="size-4 shrink-0 text-signal"
                    />
                  )}
                  <span>{t("trace-label", { number: item.number })}</span>
                </div>
                <span className="technical-label text-right text-[0.6875rem] text-text-tertiary">
                  {t(translationKey("items", item.key, "type"))}
                </span>
              </div>

              <div className="p-5 sm:p-6 lg:p-7">
                <div className="grid gap-6 lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
                  <div>
                    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-sm font-semibold text-signal">
                      <span className="whitespace-nowrap">
                        {t(translationKey("items", item.key, "period"))}
                      </span>
                      <span className="inline-flex min-h-6 items-center whitespace-nowrap rounded-sm border border-border bg-surface-2/70 px-2 font-mono text-xs font-medium text-text-tertiary">
                        {t(translationKey("items", item.key, "duration"))}
                      </span>
                    </p>

                    <h3 className="mt-3 text-xl sm:text-2xl">
                      {t(translationKey("items", item.key, "role"))}
                    </h3>
                    <p className="mt-1 font-medium text-text-primary">
                      {t(translationKey("items", item.key, "company"))}
                      <span className="font-normal text-text-tertiary">
                        {" "}· {t(translationKey("items", item.key, "location"))}
                      </span>
                    </p>

                    <p className="mt-4 text-base leading-7 text-text-secondary">
                      {t(translationKey("items", item.key, "summary"))}
                    </p>
                  </div>

                  <ul className="space-y-3 lg:border-l lg:border-border/80 lg:pl-8">
                    {achievementKeys.map((achievement) => (
                      <li
                        key={achievement}
                        className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-text-secondary sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.65rem] h-px bg-signal/70"
                        />
                        <span>
                          {t(translationKey("items", item.key, achievement))}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-border/80 pt-5 xl:flex-row xl:items-center xl:justify-between">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-text-primary">
                    <span>{t("evidence-label")}</span>
                    <a
                      href="#projects"
                      className="flex items-center gap-2 text-signal transition-colors hover:text-text-primary"
                    >
                      <RiArrowRightUpLine
                        aria-hidden="true"
                        className="size-4"
                      />
                      {t(translationKey("items", item.key, "evidence"))}
                    </a>
                  </div>

                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label={t("stack-label")}
                  >
                    {item.technologies.map((technology) => (
                      <li key={technology} className="tech-chip">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
