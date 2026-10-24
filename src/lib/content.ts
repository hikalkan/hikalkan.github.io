import { getCollection, type CollectionEntry } from 'astro:content';

// getCollection() doesn't preserve the order of entries in the data files.

export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

export async function getBooks() {
  return (await getCollection('books')).sort((a, b) => a.data.order - b.data.order);
}

export async function getGallery() {
  const [photos, talks] = await Promise.all([getCollection('gallery'), getCollection('talks')]);
  const talkIds = new Set(talks.map((talk) => talk.id));
  for (const photo of photos) {
    if (photo.data.talk && !talkIds.has(photo.data.talk)) {
      throw new Error(`Gallery entry "${photo.id}" references unknown talk "${photo.data.talk}".`);
    }
  }
  return photos.sort((a, b) => a.data.order - b.data.order);
}

/** First gallery photo for each talk, in gallery order. Maps a talk id to a photo id. */
export function firstPhotoByTalk(photos: CollectionEntry<'gallery'>[]) {
  const map = new Map<string, string>();
  for (const photo of photos) {
    if (photo.data.talk && !map.has(photo.data.talk)) map.set(photo.data.talk, photo.id);
  }
  return map;
}

export async function getArticles() {
  return (await getCollection('articles')).sort(
    (a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title),
  );
}
