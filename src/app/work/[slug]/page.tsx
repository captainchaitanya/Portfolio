import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteImage } from "@/components/SiteImage";
import { VibeshelfCaseStudy } from "@/components/VibeshelfCaseStudy";
import { images } from "@/content/media";
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

  if (slug === "vibeshelf") {
    return <VibeshelfCaseStudy project={project} nextProject={nextProject} />;
  }

  const heroImage = slug === "upi-fraud-analytics" ? images.upiDashboard : null;
  const index = projects.findIndex((item) => item.slug === slug);

  return (
    <div className="min-h-full">
      <header className="frame case-header">
        <nav aria-label="Breadcrumb">
          <Link href="/" className="back-link">
            ← Back
            <span className="sr-only"> to {site.name} home</span>
          </Link>
        </nav>
        <p className="case-kicker">Case study {String(index + 1).padStart(2, "0")}</p>
      </header>

      <main id="main">
        <article className="frame">
          <div className="case-title-block">
            <p className="eyebrow">{project.year}</p>
            <h1>{project.title}</h1>
            <p className="standfirst">{project.outcome}</p>
          </div>

          <dl className="meta-strip">
            <div>
              <dt>My role</dt>
              <dd>{project.summary.role}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{project.summary.team}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{project.summary.timeline}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{project.meta.scope ?? project.summary.outcome}</dd>
            </div>
          </dl>

          {project.links && project.links.length > 0 ? (
            <div className="link-pills">
              {project.links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={i === 0 ? "pill-accent" : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          ) : null}

          {heroImage ? (
            <div className="case-hero">
              <SiteImage image={heroImage} />
            </div>
          ) : null}

          <div className="generic-sections">
            {project.sections.map((section, sectionIndex) => (
              <section key={section.heading} aria-labelledby={`section-${sectionIndex}`}>
                <div className="case-heading">
                  <span className="case-num" aria-hidden="true">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`section-${sectionIndex}`}>{section.heading}</h2>
                </div>
                <div className="body-copy">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {nextProject ? (
            <nav className="next-project" aria-label="Next project">
              <p className="section-label">Next project</p>
              <Link href={`/work/${nextProject.slug}`}>
                {nextProject.title}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </nav>
          ) : null}

          <SiteFooter />
        </article>
      </main>
    </div>
  );
}
