# halilibrahimkalkan.com

Personal website of Halil İbrahim Kalkan, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves the built site
```

Pushing to `master` builds and deploys the site to GitHub Pages via `.github/workflows/deploy.yml`.

## Updating content

Most content lives in YAML files under `src/data`, validated by the schemas in `src/content.config.ts`. A typo in a field name or an invalid URL fails the build.

| File | Content |
| --- | --- |
| `src/data/talks.yaml` | Talks. Add new ones at the top. `topics` must be keys from `src/lib/taxonomy.ts`. |
| `src/data/articles.yaml` | Articles. The source badge is derived from the URL. |
| `src/data/projects.yaml` | Projects (`active`, `past` or `oldies`). |
| `src/data/books.yaml` | Books. |
| `src/data/speaker-kit.ts` | Bios and talk abstracts for the speaker kit page. |

Images referenced from data files go in `src/assets/images` and are optimized at build time.
