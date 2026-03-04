import { caseStudySections } from '@/app/data';

export default function CaseStudyTemplatePage() {
  return (
    <main className="mx-auto max-w-container px-6 pb-[120px] pt-[120px]">
      <h1 className="text-4xl font-semibold tracking-tight">Case Study Template</h1>
      <p className="mt-4 max-w-reading text-secondary">
        Use this structure to document process, rationale, and outcomes over purely visual deliverables.
      </p>

      <ol className="mt-10 space-y-4 text-secondary">
        {caseStudySections.map((section, index) => (
          <li key={section} className="rounded-md border border-divider bg-white px-4 py-3">
            <span className="mr-3 text-xs font-semibold uppercase tracking-[0.08em] text-secondary">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-medium text-primary">{section}</span>
          </li>
        ))}
      </ol>
    </main>
  );
}
