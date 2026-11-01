export type ProjectMaterial = {
  embed?: string;
  href: string;
  label: string;
  type: "image" | "link" | "model" | "video";
};

export type ProjectEntry = {
  alternatives: string[];
  analysis: string[];
  background: string[];
  currentState: string[];
  challenge: string[];
  futureImprovements: string[];
  impact: string[];
  impactLabel?: string;
  materials?: ProjectMaterial[];
  methods: string[];
  observedIssues: string[];
  org: string;
  problem: string;
  skills: string[];
  slug: string;
  solution: string[];
  solutionLabel?: string;
  subtitle: string;
  summary: string;
  tag: string;
  title: string;
  tools: string[];
};

export const projects: ProjectEntry[] = [
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
    background: [
      "Physical legacy parts often contain the only available source geometry when original engineering files are missing or outdated.",
      "Engineering teams still need reliable models for inspection, reconstruction, wear analysis, and manufacturing documentation.",
      "The case focused on building a clearer bridge from raw scan output to validated engineering assets.",
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
    analysis: [
      "The core engineering challenge was not scanning alone, but converting mesh data into usable, validated geometry tied to a specific technical purpose.",
      "Analysis centered on identifying reference features, cleaning noisy areas, and deciding which geometry should be reconstructed parametrically versus preserved from scan data.",
      "The workflow also had to reduce ambiguity for downstream users who needed engineering-ready documentation rather than raw digital artifacts.",
    ],
    methods: [
      "Requirements analysis with customer and application context",
      "3D scanning and mesh capture",
      "Mesh cleanup and feature extraction",
      "CAD reconstruction in Geomagic Design X",
      "2D drawing generation in SolidWorks and Fusion 360",
      "Technical validation against intended use",
    ],
    alternatives: [
      "Use raw scan meshes without CAD reconstruction",
      "Model the part from manual measurements alone",
      "Create visual references only without full drawing documentation",
    ],
    solution: [
      "Built a structured mesh-to-CAD workflow from scan capture through validated engineering models",
      "Created accurate CAD geometry and 2D drawings for review, manufacturing documentation, and technical discussion",
      "Adapted the workflow across different use cases including discontinued auto parts, wear analysis, and quality control",
    ],
    impactLabel: "Results",
    solutionLabel: "Solution",
    impact: [
      "Accelerated CAD reconstruction from physical parts",
      "Improved technical clarity for customer decisions and engineering review",
      "Created cleaner documentation for manufacturing and inspection use",
      "Demonstrated practical value of 3D scanning in engineering workflows",
    ],
    futureImprovements: [
      "Standardize validation checkpoints by use case so reconstruction tolerances match the downstream need.",
      "Build reusable templates for drawing creation and feature classification.",
      "Add comparison metrics between mesh and final CAD geometry for faster quality review.",
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
    slug: "aircraft-fuselage-frame-process-redesign",
    org: "Bauman Moscow State Technical University",
    title: "Aircraft Fuselage Frame Process Redesign",
    subtitle:
      "Final engineering project: replacing pressure die casting with CNC milling for tighter dimensional control",
    summary:
      "Redesigned how fuselage frames for Tupolev aircraft were made, replacing pressure die casting with CNC milling and checking whether the change made economic sense at production volume.",
    tag: "Process Selection + Cost",
    problem:
      "Fuselage frames for Tupolev aircraft were produced by pressure die casting, which made the finished dimensions harder to control.",
    challenge: [
      "Improve dimensional control of a structural aircraft part without losing sight of manufacturing cost.",
    ],
    background: [
      "This was my final engineering project at Bauman Moscow State Technical University.",
      "Fuselage frames are structural aircraft parts, so the accuracy of their finished dimensions matters.",
      "The existing manufacturing process used pressure die casting.",
    ],
    currentState: [
      "Frames were produced by pressure die casting.",
    ],
    observedIssues: [
      "Finished dimensions were harder to control with the casting process.",
    ],
    analysis: [
      "Compared the existing pressure die-casting process with CNC milling in terms of dimensional control.",
      "Evaluated whether switching to CNC milling made economic sense for the required production volume.",
      "Connected the part's design, its manufacturing method, and its cost in a single process decision.",
    ],
    methods: [
      "Manufacturing process comparison",
      "Process redesign",
      "Production-volume cost analysis",
    ],
    alternatives: [
      "Keep the existing pressure die-casting process",
    ],
    solutionLabel: "Solution",
    solution: [
      "Replace pressure die casting with CNC milling to make the finished dimensions easier to control",
    ],
    impactLabel: "Outcome",
    impact: [
      "A process recommendation that tied dimensional control to manufacturing cost at the required production volume",
    ],
    futureImprovements: [
      "Add a process-capability comparison (Cp/Cpk) to quantify dimensional variation between the two processes.",
      "Add a PFMEA for the new machining process.",
    ],
    skills: [
      "Manufacturing process selection",
      "Cost analysis",
      "Design for manufacturing",
      "Process redesign",
    ],
    tools: [
      "CNC milling process planning",
      "Pressure die casting review",
      "Production cost comparison",
    ],
  },
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
    background: [
      "Retail replenishment work must balance customer-facing service with safe, efficient material handling.",
      "Overhead storage and fragmented stock locations create a system where visibility and motion directly affect execution quality.",
      "The study focused on how layout and replenishment logic could reduce wasted effort without adding unnecessary complexity.",
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
    analysis: [
      "Current-state review showed that inventory visibility and replenishment timing were tightly linked to walking distance and equipment access.",
      "The most avoidable delays came from repeated checking, inconsistent stock cues, and a lack of simple triggers for replenishment decisions.",
      "Root cause analysis pointed to shelf configuration and visual management as higher-leverage improvement areas than simply increasing effort.",
    ],
    methods: [
      "Process mapping",
      "Root cause analysis",
      "Material flow analysis",
      "Ergonomic evaluation",
    ],
    alternatives: [
      "Increase manual shelf checks without changing layout",
      "Rely on ad hoc replenishment based on individual judgment",
      "Expand visible overstock areas instead of improving flow logic",
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
    futureImprovements: [
      "Pilot the concept in one aisle and measure replenishment time before broader rollout.",
      "Add basic KPI tracking for walking distance, stockout frequency, and product damage.",
      "Refine organizer dimensions based on product family and replenishment frequency.",
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
    slug: "shelf-organization-inventory-visibility-design-study",
    org: "Retail Systems Study",
    title: "Shelf Organization / Inventory Visibility Design Study",
    subtitle:
      "Visual management and replenishment-priority design study for faster inventory decisions",
    summary:
      "Engineering study focused on shelf logic, inventory visibility, and visual control methods that support faster replenishment decisions, less searching, and more consistent floor execution.",
    tag: "Inventory Visibility",
    problem:
      "When shelf organization and inventory visibility are inconsistent, teams spend excess time identifying stock gaps, verifying product condition, and deciding what should be replenished first.",
    challenge: [
      "Floor teams need to identify stock gaps quickly without repeated checking or relying on memory.",
      "Visual clutter and inconsistent shelf logic slow replenishment decisions and create avoidable motion.",
      "The layout must support faster execution while staying practical for daily use in a live retail setting.",
    ],
    background: [
      "Shelf organization shapes how quickly teams can interpret inventory condition and decide what action to take next.",
      "When the system depends on memory, repeated checking, or inconsistent visual cues, execution becomes slower and less reliable.",
      "This study treated shelf layout as an engineering problem in visibility, flow, and decision support.",
    ],
    currentState: [
      "Shelf condition is often interpreted through repeated visual checks instead of clear visual signals.",
      "Teams rely too heavily on memory and judgment to assess stock condition and urgency.",
      "Replenishment prioritization slows down when product status and triggers are not immediately visible.",
    ],
    observedIssues: [
      "Repeated visual checking before action",
      "Dependence on memory for stock condition and urgency",
      "Slow replenishment prioritization",
      "Inconsistent visual cues across storage locations",
    ],
    analysis: [
      "The main source of inefficiency was not physical stocking alone, but the cognitive load required to interpret shelf condition accurately.",
      "A better visual system could reduce ambiguity, shorten decision time, and support more consistent replenishment behavior across different users.",
      "The concept emphasized visibility at the point of use rather than downstream correction after stock issues appeared.",
    ],
    methods: [
      "Visual workflow analysis",
      "Inventory observation",
      "Current-state process review",
      "Process design thinking",
      "Root cause analysis",
    ],
    alternatives: [
      "Keep existing shelf logic and rely on employee familiarity",
      "Add more verbal coordination without improving visual structure",
      "Increase stocking frequency without clarifying replenishment signals",
    ],
    solution: [
      "Standardize shelf organization to make stock condition easier to interpret",
      "Introduce clearer visual cues for product visibility and replenishment status",
      "Define simpler replenishment triggers that reduce ambiguity in daily execution",
    ],
    impact: [
      "Faster identification of stock gaps and replenishment priorities",
      "Improved inventory visibility at the point of use",
      "More efficient floor execution with less searching and rechecking",
      "Stronger consistency in daily replenishment decisions",
    ],
    futureImprovements: [
      "Test the visual system with one product family and measure search time before and after.",
      "Add photo-based standards for shelf condition and replenishment triggers.",
      "Extend the concept into a broader inventory visibility playbook for similar retail zones.",
    ],
    skills: [
      "Visual management",
      "Workflow design",
      "Inventory visibility analysis",
      "Operational analysis",
      "Current-state assessment",
    ],
    tools: [
      "Inventory observation",
      "Visual workflow analysis",
      "Current-state mapping",
      "Process design thinking",
      "Root cause analysis",
    ],
    materials: [
      {
        label: "Lean Six Sigma & Kaizen shelving redesign board",
        href: "/project-materials/shelf-kaizen-redesign.png",
        type: "image",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
