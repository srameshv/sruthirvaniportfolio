import { ProjectCaseStudy, ProjectData } from "@/components/ProjectCaseStudy";

const project: ProjectData = {
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
};

export default function Page() {
  return <ProjectCaseStudy project={project} />;
}
