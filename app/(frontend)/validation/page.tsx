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
      <section className="bg-ink-800 py-space-24 lg:py-space-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="font-display text-h1 lg:text-display text-white mb-space-6">
            Independently Verified
          </h1>
          <p className="text-body-lg text-cream-100 max-w-2xl">
            QRS models have been independently validated by leading academic and industry experts.
          </p>
        </div>
      </section>

      {/* Validation Reports Section */}
      <section className="bg-cream-50 py-space-24 lg:py-space-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-display text-h2 text-ink-800 mb-space-16 text-center">
            Validation Reports
          </h2>

          <div className="grid lg:grid-cols-2 gap-space-8 max-w-4xl mx-auto">
            {[
              {
                title: 'SSRN Validation Study',
                description: 'Peer-reviewed quantitative validation of QRS portfolio analytics methodology.',
                link: 'https://ssrn.com'
              },
              {
                title: 'Third-Party Audit',
                description: 'Independent verification of model assumptions and calculation integrity.',
                link: '#'
              }
            ].map((report) => (
              <a
                key={report.title}
                href={report.link}
                className="bg-white rounded-lg border border-cream-100 p-space-8 hover:shadow-sm transition-shadow block group"
              >
                <h3 className="font-display text-h4 text-ink-800 mb-space-4 group-hover:text-teal-600 transition-colors">
                  {report.title}
                </h3>
                <p className="text-body text-text-muted mb-space-4">
                  {report.description}
                </p>
                <span className="text-teal-600 font-semibold">
                  Read report →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
