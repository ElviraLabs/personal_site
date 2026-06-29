# Elvira Nurgalieva Portfolio

Personal portfolio site for Elvira Nurgalieva, built with `vinext`, `Next.js`,
and the OpenAI Sites deployment flow.

## Live Site

- Production: `https://elvira-nurgalieva-portfolio-2026.team-dason-2899.chatgpt-team.site`

## Stack

- `Next.js`
- `vinext`
- `React`
- `Tailwind CSS v4`
- OpenAI Sites hosting

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

## Project Structure

- `app/` - page layout, portfolio content, and styles
- `public/` - static assets, hero illustration, resume PDF, and screenshot
- `.openai/hosting.json` - Sites hosting configuration

## Notes

- The downloadable resume lives at
  `public/resume/Elvira-Nurgalieva-Profile.pdf`.
- The preview image used for deployment metadata lives at
  `public/screenshot.jpeg`.
- This repo includes OpenAI Sites metadata in `.openai/hosting.json`.
