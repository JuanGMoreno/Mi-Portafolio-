import { getTranslations } from "next-intl/server";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { navigationItems } from "./navigation";

export default async function NavBar() {
  const t = await getTranslations("Navbar");
  const links = navigationItems.map((item) => ({
    href: item.href,
    label: t(item.key),
  }));

  return (
    <>
      <DesktopNavigation
        brandLabel={t("brand-label")}
        links={links}
        navigationLabel={t("navigation-label")}
        className="hidden lg:grid"
      />
      <MobileNavigation
        brandLabel={t("brand-label")}
        links={links}
        labels={{
          closeMenu: t("close-menu"),
          menuDescription: t("menu-description"),
          menuEyebrow: t("menu-eyebrow"),
          menuTitle: t("menu-title"),
          navigation: t("navigation-label"),
          openMenu: t("open-menu"),
        }}
        className="flex lg:hidden"
      />
    </>
  );
}
