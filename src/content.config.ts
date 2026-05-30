import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sections = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/sections' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    sectionType: z.enum(['about', 'faqs', 'links', 'contact']),
  }),
});

export const collections = { sections };
