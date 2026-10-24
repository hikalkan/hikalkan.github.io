// Resizes the source conference photos into src/assets/gallery (and the derived
// portrait / social-card crops into src/assets/images).
//
// Usage: npm run photos -- <source-folder>
// The file names below belong to the original photo set; edit the list when adding photos.
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const sourceDir = process.argv[2];
if (!sourceDir) {
  console.error('Usage: npm run photos -- <source-folder>');
  process.exit(1);
}

const galleryDir = path.join(root, 'src/assets/gallery');
const imagesDir = path.join(root, 'src/assets/images');

/** @type {Array<{src: string, out: string, from?: string, dir?: string, width?: number, height?: number, crop?: {top?: number, right?: number, bottom?: number, left?: number}, extract?: {left: number, top: number, width: number, height: number}}>} */
const jobs = [
  { src: 'JUJ_8145.jpg', out: '2025-devdays-vilnius-1.jpg' },
  { src: 'JUJ_8155-Enhanced-NR.jpg', out: '2025-devdays-vilnius-2.jpg' },
  { src: 'OMG_2722.jpg', out: '2024-dotnext-moscow-1.jpg' },
  { src: 'OMG_2764.jpg', out: '2024-dotnext-moscow-2.jpg' },
  { src: '54891566172_c32eab0481_o.jpg', out: '2025-techorama-1.jpg' },
  { src: '54892739180_572b5f4b6d_o.jpg', out: '2025-techorama-2.jpg' },
  { src: '74209108_2552328591655014_6620705572981309440_o.jpg', out: '2019-dotnetfest-1.jpg' },
  { src: '76609823_2552327724988434_5034051891135250432_o.jpg', out: '2019-dotnetfest-2.jpg' },
  { src: 'IMG_3916.jpg', out: '2024-devdays-vilnius-1.jpg' },
  // Video still: drop the broadcast banner along the bottom edge.
  { src: '01.jpg', out: '2025-dotnext-spb.jpg', crop: { bottom: 0.125 } },
  { src: 'dotnetfest-halil.jpg', from: imagesDir, out: '2019-dotnetfest-3.jpg' },
  // Square headshot for the home page and the speaker kit.
  {
    src: 'JUJ_8145.jpg',
    out: 'portrait.jpg',
    dir: imagesDir,
    extract: { left: 1600, top: 100, width: 1700, height: 1700 },
    width: 1600,
    height: 1600,
  },
  // 1200:630 social card, from the DotNext 2024 stage photo.
  {
    src: 'OMG_2722.jpg',
    out: 'og.jpg',
    dir: imagesDir,
    extract: { left: 0, top: 0, width: 3500, height: 1838 },
    width: 2400,
    height: 1260,
  },
];

await mkdir(galleryDir, { recursive: true });

let total = 0;
for (const job of jobs) {
  const input = path.resolve(job.from ?? sourceDir, job.src);
  const oriented = sharp(input).rotate();
  const meta = await oriented.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  let region = job.extract;
  if (!region && job.crop) {
    const left = Math.round(width * (job.crop.left ?? 0));
    const top = Math.round(height * (job.crop.top ?? 0));
    const right = Math.round(width * (job.crop.right ?? 0));
    const bottom = Math.round(height * (job.crop.bottom ?? 0));
    region = { left, top, width: width - left - right, height: height - top - bottom };
  }

  const pipeline = sharp(input).rotate();
  if (region) pipeline.extract(region);

  const dest = path.join(job.dir ?? galleryDir, job.out);
  await pipeline
    .resize({
      width: job.width ?? 2400,
      height: job.height ?? 2400,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest);

  const bytes = (await stat(dest)).size;
  total += bytes;
  const out = await sharp(dest).metadata();
  console.log(`${job.out.padEnd(32)} ${out.width}x${out.height}  ${Math.round(bytes / 1024)} KB`);
}

console.log(`\n${jobs.length} files, ${Math.round(total / 1024)} KB total`);
