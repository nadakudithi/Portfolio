const links = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:hello@example.com' },
  { label: 'Resume', href: '#' }
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-divider pt-[120px] pb-[120px]">
      <div className="mx-auto flex max-w-container flex-col items-center px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Let&apos;s Connect</h2>
        <p className="mt-5 max-w-reading text-secondary">
          If you&apos;re building thoughtful products or exploring AI-driven systems, I&apos;d be glad to connect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="btn-secondary">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
