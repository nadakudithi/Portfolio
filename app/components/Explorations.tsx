import { explorationTitles } from '@/app/data';

export function Explorations() {
  return (
    <section id="explorations" className="border-t border-divider pt-[120px] pb-[120px]">
      <div className="mx-auto max-w-container px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Explorations</h2>
        <p className="mt-4 max-w-reading text-secondary">
          Small experiments exploring interaction patterns, motion, and AI-driven behavior.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {explorationTitles.map((title) => (
            <article key={title} className="card-lift rounded-xl bg-white p-4">
              <video
                className="h-40 w-full rounded-lg border border-divider bg-[#f5f5f5] object-cover"
                autoPlay
                loop
                muted
                playsInline
                aria-label={`${title} preview`}
              >
                <source src="" type="video/mp4" />
              </video>
              <h3 className="mt-4 text-sm font-medium">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
