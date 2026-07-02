import type { CollectionConfig } from 'payload';
import { isEditorOrAboveFn } from '../access/roles';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL slug for this page (e.g. "platform", "why-qrs", "about")',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
    },
    {
      name: 'seoTitle',
      type: 'text',
      required: false,
      admin: {
        description: 'Custom meta title; falls back to title if empty',
      },
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Custom meta description',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],
  access: {
    read: ({ req }) => {
      if (isEditorOrAboveFn({ req })) return true;
      return { status: { equals: 'published' } };
    },
    create: isEditorOrAboveFn,
    update: isEditorOrAboveFn,
    delete: isEditorOrAboveFn,
  },
  versions: {
    drafts: true,
  },
};

export default Pages;
