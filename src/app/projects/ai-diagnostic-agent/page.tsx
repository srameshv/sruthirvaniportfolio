import { ProjectCaseStudy, ProjectData } from "@/components/ProjectCaseStudy";

const project: ProjectData = {
  title: "AI Diagnostic Agent",
  problem:
    "Engineers spent TODO: metric hours per week triaging production incidents. Logs were scattered across multiple services, and correlating symptoms to root causes required deep system knowledge that wasn't evenly distributed across the team.",
  constraints:
    "Had to integrate with existing observability stack (Datadog, PagerDuty). Response latency needed to be under TODO: metric seconds to be useful during active incidents. Model inference costs had to stay within TODO: metric per month. Couldn't expose sensitive data in prompts or completions.",
  architecture:
    "Event-driven pipeline: PagerDuty webhook triggers the agent. Agent queries Datadog for relevant metrics and logs within the incident window. Retrieved context is chunked and embedded for similarity search against known incident patterns. LLM receives structured prompt with context, runbook excerpts, and recent similar incidents. Response is posted back to the incident channel with confidence scores.",
  whatIBuilt:
    "An autonomous agent that ingests alerts, pulls relevant telemetry, and generates diagnostic summaries with suggested remediation steps. Includes a feedback loop where engineers can mark suggestions as helpful or incorrect—used to fine-tune retrieval ranking. Built a simple eval harness to test agent responses against historical incidents with known root causes.",
  productionConsiderations:
    "Rate limiting on LLM calls to prevent runaway costs during incident storms. Circuit breaker for Datadog API to avoid cascading failures. PII scrubbing pipeline before any data reaches the model. Structured logging for every agent decision to support post-incident review. Fallback to templated responses when model latency exceeds threshold. TODO: metric reduction in mean-time-to-diagnose after deployment.",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "Architecture Diagram", url: "https://example.com" },
  ],
};

export default function Page() {
  return <ProjectCaseStudy project={project} />;
}
