import { HeroDeviceFrame } from '@/components/marketing/HeroDeviceFrame';
import { KPIStrip } from '@/components/marketing/KPIStrip';
import { TrustBadgeCluster } from '@/components/marketing/TrustBadgeCluster';
import { VerifiedSealBadge } from '@/components/marketing/VerifiedSealBadge';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'QRS',
  description: 'Palantir-grade quantitative software for institutional risk assessment.',
  path: '/',
});

const kpiData = [
  { label: 'Portfolio TIV', value: '$500B+' },
  { label: 'VaR 99.5%', value: '±$2.3M' },
  { label: 'TVaR', value: '±$3.1M' },
  { label: 'Capital Headroom', value: '15.2%' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Device Frame */}
      <HeroDeviceFrame
        imageSrc="/hero-placeholder.png"
        imageAlt="QRS Quantitative Risk Terminal"
      />

      {/* KPI Strip */}
      <KPIStrip items={kpiData} />

      {/* Trust & Verification Section */}
      <section className="bg-cream-50 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-space-20 lg:mb-space-28">
            <h2 className="font-display text-h1 lg:text-6xl font-bold text-ink-900 mb-space-4">
              Built for Trust
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Enterprise-grade compliance and cryptographic verification at every step
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid lg:grid-cols-2 gap-space-12 lg:gap-space-16 mb-space-12">
            {/* Left: Verification Card */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-xl border border-cream-200 p-space-10 shadow-sm hover:shadow-md transition-shadow duration-base">
                <div className="mb-space-6">
                  <VerifiedSealBadge
                    signatureHash="a1b2c3d4e5f6g7h8i9j0..."
                    verifierUrl="https://github.com/qrs-risk/qrs-replay"
                    fullSignature="ECDSA-P-256: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0..."
                  />
                </div>
                <h3 className="font-display text-h3 text-ink-900 mb-space-4">
                  Independently Verifiable
                </h3>
                <p className="text-body text-text-muted mb-space-6 leading-relaxed">
                  Every calculation is cryptographically signed with our reproducibility seal.
                  Validate our results using open-source tools.
                </p>
                <a
                  href="https://ssrn.com"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                >
                  Read our SSRN validation paper
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>

            {/* Right: Security Badges Preview */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-ink-800 to-ink-900 rounded-xl border border-teal-700 p-space-10 shadow-lg text-white">
                <h3 className="font-display text-h3 mb-space-8">Security & Compliance</h3>
                <div className="mb-space-8 flex gap-space-3 flex-wrap">
                  <div className="px-space-4 py-space-2 rounded-lg bg-teal-500/20 border border-teal-600/50 text-sm font-medium">
                    ✓ SOC 2 in progress
                  </div>
                  <div className="px-space-4 py-space-2 rounded-lg bg-teal-500/20 border border-teal-600/50 text-sm font-medium">
                    ✓ GDPR / CCPA
                  </div>
                  <div className="px-space-4 py-space-2 rounded-lg bg-teal-500/20 border border-teal-600/50 text-sm font-medium">
                    ✓ RFC 9116
                  </div>
                </div>
                <p className="text-teal-100 leading-relaxed">
                  SOC 2 audit in progress via Vanta. See our{' '}
                  <a href="/security/" className="text-teal-300 hover:text-teal-200 underline transition-colors font-semibold">
                    Security page
                  </a>{' '}
                  for details.
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Badges Section */}
          <div className="bg-ink-900 rounded-xl border border-ink-700 p-space-12 shadow-lg">
            <h3 className="font-display text-h4 text-white mb-space-10 text-center">
              Trusted by institutions
            </h3>
            <div className="mb-space-8">
              <TrustBadgeCluster />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
