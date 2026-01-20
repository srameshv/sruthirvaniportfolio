/**
 * Project Case Study Template
 *
 * To add a new project:
 * 1. Copy this folder to /src/app/projects/your-project-slug/
 * 2. Rename the folder to your project's URL slug (e.g., "my-new-project")
 * 3. Fill in the project data below
 * 4. The page will be available at /projects/your-project-slug
 */

import { ProjectCaseStudy, ProjectData } from "@/components/ProjectCaseStudy";

const project: ProjectData = {
  title: "Project Title",
  problem: "Describe the problem this project solves. What pain point existed? Who was affected?",
  constraints:
    "What limitations did you work within? Technical constraints, budget, timeline, team size, integration requirements.",
  architecture:
    "How is the system structured? Key components, data flow, technology choices and why.",
  whatIBuilt:
    "What did you actually build? Core features, how they work, what makes them useful.",
  // Include ONE of these (delete the other):
  learnings: "What did you learn? Mistakes made, surprises, what you'd do differently.",
  // productionConsiderations: "Production concerns: reliability, security, cost, monitoring, failure modes.",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Live Demo", url: "https://example.com" },
  ],
};

export default function Page() {
  return <ProjectCaseStudy project={project} />;
}
