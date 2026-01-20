import Link from "next/link";

export type ProjectData = {
  title: string;
  problem: string;
  constraints: string;
  architecture: string;
  whatIBuilt: string;
  learnings?: string;
  productionConsiderations?: string;
  links: { label: string; url: string }[];
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-3">
        {title}
      </h2>
      <p className="text-neutral-700 leading-relaxed">{children}</p>
    </section>
  );
}

export function ProjectCaseStudy({ project }: { project: ProjectData }) {
  return (
    <div>
      <Link href="/projects" className="text-sm text-neutral-500 hover:text-neutral-700">
        ← Projects
      </Link>

      <h1 className="text-xl font-medium text-neutral-900 mt-8 mb-12">{project.title}</h1>

      <div className="space-y-10">
        <Section title="Problem">{project.problem}</Section>
        <Section title="Constraints">{project.constraints}</Section>
        <Section title="Architecture">{project.architecture}</Section>
        <Section title="What I Built">{project.whatIBuilt}</Section>
        {project.learnings && <Section title="Learnings">{project.learnings}</Section>}
        {project.productionConsiderations && (
          <Section title="Production Considerations">{project.productionConsiderations}</Section>
        )}

        <section>
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-3">
            Links
          </h2>
          <div className="flex gap-6">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-neutral-900 underline underline-offset-2"
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
