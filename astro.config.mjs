import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://halilibrahimkalkan.com',
  trailingSlash: 'ignore',
  // Compression drops the whitespace between a line-wrapped text and a following inline element ("source<a>").
  compressHTML: false,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
