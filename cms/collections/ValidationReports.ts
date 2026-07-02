import type { CollectionConfig } from 'payload';
import { isEditorOrAboveFn } from '../access/roles';

const ValidationReports: CollectionConfig = {
  slug: 'validation-reports',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: false,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: false,
    },
    {
      name: 'reportFile',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'PDF report file. Note: Media currently accepts image/* only; PDF support pending.',
      },
    },
    {
      name: 'ssrnUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'SSRN paper reference URL',
      },
    },
    {
      name: 'sealSignature',
      type: 'text',
      required: false,
      admin: {
        description: 'Placeholder: cryptographic signature hash. Real data from product backend.',
      },
    },
    {
      name: 'relatedPeril',
      type: 'relationship',
      relationTo: 'peril-status',
      required: false,
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

export default ValidationReports;
