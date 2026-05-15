import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.string(),
		role: z.string().optional(),
		link: z.string().url().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, projects };
