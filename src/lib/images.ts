import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  ['/src/assets/images/*.{png,jpg,jpeg,webp}', '/src/assets/gallery/*.{png,jpg,jpeg,webp}'],
  { eager: true },
);

/** Resolves an image in src/assets/images or src/assets/gallery by its file name. */
export function imageByName(name: string): ImageMetadata {
  const file = Object.entries(files).find(([filePath]) => filePath.endsWith(`/${name}`))?.[1];
  if (!file) {
    throw new Error(`Image "${name}" was not found in src/assets/images or src/assets/gallery.`);
  }
  return file.default;
}
