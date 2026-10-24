import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{png,jpg,jpeg,webp}', {
  eager: true,
});

/** Resolves an image in src/assets/images by its file name, as referenced from the data files. */
export function imageByName(name: string): ImageMetadata {
  const file = files[`/src/assets/images/${name}`];
  if (!file) {
    throw new Error(`Image "${name}" was not found in src/assets/images.`);
  }
  return file.default;
}
