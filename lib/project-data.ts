export type ProjectMaterial = {
  embed?: string;
  href: string;
  label: string;
  type: "link" | "model" | "video";
};

export type ProjectEntry = {
  currentState: string[];
  challenge: string[];
  impact: string[];
  materials?: ProjectMaterial[];
  methods: string[];
  observedIssues: string[];
  org: string;
  problem: string;
  skills: string[];
  slug: string;
  solution: string[];
  subtitle: string;
  summary: string;
  tag: string;
  title: string;
  tools: string[];
};

export const projects: ProjectEntry[] = [
  {
    slug: "retail-material-flow-optimization",
    org: "Operations Study",
    title: "Retail Material Flow Optimization",
    subtitle:
      "Material flow, replenishment visibility, and safer execution in a busy retail environment",
    summary:
      "Concept study focused on improving material flow, replenishment visibility, and decision points in a busy retail environment.",
    tag: "Material Flow + Process Design",
    problem:
      "Inventory accuracy decreases because overhead storage and replenishment activity are difficult to manage efficiently in a busy retail setting.",
    challenge: [
      "Teams must replenish stock while balancing speed, safety, and visibility.",
      "Overhead storage introduces extra motion, waiting time, and awkward retrieval patterns.",
      "Replenishment decisions are harder when inventory condition is not obvious at a glance.",
    ],
    currentState: [
      "Inventory is spread across visible shelves and overhead storage locations.",
      "Replenishment often depends on repeated walking and visual checks.",
      "Stocking decisions can be delayed by lift equipment access and inconsistent handling.",
    ],
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
    tools: [
      "Process mapping",
      "Workflow analysis",
      "Visual management",
      "Root cause analysis",
    ],
  },
  {
    slug: "reverse-engineering-case-study",
    org: "Thor3D",
    title: "Reverse Engineering Case Study",
    subtitle:
      "Mesh-to-CAD workflow for legacy parts, wear analysis, and manufacturing documentation",
    summary:
      "Converted scan data into engineering-ready CAD models and drawings for legacy parts, wear analysis, and downstream manufacturing documentation.",
    tag: "Mesh-to-CAD Workflow",
    problem:
      "Engineering teams often need usable CAD and drawing packages for parts that are worn, discontinued, undocumented, or only available as physical components.",
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
  },
  {
    slug: "manufacturing-process-improvement",
    org: "Manufacturing Systems Study",
    title: "Manufacturing Process Improvement",
    subtitle:
      "Process analysis and systems-level improvement concepts for manufacturing support environments",
    summary:
      "Engineering concept work focused on process gaps, flow constraints, and system-level improvements for manufacturing support environments.",
    tag: "Process Improvement",
    problem:
      "Manufacturing support environments often carry process friction that slows execution without a clear view of the highest-leverage improvement points.",
    challenge: [
      "Support environments can accumulate process friction that is normalized over time.",
      "Teams need clearer visibility into where work slows down and why.",
      "Improvement efforts need structure so they align people, sequence, and documentation.",
    ],
    currentState: [
      "Workflows rely on handoffs, local knowledge, and uneven documentation.",
      "Bottlenecks are visible operationally but not always measured consistently.",
      "Improvement opportunities compete without a clear prioritization framework.",
    ],
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
    tools: [
      "Workflow mapping",
      "Root cause analysis",
      "Process analysis",
      "Continuous improvement framing",
    ],
  },
  {
    slug: "shelf-organization-inventory-visibility-design-study",
    org: "Retail Systems Study",
    title: "Shelf Organization / Inventory Visibility Design Study",
    subtitle:
      "Layout clarity, product visibility, and replenishment cues for faster floor decisions",
    summary:
      "Study centered on layout clarity, inventory visibility, and practical improvements that support faster decisions and smoother execution.",
    tag: "Inventory Visibility",
    problem:
      "When inventory visibility is weak, teams spend extra effort locating items, judging stock condition, and deciding what should be replenished first.",
    challenge: [
      "Teams need to identify stock gaps quickly without repeated rechecking.",
      "Visual clutter and inconsistent shelf logic slow replenishment decisions.",
      "Practical floor execution improves when visibility cues are simple and repeatable.",
    ],
    currentState: [
      "Shelf condition must be judged through repeated visual checking.",
      "Teams often rely on memory to interpret stock condition and urgency.",
      "Replenishment prioritization is slower when triggers are unclear.",
    ],
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
    tools: [
      "Inventory observation",
      "Visual workflow analysis",
      "Process design thinking",
      "Root cause analysis",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
