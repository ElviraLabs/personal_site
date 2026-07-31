import type { Metadata } from "next";
import Link from "next/link";
import {
  certifications,
  currentReading,
  developmentIntro,
  engineeringPhilosophy,
  journalTopicIdeas,
  learningFocuses,
  learningRoadmap,
  miniProjects,
  skillStatuses,
} from "../../lib/development-data";

const sitePath = "";
const resumeHref = `${sitePath}/resume/Elvira-Nurgalieva-Profile.pdf`;

export const metadata: Metadata = {
  title: "Professional Development | Elvira Nurgalieva",
  description:
    "Professional development page covering current engineering learning focus, roadmap, certifications in progress, reading list, and build-based learning projects.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="progress-block" aria-label={`${progress}% progress`}>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="progress-value">{progress}%</span>
    </div>
  );
}

export default function ProfessionalDevelopmentPage() {
  return (
    <main className="portfolio-shell project-page-shell">
      <header className="topbar project-topbar">
        <div className="brand">
          <div className="brand-name">Elvira Nurgalieva</div>
          <div className="brand-role">Professional Development | Continuous Learning</div>
        </div>

        <nav className="nav-links" aria-label="Professional development navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="topbar-actions">
          <a className="button button-secondary" href={resumeHref}>
            Download Resume
          </a>
        </div>
      </header>

      <section className="section-block project-hero">
        <SectionLabel>Professional development</SectionLabel>
        <h1>Current Engineering Focus</h1>
        <p className="project-hero-subtitle">{developmentIntro}</p>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <SectionLabel>Learning priorities</SectionLabel>
            <h2>Currently Learning</h2>
          </div>
        </div>

        <div className="focus-grid">
          {learningFocuses.map((focus) => (
            <article className="focus-card" key={focus.title}>
              <p className="eyebrow">In progress</p>
              <h3>{focus.title}</h3>
              <ul className="simple-list">
                {focus.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <ProgressBar progress={focus.progress} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-block roadmap-section">
        <SectionLabel>Learning roadmap</SectionLabel>
        <h2>2026 and Beyond</h2>
        <div className="roadmap">
          {learningRoadmap.map((item, index) => (
            <div className={`roadmap-step roadmap-${item.status}`} key={item.label}>
              <div className="roadmap-marker">
                {item.status === "completed" ? "✓" : index + 1}
              </div>
              <div className="roadmap-copy">
                <p className="eyebrow">
                  {item.status === "completed"
                    ? "Completed"
                    : item.status === "current"
                      ? "Current"
                      : "Planned"}
                </p>
                <h3>{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block dual-grid">
        <article className="info-card">
          <SectionLabel>Professional certifications</SectionLabel>
          <h2>Completed and In Progress</h2>
          <div className="development-columns">
            <div className="development-column">
              <p className="eyebrow">Completed</p>
              <ul className="simple-list">
                {certifications.completed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="development-column">
              <p className="eyebrow">In progress</p>
              <ul className="simple-list">
                {certifications.inProgress.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="info-card">
          <SectionLabel>Skills developing</SectionLabel>
          <h2>Active Growth Areas</h2>
          <div className="status-table">
            {skillStatuses.map((item) => (
              <div className="status-row" key={item.name}>
                <span>{item.name}</span>
                <strong className={`status-pill status-${item.status.toLowerCase().replaceAll(" ", "-")}`}>
                  {item.status}
                </strong>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <SectionLabel>Learning by building</SectionLabel>
            <h2>Applied Analytics Mini-Projects</h2>
          </div>
        </div>

        <div className="mini-project-grid">
          {miniProjects.map((project, index) => (
            <article className="mini-project-card" key={project.title}>
              <p className="eyebrow">Python Project {index + 1}</p>
              <h3>{project.title}</h3>
              <div className="skill-pills compact-pills">
                {project.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <p>{project.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block dual-grid">
        <article className="info-card">
          <SectionLabel>Current reading</SectionLabel>
          <h2>Books Guiding My Thinking</h2>
          <ul className="simple-list">
            {currentReading.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="about-panel">
          <SectionLabel>Engineering philosophy</SectionLabel>
          <h2>How I Think About Engineering Work</h2>
          <p>{engineeringPhilosophy}</p>
          <a className="button button-secondary" href="/journal">
            Explore Engineering Journal
          </a>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <SectionLabel>Engineering journal</SectionLabel>
            <h2>Weekly Reflection Topics</h2>
          </div>
          <a className="text-link" href="/journal">
            Read the journal
          </a>
        </div>
        <div className="topic-grid">
          {journalTopicIdeas.map((topic) => (
            <article className="topic-card" key={topic}>
              <h3>{topic}</h3>
              <p>
                A short reflection connecting study, industry insight, and engineering judgment in a practical manufacturing context.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
