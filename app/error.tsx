'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-20 text-center">
      <h1 className="font-display text-h1 text-ink-800 mb-4">500</h1>
      <p className="text-body text-text-muted mb-8">Something went wrong</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-teal-500 text-ink-900 rounded-md hover:bg-teal-600"
      >
        Try again
      </button>
    </div>
  );
}
