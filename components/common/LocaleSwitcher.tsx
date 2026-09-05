"use client";

import {
  Link,
  usePathname,
} from "@/i18n/navigation";

export function LocaleSwitcher() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Cambiar idioma"
      className="inline-flex rounded-md border border-border bg-surface-1 p-1 font-mono text-xs font-semibold tracking-wider text-text-secondary"
    >
      <Link
        href={pathname}
        locale="es"
        className="rounded-sm px-2.5 py-1.5 transition-colors hover:bg-surface-3 hover:text-signal"
      >
        ES
      </Link>

      <Link
        href={pathname}
        locale="en"
        className="rounded-sm px-2.5 py-1.5 transition-colors hover:bg-surface-3 hover:text-signal"
      >
        EN
      </Link>
    </nav>
  );
}
