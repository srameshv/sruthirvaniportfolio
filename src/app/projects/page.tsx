import Link from "next/link";

const projects = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    description: "Real-time collaboration platform with WebSocket sync",
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    description: "High-throughput data pipeline for event processing",
  },
  {
    slug: "project-gamma",
    title: "Project Gamma",
    description: "Internal automation tool for engineering workflows",
  },
  {
    slug: "cli-notes",
    title: "CLI Notes",
    description: "Terminal-based personal knowledge management system",
  },
  {
    slug: "sync-engine",
    title: "Sync Engine",
    description: "Local-first CRDT-based synchronization library",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-xl font-medium text-gray-900 mb-10">Projects</h1>

      <ul className="space-y-5">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <span className="font-medium text-gray-900 group-hover:text-gray-600">
                {project.title}
              </span>
              <span className="text-gray-500 leading-relaxed block mt-0.5">
                {project.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
