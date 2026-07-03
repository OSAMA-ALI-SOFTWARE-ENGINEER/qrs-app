/**
 * One-time database initialization script for Payload CMS
 * This creates the database schema and tables
 * Run once with: node scripts/init-db.js
 */

const path = require('path');

async function initializeDatabase() {
  try {
    console.log('🔧 Initializing QRS database schema...\n');

    // Import Payload after require.resolve to handle drizzle-kit
    const { buildConfig } = require('payload');
    const { postgresAdapter } = require('@payloadcms/db-postgres');

    // Import collections
    const Users = require('../cms/collections/Users').default;
    const Media = require('../cms/collections/Media').default;
    const AuditLog = require('../cms/collections/AuditLog').default;
    const Pages = require('../cms/collections/Pages').default;
    const Blog = require('../cms/collections/Blog').default;
    const ValidationReports = require('../cms/collections/ValidationReports').default;
    const PerilStatus = require('../cms/collections/PerilStatus').default;
    const Redirects = require('../cms/collections/Redirects').default;
    const FormSubmissions = require('../cms/collections/FormSubmissions').default;

    // Build Payload config
    const config = buildConfig({
      secret: process.env.PAYLOAD_SECRET || 'temp-secret-for-init',
      admin: {
        user: Users.slug,
      },
      collections: [
        Users,
        Media,
        AuditLog,
        Pages,
        Blog,
        ValidationReports,
        PerilStatus,
        Redirects,
        FormSubmissions,
      ],
      db: postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URL || 'postgresql://postgres:root@localhost:5432/qrs_app',
        },
      }),
    });

    // Initialize Payload and create schema
    const { getPayload } = require('payload');
    const payload = await getPayload({ config });

    console.log('✅ Database schema initialized successfully!\n');
    console.log('📊 Tables created:');
    console.log('   - users');
    console.log('   - media');
    console.log('   - audit_log');
    console.log('   - pages');
    console.log('   - blog');
    console.log('   - validation_reports');
    console.log('   - peril_status');
    console.log('   - redirects');
    console.log('   - form_submissions');
    console.log('\n✨ Payload CMS is ready to use!\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Database initialization failed:');
    console.error(error.message);
    process.exit(1);
  }
}

// Run initialization
initializeDatabase();
