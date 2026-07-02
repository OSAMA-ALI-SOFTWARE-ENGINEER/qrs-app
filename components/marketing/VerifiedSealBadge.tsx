'use client';

import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface VerifiedSealBadgeProps {
  signatureHash: string;
  verifierUrl: string;
  fullSignature?: string;
}

export function VerifiedSealBadge({
  signatureHash,
  verifierUrl,
  fullSignature,
}: VerifiedSealBadgeProps) {
  const [showPopover, setShowPopover] = useState(false);
  const truncatedHash = signatureHash.slice(0, 16) + '...';

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowPopover(!showPopover)}
        className="inline-flex items-center gap-space-2 px-space-4 py-space-2 rounded-pill border border-teal-500 bg-ink-800 text-white hover:bg-ink-700 transition-colors duration-base"
      >
        <CheckCircle2 size={16} className="text-teal-500" />
        <span className="text-small font-semibold">Lineage verified</span>
        <span className="font-mono text-micro text-teal-500">{truncatedHash}</span>
      </button>

      {showPopover && (
        <div className="absolute top-full mt-space-2 left-0 bg-ink-700 border border-teal-700 rounded-md shadow-md p-space-4 z-50 w-72">
          <div className="flex justify-between items-start mb-space-3">
            <h3 className="font-semibold text-white text-small">
              ECDSA P-256 Signature
            </h3>
            <button
              onClick={() => setShowPopover(false)}
              className="text-teal-500 hover:text-teal-600"
            >
              <X size={16} />
            </button>
          </div>

          <p className="font-mono text-micro text-cream-50 break-all mb-space-4">
            {fullSignature || signatureHash}
          </p>

          <p className="text-micro text-teal-500">
            Placeholder signature. Real ECDSA data from product backend before launch.
          </p>

          <a
            href={verifierUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-space-3 text-teal-500 hover:text-teal-600 text-small underline"
          >
            Verify with qrs-replay →
          </a>
        </div>
      )}
    </div>
  );
}
