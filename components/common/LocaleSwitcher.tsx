"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="inline-flex rounded-md border border-border bg-surface-1 p-1 font-mono text-xs font-semibold tracking-wider text-text-secondary"
    >
      <Link
        href={pathname}
        locale="es"
        aria-label={t("spanish")}
        aria-current={locale === "es" ? "page" : undefined}
        className={cn(
          "rounded-sm px-2.5 py-1.5 transition-colors hover:bg-surface-3 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
          locale === "es" && "bg-surface-3 text-signal",
        )}
      >
        ES
      </Link>

      <Link
        href={pathname}
        locale="en"
        aria-label={t("english")}
        aria-current={locale === "en" ? "page" : undefined}
        className={cn(
          "rounded-sm px-2.5 py-1.5 transition-colors hover:bg-surface-3 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
          locale === "en" && "bg-surface-3 text-signal",
        )}
      >
        EN
      </Link>
    </div>
  );
}
