import { RiArrowRightUpLine, RiGithubFill, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProjectsCardProps {
  name: string;
  number: string;
  category: string;
  description: string;
  contributionLabel: string;
  contribution?: string;
  summary: string;
  takeaway: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl: string | null;
  githubUrl: string | null;
  projectLabel: string;
  githubLabel: string;
  newTabLabel: string;
  technologies: readonly string[];
  featured: boolean;
  featuredLabel: string;
  detailsLabel: string;
  closeLabel: string;
  highlightsLabel: string;
  stackLabel: string;
  highlights: readonly string[];
  repositoryNotice: string;
}

export default function ProjectsCard({
  name, number, category, description, contributionLabel, contribution, summary, takeaway, imageUrl, imageAlt,
  projectUrl, githubUrl, projectLabel, githubLabel, newTabLabel, technologies,
  featured, featuredLabel, detailsLabel, closeLabel, highlightsLabel, stackLabel, highlights, repositoryNotice,
}: ProjectsCardProps) {
  return (
    <article className={cn(
      "group flex min-w-0 flex-col overflow-hidden rounded-lg border bg-surface-1/70 transition-[border-color,box-shadow] duration-300 hover:border-signal/40 focus-within:border-signal/40",
      featured ? "border-signal/35 shadow-glow" : "border-border",
    )}>
      <div className="flex h-10 items-center justify-between gap-3 px-5 font-mono text-[11px]">
        <span className={featured ? "text-signal" : "text-text-secondary"}>{featured ? featuredLabel : category}</span>
        <span aria-hidden="true" className="text-text-tertiary">/{number}</span>
      </div>
      <div className="relative aspect-[2/1] max-h-44 overflow-hidden bg-canvas">
        <Image src={imageUrl} alt={imageAlt} fill
          sizes="(min-width: 1248px) 368px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"
          className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl leading-7">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-text-secondary">{summary}</p>
        <p className="mt-3 font-mono text-xs leading-5 text-text-secondary">
          {technologies.slice(0, 3).join(" · ")}
        </p>
        <div className="mt-auto pt-4">
          <div className="flex min-h-10 flex-wrap items-center gap-2">
            {projectUrl && <a href={projectUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`${projectLabel}: ${name} (${newTabLabel})`}
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "min-h-10 text-xs")}>
              {projectLabel}<RiArrowRightUpLine aria-hidden="true" className="size-4" />
            </a>}
            {githubUrl ? <a href={githubUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`${githubLabel}: ${name} (${newTabLabel})`}
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "min-h-10 text-xs")}>
              <RiGithubFill aria-hidden="true" className="size-4" />GitHub
            </a> : !projectUrl && <span className="text-xs leading-5 text-text-secondary">{repositoryNotice}</span>}
          </div>
          <Dialog>
            <DialogTrigger className="mt-3 flex min-h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-sm border-t border-border/70 text-sm text-text-secondary transition-colors hover:text-signal">
              <span>{detailsLabel}<span className="sr-only">: {name}</span></span>
              <RiArrowRightLine aria-hidden="true" className="size-4" />
            </DialogTrigger>
            <DialogContent closeLabel={closeLabel} className="block overflow-hidden rounded-xl border border-signal/20 bg-surface-1 p-0 shadow-glow sm:max-w-2xl">
              <div className="max-h-[85svh] overflow-y-auto overscroll-contain p-5 sm:p-7">
                <DialogHeader className="pr-10">
                  <p className="technical-label text-signal">{category}</p>
                  <DialogTitle className="mt-1 text-2xl font-bold leading-8">{name}</DialogTitle>
                  <DialogDescription className="text-sm leading-6">{takeaway}</DialogDescription>
                </DialogHeader>
                <div className="relative mt-5 aspect-[2/1] overflow-hidden rounded-lg border border-border bg-canvas">
                  <Image src={imageUrl} alt={imageAlt} fill sizes="(min-width: 672px) 616px, 90vw" className="object-contain" />
                </div>
                <p className="mt-5 text-sm leading-7 text-text-secondary">{description}</p>
                {contribution && (
                  <div className="mt-5 rounded-lg border border-signal/15 bg-signal/5 p-4">
                    <h4 className="text-sm font-semibold">{contributionLabel}</h4>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{contribution}</p>
                  </div>
                )}
                <h4 className="mt-5 text-sm font-semibold">{highlightsLabel}</h4>
                <ul className="mt-2 space-y-2 text-sm leading-6 text-text-secondary">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2.5 h-px w-2 shrink-0 bg-signal" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-5 text-sm font-semibold">{stackLabel}</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {technologies.map((technology) => <li className="tech-chip" key={technology}>{technology}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4">
                  {projectUrl && <a href={projectUrl} target="_blank" rel="noopener noreferrer"
                    aria-label={`${projectLabel}: ${name} (${newTabLabel})`}
                    className={cn(buttonVariants({ variant: "default" }), "min-h-11")}>
                    {projectLabel}<RiArrowRightUpLine aria-hidden="true" className="size-4" />
                  </a>}
                  {githubUrl ? <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                    aria-label={`${githubLabel}: ${name} (${newTabLabel})`}
                    className={cn(buttonVariants({ variant: "outline" }), "min-h-11")}>
                    <RiGithubFill aria-hidden="true" className="size-4" />GitHub
                  </a> : <p className="text-xs leading-5 text-text-secondary">{repositoryNotice}</p>}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </article>
  );
}
