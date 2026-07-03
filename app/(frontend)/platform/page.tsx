import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Platform',
  description: 'Enterprise-grade quantitative risk analysis platform for institutional investors.',
  path: '/platform/',
});

export default function PlatformPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-ink-800 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display text-h1 lg:text-6xl font-bold text-white mb-space-6 leading-tight">
              Quantitative Risk Platform
            </h1>
            <p className="text-body-lg text-cream-100 mb-space-8 leading-relaxed">
              Enterprise-grade risk analytics built for institutional investors, asset managers, and reinsurance professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-cream-50 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-space-20">
            <h2 className="font-display text-h2 text-ink-900 text-center">
              Core Capabilities
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-space-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Portfolio Analytics',
                description: 'Real-time VaR, TVaR, and scenario analysis across multi-asset portfolios with instant recalculation.'
              },
              {
                title: 'Stress Testing',
                description: 'Historical and hypothetical scenarios with cryptographic reproducibility for audit compliance.'
              },
              {
                title: 'Risk Reporting',
                description: 'Auditable risk reports with verified calculations and complete lineage tracking for every metric.'
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg border border-cream-100 p-space-10 hover:shadow-sm transition-all duration-base"
              >
                <h3 className="font-display text-h4 text-ink-900 mb-space-4 font-semibold">
                  {feature.title}
                </h3>
                <p className="text-body text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
