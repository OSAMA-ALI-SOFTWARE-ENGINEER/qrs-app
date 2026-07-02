import type { CollectionConfig } from 'payload';
import { isAdminOrAboveFn } from '../access/roles';

// Audit log collection for SOC2 compliance (checklist H4/H5/H7).
// Captures all write operations (create/update/delete) across collections,
// plus login events, into one queryable append-only log.
// Access is restricted to Admin+ (audit logs are sensitive).
// The collection itself is append-only: only Server-side hooks can create entries
// (via overrideAccess: true); no API user can create, update, or delete entries.

const AuditLog: CollectionConfig = {
  slug: 'audit-log',
  admin: {
    useAsTitle: 'timestamp',
  },
  fields: [
    {
      name: 'action',
      type: 'select',
      required: true,
      options: [
        { label: 'Create', value: 'create' },
        { label: 'Update', value: 'update' },
        { label: 'Delete', value: 'delete' },
        { label: 'Login Success', value: 'login-success' },
        { label: 'Login Failure', value: 'login-failure' },
        { label: 'Logout', value: 'logout' },
      ],
    },
    {
      name: 'collectionSlug',
      type: 'text',
      admin: {
        description: 'e.g. "users", "media". Null for auth events.',
      },
    },
    {
      name: 'documentId',
      type: 'text',
      admin: {
        description: 'ID of the modified document. Null for auth events.',
      },
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        description: 'The user who performed the action. Null for anonymous auth failures.',
      },
    },
    {
      name: 'userEmailAttempted',
      type: 'email',
      admin: {
        description: 'For failed login attempts, captures the attempted email',
      },
    },
    {
      name: 'timestamp',
      type: 'date',
      defaultValue: () => new Date(),
      required: true,
    },
    {
      name: 'ipAddress',
      type: 'text',
      admin: {
        description: 'Client IP from request, if available',
      },
    },
    {
      name: 'diff',
      type: 'json',
      admin: {
        description: 'Before/after snapshot for update; before/null for delete',
      },
    },
  ],
  access: {
    // Only Admin+ can read audit logs
    read: isAdminOrAboveFn,
    // No one can create via API (server hooks only)
    create: () => false,
    // No one can update or delete; audit logs are immutable
    update: () => false,
    delete: () => false,
  },
};

export default AuditLog;
