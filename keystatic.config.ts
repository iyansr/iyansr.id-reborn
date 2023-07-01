import { collection, component, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      path: 'src/content/blog/*/',
      slugField: 'slug',
      schema: {
        slug: fields.slug({
          name: {
            label: 'Title',
          },
          slug: {
            label: 'SEO-friendly slug',
            description: 'This will define the file/folder name for this entry',
          },
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          componentBlocks: {
            something: component({
              label: 'Some Component',
              preview: () => null,
              schema: {},
            }),
          },
        }),
      },
    }),
  },
});
