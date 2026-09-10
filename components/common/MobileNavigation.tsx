"use client";

import { RiArrowRightLine, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { BrandMark } from "./BrandMark";
import { LocaleSwitcher } from "./LocaleSwitcher";
import type { NavigationLink } from "./navigation";

interface MobileNavigationProps {
  brandLabel: string;
  className?: string;
  labels: {
    closeMenu: string;
    menuEyebrow: string;
    menuDescription: string;
    menuTitle: string;
    navigation: string;
    openMenu: string;
  };
  links: NavigationLink[];
}

export default function MobileNavigation({
  brandLabel,
  className,
  labels,
  links,
}: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("items-center justify-between", className)}>
      <BrandMark label={brandLabel} />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              aria-label={labels.openMenu}
            />
          }
        >
          <RiMenu3Line aria-hidden="true" />
          <span className="sr-only">{labels.openMenu}</span>
        </SheetTrigger>

        <SheetContent
          side="right"
          closeLabel={labels.closeMenu}
          className="border-border bg-surface-1/95 backdrop-blur-xl data-[side=right]:w-[min(22rem,88vw)]"
        >
          <SheetHeader className="border-b border-border px-6 py-6">
            <p className="technical-label text-signal">
              {labels.menuEyebrow}
              {" // 01"}
            </p>
            <SheetTitle className="text-xl font-bold">
              {labels.menuTitle}
            </SheetTitle>
            <SheetDescription>{labels.menuDescription}</SheetDescription>
          </SheetHeader>

          <nav aria-label={labels.navigation} className="flex-1 px-3 py-4">
            <ul className="space-y-1">
              {links.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex w-full items-center gap-4 rounded-md px-3 py-3.5 text-left text-base font-semibold text-text-primary transition-colors hover:bg-surface-3/70 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  >
                    <span className="font-mono text-xs font-medium text-text-tertiary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{link.label}</span>
                    <RiArrowRightLine
                      aria-hidden="true"
                      className="size-4 text-text-tertiary transition-transform group-hover:translate-x-0.5 group-hover:text-signal"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SheetFooter className="border-t border-border px-6 py-5">
            <div className="self-start">
              <LocaleSwitcher />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
