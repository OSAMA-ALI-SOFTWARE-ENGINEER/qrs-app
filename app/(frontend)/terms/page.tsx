import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h1 className="font-display text-h1 text-ink-800 mb-space-6">Terms of Service</h1>
      <p className="text-body text-text-muted">Coming soon.</p>
    </div>
  );
}
