import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100svh-4.5rem)] scroll-mt-24 items-center py-16 md:py-24"
    >
      <div className="max-w-4xl">
        <p className="technical-label mb-5 text-signal">{t("eyebrow")}</p>
        <h1
          id="hero-title"
          className="max-w-3xl text-5xl leading-[1.08] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-7xl"
        >
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-7 text-text-secondary">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
