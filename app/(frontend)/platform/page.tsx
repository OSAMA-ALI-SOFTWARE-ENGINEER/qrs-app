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
      <section className="bg-ink-800 py-space-24 lg:py-space-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="font-display text-h1 lg:text-display text-white mb-space-6">
            Quantitative Risk Platform
          </h1>
          <p className="text-body-lg text-cream-100 max-w-2xl mb-space-8">
            Enterprise-grade risk analytics built for institutional investors, asset managers, and reinsurance professionals.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-cream-50 py-space-24 lg:py-space-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-h2 text-ink-800 mb-space-16 text-center">
            Core Capabilities
          </h2>

          <div className="grid lg:grid-cols-3 gap-space-8">
            {[
              {
                title: 'Portfolio Analytics',
                description: 'Real-time VaR, TVaR, and scenario analysis for multi-asset portfolios.'
              },
              {
                title: 'Stress Testing',
                description: 'Historical and hypothetical scenarios with cryptographic reproducibility.'
              },
              {
                title: 'Risk Reporting',
                description: 'Auditable risk reports with verified calculations and lineage tracking.'
              }
            ].map((feature, idx) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg border border-cream-100 p-space-8 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-display text-h4 text-ink-800 mb-space-4">
                  {feature.title}
                </h3>
                <p className="text-body text-text-muted">
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
