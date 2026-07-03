import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import Users from './collections/Users';
import Media from './collections/Media';
import AuditLog from './collections/AuditLog';
import Pages from './collections/Pages';
import Blog from './collections/Blog';
import ValidationReports from './collections/ValidationReports';
import PerilStatus from './collections/PerilStatus';
import Redirects from './collections/Redirects';
import FormSubmissions from './collections/FormSubmissions';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— QRS Admin',
    },
  },
  collections: [Users, Media, AuditLog, Pages, Blog, ValidationReports, PerilStatus, Redirects, FormSubmissions],
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable: false,
  },
});
