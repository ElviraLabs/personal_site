export type JournalEntry = {
  bullets: string[];
  dateLabel: string;
  intro: string;
  outro: string;
  paragraphs: string[];
  slug: string;
  summary: string;
  title: string;
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "manufacturings-renaissance-starts-with-people",
    title: "Reflection: Manufacturing's Renaissance Starts with People",
    dateLabel: "July 2026",
    intro:
      "Engineering Journal",
    summary:
      "A reflection on advanced manufacturing, continuous learning, and why people remain the most important system in industrial progress.",
    paragraphs: [
      "This week I attended a Colorado Advanced Manufacturing Alliance (CAMA) networking event to learn more about the future of manufacturing and connect with professionals across the industry. One message particularly resonated with me.",
      "One of the event sponsors, speaking from the financial and investment perspective, described the current period as a manufacturing renaissance in the United States. After decades of moving production overseas, first to Japan and later to China during the 1980s and 1990s, manufacturing is steadily returning home. While the reasons include supply chain resilience, technological advancement, and national security, the most important challenge is no longer finding factories. It is finding people.",
      "Advanced manufacturing depends on engineers, technicians, operators, and leaders who are willing to learn continuously, adapt to new technologies, and solve increasingly complex problems. Modern manufacturing is no longer defined by repetitive work. It is driven by automation, robotics, artificial intelligence, data analytics, Lean thinking, and collaboration across disciplines.",
      "As someone rebuilding an engineering career, this message was especially meaningful. It reinforced my decision to invest in Lean Six Sigma, Python for engineering analytics, and continuous professional development. Technical skills matter, but so does the willingness to keep learning throughout a career.",
      "Another takeaway from the event was that manufacturing creates value far beyond the factory floor. Every new production facility supports local suppliers, creates skilled jobs, strengthens communities, and contributes to long-term economic resilience. Improving manufacturing processes ultimately means improving people's lives through better products, more sustainable operations, and stronger local economies.",
    ],
    outro:
      "The evening reinforced something I have come to believe: the future of manufacturing will not be built only by better machines. It will be built by engineers who continuously improve both technology and the systems that enable people to do their best work.",
    bullets: [
      "Active participation in professional organizations and manufacturing communities",
      "A broader understanding of manufacturing trends beyond purely technical details",
      "A systems view that connects engineering with business, economics, and community impact",
      "A growth mindset supported by ongoing learning in Lean Six Sigma, Python, and continuous improvement",
      "A clear and authentic reason for pursuing manufacturing engineering opportunities",
    ],
  },
];

export function getJournalEntryBySlug(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}
