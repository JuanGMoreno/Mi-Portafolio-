import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

import "../globals.css";

import { routing } from "@/i18n/routing";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const alternateLocale = locale === "es" ? "en_US" : "es_ES";

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("shortTitle")}`,
    },
    description: t("description"),
    applicationName: t("siteName"),
    authors: [{ name: "Juan Guillermo Moreno" }],
    creator: "Juan Guillermo Moreno",
    keywords: [
      "Full Stack Developer",
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "TypeScript",
    ],
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale,
      title: t("title"),
      description: t("description"),
      siteName: t("siteName"),
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${plusJakarta.variable} ${jetBrainsMono.variable} dark antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
