import type { CollectionConfig } from 'payload';
import { isAdminOrAboveFn, isSuperAdminFn, ROLES } from '../access/roles';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    maxLoginAttempts: 5,
    lockTime: 600000, // 10 minutes in ms, per SOC2 checklist H7 brute-force protection
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'read-only',
      options: ROLES.map((role) => ({ label: role, value: role })),
      access: {
        // Only Super Admin can change a user's role
        update: isSuperAdminFn,
      },
    },
  ],
  access: {
    // Admins+ see the user list; users can read their own record
    read: ({ req }) => {
      if (isAdminOrAboveFn({ req })) return true;
      return { id: { equals: req.user?.id } };
    },
    // Only Admin+ can create new users
    create: isAdminOrAboveFn,
    // Admins+ can update; users can update their own non-role fields
    update: ({ req, data }) => {
      if (isAdminOrAboveFn({ req })) return true;
      if (req.user?.id && data?.id === req.user.id && !data?.role) return true;
      return false;
    },
    // Only Super Admin can delete users
    delete: isSuperAdminFn,
  },
  versions: {
    drafts: false,
  },
  hooks: {
    afterLogin: [
      async ({ req, user }) => {
        // TODO(audit): Log successful login attempt to AuditLog collection.
        // Payload's afterLogin hook is called on success only; failed-login
        // capture requires custom endpoint wrapping payload.login() — defer
        // to follow-up once admin panel is verified against live DB.
      },
    ],
  },
};

export default Users;
