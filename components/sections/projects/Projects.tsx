import { getTranslations } from "next-intl/server";
import ProjectsCard from "./ProjectsCard";
import { projectsItems } from "./projects-data";

export default async function Projects() {
  const t = await getTranslations("Projects");
  return (
    <section aria-labelledby="projects-title" className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-center border-t border-border py-[clamp(1.5rem,4svh,3rem)]" id="projects">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="technical-label text-signal">03 // {t("eyebrow")}</p>
          <h2 id="projects-title" className="mt-3 text-3xl md:text-4xl">{t("title")}</h2>
          <p className="mt-3 max-w-xl text-base leading-6 text-text-secondary">{t("description")}</p>
        </div>
      </div>
      <div className="mt-[clamp(1.5rem,4svh,2rem)] grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsItems.map(({ key, ...project }, index) => (
          <ProjectsCard
            key={key}
            {...project}
            featured={index === 0}
            featuredLabel={t("featured-label")}
            detailsLabel={t("view-details")}
            closeLabel={t("close-details")}
            highlightsLabel={t("highlights-label")}
            stackLabel={t("stack-label")}
            number={String(index + 1).padStart(2, "0")}
            category={t(`projects.${key}.category`)}
            description={t(`projects.${key}.description`)}
            contributionLabel={t("contribution-label")}
            contribution={t.has(`projects.${key}.contribution`) ? t(`projects.${key}.contribution`) : undefined}
            summary={t(`projects.${key}.summary`)}
            takeaway={t(`projects.${key}.takeaway`)}
            highlights={[
              t(`projects.${key}.highlight-1`),
              t(`projects.${key}.highlight-2`),
            ]}
            repositoryNotice={t(`projects.${key}.repository-notice`)}
            imageAlt={t("image-alt", { name: project.name })}
            projectLabel={t("view-project")}
            githubLabel={t("view-code")}
            newTabLabel={t("new-tab")}
          />
        ))}
      </div>
    </section>
  );
}
