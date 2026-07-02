import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'QRS',
  description: 'Institutional quantitative risk system.',
  path: '/',
});

export default function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <section className="py-20 text-center">
        <h1 className="font-display text-display text-ink-800 mb-4">
          Quantitative Risk Systems
        </h1>
        <p className="font-body text-body-lg text-text-muted max-w-2xl mx-auto">
          Every number cryptographically signed and independently verifiable.
        </p>
      </section>

      <div className="bg-white rounded-md border border-cream-100 p-8 shadow-sm">
        <p className="text-body text-text-muted">
          M1 foundation scaffolding complete. Marketing pages and components coming in M2.
        </p>
      </div>
    </div>
  );
}
