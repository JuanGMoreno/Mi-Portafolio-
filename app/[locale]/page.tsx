import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/common/LocaleSwitcher";

export default async function HomePage() {
  const t = await getTranslations("Home");

  return (
    <main className="site-container flex min-h-screen flex-col py-6 md:py-8">
      <div className="flex justify-end">
        <LocaleSwitcher />
      </div>

      <section className="flex flex-1 items-center py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="technical-label mb-5 text-signal">
            Portfolio // Full Stack Engineering
          </p>
          <h1 className="max-w-3xl text-5xl leading-[1.08] font-extrabold tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-text-secondary">
            {t("description")}
          </p>
        </div>
      </section>
    </main>
  );
}
