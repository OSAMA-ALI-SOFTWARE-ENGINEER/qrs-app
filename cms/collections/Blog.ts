import type { CollectionConfig } from 'payload';
import { isEditorOrAboveFn } from '../access/roles';

const Blog: CollectionConfig = {
  slug: 'blog',
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
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: false,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: false,
    },
    {
      name: 'seoTitle',
      type: 'text',
      required: false,
    },
    {
      name: 'seoDescription',
      type: 'textarea',
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

export default Blog;
