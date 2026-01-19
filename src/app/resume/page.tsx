export default function ResumePage() {
  return (
    <div>
      {/* Header with PDF link */}
      <section className="mb-12">
        <h1 className="text-xl font-medium text-neutral-900 leading-relaxed mb-4">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          className="text-neutral-700 hover:text-neutral-900 underline underline-offset-2"
        >
          Download PDF
        </a>
      </section>

      {/* Core Skills */}
      <section className="mb-12">
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
          Core Skills
        </h2>
        <ul className="space-y-2 text-neutral-700 leading-relaxed">
          <li>Distributed Systems</li>
          <li>Reliability Engineering</li>
          <li>Diagnostics & Observability</li>
          <li>Kubernetes & Azure</li>
          <li>Python & Go</li>
          <li>LLM Integration</li>
          <li>Vector Search</li>
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
          Experience
        </h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed">
          <li>
            <span className="text-neutral-900 font-medium">Microsoft</span>
            <span className="text-neutral-500"> — </span>
            Senior Software Engineer, Azure VMware Solution
          </li>
          <li>
            <span className="text-neutral-900 font-medium">Yahoo</span>
            <span className="text-neutral-500"> — </span>
            Software Engineer, Ad Platform
          </li>
          <li>
            <span className="text-neutral-900 font-medium">Amazon</span>
            <span className="text-neutral-500"> — </span>
            Software Development Engineer
          </li>
        </ul>
      </section>
    </div>
  );
}
