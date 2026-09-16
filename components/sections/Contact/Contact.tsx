import { getTranslations } from "next-intl/server";
import { ContactForm } from "./ContactForm";

export default async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <section
      aria-labelledby="contact-title"
      className="flex min-h-[calc(100svh-4.5rem)] flex-col border-t border-border py-10 sm:py-12 lg:h-[calc(100svh-4.5rem)] lg:min-h-0 lg:overflow-y-auto lg:py-[clamp(1rem,4svh,3rem)]"
      id="contact"
    >
      <div className="my-auto grid w-full shrink-0 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,36rem)] lg:gap-12 xl:gap-16">
        <div className="max-w-xl">
          <p className="technical-label text-signal">05 // {t("eyebrow")}</p>
          <h2 id="contact-title" className="mt-3 text-3xl md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="relative w-full max-w-xl justify-self-end overflow-hidden rounded-lg border border-border bg-surface-1/80 shadow-glow">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-signal/80 to-transparent"
          />

          <div className="border-b border-border/80 bg-surface-2/55 px-5 py-3 sm:px-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-signal">
              {t("form-label")}
            </p>
            <h3 className="mt-1.5 text-xl">{t("form-title")}</h3>
            <p className="mt-1.5 text-sm leading-5 text-text-secondary">
              {t("form-description")}
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
