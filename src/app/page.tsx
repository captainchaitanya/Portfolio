import { ExperienceList } from "@/components/ExperienceList";
import { ProjectBlock } from "@/components/ProjectBlock";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteImage } from "@/components/SiteImage";
import { experience } from "@/content/experience";
import { homeProjectFor } from "@/content/home";
import { images, PORTRAIT_SIZES } from "@/content/media";
import { featuredProjects } from "@/content/projects";
import { site } from "@/content/site";
import { writing } from "@/content/writing";

export default function Home() {
  const aboutLeft = site.about.paragraphs.slice(0, 2);
  const aboutRight = site.about.paragraphs.slice(2);

  return (
    <div className="min-h-full">
      <SiteHeader />
      <main id="main">
        <section className="frame hero" aria-labelledby="hero-heading">
          <p className="eyebrow">Open to full-time APM / PM roles</p>
          <h1 id="hero-heading">
            Electrical engineer turned PM. I write the SQL myself, then{" "}
            <em>argue about what it means.</em>
          </h1>
          <p className="hero-intro">{site.status}</p>
          <div className="hero-portrait">
            <SiteImage image={images.portrait} priority sizes={PORTRAIT_SIZES} />
          </div>
          <nav className="hero-links" aria-label="Contact">
            {site.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.download ? { download: link.download } : {})}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
                {link.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            ))}
          </nav>
        </section>

        <section id="work" className="frame work-section" aria-labelledby="work-heading">
          <div className="section-label-row">
            <h2 id="work-heading" className="section-label">
              Selected work
            </h2>
            <p className="section-count">Two projects</p>
          </div>
          {featuredProjects.map((project, index) => {
            const presentation = homeProjectFor(project);
            if (!presentation) return null;
            return (
              <ProjectBlock
                key={project.slug}
                project={project}
                presentation={presentation}
                priority={index === 0}
              />
            );
          })}
        </section>

        <section
          id="experience"
          className="frame experience-section"
          aria-labelledby="experience-heading"
        >
          <div className="section-label-row">
            <h2 id="experience-heading" className="section-label">
              Experience
            </h2>
          </div>
          <ExperienceList roles={experience} />
        </section>

        <section id="writing" className="frame writing-section" aria-labelledby="writing-heading">
          <div className="section-label-row">
            <h2 id="writing-heading" className="section-label">
              Writing
            </h2>
          </div>
          <ul className="writing-list">
            {writing.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="writing-row"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <SiteImage image={images[item.image]} sizes="144px" />
                  <span className="writing-title">
                    {item.title}
                    {item.external ? (
                      <span className="sr-only"> (opens in a new tab)</span>
                    ) : null}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p>
            <a
              className="writing-more"
              href={site.writing.moreHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.writing.moreLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </section>

        <section id="about" className="frame about-section" aria-labelledby="about-heading">
          <div className="section-label-row">
            <h2 id="about-heading" className="section-label">
              About
            </h2>
          </div>
          <div className="grid-12 mt-8">
            <div className="span-7 about-col">
              {aboutLeft.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="span-4 about-col">
              {aboutRight.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="frame">
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
