import type { CollectionConfig } from 'payload';
import { isEditorOrAboveFn } from '../access/roles';

const PerilStatus: CollectionConfig = {
  slug: 'peril-status',
  admin: {
    useAsTitle: 'perilName',
  },
  fields: [
    {
      name: 'perilName',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. "Florida Hurricane", "Earthquake"',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      options: [
        { label: 'Production', value: 'production' },
        { label: 'Validation', value: 'validation' },
        { label: 'Roadmap', value: 'roadmap' },
      ],
      admin: {
        description: 'Production = live in app, Validation = in-progress testing, Roadmap = planned',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'order',
      type: 'number',
      required: false,
      admin: {
        description: 'Sort order for display (lowest first)',
      },
    },
  ],
  access: {
    read: () => true, // Public: needed for PerilStatusIndicator on marketing pages
    create: isEditorOrAboveFn,
    update: isEditorOrAboveFn,
    delete: isEditorOrAboveFn,
  },
};

export default PerilStatus;
