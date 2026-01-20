import { ProjectCaseStudy, ProjectData } from "@/components/ProjectCaseStudy";

const project: ProjectData = {
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
};

export default function Page() {
  return <ProjectCaseStudy project={project} />;
}
