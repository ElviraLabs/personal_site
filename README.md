# Elvira Nurgalieva Portfolio

Personal portfolio site for Elvira Nurgalieva, built with `Next.js` and deployed with GitHub Pages.

## Live Site

- Production: [https://elviralabs.github.io/personal_site/](https://elviralabs.github.io/personal_site/)

## Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `pnpm`
- GitHub Pages via GitHub Actions

## Requirements

- `Node.js >= 22.13.0`
- `pnpm 11`

If you use `nvm`:

```bash
nvm install 22
nvm use 22
corepack enable
```

## Getting Started

Clone the repository:

```bash
git clone git@github.com:ElviraLabs/personal_site.git
cd personal_site
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Common Commands

Run local development:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Run linting:

```bash
pnpm lint
```

Generate Drizzle files if database work is added:

```bash
pnpm db:generate
```

## Project Structure

- `app/`
  Next.js app router files, page content, and global styles.
- `app/page.tsx`
  Main portfolio content, section data, and page structure.
- `app/globals.css`
  Site-wide styling, layout, responsive behavior, and component treatments.
- `app/layout.tsx`
  Shared layout and metadata used by the generated site.
- `public/`
  Static assets such as the headshot, resume PDF, screenshot, and icons.
- `public/resume/Elvira-Nurgalieva-Profile.pdf`
  File downloaded by the resume buttons.
- `.github/workflows/deploy-pages.yml`
  GitHub Actions workflow that builds and deploys the site to GitHub Pages.
- `next.config.ts`
  Static export settings and the production `basePath` for the `/personal_site` repo URL.

## How This Site Works

This project uses the Next.js App Router, but it is configured as a static export for GitHub Pages.

Important details:

- `next.config.ts` sets `output: "export"`.
- Production builds use `basePath` and `assetPrefix` of `/personal_site`.
- `pnpm build` generates the static site into `out/`.
- GitHub Actions uploads the `out/` directory to GitHub Pages.

Because of the production base path, image and file URLs should usually be built from:

```ts
const sitePath = process.env.NODE_ENV === "production" ? "/personal_site" : "";
```

That pattern is already used in `app/page.tsx` and `app/layout.tsx`.

## Updating Content

Most content lives directly in `app/page.tsx`.

Typical updates:

- Hero copy and section content:
  edit the arrays and JSX in `app/page.tsx`
- Headshot:
  replace `public/elvira-headshot.png`
- Resume download:
  replace `public/resume/Elvira-Nurgalieva-Profile.pdf`
- Social preview image:
  replace `public/screenshot.jpeg`
- Page title and description:
  update `app/layout.tsx`

## Styling Notes

- Global styles live in `app/globals.css`.
- The layout is mostly custom CSS, not Tailwind utility-heavy markup.
- Responsive behavior is handled in the media queries near the bottom of `app/globals.css`.
- If a section looks wrong on tablet or mobile, check the `@media (max-width: 1120px)` and `@media (max-width: 720px)` blocks first.

## Local Verification Before Shipping

Before pushing:

```bash
pnpm lint
pnpm build
```

Things to verify manually:

- hero image placement on desktop, tablet, and mobile
- project cards and section spacing
- resume download link
- LinkedIn and contact links
- content still reads well after line wrapping

## Deploying to GitHub Pages

This repo is already wired to deploy automatically from `main`.

### Normal deploy flow

1. Make your changes.
2. Verify locally:

```bash
pnpm lint
pnpm build
```

3. Commit:

```bash
git add .
git commit -m "Describe the update"
```

4. Push:

```bash
git push origin main
```

### What happens after push

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` will:

1. check out the repo
2. install `pnpm`
3. install dependencies with `pnpm install --frozen-lockfile`
4. run `pnpm build`
5. upload the generated `out/` directory
6. deploy that artifact to GitHub Pages

### GitHub repository settings required

In GitHub:

1. Open `Settings`.
2. Open `Pages`.
3. Ensure the source is set to `GitHub Actions`.

If Pages is set to deploy from a branch instead, the workflow may succeed while the site still serves older files.

## Troubleshooting

### The live site does not show the latest changes

- Wait a minute or two for GitHub Pages to finish deploying.
- Hard refresh the browser.
- Confirm the latest push reached `main`.
- Check the `Actions` tab for a failed Pages workflow.

### Images or assets are broken in production

- Confirm the asset is inside `public/`.
- Confirm URLs use the production-aware `sitePath`.
- Avoid hardcoding `/` root-relative paths without the repo base path.

### The resume button downloads the wrong file

- Replace `public/resume/Elvira-Nurgalieva-Profile.pdf`.
- Rebuild and push again.

### Local dev works but production looks different

- Check `next.config.ts` for `basePath` behavior.
- Run a fresh `pnpm build` before comparing output.

## Maintenance Tips

- Keep copy changes centralized in `app/page.tsx`.
- Prefer replacing existing assets over renaming paths unless you also update all references.
- If you add new sections, verify spacing and mobile behavior right away.
- If you add more projects, consider moving repeated content data into separate files later.

## Current Key Assets

- Headshot: `public/elvira-headshot.png`
- Resume PDF: `public/resume/Elvira-Nurgalieva-Profile.pdf`
- Social/share image: `public/screenshot.jpeg`
- Favicon: `public/favicon.svg`
