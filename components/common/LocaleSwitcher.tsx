"use client";

import {
  Link,
  usePathname,
} from "@/i18n/navigation";

export function LocaleSwitcher() {
  const pathname = usePathname();

  return (
    <nav aria-label="Cambiar idioma">
      <Link href={pathname} locale="es">
        ES
      </Link>

      <Link href={pathname} locale="en">
        EN
      </Link>
    </nav>
  );
}