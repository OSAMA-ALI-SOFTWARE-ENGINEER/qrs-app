import type { CollectionConfig } from 'payload';
import { isEditorOrAboveFn } from '../access/roles';

// STORAGE ADAPTER SEAM:
// Currently using Payload's local-disk default (no cloud plugin registered).
// Before production launch, swap to Cloudflare R2 or S3:
//   1. npm install @payloadcms/storage-s3 or @payloadcms/storage-r2
//   2. Register the plugin in cms/payload.config.ts `plugins: []`
//   3. Provide bucket credentials via env vars (not yet available — no
//      cloud storage account exists as of M1)
//
// ⚠️ CRITICAL PRE-PRODUCTION BLOCKER ⚠️
// Local-disk uploads to /media will NOT persist across Vercel serverless
// deployments (Vercel's filesystem is ephemeral). This MUST be resolved
// before any production traffic via a working cloud storage adapter.
// Local disk is acceptable only for local dev and this M1 foundation stage.

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Accessibility text and de-identification requirement per DESIGN.md §9',
      },
    },
  ],
  access: {
    // Public read access: media must be servable on the marketing site
    read: () => true,
    // Only Editor+ can upload/update/delete media
    create: isEditorOrAboveFn,
    update: isEditorOrAboveFn,
    delete: isEditorOrAboveFn,
  },
};

export default Media;
