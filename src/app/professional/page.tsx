import Link from "next/link";

export default function ProfessionalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-8">
        <h1 className="text-xl font-medium text-neutral-900 leading-relaxed">
          Sruthi Ramesh Vani
        </h1>
        <p className="text-neutral-700 mt-2 leading-relaxed">
          Senior Software Engineer building AI-powered applications and platforms
        </p>
        <p className="text-neutral-500 text-sm mt-1">New York, NY</p>
      </section>

      {/* CTAs */}
      <section className="mb-12 flex gap-6">
        <a
          href="/resume.pdf"
          className="text-neutral-700 hover:text-neutral-900 underline underline-offset-2"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/sruthi-ramesh-vani/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 hover:text-neutral-900 underline underline-offset-2"
        >
          LinkedIn
        </a>
      </section>

      {/* Now */}
      <section className="mb-12">
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-3">
          Now
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Building AI-powered diagnostic tooling at Microsoft that accelerates incident detection and resolution. Prototyping LLM apps with Claude/GPT, LangChain, and vector search.
        </p>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-6">
          Featured Projects
        </h2>
        <ul className="space-y-4">
          <li>
            <Link
              href="/projects/ai-diagnostic-agent"
              className="text-neutral-900 hover:text-neutral-700 underline underline-offset-2"
            >
              AI Diagnostic Agent
            </Link>
            <span className="text-neutral-500"> — </span>
            <span className="text-neutral-700">Intelligent incident detection and resolution tooling</span>
          </li>
          <li>
            <Link
              href="/projects/financial-advisor-agent"
              className="text-neutral-900 hover:text-neutral-700 underline underline-offset-2"
            >
              Financial Advisor Agent
            </Link>
            <span className="text-neutral-500"> — </span>
            <span className="text-neutral-700">LLM-powered financial planning assistant</span>
          </li>
          <li>
            <Link
              href="/projects/f1-prediction-model"
              className="text-neutral-900 hover:text-neutral-700 underline underline-offset-2"
            >
              F1 Prediction Model
            </Link>
            <span className="text-neutral-500"> — </span>
            <span className="text-neutral-700">Machine learning model for Formula 1 race predictions</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
