import Link from 'next/link';
import { caseStudies } from '@/app/data';

export function CaseStudies() {
  return (
    <section id="work" className="border-t border-divider pt-[120px] pb-[120px]">
      <div className="mx-auto max-w-container px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Selected Work</h2>
        <p className="mt-4 max-w-reading text-secondary">
          Product design work focused on resilient systems, interaction clarity, and AI-driven behaviors.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/work/${study.slug}`} className="card-lift rounded-xl bg-white p-5">
              <div className="mb-5 h-44 rounded-lg border border-divider bg-[#f5f5f5]" />
              <h3 className="text-lg font-semibold">{study.title}</h3>
              <p className="mt-3 text-sm text-secondary">{study.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
