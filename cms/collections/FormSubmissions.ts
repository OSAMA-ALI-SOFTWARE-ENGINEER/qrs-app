import type { CollectionConfig } from 'payload';
import { isAdminOrAboveFn, isSuperAdminFn } from '../access/roles';

const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'formType',
      type: 'select',
      required: true,
      options: [
        { label: 'Demo Request', value: 'demo-request' },
        { label: 'Validation Report Request', value: 'validation-report-request' },
        { label: 'Newsletter Signup', value: 'newsletter' },
        { label: 'Contact', value: 'contact' },
        { label: 'Privacy/Data Subject Request', value: 'privacy-request' },
        { label: 'Press', value: 'press' },
        { label: 'RFP', value: 'rfp' },
        { label: 'Partners', value: 'partners' },
        { label: 'Escalations', value: 'escalations' },
      ],
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'data',
      type: 'json',
      required: false,
      admin: {
        description: 'Raw submitted form data (all fields)',
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
    },
    {
      name: 'ipAddress',
      type: 'text',
      required: false,
    },
    {
      name: 'turnstileVerified',
      type: 'checkbox',
      required: false,
      defaultValue: false,
      admin: {
        description: 'Cloudflare Turnstile verification result',
      },
    },
  ],
  access: {
    read: isAdminOrAboveFn,
    create: () => false, // No public form API yet; future milestone adds custom endpoint
    update: () => false, // Immutable submission log
    delete: isSuperAdminFn, // Only Super Admin can delete (GDPR right to erasure)
  },
};

export default FormSubmissions;
