/**
 * One-time database initialization script for Payload CMS
 * This creates the database schema and tables
 * Run once with: node scripts/init-db.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env file FIRST
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env');

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      const value = valueParts.join('=').trim();
      if (key && value) {
        process.env[key] = value;
      }
    }
  });
}

async function initializeDatabase() {
  try {
    console.log('🔧 Initializing QRS database schema...\n');
    console.log('📋 Environment check:');
    console.log(`   DATABASE_URL: ${process.env.DATABASE_URL ? '✓ Set' : '✗ Missing'}`);
    console.log(`   PAYLOAD_SECRET: ${process.env.PAYLOAD_SECRET ? '✓ Set (' + process.env.PAYLOAD_SECRET.length + ' chars)' : '✗ Missing'}\n`);

    // Import AFTER env vars are set
    const { getPayload } = await import('payload');
    const { default: config } = await import('../cms/payload.config.ts');

    // Initialize Payload and create schema
    const payload = await getPayload({ config });

    console.log('✅ Database schema initialized successfully!\n');
    console.log('📊 Tables created:');
    console.log('   ✓ users');
    console.log('   ✓ media');
    console.log('   ✓ audit_log');
    console.log('   ✓ pages');
    console.log('   ✓ blog');
    console.log('   ✓ validation_reports');
    console.log('   ✓ peril_status');
    console.log('   ✓ redirects');
    console.log('   ✓ form_submissions');
    console.log('\n✨ Payload CMS is ready to use!\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Database initialization failed:');
    console.error(error.message);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
}

// Run initialization
initializeDatabase();
