import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, Payload } from 'payload';

// Factory function to create audit logging hooks for any collection.
// Wired into each collection's hooks.afterChange and hooks.afterDelete
// to capture all write operations (create, update, delete) into the AuditLog collection.

export const createAuditHook = (
  collectionSlug: string,
  payload: Payload,
): {
  afterChange: CollectionAfterChangeHook;
  afterDelete: CollectionAfterDeleteHook;
} => ({
  afterChange: async ({ doc, req, operation, previousDoc }) => {
    if (!req.user?.id) return;

    try {
      const ipAddress = (req.headers?.get('x-forwarded-for') as string)?.split(',')[0] ||
                       req.headers?.get('x-real-ip') as string ||
                       'unknown';

      await payload.create({
        collection: 'audit-log',
        data: {
          action: operation as 'create' | 'update',
          collectionSlug,
          documentId: doc.id as string,
          user: req.user.id,
          timestamp: new Date(),
          ipAddress,
          diff: operation === 'update' ? { before: previousDoc, after: doc } : undefined,
        },
        overrideAccess: true,
        req,
      });
    } catch (error) {
      console.error(`Failed to audit ${collectionSlug} ${operation}:`, error);
    }
  },

  afterDelete: async ({ doc, req }) => {
    if (!req.user?.id) return;

    try {
      const ipAddress = (req.headers?.get('x-forwarded-for') as string)?.split(',')[0] ||
                       req.headers?.get('x-real-ip') as string ||
                       'unknown';

      await payload.create({
        collection: 'audit-log',
        data: {
          action: 'delete' as const,
          collectionSlug,
          documentId: doc.id as string,
          user: req.user.id,
          timestamp: new Date(),
          ipAddress,
          diff: { before: doc, after: null },
        },
        overrideAccess: true,
        req,
      });
    } catch (error) {
      console.error(`Failed to audit ${collectionSlug} delete:`, error);
    }
  },
});
