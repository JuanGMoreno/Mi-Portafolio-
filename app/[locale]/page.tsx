import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/common/LocaleSwitcher";

export default async function HomePage() {
  const t = await getTranslations("Home");

  return (
    <main>
      <LocaleSwitcher />
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}