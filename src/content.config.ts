import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    tech: z.array(z.string()).default([]),
    github: z.string().optional(),
    url: z.string().optional(),
    featured: z.boolean().default(false),
    category: z.string().optional(),
    year: z.number().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { posts, works };
