import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../../lib/project-data";

const sitePath = "";
const resumeHref = `${sitePath}/resume/Elvira-Nurgalieva-Profile.pdf`;

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  { params }: ProjectPageProps,
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Elvira Nurgalieva",
    };
  }

  return {
    title: `${project.title} | Elvira Nurgalieva`,
    description: project.summary,
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="portfolio-shell project-page-shell">
      <header className="topbar project-topbar">
        <div className="brand">
          <div className="brand-name">Elvira Nurgalieva</div>
          <div className="brand-role">Projects | Engineering Outcomes | Case Studies</div>
        </div>

        <nav className="nav-links" aria-label="Project navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="topbar-actions">
          <a className="button button-secondary" href={resumeHref}>
            Download Resume
          </a>
        </div>
      </header>

      <section className="section-block project-hero">
        <SectionLabel>{project.org}</SectionLabel>
        <h1>{project.title}</h1>
        <p className="project-hero-subtitle">{project.subtitle}</p>
        <p className="lead project-hero-copy">{project.summary}</p>
        <div className="cta-row">
          <Link className="button button-primary" href="/projects">
            Back to Projects
          </Link>
        </div>
      </section>

      <section className="section-block project-detail-layout">
        <div className="project-detail-main">
          <div className="project-detail-grid">
            <article className="project-detail-card">
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </article>
            <article className="project-detail-card">
              <h2>Current State</h2>
              <ul className="simple-list">
                {project.currentState.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="project-detail-card">
              <h2>Observed Issues</h2>
              <ul className="simple-list">
                {project.observedIssues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="project-detail-card">
              <h2>Engineering Methods</h2>
              <ul className="simple-list">
                {project.methods.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="project-detail-card">
              <h2>Proposed Solution</h2>
              <ul className="simple-list">
                {project.solution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="project-detail-card">
              <h2>Expected Impact</h2>
              <ul className="simple-list">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <aside className="project-sidebar">
          <article className="project-sidebar-card">
            <SectionLabel>Tools used</SectionLabel>
            <div className="skill-pills">
              {project.tools.map((item) => (
                <span className="skill-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="project-sidebar-card">
            <SectionLabel>Engineering skills</SectionLabel>
            <div className="skill-pills">
              {project.skills.map((item) => (
                <span className="skill-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        </aside>
      </section>

      {project.materials && project.materials.length > 0 ? (
        <section className="section-block">
          <SectionLabel>Media and models</SectionLabel>
          <h2>Project Materials</h2>
          <p className="body-copy">
            Supporting materials for this case study, including the workflow
            video and interactive 3D models.
          </p>

          <div className="media-grid">
            {project.materials.map((item) => (
              <article className="media-card" key={item.href}>
                {item.embed ? (
                  <div className="media-frame">
                    <iframe
                      allow={
                        item.type === "video"
                          ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          : "autoplay; fullscreen; xr-spatial-tracking"
                      }
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={item.embed}
                      title={item.label}
                    />
                  </div>
                ) : null}
                <div className="media-card-copy">
                  <p className="eyebrow">{item.type === "video" ? "Video" : "3D Model"}</p>
                  <h3>{item.label}</h3>
                  <a
                    className="text-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
