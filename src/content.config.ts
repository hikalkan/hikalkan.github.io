import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { formats, topics, type Format, type Topic } from './lib/taxonomy';

const topicKey = z.enum(Object.keys(topics) as [Topic, ...Topic[]]);
const formatKey = z.enum(Object.keys(formats) as [Format, ...Format[]]);

/** "2025", "2025-10" or "2025-10-29" */
const partialDate = z.string().regex(/^\d{4}(-\d{2}(-\d{2})?)?$/);

const talks = defineCollection({
  loader: file('src/data/talks.yaml'),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    eventUrl: z.url().optional(),
    sessionUrl: z.url().optional(),
    date: partialDate,
    location: z.string(),
    scope: z.enum(['international', 'national']),
    format: formatKey,
    role: z.enum(['speaker', 'co-speaker']).default('speaker'),
    topics: z.array(topicKey).min(1),
    slides: z.url().optional(),
    video: z.url().optional(),
  }),
});

const articles = defineCollection({
  loader: file('src/data/articles.yaml'),
  schema: z.object({
    title: z.string(),
    url: z.url(),
    year: z.number().int(),
  }),
});

const link = z.object({
  label: z.string(),
  url: z.url(),
  kind: z.enum(['website', 'source', 'buy', 'download']).default('website'),
});

const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    description: z.string().optional(),
    role: z.string().optional(),
    image: z.string().optional(),
    status: z.enum(['active', 'past', 'oldies']),
    links: z.array(link).default([]),
  }),
});

const books = defineCollection({
  loader: file('src/data/books.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    subtitle: z.string().optional(),
    published: z.string(),
    description: z.string(),
    image: z.string(),
    links: z.array(link),
  }),
});

export const collections = { talks, articles, projects, books };
