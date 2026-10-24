import { getCollection } from 'astro:content';

// getCollection() doesn't preserve the order of entries in the data files.

export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

export async function getBooks() {
  return (await getCollection('books')).sort((a, b) => a.data.order - b.data.order);
}

export async function getArticles() {
  return (await getCollection('articles')).sort(
    (a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title),
  );
}
