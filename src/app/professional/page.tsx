export default function ProfessionalPage() {
  return (
    <div>
      <h1 className="text-xl font-medium text-gray-900 leading-relaxed mb-8">
        Software Engineer building products that matter
      </h1>

      <section className="mb-12">
        <ul className="space-y-3 text-gray-600 leading-relaxed">
          <li>5+ years building full-stack applications at scale</li>
          <li>Expertise in React, TypeScript, Node.js, and cloud infrastructure</li>
          <li>Track record of shipping products from 0→1 and leading technical initiatives</li>
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-6">
          Featured Projects
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-900">Project Alpha</h3>
            <p className="text-gray-600 mt-1 leading-relaxed">
              Led development of a real-time collaboration platform serving 10k+ users.
              Built with React, WebSockets, and PostgreSQL.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Project Beta</h3>
            <p className="text-gray-600 mt-1 leading-relaxed">
              Designed and implemented a data pipeline processing 1M+ events daily.
              Reduced latency by 60% through architecture improvements.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Project Gamma</h3>
            <p className="text-gray-600 mt-1 leading-relaxed">
              Built an internal tool that automated manual workflows, saving 20+ hours
              per week across the engineering team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
