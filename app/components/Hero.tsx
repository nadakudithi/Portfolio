export function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] pt-[120px] pb-[120px]">
      <div className="mx-auto grid max-w-container gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-secondary">Sri Harsha NMRS</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">UX Designer</h1>
          <div className="mt-8 max-w-reading space-y-5 text-[1.02rem] text-secondary">
            <p>
              UX Designer with 1.6+ years of experience designing complex digital products across fintech and
              multi-product ecosystems.
            </p>
            <p>
              My work focuses on interaction clarity, edge-case analysis, and building resilient user flows in
              high-stakes environments.
            </p>
            <p>
              Alongside production experience, I actively design AI-driven and behavior-aware systems, exploring
              agentic flows, adaptive interfaces, and decision-based interaction models.
            </p>
            <p>
              I approach every problem by stress-testing beyond the happy path, identifying where systems may fail,
              and refining them until they hold.
            </p>
            <p>
              I&apos;m seeking to contribute to AI-first product teams where structured thinking, experimentation, and
              system-level design are core to the product.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a className="btn-primary" href="#work">
              View Work
            </a>
            <a className="btn-secondary" href="#">
              Resume
            </a>
          </div>
        </div>

        <div className="hero-visual-container">
          <div className="hero-visual" aria-label="Custom HTML embed container for hero visual">
            {/* custom HTML animation will be pasted here */}
          </div>
        </div>
      </div>
    </section>
  );
}
