import { buildMetadata } from '@/lib/metadata';
import { TrustBadgeCluster } from '@/components/marketing/TrustBadgeCluster';
import { VerifiedSealBadge } from '@/components/marketing/VerifiedSealBadge';

export const metadata = buildMetadata({
  title: 'Trust & Security',
  description: 'Enterprise-grade security, compliance, and cryptographic verification.',
  path: '/trust/',
});

export default function TrustPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-ink-800 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display text-h1 lg:text-6xl font-bold text-white mb-space-6 leading-tight">
              Built for Trust
            </h1>
            <p className="text-body-lg text-cream-100 leading-relaxed">
              Enterprise-grade security, cryptographic verification, and independent audit trails at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-cream-50 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-space-20">
            <h2 className="font-display text-h2 text-ink-900 text-center">
              Security & Compliance
            </h2>
          </div>

          <div className="mb-space-20 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border border-cream-100 p-space-12">
              <div className="mb-space-8 flex justify-center">
                <VerifiedSealBadge
                  signatureHash="a1b2c3d4e5f6g7h8i9j0..."
                  verifierUrl="https://github.com/qrs-risk/qrs-replay"
                  fullSignature="ECDSA-P-256: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0..."
                />
              </div>
              <h3 className="font-display text-h3 text-ink-900 text-center mb-space-4 font-semibold">
                Cryptographic Reproducibility
              </h3>
              <p className="text-body text-text-muted text-center leading-relaxed">
                Every calculation is cryptographically signed with our ECDSA seal. Independently verify any analysis using open-source verification tools.
              </p>
            </div>
          </div>

          <div className="bg-ink-800 rounded-lg border border-teal-700 p-space-12">
            <h3 className="font-display text-h3 text-white mb-space-10 text-center font-semibold">
              Compliance Certifications
            </h3>
            <div className="mb-space-10">
              <TrustBadgeCluster />
            </div>
            <p className="text-body text-teal-100 text-center leading-relaxed">
              SOC 2 audit in progress via Vanta. Comprehensive security assessment and compliance verification framework for institutional deployment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
