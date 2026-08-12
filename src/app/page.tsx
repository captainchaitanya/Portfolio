import { Container } from "@/components/Container";
import { ExperienceList } from "@/components/ExperienceList";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectRow } from "@/components/ProjectRow";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { site } from "@/content/site";
import { writing } from "@/content/writing";

export default function Home() {
  return (
    <div className="min-h-full">
      <Container>
        <Hero content={site} />
      </Container>

      <main id="main">
        <Container>
          <section aria-labelledby="work-heading" className="mt-18 border-t border-border pt-10">
            <Reveal as="h2" id="work-heading" className="text-sm leading-body text-muted">
              Selected work
            </Reveal>
            <div className="mt-6">
              {featuredProjects.map((project) => (
                <Reveal key={project.slug}>
                  <ProjectRow
                    href={`/work/${project.slug}`}
                    title={project.title}
                    metricPrefix={project.metricPrefix}
                    outcome={project.outcome}
                    year={project.year}
                    meta={project.meta}
                  />
                </Reveal>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="experience-heading"
            className="mt-10 border-t border-border pt-10"
          >
            <Reveal as="h2" id="experience-heading" className="text-sm leading-body text-muted">
              Experience
            </Reveal>
            <ExperienceList roles={experience} />
          </section>

          <section aria-labelledby="writing-heading" className="mt-10 border-t border-border pt-10">
            <Reveal as="h2" id="writing-heading" className="text-sm leading-body text-muted">
              Writing
            </Reveal>
            <Reveal>
              <p className="mt-2 text-base leading-body">
                <a
                  href={site.writing.moreHref}
                  className="text-accent hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.writing.moreLabel}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </Reveal>
            <ul className="mt-6">
              {writing.map((item) => (
                <li key={item.href} className="border-t border-border">
                  <Reveal>
                    <a
                      href={item.href}
                      className="block py-4 text-lg font-medium leading-body hover:text-accent"
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.title}
                      {item.external ? (
                        <span className="sr-only"> (opens in a new tab)</span>
                      ) : null}
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="about-heading" className="mt-10 border-t border-border pt-10">
            <Reveal as="h2" id="about-heading" className="text-sm leading-body text-muted">
              About
            </Reveal>
            <div className="mt-6 flex flex-col gap-4 text-base leading-body">
              {site.about.paragraphs.map((paragraph) => (
                <Reveal as="p" key={paragraph} className={paragraph.startsWith("[TODO") ? "text-muted" : undefined}>
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </section>

          <div className="mt-10">
            <Footer />
          </div>
        </Container>
      </main>
    </div>
  );
}
