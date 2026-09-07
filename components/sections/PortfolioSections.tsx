import { getTranslations } from "next-intl/server";

const sections = [
  { id: "projects", key: "projects", index: "02" },
  { id: "technologies", key: "technologies", index: "03" },
  { id: "experience", key: "experience", index: "04" },
  { id: "contact", key: "contact", index: "05" },
] as const;

export default async function PortfolioSections() {
  const t = await getTranslations("Sections");

  return sections.map((section) => {
    const headingId = `${section.id}-title`;

    return (
      <section
        key={section.id}
        id={section.id}
        aria-labelledby={headingId}
        className="flex min-h-[calc(100svh-4.5rem)] items-center border-t border-border py-16 md:py-20"
      >
        <div className="grid w-full gap-5 md:grid-cols-12 md:gap-8">
          <p className="technical-label text-signal md:col-span-3">
            {section.index}
            {" // "}
            {t(`${section.key}.eyebrow`)}
          </p>
          <div className="max-w-2xl md:col-span-8">
            <h2 id={headingId} className="text-3xl md:text-4xl">
              {t(`${section.key}.title`)}
            </h2>
            <p className="mt-4 text-base leading-7 text-text-secondary md:text-lg">
              {t(`${section.key}.description`)}
            </p>
          </div>
        </div>
      </section>
    );
  });
}
