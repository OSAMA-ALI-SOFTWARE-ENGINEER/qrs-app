import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'About',
  description: 'Learn about Quantitative Risk Systems and our mission.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-ink-800 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display text-h1 lg:text-6xl font-bold text-white mb-space-6 leading-tight">
              About QRS
            </h1>
            <p className="text-body-lg text-cream-100 leading-relaxed">
              Building trust infrastructure for institutional risk management through cryptographic verification and auditable analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-cream-50 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl">
          <div className="mb-space-20">
            <h2 className="font-display text-h2 text-ink-900 mb-space-8 font-semibold">
              Our Mission
            </h2>
            <p className="text-body text-text-muted leading-relaxed">
              QRS is building the trust infrastructure for institutional risk management. Every calculation is cryptographically signed and independently verifiable, enabling institutional investors to make confident decisions backed by auditable, reproducible analysis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-h2 text-ink-900 mb-space-8 font-semibold">
              Why Verifiable Risk?
            </h2>
            <p className="text-body text-text-muted leading-relaxed">
              Institutional risk management demands more than black-box analytics. Our platform gives institutional investors the ability to independently verify every calculation, audit the entire lineage of a risk analysis, and build confidence in the numbers driving their decisions.
            </p>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
