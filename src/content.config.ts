import { defineCollection, z } from 'astro:content';

// Define the schema for the blog collection with improved SEO and UX fields
const blogSchema = z.object({
	// Basic metadata
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	
	// SEO improvements
	slug: z.string().optional(),
	excerpt: z.string().optional(),
	keywords: z.array(z.string()).optional(),
	canonical: z.string().url().optional(),
	
	// Media
	heroImage: z.string(),
	heroAlt: z.string().optional(),
	
	// Content organization
	category: z.string(),
	tags: z.array(z.string()).optional(),
	
	// Author information
	author: z.string().optional(),
	authorImage: z.string().optional(),
	
	// Internationalization
	language: z.enum(['en', 'ja', 'ta']).default('en'),
	
	// Social sharing
	socialImage: z.string().optional(),
	twitterCard: z.enum(['summary', 'summary_large_image', 'app', 'player']).default('summary_large_image').optional(),
	
	// Reading experience
	readingTime: z.number().optional(),
	featured: z.boolean().default(false).optional(),
});

// Define the blog collection
const blog = defineCollection({
	schema: blogSchema,
});

// Export the collections
export const collections = { blog }; 