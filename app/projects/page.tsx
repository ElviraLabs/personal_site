import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../lib/project-data";

const sitePath = "";
const resumeHref = `${sitePath}/resume/Elvira-Nurgalieva-Profile.pdf`;

export const metadata: Metadata = {
  title: "Projects | Elvira Nurgalieva",
  description:
    "Engineering project portfolio covering material flow, reverse engineering, process improvement, and inventory visibility design studies.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function ProjectsPage() {
  return (
    <main className="portfolio-shell project-page-shell">
      <header className="topbar project-topbar">
        <div className="brand">
          <div className="brand-name">Elvira Nurgalieva</div>
          <div className="brand-role">Projects | Engineering Outcomes | Case Studies</div>
        </div>

        <nav className="nav-links" aria-label="Project navigation">
          <Link href="/">Home</Link>
          <Link href="/#resume">Resume</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="topbar-actions">
          <a className="button button-secondary" href={resumeHref}>
            Download Resume
          </a>
        </div>
      </header>

      <section className="section-block project-hero">
        <SectionLabel>Project index</SectionLabel>
        <h1>Engineering Projects</h1>
        <p className="project-hero-subtitle">
          Individual case studies organized around engineering outcomes,
          current-state analysis, structured problem solving, and practical
          implementation thinking.
        </p>
      </section>

      <section className="section-block">
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <div className={`project-art art-${(index % 4) + 1}`}>
                <span>{project.tag}</span>
              </div>
              <div className="project-content">
                <p className="eyebrow">{project.org}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  View project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
