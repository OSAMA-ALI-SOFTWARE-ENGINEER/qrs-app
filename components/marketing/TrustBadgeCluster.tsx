import {
  ShieldCheck,
  Lock,
  FileCheck,
  Fingerprint,
  KeyRound,
} from 'lucide-react';

export function TrustBadgeCluster() {
  const badges = [
    {
      icon: ShieldCheck,
      label: 'SOC 2 in progress',
      description: 'Vanta continuous monitoring',
    },
    {
      icon: Lock,
      label: 'Vouch-insured',
      description: 'Cyber liability coverage',
    },
    {
      icon: FileCheck,
      label: 'GDPR / CCPA',
      description: 'Privacy compliant',
    },
    {
      icon: Fingerprint,
      label: 'RFC 9116',
      description: 'security.txt published',
    },
    {
      icon: KeyRound,
      label: 'Cryptographic seal',
      description: 'Reproducibility verified',
      highlight: true,
    },
  ];

  return (
    <div className="flex gap-space-6 flex-wrap justify-center md:justify-start">
      {badges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <div
            key={idx}
            className={`flex items-center gap-space-2 px-space-4 py-space-3 rounded-md border ${
              badge.highlight
                ? 'border-teal-500 bg-ink-800'
                : 'border-teal-700 bg-transparent'
            }`}
          >
            <Icon
              size={badge.highlight ? 24 : 20}
              className={`${badge.highlight ? 'text-teal-500' : 'text-teal-600'}`}
            />
            <div>
              <p className="font-semibold text-small text-white">
                {badge.label}
              </p>
              <p className="text-micro text-teal-700">{badge.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
