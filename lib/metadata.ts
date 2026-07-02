import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';

interface BuildMetadataProps {
  title?: string;
  description?: string;
  path?: string;
}

export function buildMetadata(props: BuildMetadataProps = {}): Metadata {
  const {
    title = 'QRS — Quantitative Risk Systems',
    description = 'Palantir-grade quantitative software for institutional risk assessment, built for sophisticated buyers.',
    path = '/',
  } = props;

  const url = new URL(path, SITE_URL);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(SITE_URL),
  };
}
