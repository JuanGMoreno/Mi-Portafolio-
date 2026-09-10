import Image from "next/image";
import { getTranslations } from "next-intl/server";

const skillGroups = [
  {
    key: "frontend",
    skills: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "NestJS", icon: "/skills/nestjs.svg" },
      { name: "Express", icon: "/skills/express.svg" },
      { name: "Postman", icon: "/skills/rest.svg" },
    ],
  },
  {
    key: "data",
    skills: [
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "Prisma", icon: "/skills/prisma.svg" },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "AWS", icon: "/skills/aws.svg" },
    ],
  },
] as const;

export default async function Skills() {
  const t = await getTranslations("Skills");

  return (
    <section
      aria-labelledby="skills-title"
      className="flex h-[calc(100svh-4.5rem)] flex-col overflow-y-auto border-t border-border py-[clamp(1rem,4svh,3rem)]"
      id="technologies"
    >
      <div className="my-auto w-full shrink-0">
        <div>
          <div>
            <p className="technical-label text-signal">02 // {t("eyebrow")}</p>
            <h2 id="skills-title" className="mt-3 max-w-3xl text-3xl md:text-4xl">
              {t("title")}
            </h2>
          </div>
          <p className="mt-3 text-base leading-6 text-text-secondary">
            {t("description")}
          </p>
        </div>

        <div
          className="mt-[clamp(1rem,4svh,2rem)] divide-y divide-border rounded-lg border border-border bg-surface-1/80"
          aria-label={t("grid-label")}
        >
          {skillGroups.map((group) => (
            <article
              key={group.key}
              className="grid items-center gap-3 px-4 py-3 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-surface-2/70 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6 md:px-6 md:py-4 lg:grid-cols-[14rem_minmax(0,1fr)]"
            >
              <h3 className="flex items-center gap-3 text-sm font-semibold md:text-base">
                <span aria-hidden="true" className="h-4 w-px bg-signal/60" />
                {t(`groups.${group.key}.label`)}
              </h3>

              <ul className="grid grid-cols-4 gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group/tech flex flex-col items-center justify-center gap-2 rounded-sm py-1 text-center lg:flex-row lg:justify-start lg:gap-3"
                  >
                    <Image
                      src={skill.icon}
                      alt=""
                      width={36}
                      height={36}
                      className="size-8 shrink-0 transition-transform duration-200 group-hover/tech:-translate-y-0.5 md:size-9"
                    />
                    <span className="font-mono text-xs leading-5 text-text-secondary transition-colors group-hover/tech:text-text-primary md:text-sm">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
