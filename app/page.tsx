import Image from "next/image";
import Script from "next/script";
import { Fragment } from "react";

const sitePath = "";
const siteUrl = "https://elvira-n.com";
const resumeHref = `${sitePath}/resume/Elvira-Nurgalieva-Profile.pdf`;
const headshotSrc = `${sitePath}/elvira-headshot.png`;
const contactFormAction = "https://formsubmit.co/nurgalieva.e@gmail.com";
const coloradoEiNumber = "EI.0081521";

const outcomeAreas = [
  {
    title: "Material Flow Optimization",
    points: [
      "Inventory visibility",
      "Workflow clarity",
    ],
    icon: "gear",
  },
  {
    title: "Manufacturing Process Improvement",
    points: [
      "Root cause analysis",
      "Standardized process design",
    ],
    icon: "nodes",
  },
  {
    title: "Reverse Engineering",
    points: [
      "3D scanning inputs",
      "CAD reconstruction",
    ],
    icon: "cube",
  },
  {
    title: "Digital Manufacturing",
    points: [
      "Technical workflows",
      "Manufacturing support",
    ],
    icon: "gear",
  },
  {
    title: "Continuous Improvement",
    points: [
      "Structured problem solving",
      "Systems thinking",
    ],
    icon: "nodes",
  },
  {
    title: "CAD & 3D Scanning",
    points: [
      "SolidWorks, Fusion 360",
      "Reverse engineering tools",
    ],
    icon: "cube",
  },
] as const;

const featuredWork = [
  {
    title: "Retail Material Flow Optimization",
    org: "Operations Study",
    summary:
      "Concept study focused on improving material flow, replenishment visibility, and decision points in a busy retail environment.",
    href: "#projects",
    tag: "Material Flow + Process Design",
  },
  {
    title: "Reverse Engineering Case Study",
    org: "Thor3D",
    summary:
      "Converted scan data into engineering-ready CAD models and drawings for legacy parts, wear analysis, and downstream manufacturing documentation.",
    href: "#projects",
    tag: "Mesh-to-CAD Workflow",
  },
  {
    title: "Manufacturing Process Improvement",
    org: "Manufacturing Systems Study",
    summary:
      "Engineering concept work focused on process gaps, flow constraints, and system-level improvements for manufacturing support environments.",
    href: "#projects",
    tag: "Process Improvement",
  },
  {
    title: "Shelf Organization / Inventory Visibility Design Study",
    org: "Retail Systems Study",
    summary:
      "Study centered on layout clarity, inventory visibility, and practical improvements that support faster decisions and smoother execution.",
    href: "#projects",
    tag: "Inventory Visibility",
  },
] as const;

const projectDetails = [
  {
    title: "Retail Material Flow Optimization",
    problem:
      "Inventory accuracy decreases because overhead storage and replenishment activity are difficult to manage efficiently in a busy retail setting.",
    observedIssues: [
      "Excess walking between stocking points",
      "Waiting time for lift equipment access",
      "Overstocking in visible locations",
      "Safety hazards from awkward retrieval patterns",
      "Product damage from inconsistent handling",
    ],
    methods: [
      "Process mapping",
      "Root cause analysis",
      "Material flow analysis",
      "Ergonomic evaluation",
    ],
    solution: [
      "Fixed modular shelf organizers",
      "Visual inventory indicators",
      "Standardized replenishment process",
    ],
    impact: [
      "Reduced walking and wasted motion",
      "Improved inventory accuracy",
      "Reduced product damage",
      "Improved safety and execution consistency",
    ],
    skills: [
      "Material flow analysis",
      "Process optimization",
      "Systems thinking",
      "Operational problem solving",
    ],
  },
  {
    title: "Reverse Engineering Case Study",
    problem:
      "Engineering teams often need usable CAD and drawing packages for parts that are worn, discontinued, undocumented, or only available as physical components.",
    observedIssues: [
      "Incomplete part data and missing engineering drawings",
      "Legacy geometry without current CAD models",
      "Risk of inaccuracy between raw mesh output and final CAD reconstruction",
      "Need to support wear analysis, quality checks, and customer review",
    ],
    methods: [
      "Requirements analysis with customer and application context",
      "3D scanning and mesh capture",
      "Mesh cleanup and feature extraction",
      "CAD reconstruction in Geomagic Design X",
      "2D drawing generation in SolidWorks and Fusion 360",
      "Technical validation against intended use",
    ],
    solution: [
      "Built a structured mesh-to-CAD workflow from scan capture through validated engineering models",
      "Created accurate CAD geometry and 2D drawings for review, manufacturing documentation, and technical discussion",
      "Adapted the workflow across different use cases including discontinued auto parts, wear analysis, and quality control",
    ],
    impact: [
      "Accelerated CAD reconstruction from physical parts",
      "Improved technical clarity for customer decisions and engineering review",
      "Created cleaner documentation for manufacturing and inspection use",
      "Demonstrated practical value of 3D scanning in engineering workflows",
    ],
    skills: [
      "Reverse engineering",
      "CAD modeling",
      "Technical documentation",
      "Requirements analysis",
      "3D scanning workflow support",
    ],
  },
  {
    title: "Manufacturing Process Improvement",
    problem:
      "Manufacturing support environments often carry process friction that slows execution without a clear view of the highest-leverage improvement points.",
    observedIssues: [
      "Handoffs that depend on local knowledge",
      "Documentation gaps",
      "Workflow bottlenecks that are not consistently measured",
    ],
    methods: [
      "Process analysis",
      "Workflow mapping",
      "Root cause analysis",
      "Continuous improvement framing",
    ],
    solution: [
      "Define clearer handoff points",
      "Standardize work cues",
      "Improve alignment between sequencing, people, and process",
    ],
    impact: [
      "Reduced avoidable friction",
      "Stronger consistency",
      "Clearer path to continuous improvement",
    ],
    skills: [
      "Manufacturing engineering thinking",
      "Process improvement",
      "Systems analysis",
      "Stakeholder alignment",
    ],
  },
  {
    title: "Shelf Organization / Inventory Visibility Design Study",
    problem:
      "When inventory visibility is weak, teams spend extra effort locating items, judging stock condition, and deciding what should be replenished first.",
    observedIssues: [
      "Repeated visual checking",
      "Dependence on memory for stock condition",
      "Slow replenishment prioritization",
    ],
    methods: [
      "Visual workflow analysis",
      "Inventory observation",
      "Process design thinking",
      "Root cause analysis",
    ],
    solution: [
      "Clearer shelf organization",
      "Improved product visibility cues",
      "Simpler replenishment triggers",
    ],
    impact: [
      "Faster identification of stock gaps",
      "Improved inventory visibility",
      "More efficient floor execution",
    ],
    skills: [
      "Visual management",
      "Workflow design",
      "Inventory visibility analysis",
      "Operational analysis",
    ],
  },
] as const;

const reverseEngineeringCaseStudy = {
  title: "Reverse Engineering Case Study",
  subtitle: "Mesh-to-CAD workflow for legacy parts, wear analysis, and manufacturing documentation",
  overview:
    "Adapted from Elvira's earlier project portfolio, this case study shows how she used 3D scanning, mesh processing, and CAD reconstruction to turn physical parts into usable engineering assets for review, analysis, and downstream documentation.",
  challenge: [
    "Customers needed engineering-ready models when original drawings or CAD files were unavailable.",
    "Some parts were legacy or discontinued components, while others required wear analysis or quality verification.",
    "Raw scan meshes alone were not enough for manufacturing documentation or design decisions.",
  ],
  workflow: [
    "Capture part geometry with 3D scanning based on the application and required level of detail.",
    "Review and clean scan data, then extract usable reference geometry from the mesh.",
    "Reconstruct CAD surfaces and features in Geomagic Design X.",
    "Generate 2D drawings and supporting models in SolidWorks and Fusion 360 for review and documentation.",
  ],
  outputs: [
    "CAD models for mechanical components",
    "2D drawings for technical communication",
    "Support material for wear analysis and quality control",
    "Demonstrations that helped customers understand workflow fit and technical value",
  ],
  tools: [
    "3D scanning",
    "Geomagic Design X",
    "SolidWorks",
    "Fusion 360",
    "Mesh review and cleanup",
  ],
  materials: [
    {
      label: "Watch workflow video",
      href: "https://youtu.be/SyI5jJKvhpM",
    },
    {
      label: "View 3D mesh model",
      href: "https://sketchfab.com/3d-models/mesh-stl-7c3873106dd44cb296540c8d590d8412",
    },
    {
      label: "View CAD reconstruction model",
      href: "https://sketchfab.com/3d-models/cad-452300c4751446b1b912ab1d9de24f3d",
    },
    {
      label: "Open original project page",
      href: "https://elvira-n.squarespace.com/projects/mesh-to-cad",
    },
  ],
} as const;

const skills = [
  "Manufacturing Engineer",
  "Industrial Engineer",
  "Systems Engineer",
  "Process Engineer",
  "Manufacturing Process Improvement",
  "Continuous Improvement",
  "Material Flow",
  "Lean Manufacturing",
  "Process Optimization",
  "Root Cause Analysis",
  "Technical Documentation",
  "CAD Engineer",
  "Reverse Engineering",
  "3D Scanning",
] as const;

const skillGroups = [
  {
    title: "Engineering",
    items: [
      "Systems Engineering",
      "Manufacturing Engineering",
      "Industrial Engineering",
      "Process Improvement",
      "Continuous Improvement",
      "Lean Manufacturing",
      "Root Cause Analysis",
    ],
  },
  {
    title: "Design & Analysis",
    items: [
      "CAD",
      "SOLIDWORKS",
      "Fusion 360",
      "Rhino",
      "Blender",
      "3D Scanning",
      "Reverse Engineering",
      "GD&T",
      "Technical Documentation",
    ],
  },
  {
    title: "Software & Tools",
    items: [
      "Excel",
      "Git",
      "GitHub",
      "Workflow Mapping",
      "Material Flow Analysis",
      "Process Mapping",
    ],
  },
  {
    title: "Industries",
    items: [
      "Manufacturing",
      "Retail Operations",
      "Product Development Support",
      "Field Operations Coordination",
    ],
  },
] as const;

const experience = [
  {
    company: "The Home Depot",
    role: "Sales Associate",
    period: "April 2024 - Present",
    location: "Castle Rock, Colorado",
    bullets: [
      "Analyzed customer requirements in a high-volume retail environment to recommend practical products, improve decision speed, and support smoother project execution.",
      "Translated customer questions into informed technical recommendations based on function, cost, availability, and installation context.",
      "Supported operational efficiency through inventory visibility, merchandising discipline, and dependable replenishment execution.",
    ],
  },
  {
    company: "Thor3D",
    role: "Sales Engineer",
    period: "August 2018 - February 2022",
    location: "Moscow",
    bullets: [
      "Conducted structured requirements analysis to understand customer goals, technical constraints, and workflow challenges across engineering and manufacturing use cases.",
      "Reverse engineered complex mechanical components using 3D scanning and CAD workflows to accelerate model reconstruction and manufacturing documentation.",
      "Developed CAD models and delivered technical demonstrations using SolidWorks, Fusion 360, Geomagic Design X, Rhinoceros, and Blender to support solution evaluation and customer adoption.",
    ],
  },
  {
    company: "MultiMedia Communications Ltd",
    role: "Dispatch Coordinator",
    period: "December 2017 - July 2018",
    location: "Christchurch",
    bullets: [
      "Coordinated schedules and crew deployment for residential fiber-laying projects across active field operations.",
      "Tracked materials, supplier timing, and project progress to keep field work moving and reduce avoidable delays.",
      "Maintained communication across field technicians, subcontractors, and project managers to support smoother execution and clearer reporting.",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elvira Nurgalieva",
    jobTitle: "Systems Engineer",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/elvira-n",
      "https://github.com/ElviraLabs",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent Engineering Portfolio",
    },
    knowsAbout: [
      "Manufacturing Engineering",
      "Industrial Engineering",
      "Systems Engineering",
      "Process Improvement",
      "Material Flow",
      "Reverse Engineering",
      "CAD",
      "Technical Documentation",
      "Continuous Improvement",
    ],
    subjectOf: [
      siteUrl,
      `${siteUrl}/resume/Elvira-Nurgalieva-Profile.pdf`,
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Engineer Intern",
        name: `Colorado EI License ${coloradoEiNumber}`,
      },
    ],
  };

  return (
    <main className="portfolio-shell">
      <Script
        id="person-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="topbar">
        <div className="brand">
          <div className="brand-name">Elvira Nurgalieva</div>
          <div className="brand-role">Systems Engineering | Operations | Digital Engineering</div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
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
          <h1>Elvira Nurgalieva</h1>
          <h2>Systems Engineer | FE Passed | Colorado EI | Manufacturing &amp; Process Improvement</h2>
          <p className="lead">
            Engineering professional with a Systems Engineering background,
            CAD/reverse engineering experience, and a growing portfolio in
            material flow, process improvement, and manufacturing systems.
          </p>
          <div className="hero-divider" />
          <p className="body-copy">
            Her background spans engineering support, operations execution,
            customer-facing technical work, and CAD-based solution development,
            giving her a practical systems perspective grounded in both people
            and process.
          </p>
          <div className="cta-row">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href={resumeHref}>
              Download Resume
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
            Colorado EI {coloradoEiNumber}
          </div>
          <div className="hero-badge badge-bottom">
            <Icon kind="cube" />
            FE Passed + CAD Workflows
          </div>
        </div>
      </section>

      <section className="cred-strip" aria-label="Highlights">
        <div>Castle Rock, Colorado</div>
        <div>Colorado EI {coloradoEiNumber}</div>
        <div>FE Exam Passed</div>
        <div>NCEES-Equivalent Engineering Degree</div>
        <div>Reverse Engineering</div>
      </section>

      <section className="strengths-section">
        {outcomeAreas.map((item) => (
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
            <SectionLabel>Selected projects</SectionLabel>
            <h2>Engineering Projects</h2>
          </div>
          <a className="text-link" href="#project-details">
            Project details
            <Icon kind="arrow" className="inline-icon" />
          </a>
        </div>

        <div className="project-grid">
          {featuredWork.map((project, index) => (
            <Fragment key={project.title}>
              <article className="project-card">
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

              {project.title === "Reverse Engineering Case Study" ? (
                <article className="case-study-card">
                  <div>
                    <p className="eyebrow">Featured case study</p>
                    <h3>{reverseEngineeringCaseStudy.title}</h3>
                    <p className="case-study-subtitle">{reverseEngineeringCaseStudy.subtitle}</p>
                    <p>{reverseEngineeringCaseStudy.overview}</p>
                  </div>
                  <div className="case-study-grid">
                    <div>
                      <h4>Challenge</h4>
                      <ul>
                        {reverseEngineeringCaseStudy.challenge.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Workflow</h4>
                      <ul>
                        {reverseEngineeringCaseStudy.workflow.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Outputs</h4>
                      <ul>
                        {reverseEngineeringCaseStudy.outputs.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Tools</h4>
                      <div className="skill-pills compact-pills">
                        {reverseEngineeringCaseStudy.tools.map((item) => (
                          <span className="skill-pill" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="case-study-materials">
                      <h4>Media and models</h4>
                      <div className="case-study-links">
                        {reverseEngineeringCaseStudy.materials.map((item) => (
                          <a
                            className="case-study-link"
                            href={item.href}
                            key={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.label}
                            <Icon kind="arrow" className="inline-icon" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="section-block anchor-section" id="project-details">
        <SectionLabel>Project breakdown</SectionLabel>
        <h2>Engineering Problem-Solving Format</h2>
        <div className="experience-grid">
          {projectDetails.map((project) => (
            <article className="experience-card" key={project.title}>
              <h3>{project.title}</h3>
              <ul>
                <li><strong>Problem:</strong> {project.problem}</li>
                <li><strong>Observed issues:</strong> {project.observedIssues.join(", ")}</li>
                <li><strong>Engineering methods:</strong> {project.methods.join(", ")}</li>
                <li><strong>Proposed solution:</strong> {project.solution.join(", ")}</li>
                <li><strong>Expected benefits:</strong> {project.impact.join(", ")}</li>
                <li><strong>Engineering skills demonstrated:</strong> {project.skills.join(", ")}</li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-block anchor-section" id="resume">
        <div>
          <SectionLabel>Resume overview</SectionLabel>
          <h2>Engineering Credentials and Experience</h2>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-marker" />
              <div>
                <p className="timeline-year">Credential</p>
                <h3>FE Passed</h3>
                <p>Fundamentals of Engineering passed in Industrial and Systems Engineering.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker" />
              <div>
                <p className="timeline-year">Licensure</p>
                <h3>Colorado Engineer Intern License {coloradoEiNumber}</h3>
                <p>
                  Active Colorado EI credential. Public verification may require
                  manual confirmation because the online lookup does not always
                  support the EI prefix correctly.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker" />
              <div>
                <p className="timeline-year">Industries</p>
                <h3>Manufacturing, Retail, Product Support</h3>
                <p>Experience across manufacturing support, retail operations, product development support, and field coordination.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker" />
              <div>
                <p className="timeline-year">Software</p>
                <h3>CAD and Engineering Tools</h3>
                <p>SolidWorks, Fusion 360, Rhino, Blender, Excel, Git, and GitHub.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-marker" />
              <div>
                <p className="timeline-year">Resume</p>
                <h3>Download Current Resume</h3>
                <p>
                  <a className="text-link" href={resumeHref}>
                    Download Resume
                    <Icon kind="arrow" className="inline-icon" />
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>

        <aside className="about-panel anchor-section" id="about">
          <SectionLabel>Engineering philosophy</SectionLabel>
          <h2>How Elvira Approaches Engineering Work</h2>
          <p>
            Elvira approaches engineering through systems thinking, curiosity,
            structured problem solving, and continuous improvement.
          </p>
          <p>
            Her work style centers on understanding the current state, finding
            the real root cause, and designing improvements that make process,
            flow, and execution more reliable.
          </p>
          <p>
            Career objective: FE passed and returning to engineering, seeking
            Manufacturing, Industrial, and Systems Engineering opportunities
            where she can contribute to process optimization, material flow,
            technical documentation, and continuous improvement.
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

      <section className="section-block dual-grid anchor-section" id="skills">
        <article className="info-card">
          <SectionLabel>Education</SectionLabel>
          <h2>Academic Background</h2>
          <div className="credential-spotlight">
            <p className="eyebrow">Professional Credential</p>
            <h3>FE Passed + Colorado EI Active</h3>
            <p>
              Fundamentals of Engineering passed, with active Colorado Engineer
              Intern license {coloradoEiNumber}. Supports a professional
              profile grounded in engineering fundamentals, process analysis,
              and technical problem solving.
            </p>
          </div>
          <ul className="simple-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <SectionLabel>Skills</SectionLabel>
          <h2>Engineering and Software Skills</h2>
          <div className="timeline">
            {skillGroups.map((group) => (
              <article className="timeline-item" key={group.title}>
                <div className="timeline-marker" />
                <div>
                  <p className="timeline-year">{group.title}</p>
                  <div className="skill-pills">
                    {group.items.map((item) => (
                      <span className="skill-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </article>
      </section>

      <footer className="footer anchor-section" id="contact">
        <div className="footer-col">
          <h3>Contact</h3>
          <p className="footer-copy">
            Reach out through the form below for engineering opportunities,
            collaboration, or project conversations.
          </p>
          <form
            action={contactFormAction}
            className="contact-form"
            method="POST"
          >
            <input name="_captcha" type="hidden" value="false" />
            <input name="_next" type="hidden" value={`${siteUrl}/#contact`} />
            <input name="_subject" type="hidden" value="New portfolio inquiry" />
            <label className="contact-field">
              <span>Name</span>
              <input name="name" placeholder="Your name" required type="text" />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Tell me a little about the role or project."
                required
                rows={5}
              />
            </label>
            <button className="button button-primary contact-submit" type="submit">
              Send Message
            </button>
          </form>
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
          <p>Open to relocation, travel, and international opportunities</p>
        </div>

        <div className="footer-col">
          <h3>Quick links</h3>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
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
