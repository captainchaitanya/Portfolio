import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SummaryBox } from "@/components/SummaryBox";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  getNextProject,
  getProject,
  projects,
} from "@/content/projects";
import { site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary.outcome,
    openGraph: {
      title: `${project.title} — Chaitanya Raj`,
      description: project.summary.outcome,
      type: "article",
      images: [{ url: `/work/${project.slug}/opengraph-image` }],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getNextProject(slug);

  return (
    <div className="min-h-full">
      <ScrollProgress />
      <Container>
        <header className="flex items-center justify-between gap-4 pt-6 md:pt-10">
          <nav aria-label="Breadcrumb">
            <Link
              href="/"
              className="text-base leading-body text-accent hover:opacity-80"
            >
              ← Back
              <span className="sr-only"> to {site.name} home</span>
            </Link>
          </nav>
          <ThemeToggle />
        </header>

        <main id="main">
          <article className="pt-10 pb-18 md:pt-18">
            <Reveal as="h1" className="text-display font-medium leading-display">
              {project.title}
            </Reveal>

            {project.links && project.links.length > 0 ? (
              <Reveal className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-base">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="case-study-link hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </Reveal>
            ) : null}

            <Reveal className="mt-10">
              <SummaryBox
                problem={project.summary.problem}
                role={project.summary.role}
                team={project.summary.team}
                timeline={project.summary.timeline}
                outcome={project.summary.outcome}
              />
            </Reveal>

            <div className="mt-18 flex flex-col gap-10">
              {project.sections.map((section) => (
                <Reveal
                  as="section"
                  key={section.heading}
                  className="border-t border-border pt-10"
                >
                  <h2 className="text-lg font-medium leading-body">{section.heading}</h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className={`text-base leading-body ${
                          paragraph.startsWith("[TODO") ? "text-muted" : "text-text"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            {nextProject ? (
              <Reveal className="mt-18 border-t border-border pt-10">
                <nav aria-label="Next project">
                  <p className="text-sm leading-body text-muted">Next project</p>
                  <Link
                    href={`/work/${nextProject.slug}`}
                    className="group mt-2 inline-flex max-w-full items-baseline gap-2 text-lg font-medium leading-body"
                  >
                    <span className="min-w-0">{nextProject.title}</span>
                    <span
                      aria-hidden="true"
                      className="inline-block shrink-0 transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-[4px]"
                    >
                      →
                    </span>
                  </Link>
                </nav>
              </Reveal>
            ) : null}
          </article>
        </main>
      </Container>
    </div>
  );
}
