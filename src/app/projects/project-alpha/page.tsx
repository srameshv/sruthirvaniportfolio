import { ProjectCaseStudy, ProjectData } from "@/components/ProjectCaseStudy";

const project: ProjectData = {
  title: "Project Alpha",
  problem:
    "Teams needed a way to collaborate on documents in real-time without conflicts or data loss. Existing solutions were either too slow or too complex to self-host.",
  constraints:
    "Had to work with unreliable network connections. Needed to support 100+ concurrent users per document. Budget for infrastructure was limited, so efficiency mattered.",
  architecture:
    "WebSocket server handles real-time sync. Operational transformation (OT) algorithm resolves conflicts. PostgreSQL for persistence with Redis pub/sub for horizontal scaling across server instances.",
  whatIBuilt:
    "A collaborative editor with presence indicators, cursor tracking, and version history. Users can see who's editing what in real-time. Includes offline support with automatic sync when connection returns.",
  learnings:
    "OT is harder than it looks—spent weeks debugging edge cases with concurrent deletions. Learned that presence features (seeing others' cursors) matter more to users than perfect sync. Simple reconnection logic beats complex retry strategies.",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Live Demo", url: "https://example.com" },
  ],
};

export default function Page() {
  return <ProjectCaseStudy project={project} />;
}
