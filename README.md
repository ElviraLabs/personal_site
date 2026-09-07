# Elvira Nurgalieva Portfolio

This repository powers [elvira-n.com](https://elvira-n.com/), Elvira Nurgalieva's Industrial & Manufacturing Engineering portfolio.

> **Before editing, building, or deploying:** read [PROJECT_HANDOFF.md](PROJECT_HANDOFF.md) completely. It is the authoritative project guide for the brand, content-accuracy rules, architecture, deployments, and existing worktree precautions.

## Fast setup checklist

Use these steps on **each** laptop. Keep a separate clone on macOS and Windows; use GitHub to move committed work between them.

1. Install Git and Node.js 22 or newer.
2. Enable pnpm 11.7.0.
3. Set up GitHub SSH access (needed to push changes).
4. Clone this repository outside iCloud Drive, OneDrive, Dropbox, or another sync folder.
5. Install dependencies, then run the site locally.

This project uses Next.js, TypeScript, and pnpm. It is a static website; no database or environment variables are required for normal local development.

## Use Codex with this project

On either laptop, open the **repository root** (`PersonalSite`), not only the `app/` folder, in Codex. That lets Codex access both `PROJECT_HANDOFF.md` and the deployment configuration.

For every new Codex task, begin with this prompt, then replace the bracketed request:

```text
Work in this PersonalSite repository. Before scanning, editing, building, or deploying, read PROJECT_HANDOFF.md completely and treat it as the primary project context. Then inspect git status and preserve all unrelated or user-owned changes. [Describe the specific change I want.] Do not commit, push, or deploy unless I explicitly ask.
```

For example:

```text
Work in this PersonalSite repository. Before scanning, editing, building, or deploying, read PROJECT_HANDOFF.md completely and treat it as the primary project context. Then inspect git status and preserve all unrelated or user-owned changes. Update the Projects section with this approved copy: [...]. Run lint and build, but do not commit, push, or deploy.
```

Codex should use the handoff to:

- keep **Industrial & Manufacturing Engineer** as the primary positioning and avoid overstated credentials or experience;
- choose the correct release path—GitHub Pages for `elvira-n.com`, or the separate Sites workflow for the `chatgpt.site` deployment;
- preserve the contact-form redirect and static-hosting configuration;
- check `git status --short` before changing files and stage only reviewed files; and
- update `PROJECT_HANDOFF.md` when it changes architecture, content rules, domains, sources of truth, or deployment behavior.

If you want Codex to publish a change, say which destination you mean: **GitHub Pages / elvira-n.com**, **Sites / chatgpt.site**, or **both**. “Push” normally means a GitHub commit and push; it does not update the separate Sites deployment.

## 1. Install prerequisites

### macOS

1. Install the current **LTS** version of Node.js from [nodejs.org](https://nodejs.org/). Node `22.13.0` or newer is required.
2. Open **Terminal** and install Apple’s Git command-line tools if Git is not already available:

   ```bash
   xcode-select --install
   ```

3. Confirm the tools are available and activate the pnpm version used by continuous integration:

   ```bash
   node --version
   npm --version
   git --version
   corepack enable
   corepack prepare pnpm@11.7.0 --activate
   pnpm --version
   ```

### Windows 11 / Windows 10

1. Install the current **LTS** Node.js release from [nodejs.org](https://nodejs.org/) and [Git for Windows](https://git-scm.com/download/win). Accept their default options.
2. Open **PowerShell** and verify the tools. Then activate pnpm 11.7.0:

   ```powershell
   node --version
   npm --version
   git --version
   corepack enable
   corepack prepare pnpm@11.7.0 --activate
   pnpm --version
   ```

If `corepack` is not found, install the required pnpm release through npm instead:

```powershell
npm install --global pnpm@11.7.0
pnpm --version
```

Use either native Windows **or** WSL for this project on a given laptop, not both against the same folder. Native PowerShell with the Node and Git installers is the simplest option.

## 2. Connect GitHub on each laptop

The repository remote uses SSH:

```text
git@github.com:ElviraLabs/personal_site.git
```

Configure your Git identity once (use the email associated with your GitHub account):

```bash
git config --global user.name "Elvira Nurgalieva"
git config --global user.email "your-github-email@example.com"
```

Create an SSH key if that laptop does not already have one:

```bash
ssh-keygen -t ed25519 -C "your-github-email@example.com"
```

Accept the default location. Add a passphrase if desired.

Copy the public key and add it in GitHub: **Profile picture → Settings → SSH and GPG keys → New SSH key**.

**macOS:**

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

**Windows PowerShell:**

```powershell
Get-Content "$HOME\.ssh\id_ed25519.pub" | Set-Clipboard
```

After adding the key, test the connection:

```bash
ssh -T git@github.com
```

GitHub should identify your account. If the laptop already has an SSH key with a different filename, use that key’s matching `.pub` file instead.

## 3. Clone and run the site

Choose a normal development location—not a cloud-synced desktop/documents folder—such as `Projects`.

### macOS Terminal

```bash
mkdir -p ~/Projects
cd ~/Projects
git clone git@github.com:ElviraLabs/personal_site.git PersonalSite
cd PersonalSite
pnpm install --frozen-lockfile
pnpm dev
```

### Windows PowerShell

```powershell
New-Item -ItemType Directory -Force "$HOME\Projects"
Set-Location "$HOME\Projects"
git clone git@github.com:ElviraLabs/personal_site.git PersonalSite
Set-Location PersonalSite
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the local server with `Ctrl+C`.

## Daily workflow across both laptops

Before beginning work, open the repository and synchronize only when the working tree is clean:

```bash
git status --short
git switch main
git pull --ff-only origin main
```

If `git status --short` lists files you did not intend to change, stop before pulling, switching branches, or staging files. The repository can contain user-owned work that must be preserved.

For a normal content/code update:

```bash
pnpm dev                 # edit and preview locally
pnpm lint
pnpm build               # produces the static out/ site
git diff --check
git add path/to/changed-file
git diff --staged
git commit -m "Describe the change"
git push origin main
```

Avoid `git add .` for this project. Stage only the files you reviewed. Use a focused `codex/<short-description>` branch when work needs review or should not immediately be released from `main`.

When switching laptops, finish by committing and pushing the intentional changes on the first laptop; then run the synchronization commands above on the other one.

## What happens when you push

Pushing a validated commit to `main` runs [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml):

1. GitHub installs Node 22 and pnpm 11.7.0.
2. It runs `pnpm install --frozen-lockfile` and `pnpm build`.
3. It deploys the `out/` static export to GitHub Pages.
4. The primary website updates at [https://elvira-n.com/](https://elvira-n.com/).

Check the GitHub repository’s **Actions** tab if the change does not appear after a few minutes. GitHub Pages is static hosting, so do not add server-only APIs, database calls, or image optimization without changing the hosting design.

### The separate Sites deployment

The public [Sites version](https://elvira-nurgalieva-portfolio-2026.team-dason-2899.chatgpt.site/) is a separate release surface. A GitHub push does **not** update it. Deploying it requires the Codex Sites workflow documented in `PROJECT_HANDOFF.md`; do not manually force Git histories together.

## Project map

| Path | What to edit there |
| --- | --- |
| `app/page.tsx` | Main home-page content, including the contact form. |
| `app/projects/` and `lib/project-data.ts` | Project index, details, and project copy. |
| `app/journal/` and `lib/journal-data.ts` | Journal page and article content. |
| `app/professional-development/` and `lib/development-data.ts` | Learning and development content. |
| `app/thank-you/page.tsx` | Post-contact confirmation page. |
| `app/layout.tsx` | Metadata, canonical URL, Open Graph/Twitter data, and structured data. |
| `app/globals.css` | All styling and responsive breakpoints. |
| `public/` | Static images and downloadable public files. |
| `public/og.png` | 1200×630 social-preview graphic. Update it with metadata when the public brand changes. |
| `next.config.ts` | Static-export and trailing-slash configuration. Do not remove these settings. |

## Contact form

The contact form posts to FormSubmit and redirects to `/thank-you/`. Preserve the full redirect URL with its trailing slash:

```text
https://elvira-n.com/thank-you/
```

Do not submit a live test form unless you intend to send an external email. Local work does not require a FormSubmit account or secret.

## Brand and content guardrails

The public primary title is **Industrial & Manufacturing Engineer**. Keep systems thinking as a method/competency, not the main job title.

Always preserve the factual claim rules in `PROJECT_HANDOFF.md`, especially:

- Colorado EI: `EI.0081521`; FE Industrial Engineering passed.
- Lean Six Sigma Green Belt, Python, Power BI, SQL, and BPMN are learning/development areas unless the source is deliberately updated with completed credentials.
- Never claim PE licensure, invented metrics, or unverified work experience.

## Troubleshooting

### `pnpm` is not recognized

Run `corepack enable` followed by `corepack prepare pnpm@11.7.0 --activate`. If Corepack is unavailable, use:

```bash
npm install --global pnpm@11.7.0
```

Then close and reopen the terminal.

### Port 3000 is already in use

Stop the other local server, or choose a different port:

```bash
pnpm dev -- --port 3001
```

### Git asks for a password or rejects the push

Run `ssh -T git@github.com` and confirm the current laptop’s public key was added to the correct GitHub account. The remote is SSH, not HTTPS.

### The live site is unchanged

Confirm the commit reached `main`, check GitHub Actions for the **Deploy GitHub Pages** workflow, wait briefly for Pages/CDN propagation, and hard-refresh the browser.

## Useful commands

```bash
pnpm dev                              # local development
pnpm lint                             # lint source
pnpm build                            # static production export in out/
git status --short                    # see local changes
git pull --ff-only origin main        # safely update a clean checkout
git log --oneline -5                  # recent history
```

For architecture, public-site deployment, content safety, and Sites deployment instructions, return to [PROJECT_HANDOFF.md](PROJECT_HANDOFF.md).
