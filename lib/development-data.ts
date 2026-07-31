export type LearningFocus = {
  details: string[];
  progress: number;
  title: string;
};

export type MiniProject = {
  outcome: string;
  skills: string[];
  title: string;
};

export type SkillStatus = {
  name: string;
  status: "Completed" | "In Progress" | "Planned";
};

export const developmentIntro =
  "I believe engineering excellence comes from continuous learning, curiosity, and applying new knowledge to real-world problems.";

export const engineeringPhilosophy =
  "I believe engineering is ultimately about improving systems that improve people's lives. The best solutions emerge through curiosity, collaboration, respect for the people closest to the work, and a commitment to continuous learning. Every challenge is an opportunity to understand a system more deeply and leave it better than it was before.";

export const learningFocuses: LearningFocus[] = [
  {
    title: "Lean Six Sigma Green Belt",
    progress: 35,
    details: [
      "Expected: 2026",
      "DMAIC",
      "Process capability",
      "Root cause analysis",
      "SPC",
      "Kaizen",
      "Value stream mapping",
    ],
  },
  {
    title: "Python for Engineering Analytics",
    progress: 45,
    details: [
      "Pandas",
      "NumPy",
      "Data visualization",
      "Manufacturing analytics",
      "Automation",
      "AI-assisted engineering analysis",
    ],
  },
  {
    title: "Manufacturing Engineering",
    progress: 40,
    details: [
      "GD&T",
      "Design for manufacturability",
      "Manufacturing readiness",
      "Statistical process control",
      "Process validation",
    ],
  },
];

export const certifications = {
  completed: [
    "FE Passed",
    "Colorado Engineer Intern (EI)",
  ],
  inProgress: [
    "Lean Six Sigma Green Belt",
    "Python for Engineering Analytics",
    "AI for Manufacturing Analytics",
  ],
};

export const learningRoadmap = [
  { label: "FE Exam", status: "completed" },
  { label: "Colorado EI", status: "completed" },
  { label: "Lean Six Sigma Green Belt", status: "current" },
  { label: "Python", status: "current" },
  { label: "Tableau", status: "planned" },
  { label: "ASQ CSSGB", status: "planned" },
  { label: "Minitab", status: "planned" },
  { label: "PE License", status: "planned" },
  { label: "Operational Excellence", status: "planned" },
] as const;

export const miniProjects: MiniProject[] = [
  {
    title: "Manufacturing Defect Pareto Analysis",
    skills: ["Python", "Pandas", "Matplotlib"],
    outcome:
      "Automatically identify the largest contributors to manufacturing defects and highlight the highest-impact categories for corrective action.",
  },
  {
    title: "SPC Dashboard",
    skills: ["Python", "Control charts", "Data visualization"],
    outcome:
      "Track process variation with a simple visual dashboard that makes out-of-control conditions easier to detect and discuss.",
  },
  {
    title: "Cycle Time Analysis",
    skills: ["Python", "Process analysis", "Workflow data"],
    outcome:
      "Compare cycle-time patterns across steps to surface bottlenecks, waiting points, and opportunities for process balancing.",
  },
  {
    title: "Inventory Optimization",
    skills: ["Python", "Inventory analytics", "Continuous improvement"],
    outcome:
      "Explore reorder behavior and stock visibility patterns to support better replenishment timing and fewer avoidable shortages.",
  },
];

export const currentReading = [
  "The Goal — Eliyahu Goldratt",
  "Out of the Crisis — W. Edwards Deming",
  "Lean Thinking — James P. Womack and Daniel T. Jones",
  "The Toyota Way — Jeffrey Liker",
] as const;

export const skillStatuses: SkillStatus[] = [
  { name: "Lean Six Sigma", status: "In Progress" },
  { name: "Python", status: "In Progress" },
  { name: "AI Engineering Analytics", status: "In Progress" },
  { name: "Manufacturing Analytics", status: "In Progress" },
  { name: "Tableau", status: "Planned" },
  { name: "Minitab", status: "Planned" },
];

export const journalTopicIdeas = [
  "What I learned about Kaizen this week",
  "Using Python to analyze manufacturing defects",
  "Lessons from studying AS9100",
  "How Deming changed manufacturing forever",
  "Applying PDCA to inventory systems",
  "Why operators often know the real bottleneck first",
] as const;
