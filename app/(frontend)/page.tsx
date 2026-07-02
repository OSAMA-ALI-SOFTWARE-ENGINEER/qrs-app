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
      <section className="bg-cream-50 py-space-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-h2 text-ink-800 mb-space-8 text-center">
            Built for Trust
          </h2>

          <div className="mb-space-12">
            <div className="flex justify-center mb-space-8">
              <VerifiedSealBadge
                signatureHash="a1b2c3d4e5f6g7h8i9j0..."
                verifierUrl="https://github.com/qrs-risk/qrs-replay"
                fullSignature="ECDSA-P-256: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0..."
              />
            </div>

            <div className="bg-white rounded-md border border-cream-100 p-space-8">
              <h3 className="font-display text-h3 text-ink-800 mb-space-4">
                Independently Verifiable
              </h3>
              <p className="text-body text-text-muted mb-space-4">
                Every calculation is cryptographically signed with our reproducibility seal.
                Validate our results using open-source tools.
              </p>
              <a
                href="https://ssrn.com"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                Read our SSRN validation paper →
              </a>
            </div>
          </div>

          <div className="bg-ink-800 rounded-md border border-teal-700 p-space-8 text-white">
            <h3 className="font-display text-h3 mb-space-6">Security & Compliance</h3>
            <div className="mb-space-6">
              <TrustBadgeCluster />
            </div>
            <p className="text-body text-teal-700">
              SOC 2 audit in progress via Vanta. See our{' '}
              <a href="/security/" className="text-teal-500 hover:text-teal-600 underline">
                Security page
              </a>{' '}
              for details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
