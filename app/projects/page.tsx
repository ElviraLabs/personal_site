import type { Metadata } from "next";
import Link from "next/link";

const sitePath = "";
const resumeHref = `${sitePath}/resume/Elvira-Nurgalieva-Profile.pdf`;

export const metadata: Metadata = {
  title: "Projects | Elvira Nurgalieva",
  description:
    "Reverse engineering project case study featuring mesh-to-CAD workflow details, embedded video, and interactive 3D models.",
};

const project = {
  org: "Thor3D",
  title: "Reverse Engineering Case Study",
  subtitle:
    "Mesh-to-CAD workflow for legacy parts, wear analysis, and manufacturing documentation",
  summary:
    "This project brought together 3D scanning, mesh processing, and CAD reconstruction to convert physical parts into usable engineering assets for review, analysis, and downstream documentation.",
  challenge: [
    "Engineering teams needed usable models and drawings when original CAD or engineering documents were unavailable.",
    "The project had to support more than one use case, including discontinued automotive parts, wear analysis, and quality review.",
    "Scan meshes alone were not sufficient for manufacturing documentation or engineering decision-making.",
  ],
  currentState: [
    "Physical parts existed, but digital engineering assets were incomplete or missing.",
    "Geometry had to be captured from real-world parts with enough detail for reconstruction.",
    "Customers needed a clearer bridge from scan data to engineering-ready outputs.",
  ],
  rootCause: [
    "Legacy components often outlive their original drawings or CAD records.",
    "Raw scan output does not directly translate into production-ready geometry.",
    "Without a structured workflow, teams lose time in cleanup, interpretation, and rework.",
  ],
  workflow: [
    "Capture part geometry using 3D scanning based on the application and required detail.",
    "Review and clean scan data to isolate usable mesh information and reference geometry.",
    "Reconstruct surfaces and features in Geomagic Design X.",
    "Generate CAD models and 2D drawing support in SolidWorks and Fusion 360 for technical review and documentation.",
  ],
  outputs: [
    "Engineering-ready CAD models for mechanical components",
    "2D drawings for technical communication",
    "Support material for wear analysis and quality control",
    "Demonstration assets for customer education and technical validation",
  ],
  impact: [
    "Accelerated CAD reconstruction from physical parts",
    "Improved technical clarity for customer decisions and engineering review",
    "Created cleaner downstream documentation for manufacturing and inspection",
    "Demonstrated practical engineering value of 3D scanning and reverse engineering workflows",
  ],
  skills: [
    "Reverse engineering",
    "3D scanning",
    "Mesh cleanup",
    "CAD reconstruction",
    "Technical documentation",
    "Requirements analysis",
    "Wear analysis support",
    "Quality control support",
  ],
  tools: [
    "Geomagic Design X",
    "SolidWorks",
    "Fusion 360",
    "3D scanning",
    "Mesh review and cleanup",
  ],
  materials: [
    {
      label: "Workflow Video",
      href: "https://youtu.be/SyI5jJKvhpM",
      embed: "https://www.youtube.com/embed/SyI5jJKvhpM",
      type: "video",
    },
    {
      label: "3D Mesh Model",
      href: "https://sketchfab.com/3d-models/mesh-stl-7c3873106dd44cb296540c8d590d8412",
      embed: "https://sketchfab.com/models/7c3873106dd44cb296540c8d590d8412/embed",
      type: "model",
    },
    {
      label: "CAD Reconstruction Model",
      href: "https://sketchfab.com/3d-models/cad-452300c4751446b1b912ab1d9de24f3d",
      embed: "https://sketchfab.com/models/452300c4751446b1b912ab1d9de24f3d/embed",
      type: "model",
    },
  ],
  sourcePage: "https://elvira-n.squarespace.com/projects/mesh-to-cad",
} as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function ProjectsPage() {
  return (
    <main className="portfolio-shell project-page-shell">
      <header className="topbar project-topbar">
        <div className="brand">
          <div className="brand-name">Elvira Nurgalieva</div>
          <div className="brand-role">Projects | Reverse Engineering | CAD Workflows</div>
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
        <SectionLabel>{project.org}</SectionLabel>
        <h1>{project.title}</h1>
        <p className="project-hero-subtitle">{project.subtitle}</p>
        <p className="lead project-hero-copy">{project.summary}</p>
        <div className="cta-row">
          <Link className="button button-primary" href="/">
            Back to Portfolio
          </Link>
          <a
            className="button button-secondary"
            href={project.sourcePage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Original Source Material
          </a>
        </div>
      </section>

      <section className="section-block project-detail-layout">
        <div className="project-detail-main">
          <div className="project-detail-grid">
            <article className="project-detail-card">
              <h2>Challenge</h2>
              <ul className="simple-list">
                {project.challenge.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
              <h2>Root Cause Analysis</h2>
              <ul className="simple-list">
                {project.rootCause.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="project-detail-card">
              <h2>Workflow</h2>
              <ul className="simple-list">
                {project.workflow.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="project-detail-card">
              <h2>Outputs</h2>
              <ul className="simple-list">
                {project.outputs.map((item) => (
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

      <section className="section-block">
        <SectionLabel>Media and models</SectionLabel>
        <h2>Project Materials</h2>
        <p className="body-copy">
          These supporting materials show the workflow and outputs behind the
          case, including video and interactive 3D models from the earlier
          Squarespace project archive.
        </p>

        <div className="media-grid">
          {project.materials.map((item) => (
            <article className="media-card" key={item.href}>
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
    </main>
  );
}
