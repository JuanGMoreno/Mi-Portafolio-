import { cn } from "@/lib/utils";

import { BrandMark } from "./BrandMark";
import { LocaleSwitcher } from "./LocaleSwitcher";
import type { NavigationLink } from "./navigation";

interface DesktopNavigationProps {
  brandLabel: string;
  className?: string;
  links: NavigationLink[];
  navigationLabel: string;
}

export default function DesktopNavigation({
  brandLabel,
  className,
  links,
  navigationLabel,
}: DesktopNavigationProps) {
  return (
    <nav
      aria-label={navigationLabel}
      className={cn(
        "grid grid-cols-[auto_1fr_auto] items-center gap-6",
        className,
      )}
    >
      <BrandMark label={brandLabel} />

      <ul className="flex items-center justify-center gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-3/60 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <LocaleSwitcher />
    </nav>
  );
}
