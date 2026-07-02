import { RootPage } from '@payloadcms/next/views';
import config from '@/cms/payload.config';

export default function Admin() {
  return <RootPage config={config} />;
}
