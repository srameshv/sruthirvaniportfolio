export default function BuilderPage() {
  return (
    <div>
      <h1 className="text-xl font-medium text-neutral-900 mb-10">What I'm Building</h1>

      <section className="mb-14">
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
          Current Focus
        </h2>
        <div className="border-l border-gray-200 pl-5">
          <p className="text-neutral-700 leading-relaxed mb-3">
            Right now I'm deep in <span className="text-neutral-900">AI-assisted developer tools</span> — exploring
            how LLMs can augment the coding workflow without getting in the way.
          </p>
          <p className="text-neutral-500 leading-relaxed">
            Also spending time with Rust and systems programming to better understand
            performance at the edges.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-6">
          Experiments
        </h2>
        <div className="space-y-8">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium text-neutral-900">Local-first sync engine</h3>
              <span className="text-xs text-neutral-500">prototyping</span>
            </div>
            <p className="text-neutral-700 mt-2 leading-relaxed">
              Playing with CRDTs and offline-first architecture. Goal: build something
              that works on a plane without feeling broken.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium text-neutral-900">CLI for personal knowledge management</h3>
              <span className="text-xs text-neutral-500">daily driver</span>
            </div>
            <p className="text-neutral-700 mt-2 leading-relaxed">
              A terminal-based tool for capturing and linking notes. Markdown files,
              fast search, no electron.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium text-neutral-900">WebGPU graphics experiments</h3>
              <span className="text-xs text-neutral-500">learning</span>
            </div>
            <p className="text-neutral-700 mt-2 leading-relaxed">
              Learning GPU programming through small visual experiments.
              Shaders are hard but rewarding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
