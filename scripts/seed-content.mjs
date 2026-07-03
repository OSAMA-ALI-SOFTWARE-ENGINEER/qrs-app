/**
 * Seed sample content into Payload CMS
 * Run with: node scripts/seed-content.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env');

// Load .env
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

async function seedContent() {
  try {
    console.log('🌱 Seeding sample content...\n');

    const { getPayload } = await import('payload');
    const { default: config } = await import('../cms/payload.config.ts');

    const payload = await getPayload({ config });

    // 1. Seed Pages
    console.log('📄 Creating Pages...');
    const pages = [
      {
        slug: 'platform',
        title: 'Platform',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  { text: 'Enterprise-grade quantitative risk analysis platform for institutional investors.' }
                ]
              }
            ]
          }
        },
        seoTitle: 'QRS Platform - Quantitative Risk Systems',
        seoDescription: 'Institutional-grade risk analytics platform.',
        status: 'published'
      },
      {
        slug: 'about',
        title: 'About',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  { text: 'QRS is building the trust infrastructure for institutional risk management.' }
                ]
              }
            ]
          }
        },
        seoTitle: 'About QRS',
        seoDescription: 'Learn about Quantitative Risk Systems.',
        status: 'published'
      }
    ];

    for (const page of pages) {
      try {
        await payload.create({
          collection: 'pages',
          data: page
        });
        console.log(`   ✓ ${page.title}`);
      } catch (err) {
        console.log(`   ⚠ ${page.title}: ${err.message}`);
      }
    }

    // 2. Seed PerilStatus
    console.log('\n📊 Creating Peril Status entries...');
    const perils = [
      { perilName: 'Florida Hurricane', status: 'production', order: 1 },
      { perilName: 'West Coast Earthquake', status: 'validation', order: 2 },
      { perilName: 'UK Flood', status: 'validation', order: 3 },
      { perilName: 'Japan Typhoon', status: 'roadmap', order: 4 }
    ];

    for (const peril of perils) {
      try {
        await payload.create({
          collection: 'peril-status',
          data: peril
        });
        console.log(`   ✓ ${peril.perilName}`);
      } catch (err) {
        console.log(`   ⚠ ${peril.perilName}: ${err.message}`);
      }
    }

    console.log('\n✅ Sample content seeded successfully!\n');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:');
    console.error(error.message);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  }
}

seedContent();
