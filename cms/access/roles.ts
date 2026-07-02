// Role-based access control hierarchy
// Roles are ordered from highest to lowest privilege:
// super-admin > admin > editor > reviewer > read-only

export const ROLES = ['super-admin', 'admin', 'editor', 'reviewer', 'read-only'] as const;
export type Role = (typeof ROLES)[number];

export const isSuperAdmin = (role?: Role): boolean => role === 'super-admin';

export const isAdminOrAbove = (role?: Role): boolean =>
  role === 'super-admin' || role === 'admin';

export const isEditorOrAbove = (role?: Role): boolean =>
  isAdminOrAbove(role) || role === 'editor';

export const canReview = (role?: Role): boolean =>
  isEditorOrAbove(role) || role === 'reviewer';

// Access control functions for Payload collections
export const isSuperAdminFn = ({ req }: { req: any }) =>
  isSuperAdmin(req.user?.role);

export const isAdminOrAboveFn = ({ req }: { req: any }) =>
  isAdminOrAbove(req.user?.role);

export const isEditorOrAboveFn = ({ req }: { req: any }) =>
  isEditorOrAbove(req.user?.role);

export const canReviewFn = ({ req }: { req: any }) =>
  canReview(req.user?.role);
