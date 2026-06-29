# Elvira Nurgalieva Portfolio

Personal portfolio site for Elvira Nurgalieva, built with `Next.js` and
deployed with GitHub Pages.

## Live Site

- GitHub Pages: `https://elviralabs.github.io/personal_site/`

## Stack

- `Next.js`
- `React`
- `Tailwind CSS v4`
- GitHub Pages

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

The static site export is generated in `out/`.

## Project Structure

- `app/` - page layout, portfolio content, and styles
- `public/` - static assets, hero illustration, resume PDF, and screenshot
- `.github/workflows/` - GitHub Pages deployment workflow
- `next.config.ts` - static export and repository base path configuration

## Notes

- The downloadable resume lives at
  `public/resume/Elvira-Nurgalieva-Profile.pdf`.
- The preview image used for deployment metadata lives at
  `public/screenshot.jpeg`.
- Production builds are exported for the `/personal_site` repository path.
