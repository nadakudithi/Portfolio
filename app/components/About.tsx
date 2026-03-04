import { focusAreas } from '@/app/data';

export function About() {
  return (
    <section id="about" className="border-t border-divider pt-[120px] pb-[120px]">
      <div className="mx-auto max-w-container px-6">
        <h2 className="text-3xl font-semibold tracking-tight">About</h2>

        <div className="mt-8 max-w-reading space-y-6 text-secondary">
          <p>I&apos;m a product designer focused on how complex systems behave in real environments.</p>
          <p>
            Most of my work revolves around interaction clarity, edge cases, and designing flows that remain stable
            even when conditions change.
          </p>
          <p>
            Recently I&apos;ve been exploring AI-driven systems and agentic interfaces, studying how products can move
            from reactive tools to decision-support systems.
          </p>
          <p>
            Outside of production work, I regularly prototype interaction ideas and run small design experiments to
            test new behaviors.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 text-sm text-primary sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <li key={area} className="rounded-md border border-divider bg-white px-4 py-3 font-medium">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
