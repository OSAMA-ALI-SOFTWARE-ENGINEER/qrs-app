import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0C0D0E',
          800: '#1B3B3A',
          700: '#1f2124',
        },
        teal: {
          500: '#5BBAB5',
          600: '#3C8481',
          700: '#29908A',
        },
        navy: { 700: '#324A6D' },
        cream: {
          50: '#F4F6F6',
          100: '#ebebeb',
        },
        muted: '#69727d',
        status: {
          ok: '#22c55e',
          warn: '#f59e0b',
          error: '#ef4444',
        },
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.05' }],
        h1: ['2.5rem', { lineHeight: '1.1' }],
        h2: ['2rem', { lineHeight: '1.15' }],
        h3: ['1.5rem', { lineHeight: '1.2' }],
        h4: ['1.25rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.55' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
        micro: ['0.75rem', { lineHeight: '1.4' }],
        kpi: ['2.25rem', { lineHeight: '1' }],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        pill: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 12px rgba(0,0,0,0.08)',
        glow: '0 0 60px rgba(91,186,181,0.25)',
      },
      transitionDuration: {
        fast: '120ms',
        base: '240ms',
        slow: '480ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        emphasis: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
