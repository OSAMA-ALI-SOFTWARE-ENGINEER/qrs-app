import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Validation & Verification',
  description: 'Independent validation and verification of QRS quantitative models.',
  path: '/validation/',
});

export default function ValidationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-ink-800 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-display text-h1 lg:text-6xl font-bold text-white mb-space-6 leading-tight">
              Independently Verified
            </h1>
            <p className="text-body-lg text-cream-100 leading-relaxed">
              QRS models have been independently validated by leading academic and industry experts to ensure calculation accuracy and methodological rigor.
            </p>
          </div>
        </div>
      </section>

      {/* Validation Reports Section */}
      <section className="bg-cream-50 py-space-28 lg:py-space-40 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-space-20">
            <h2 className="font-display text-h2 text-ink-900 text-center">
              Validation Reports
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-space-8 max-w-4xl mx-auto">
            {[
              {
                title: 'SSRN Validation Study',
                description: 'Peer-reviewed quantitative validation of QRS portfolio analytics methodology using institutional datasets.',
                link: 'https://ssrn.com'
              },
              {
                title: 'Third-Party Audit',
                description: 'Independent verification of model assumptions, calculation integrity, and reproducibility standards.',
                link: '/validation/'
              }
            ].map((report) => (
              <a
                key={report.title}
                href={report.link}
                target={report.link.startsWith('http') ? '_blank' : undefined}
                rel={report.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-lg border border-cream-100 p-space-10 hover:shadow-sm transition-all duration-base block group"
              >
                <h3 className="font-display text-h4 text-ink-900 mb-space-4 group-hover:text-teal-600 transition-colors font-semibold">
                  {report.title}
                </h3>
                <p className="text-body text-text-muted mb-space-6 leading-relaxed">
                  {report.description}
                </p>
                <span className="text-teal-600 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
