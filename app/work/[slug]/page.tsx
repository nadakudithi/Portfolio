import { caseStudies, caseStudySections } from '@/app/data';
import { toSlug } from '@/app/lib';

const progressItems = ['Problem', 'Insight', 'Exploration', 'Solution', 'Impact', 'Reflection'];

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    return (
      <main className="mx-auto max-w-container px-6 pb-[120px] pt-[120px]">
        <h1 className="text-3xl font-semibold">Case study not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-container px-6 pb-[120px] pt-20">
      <section className="border-b border-divider pb-12">
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-secondary">Case Study</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{study.title}</h1>
        <p className="mt-6 max-w-reading text-secondary">{study.description}</p>
      </section>

      <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-lg border border-divider bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">Progress</p>
            <ul className="mt-4 space-y-3 text-sm text-secondary">
              {progressItems.map((item) => (
                <li key={item}>
                  <a href={`#${toSlug(item)}`} className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="space-y-12">
          {caseStudySections.map((section) => (
            <section key={section} id={toSlug(section)}>
              <h2 className="text-2xl font-semibold tracking-tight">{section}</h2>
              <p className="mt-4 max-w-reading text-secondary">
                Detail the decision-making process for {section.toLowerCase()}, including trade-offs, constraints, and
                why each design direction was chosen over alternatives.
              </p>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
