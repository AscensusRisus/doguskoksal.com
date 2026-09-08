import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    role: z.string(),
    summary: z.string(),
    status: z.enum(['placeholder', 'published']),
    visibility: z.enum(['public', 'private']).default('public'),
    links: z.object({
      live: z.string().url().or(z.literal('')),
      repository: z.string().url().or(z.literal('')),
      writing: z.string().url().or(z.literal('')),
    }),
    cover: z.string(),
    preview: z.object({
      src: z.string(),
      alt: z.string(),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
      caption: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { work };
