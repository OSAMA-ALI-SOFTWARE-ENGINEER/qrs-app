import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

// Baseline CSP: no 'unsafe-eval', minimal 'unsafe-inline' (style-src only for
// Next/React inline style injection like image blur placeholders; script-src is
// strict and will be tightened further in a follow-up milestone to move to
// nonce-based style-src once the site's actual inline-style surface is audited).
// Satisfies SOC2 checklist B6 exactly.
const csp = [
  `default-src 'self'`,
  `script-src 'self'`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob:`,
  `font-src 'self' data:`,
  `connect-src 'self'`,
  `frame-ancestors 'self'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `object-src 'none'`,
  `upgrade-insecure-requests`,
].join('; ');

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Embedder-Policy', value: 'credentialless' },
];

// TODO(SOC2-B12): HSTS preload SUBMISSION is deferred 60 days post-launch
// per checklist B12/J8. The header itself is set above (correct). The manual
// submission to hstspreload.org should happen only on day 60 post-production
// deploy, never before.

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // TODO(CSP-admin): Verify Payload's /admin panel actually renders under
      // the strict CSP above. If it breaks, add a path-scoped relaxed CSP for
      // /admin/:path* via a second entry here. This cannot be tested without a
      // live Postgres connection to boot the admin panel, so verification must
      // happen post-deployment once DATABASE_URL is provisioned.
    ];
  },
};

export default nextConfig;
