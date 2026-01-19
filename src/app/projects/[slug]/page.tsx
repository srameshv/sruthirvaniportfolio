import { notFound } from "next/navigation";
import Link from "next/link";

type Project = {
  title: string;
  problem: string;
  constraints: string;
  architecture: string;
  whatIBuilt: string;
  learnings: string;
  links: { label: string; url: string }[];
};

const projects: Record<string, Project> = {
  "project-alpha": {
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
  },
  "project-beta": {
    title: "Project Beta",
    problem:
      "Analytics events were being dropped during traffic spikes. The existing system couldn't handle burst traffic and had no way to replay failed events.",
    constraints:
      "Had to process 1M+ events per day with sub-second latency for real-time dashboards. Couldn't lose events even during deployments. Team of two, so operational simplicity was critical.",
    architecture:
      "Kafka for event ingestion and buffering. Stream processor consumes and transforms events. ClickHouse for analytics storage. Dead letter queue for failed events with automatic retry.",
    whatIBuilt:
      "An event pipeline with backpressure handling, exactly-once processing semantics, and a replay mechanism for reprocessing historical data. Admin UI shows pipeline health and allows manual intervention.",
    learnings:
      "Exactly-once is a spectrum, not a binary. Idempotency keys solved 90% of our duplicate problems. Monitoring the lag between ingestion and processing caught issues before users noticed. ClickHouse is incredibly fast for the right workloads.",
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "Architecture Doc", url: "https://example.com" },
    ],
  },
  "project-gamma": {
    title: "Project Gamma",
    problem:
      "Engineers spent hours each week on repetitive tasks: provisioning environments, updating configs across services, and generating boilerplate for new features.",
    constraints:
      "Had to integrate with existing CI/CD pipelines. Couldn't require engineers to learn new tools—had to feel familiar. Needed to be auditable for compliance reasons.",
    architecture:
      "CLI tool written in Go that wraps common workflows. Plugin system for team-specific extensions. All actions logged to central audit service. Config stored in version-controlled YAML.",
    whatIBuilt:
      "A developer CLI that automates environment setup, config propagation, and code generation. Includes interactive prompts for complex workflows and dry-run mode for safety. Plugins let teams add custom commands.",
    learnings:
      "Good defaults beat flexibility—most users never changed config. Interactive prompts reduced errors more than documentation. The audit log became unexpectedly useful for debugging production issues. Go's single binary distribution made adoption trivial.",
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "Internal Docs", url: "https://example.com" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Link href="/projects" className="text-sm text-gray-400 hover:text-gray-600">
        ← Projects
      </Link>

      <h1 className="text-xl font-medium text-gray-900 mt-8 mb-12">{project.title}</h1>

      <div className="space-y-10">
        <Section title="Problem">{project.problem}</Section>
        <Section title="Constraints">{project.constraints}</Section>
        <Section title="Architecture">{project.architecture}</Section>
        <Section title="What I Built">{project.whatIBuilt}</Section>
        <Section title="Learnings">{project.learnings}</Section>

        <section>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">
            Links
          </h2>
          <div className="flex gap-6">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 underline underline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </section>
  );
}
