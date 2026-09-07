import type { ReactNode } from "react";
import { RiCodeSSlashLine } from "@remixicon/react";
import { getTranslations } from "next-intl/server";

function CodeLine({
  number,
  children,
}: {
  number: number;
  children: ReactNode;
}) {
  return (
    <span className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-3">
      <span aria-hidden="true" className="select-none text-right text-text-tertiary/55">
        {number}
      </span>
      <span className="min-w-0 whitespace-pre-wrap break-words">{children}</span>
    </span>
  );
}

export default async function About() {
  const t = await getTranslations("About");

  const property = "text-accent-foreground";
  const string = "text-status-success";
  const punctuation = "text-text-tertiary";

  return (
    <section
      aria-labelledby="about-title"
      className="border-t border-border py-16 md:flex md:min-h-[calc(100svh-4.5rem)] md:items-center md:py-16 lg:py-20"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16" id="about-me">
        <div className="lg:col-span-7">
          <p className="technical-label text-signal">01 // {t("eyebrow")}</p>
          <h2 id="about-title" className="mt-4 max-w-2xl text-3xl md:text-4xl">
            {t("title")}
          </h2>

          <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
            <p>{t("story-1")}</p>
            <p>{t("story-2")}</p>
            <p>{t("story-3")}</p>
          </div>
        </div>

        <aside
          aria-label={t("profile-label")}
          className="overflow-hidden rounded-lg border border-border bg-surface-1/82 shadow-glow lg:col-span-5"
        >
          <div className="flex items-center justify-between border-b border-border bg-surface-2/72 px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <RiCodeSSlashLine aria-hidden="true" className="size-4 text-signal" />
              <span className="font-mono">{t("code.file")}</span>
            </div>
            <span aria-hidden="true" className="size-2 rounded-full bg-status-success shadow-[0_0_10px_rgb(52_211_153/0.5)]" />
          </div>

          <pre className="overflow-hidden p-4 font-mono text-[0.8125rem] leading-6 sm:p-5 sm:text-sm">
            <code>
              <CodeLine number={1}>
                <span className="text-signal">const</span>{" "}
                <span className="text-secondary-foreground">{t("code.variable")}</span>{" "}
                <span className={punctuation}>={" {"}</span>
              </CodeLine>
              <CodeLine number={2}>
                {"  "}<span className={property}>{t("code.education-key")}</span>
                <span className={punctuation}>: </span>
                <span className={string}>&quot;{t("code.education-value")}&quot;</span>
                <span className={punctuation}>,</span>
              </CodeLine>
              <CodeLine number={3}>
                {"  "}<span className={property}>{t("code.location-key")}</span>
                <span className={punctuation}>: </span>
                <span className={string}>&quot;{t("code.location-value")}&quot;</span>
                <span className={punctuation}>,</span>
              </CodeLine>
              <CodeLine number={4}>
                {"  "}<span className={property}>{t("code.focus-key")}</span>
                <span className={punctuation}>: </span>
                <span className={string}>&quot;{t("code.focus-value")}&quot;</span>
                <span className={punctuation}>,</span>
              </CodeLine>
              <CodeLine number={5}>
                {"  "}<span className={property}>{t("code.areas-key")}</span>
                <span className={punctuation}>: [</span>
              </CodeLine>
              <CodeLine number={6}>
                {"    "}<span className={string}>&quot;{t("code.area-1")}&quot;</span>
                <span className={punctuation}>, </span>
                <span className={string}>&quot;{t("code.area-2")}&quot;</span>
                <span className={punctuation}>,</span>
              </CodeLine>
              <CodeLine number={7}>
                {"    "}<span className={string}>&quot;{t("code.area-3")}&quot;</span>
                <span className={punctuation}>, </span>
                <span className={string}>&quot;{t("code.area-4")}&quot;</span>
                <span className={punctuation}>,</span>
              </CodeLine>
              <CodeLine number={8}>
                {"  "}<span className={punctuation}>],</span>
              </CodeLine>
              <CodeLine number={9}>
                {"  "}<span className={property}>{t("code.principles-key")}</span>
                <span className={punctuation}>: [</span>
              </CodeLine>
              <CodeLine number={10}>
                {"    "}<span className={string}>&quot;{t("code.principle-1")}&quot;</span>
                <span className={punctuation}>, </span>
                <span className={string}>&quot;{t("code.principle-2")}&quot;</span>
                <span className={punctuation}>,</span>
              </CodeLine>
              <CodeLine number={11}>
                {"    "}<span className={string}>&quot;{t("code.principle-3")}&quot;</span>
                <span className={punctuation}>,</span>
              </CodeLine>
              <CodeLine number={12}>
                {"  "}<span className={punctuation}>],</span>
              </CodeLine>
              <CodeLine number={13}>
                <span className={punctuation}>{"};"}</span>
              </CodeLine>
            </code>
          </pre>
        </aside>
      </div>
    </section>
  );
}
