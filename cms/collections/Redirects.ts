import type { CollectionConfig } from 'payload';
import { isAdminOrAboveFn } from '../access/roles';

const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'sourcePath',
  },
  fields: [
    {
      name: 'sourcePath',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Source path to redirect from (e.g. "/old-page")',
      },
    },
    {
      name: 'destinationPath',
      type: 'text',
      required: true,
      admin: {
        description: 'Destination path to redirect to (e.g. "/new-page")',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: '301',
      options: [
        { label: '301 Permanent', value: '301' },
        { label: '302 Temporary', value: '302' },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Internal notes about why this redirect exists',
      },
    },
  ],
  access: {
    read: isAdminOrAboveFn, // Admin only; redirects resolved server-side, no public API needed
    create: isAdminOrAboveFn,
    update: isAdminOrAboveFn,
    delete: isAdminOrAboveFn,
  },
};

export default Redirects;
