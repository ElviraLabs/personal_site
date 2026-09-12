import type { Metadata } from "next";
import Link from "next/link";
import { journalEntries } from "../../lib/journal-data";

const sitePath = "";
const resumeHref = `${sitePath}/resume/Elvira-Nurgalieva-Profile.pdf?version=20260912`;
const featuredReflection = journalEntries[0];

export const metadata: Metadata = {
  title: "Engineering Journal | Elvira Nurgalieva",
  description:
    "Professional reflections on manufacturing, systems thinking, continuous improvement, and engineering career development.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function JournalPage() {
  return (
    <main className="portfolio-shell project-page-shell">
      <header className="topbar project-topbar">
        <div className="brand">
          <div className="brand-name">Elvira Nurgalieva</div>
          <div className="brand-role">Engineering Journal | Manufacturing Reflections</div>
        </div>

        <nav className="nav-links" aria-label="Journal navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/professional-development">Development</Link>
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
        <SectionLabel>{featuredReflection.intro}</SectionLabel>
        <h1>Professional Reflections</h1>
        <p className="project-hero-subtitle">
          Writing about manufacturing, systems thinking, and continuous learning as part of an evolving engineering practice.
        </p>
      </section>

      <section className="section-block reflection-layout">
        <article className="reflection-article">
          <div className="reflection-meta">
            <span>{featuredReflection.dateLabel}</span>
            <span>Colorado Advanced Manufacturing Alliance</span>
          </div>
          <h2>{featuredReflection.title}</h2>
          <p className="reflection-summary">{featuredReflection.summary}</p>
          <div className="reflection-body">
            {featuredReflection.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="reflection-quote">
            {featuredReflection.outro}
          </blockquote>
        </article>

        <aside className="reflection-sidebar">
          <div className="project-sidebar-card">
            <SectionLabel>Why it matters</SectionLabel>
            <h3>What this communicates to employers</h3>
            <ul className="simple-list reflection-list">
              {featuredReflection.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="project-sidebar-card">
            <SectionLabel>Professional value</SectionLabel>
            <h3>Why keep publishing reflections</h3>
            <p className="body-copy reflection-sidebar-copy">
              Reflections like this help the site read less like a static portfolio and more like the working journal of an engineer who is actively learning, engaging with industry, and refining her point of view.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
