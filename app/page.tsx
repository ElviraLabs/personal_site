import Image from "next/image";

const sitePath = "";
const resumeHref = `${sitePath}/resume/Elvira-Nurgalieva-Profile.pdf`;
const headshotSrc = `${sitePath}/elvira-headshot.png`;

const strengths = [
  {
    title: "Industrial Engineering",
    points: [
      "Process improvement",
      "Workflow analysis",
      "Root cause analysis",
      "Operational efficiency",
    ],
    icon: "gear",
  },
  {
    title: "Systems Engineering",
    points: [
      "Requirements analysis",
      "Systems thinking",
      "Stakeholder collaboration",
      "Stakeholder alignment",
    ],
    icon: "nodes",
  },
  {
    title: "Manufacturing Support",
    points: [
      "SolidWorks + Fusion 360",
      "Reverse engineering",
      "CAD modeling",
      "Technical documentation",
    ],
    icon: "cube",
  },
] as const;

const featuredWork = [
  {
    title: "Customer Requirements Analysis",
    org: "The Home Depot",
    summary:
      "Advises customers in a fast-paced environment by translating project needs into practical product, cost, and application decisions.",
    href: "#experience",
    tag: "Customer-Facing Technical Support",
  },
  {
    title: "Digital Engineering Solution Support",
    org: "Thor3D",
    summary:
      "Supported engineering and manufacturing teams with 3D scanning, CAD, and reverse engineering workflows matched to real technical constraints.",
    href: "#experience",
    tag: "CAD + Reverse Engineering",
  },
  {
    title: "Field Operations Coordination",
    org: "MultiMedia Communications Ltd",
    summary:
      "Coordinated crews, schedules, materials, and reporting to keep residential fiber projects moving with fewer delays and clearer communication.",
    href: "#experience",
    tag: "Operations Execution",
  },
] as const;

const timeline = [
  {
    year: "2024-Present",
    title: "Sales Associate",
    detail: "The Home Depot | Customer advising, requirements clarification, inventory awareness, and day-to-day operational execution.",
  },
  {
    year: "2018-2022",
    title: "Sales Engineer",
    detail: "Thor3D | Technical solution support, reverse engineering, CAD workflows, and stakeholder-facing demonstrations.",
  },
  {
    year: "2017-2018",
    title: "Dispatch Coordinator",
    detail: "MultiMedia Communications Ltd | Scheduling, field coordination, materials tracking, and project reporting.",
  },
  {
    year: "2022",
    title: "Engineering Mechanics Certificates",
    detail: "Georgia Tech | Applied mechanics and mechanics fundamentals.",
  },
  {
    year: "2015-2016",
    title: "Postgraduate Business Enterprise",
    detail: "Southern Institute of Technology | Business and management foundation.",
  },
  {
    year: "2008-2012",
    title: "BA in Psychology",
    detail: "Higher School of Psychology | Human behavior and communication lens.",
  },
] as const;

const skills = [
  "Process Improvement",
  "Manufacturing Support",
  "Requirements Analysis",
  "Systems Thinking",
  "Workflow Analysis",
  "Root Cause Analysis",
  "Technical Documentation",
  "Stakeholder Collaboration",
  "Technical Communication",
  "SolidWorks",
  "Fusion 360",
  "CAD",
  "Reverse Engineering",
  "3D Scanning",
  "Problem Solving",
] as const;

const engineeringProjects = [
  "Retail Process Improvement Study (In Progress)",
  "Manufacturing Workflow Analysis (Planned)",
  "Reverse Engineering Workflow",
  "Requirements Analysis Case Study",
  "Assembly Line Balancing Simulation (Planned)",
] as const;

const experience = [
  {
    company: "The Home Depot",
    role: "Sales Associate",
    period: "April 2024 - Present",
    location: "Castle Rock, Colorado",
    bullets: [
      "Advise customers in a high-volume retail environment by identifying project needs, clarifying requirements, and recommending practical products and solutions.",
      "Translate customer questions into informed recommendations based on function, cost, availability, and installation context.",
      "Support store operations through inventory awareness, merchandising discipline, and dependable replenishment execution.",
    ],
  },
  {
    company: "Thor3D",
    role: "Sales Engineer",
    period: "August 2018 - February 2022",
    location: "Moscow",
    bullets: [
      "Conducted requirements analysis to understand customer goals, technical constraints, and workflow challenges across engineering and manufacturing use cases.",
      "Recommended 3D scanning, CAD, and reverse engineering solutions aligned to customer workflows, technical needs, and implementation realities.",
      "Built CAD models and technical demonstrations using SolidWorks, Fusion 360, Geomagic Design X, Rhinoceros, and Blender to support solution evaluation and stakeholder buy-in.",
    ],
  },
  {
    company: "MultiMedia Communications Ltd",
    role: "Dispatch Coordinator",
    period: "December 2017 - July 2018",
    location: "Christchurch",
    bullets: [
      "Coordinated schedules and crew deployment for residential fiber-laying projects across active field operations.",
      "Tracked materials, supplier timing, and project progress to keep work moving and reduce avoidable delays.",
      "Maintained communication across field technicians, subcontractors, and project managers to support smoother execution.",
    ],
  },
] as const;

const education = [
  "Bauman Moscow State Technical University - Bachelor's in Systems Engineering (NCEES evaluated as equivalent to a U.S. bachelor's degree in engineering)",
  "Relevant coursework: Systems Analysis, Automation, Robotics, Machine Design, Computer-Integrated Manufacturing, CAD, Production Processes",
  "Georgia Institute of Technology - Applications in Engineering Mechanics Certificate",
  "Georgia Institute of Technology - Mechanics of Materials I",
  "Georgia Institute of Technology - Introduction to Engineering Mechanics Certificate",
  "Southern Institute of Technology - Postgraduate Diploma of Business Enterprise/Management",
  "Higher School of Psychology - Bachelor of Arts in Psychology",
] as const;

function Icon({
  kind,
  className = "",
}: {
  kind:
    | "gear"
    | "nodes"
    | "cube"
    | "arrow"
    | "linkedin"
    | "mail"
    | "phone"
    | "pin"
    | "spark";
  className?: string;
}) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  const paths = {
    gear: (
      <>
        <circle cx="12" cy="12" r="3.2" {...shared} />
        <path
          d="M12 2.8v2.1M12 19.1v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"
          {...shared}
        />
        <circle cx="12" cy="12" r="8.4" {...shared} />
      </>
    ),
    nodes: (
      <>
        <rect x="10.4" y="3.6" width="3.2" height="3.2" rx="0.7" {...shared} />
        <rect x="3.6" y="17.2" width="3.2" height="3.2" rx="0.7" {...shared} />
        <rect x="17.2" y="17.2" width="3.2" height="3.2" rx="0.7" {...shared} />
        <path d="M12 6.8v5.1M12 11.9H5.2M12 11.9h6.8M5.2 12v5.2M18.8 12v5.2" {...shared} />
      </>
    ),
    cube: (
      <>
        <path d="M12 2.8 20 7.2 12 11.6 4 7.2 12 2.8Z" {...shared} />
        <path d="M4 7.2v9.6l8 4.4 8-4.4V7.2" {...shared} />
        <path d="M12 11.6v9.6" {...shared} />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" {...shared} />,
    linkedin: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="3.2" {...shared} />
        <path d="M8.1 10.2v6.3M8.1 7.7h.1M12 16.5v-3.4c0-1.5.9-2.5 2.2-2.5 1.3 0 1.9.9 1.9 2.3v3.6M12 10.5v.8" {...shared} />
      </>
    ),
    mail: (
      <>
        <rect x="3.3" y="5.6" width="17.4" height="12.8" rx="2.2" {...shared} />
        <path d="m4.6 7 7.4 6.1L19.4 7" {...shared} />
      </>
    ),
    phone: <path d="M6.3 4.7c.4-.6 1.1-.9 1.8-.7l2 .6c.8.2 1.3 1 1.2 1.8l-.2 1.8c1 .8 2 1.7 2.8 2.8l1.8-.2c.8-.1 1.6.4 1.8 1.2l.6 2c.2.7-.1 1.4-.7 1.8l-1.8 1.1c-.6.4-1.4.5-2 .2-2-.9-3.9-2.3-5.6-4s-3.1-3.6-4-5.6c-.3-.7-.2-1.4.2-2L6.3 4.7Z" {...shared} />,
    pin: (
      <>
        <path d="M12 20.1s5.4-5.7 5.4-10a5.4 5.4 0 1 0-10.8 0c0 4.3 5.4 10 5.4 10Z" {...shared} />
        <circle cx="12" cy="10.1" r="1.9" {...shared} />
      </>
    ),
    spark: <path d="m12 2.5 1.9 5.1 5.1 1.9-5.1 1.9-1.9 5.1-1.9-5.1-5.1-1.9 5.1-1.9L12 2.5Z" {...shared} />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths[kind]}
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-name">Elvira Nurgalieva</div>
          <div className="brand-role">Systems Engineering | Operations | Digital Engineering</div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="topbar-actions">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/elvira-n"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Icon kind="linkedin" />
          </a>
          <a className="button button-primary" href={resumeHref}>
            Download Resume
          </a>
        </div>
      </header>

      <section className="hero anchor-section" id="home">
        <div className="hero-copy">
          <SectionLabel>Cross-functional engineering portfolio</SectionLabel>
          <h1>Systems Engineering and Process Improvement Professional</h1>
          <h2>FE Exam passed with experience across systems engineering, manufacturing support, technical solution delivery, and operations coordination</h2>
          <p className="lead">
            Elvira brings cross-functional experience translating requirements,
            supporting customers, and aligning technical solutions with
            operational realities across engineering, manufacturing, product
            development, and field-service environments.
          </p>
          <div className="hero-divider" />
          <p className="body-copy">
            Her background spans customer-facing operations, reverse
            engineering, CAD-based solution work, project coordination, and
            stakeholder communication. Combined with foundations in
            engineering, business, and psychology, that experience supports a
            practical systems view that balances people, process, and
            technology.
          </p>
          <div className="cta-row">
            <a className="button button-primary" href="#projects">
              View Highlights
            </a>
            <a className="button button-secondary" href={resumeHref}>
              Resume PDF
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-backdrop" />
          <Image
            alt="Professional headshot of Elvira Nurgalieva"
            className="profile-illustration"
            src={headshotSrc}
            fill
            priority
            sizes="(max-width: 1120px) 100vw, 48vw"
          />
          <div className="hero-badge badge-top">
            <Icon kind="spark" />
            FE Exam Passed
          </div>
          <div className="hero-badge badge-bottom">
            <Icon kind="cube" />
            Manufacturing Support + CAD Workflows
          </div>
        </div>
      </section>

      <section className="cred-strip" aria-label="Highlights">
        <div>Castle Rock, Colorado</div>
        <div>FE Exam Passed</div>
        <div>NCEES-Equivalent Engineering Degree</div>
        <div>Manufacturing Support</div>
        <div>Technical Demos + Training</div>
      </section>

      <section className="strengths-section">
        {strengths.map((item) => (
          <article className="strength-card" key={item.title}>
            <div className="strength-icon">
              <Icon kind={item.icon} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="section-block anchor-section" id="projects">
        <div className="section-heading">
          <div>
            <SectionLabel>Selected impact</SectionLabel>
            <h2>Experience Highlights</h2>
          </div>
          <a className="text-link" href="#experience">
            Full experience
            <Icon kind="arrow" className="inline-icon" />
          </a>
        </div>

        <div className="project-grid">
          {featuredWork.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-art art-${index + 1}`}>
                <span>{project.tag}</span>
              </div>
              <div className="project-content">
                <p className="eyebrow">{project.org}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <a className="text-link" href={project.href}>
                  View details
                  <Icon kind="arrow" className="inline-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-block anchor-section" id="resume">
        <div>
          <SectionLabel>Professional journey</SectionLabel>
          <h2>Experience Across Engineering and Operations</h2>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.year}-${item.title}`}>
                <div className="timeline-marker" />
                <div>
                  <p className="timeline-year">{item.year}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="about-panel anchor-section" id="about">
          <SectionLabel>Professional profile</SectionLabel>
          <h2>Engineering Perspective with Operational Depth</h2>
          <p>
            Elvira works at the intersection of operations, engineering
            technology, and human-centered problem solving. She is especially
            effective in roles that require technical rigor, workflow
            awareness, and the ability to translate between stakeholders,
            systems, and execution.
          </p>
          <p>
            Her experience spans customer advising, technical sales
            engineering, scheduling coordination, technical demonstrations,
            and multidisciplinary communication. That mix shows up in how she
            approaches process gaps, stakeholder needs, and continuous
            improvement opportunities.
          </p>
          <p>
            Passing the FE Exam reinforces that practical experience with a
            strong foundation in engineering fundamentals, analytical
            thinking, and disciplined problem solving.
          </p>
          <a
            className="button button-secondary"
            href="https://www.linkedin.com/in/elvira-n"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </aside>
      </section>

      <section className="section-block experience-section anchor-section" id="experience">
        <SectionLabel>Resume detail</SectionLabel>
        <h2>Professional Experience</h2>
        <div className="experience-grid">
          {experience.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.role}`}>
              <div className="experience-heading">
                <div>
                  <p className="eyebrow">{item.company}</p>
                  <h3>{item.role}</h3>
                </div>
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block dual-grid">
        <article className="info-card">
          <SectionLabel>Education</SectionLabel>
          <h2>Academic Background</h2>
          <div className="credential-spotlight">
            <p className="eyebrow">Professional Credential</p>
            <h3>FE Exam Passed</h3>
            <p>
              Validates engineering fundamentals that support systems
              thinking, process analysis, and sound technical decision-making.
            </p>
          </div>
          <ul className="simple-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <SectionLabel>Capabilities</SectionLabel>
          <h2>Core Engineering Competencies</h2>
          <div className="skill-pills">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
              ))}
          </div>
          <div className="language-block">
            <p>English - Native or bilingual</p>
            <p>Russian - Native or bilingual</p>
            <p>Kazakh - Limited working</p>
          </div>
        </article>
      </section>

      <section className="section-block">
        <SectionLabel>Engineering projects</SectionLabel>
        <h2>Current Studies and Portfolio Work</h2>
        <ul className="simple-list">
          {engineeringProjects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </section>

      <footer className="footer anchor-section" id="contact">
        <div className="footer-col">
          <h3>Let&apos;s connect</h3>
          <a href="mailto:nurgalieva.e@gmail.com">
            <Icon kind="mail" className="footer-icon" />
            nurgalieva.e@gmail.com
          </a>
          <a href="tel:+17197268511">
            <Icon kind="phone" className="footer-icon" />
            719-726-8511
          </a>
          <a
            href="https://www.linkedin.com/in/elvira-n"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon kind="linkedin" className="footer-icon" />
            linkedin.com/in/elvira-n
          </a>
          <p>
            <Icon kind="pin" className="footer-icon" />
            Castle Rock, Colorado, United States
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick links</h3>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h3>Focus areas</h3>
          <div className="skill-pills footer-pills">
            {skills.slice(0, 8).map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
