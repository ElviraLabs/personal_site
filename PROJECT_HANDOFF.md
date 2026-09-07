# Project Handoff — Elvira Nurgalieva Portfolio

Last verified from the repository and live GitHub Pages site: **2026-09-07**

## Mandatory first action for future Codex agents

**Before scanning, editing, building, or deploying this project, read this file completely.** Treat it as the primary project context. Follow its architecture, messaging, deployment workflow, content rules, and safety precautions. Inspect additional files only as needed to complete the request or to verify that this handoff remains current.

## Purpose, audience, and positioning

This is Elvira Nurgalieva's public professional portfolio for U.S. engineering recruiters, hiring managers, and technical collaborators. Its job is to support applications and conversations for industrial, manufacturing, process, continuous-improvement, quality, operations, and manufacturing-systems roles.

Use this brand hierarchy consistently:

```text
ELVIRA NURGALIEVA
Industrial & Manufacturing Engineer
Colorado Engineer Intern (EI) · Process Improvement · Manufacturing Systems · Quality & Operations
```

**Systems thinking is a methodology, not the primary occupational title.** Do not lead with generic “Systems Engineer”; in the U.S. it can imply IT, networking, cloud, software, or defense systems work. The actual education credential, *Engineering Degree, Systems Engineering*, remains accurate and may be stated in Education.

The desired message is: an industrial/manufacturing engineer who applies systems thinking to process improvement, manufacturing systems, quality, operations, and complex engineering problems.

## Live site and deployment topology

| Surface | URL / identifier | Purpose and source |
| --- | --- | --- |
| Primary public site | [https://elvira-n.com/](https://elvira-n.com/) | GitHub Pages deployment from `origin/main`; this is the canonical public domain. |
| Thank-you route | [https://elvira-n.com/thank-you/](https://elvira-n.com/thank-you/) | Static page reached after a successful contact-form submission. The trailing slash is intentional. |
| Sites public deployment | [https://elvira-nurgalieva-portfolio-2026.team-dason-2899.chatgpt.site/](https://elvira-nurgalieva-portfolio-2026.team-dason-2899.chatgpt.site/) | A separately deployed public Sites version, project ID `appgprj_6a3b2f361a7c819183f5c94124dea66e`. It does **not** automatically follow GitHub pushes. |

The GitHub Pages site and the Sites deployment are two independent release paths. A push to GitHub Pages does not update Sites; a Sites deployment does not push to GitHub. Keep them intentionally synchronized when the user requests both, and verify the requested URL after deployment.

At the time of verification, the GitHub Pages home page and `/thank-you/` both returned HTTP 200. No Sites custom domain is configured; the `chatgpt.site` URL is public.

## Repository and source of truth

- **Working directory:** `/Users/elviranurgalieva/Documents/PersonalSite`
- **Git remote:** `origin` → `git@github.com:ElviraLabs/personal_site.git` (fetch and push)
- **Primary branch:** `main`
- **Canonical website source:** the committed `main` branch at `origin`, deployed by GitHub Actions to GitHub Pages.
- **Current verified branding commit:** `332ce75 Reposition portfolio for industrial manufacturing roles`.
- **Branch practice:** make a focused `codex/<short-description>` branch only when a new branch is appropriate; preserve any existing worktree changes. Merge/push only the files relevant to the requested change.

The Sites service has its own managed source state and can have history or files that differ from this Git remote. Do not force-push, reset, or assume the two histories are interchangeable. Use the Sites skills/tools for its source sync and deployment workflow.

## Toolchain and local commands

- **Framework:** Next.js 16.2.6 with React 19.2.6 and TypeScript.
- **Package manager:** pnpm (the repository also has a `package-lock.json`, but `pnpm-lock.yaml` and CI make pnpm authoritative).
- **Node:** `>=22.13.0`; GitHub Actions uses Node 22 and pnpm 11.7.
- **Static build:** Next is configured with `output: "export"`, `trailingSlash: true`, and unoptimized images. The GitHub Pages artifact is `out/`.

Typical local commands:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev                 # Next development server
pnpm lint
pnpm build               # static Next export in out/
```

`pnpm start` is currently `next dev`, not a production static-server command. If Codex's shell does not expose the expected Node/pnpm runtime, load the workspace dependency paths rather than changing the project toolchain.

There is also a Vite/vinext/Cloudflare build path used by Sites. It produces `dist/` and a Worker bundle; it is distinct from the standard Next/GitHub Pages build. Do not replace the GitHub Pages `pnpm build` flow with the Vite build.

## File and folder map

| Path | Role |
| --- | --- |
| `app/layout.tsx` | Root layout, Inter font, global metadata, canonical URL, Open Graph/Twitter settings, and person structured data. |
| `app/page.tsx` | Main landing page: hero, navigation, experience, skills, education, contact form, and the primary professional messaging. Most homepage copy/data is inline here. |
| `app/thank-you/page.tsx` | Static post-contact confirmation route. |
| `app/projects/page.tsx` | Portfolio-project index. |
| `app/projects/[slug]/page.tsx` | Dynamic static project detail route generated from project data. |
| `app/journal/page.tsx` | Journal/article index. |
| `app/professional-development/page.tsx` | Learning and professional-development page. |
| `app/globals.css` | Entire visual system and responsive styling, including `.hero-specialties` and thank-you styles. Preserve its mobile breakpoints. |
| `lib/project-data.ts` | Project slugs, metadata, and detail content. |
| `lib/development-data.ts` | Professional-development entries and status content. |
| `lib/journal-data.ts` | Journal content data. |
| `public/elvira-headshot.png` | Homepage portrait. |
| `public/og.png` | Current 1200×630 social-preview card; it matches the industrial/manufacturing brand. |
| `public/resume/` | Intended location for the public resume PDF. Confirm its contents before exposing or linking a resume. |
| `public/project-materials/` | Project imagery/materials. |
| `next.config.ts` | Static-export, trailing-slash, and image behavior for GitHub Pages. |
| `package.json`, `pnpm-lock.yaml` | Scripts and reproducible pnpm dependencies. |
| `.github/workflows/deploy-pages.yml` | GitHub Pages build/deploy automation for `main` and manual dispatch. |
| `.openai/hosting.json` | Sites project configuration; do not remove it. |
| `vite.config.ts`, `worker/index.ts`, `build/sites-vite-plugin.ts` | Vite/vinext/Worker packaging for Sites deployment. |
| `drizzle.config.ts`, `db/schema.ts`, `drizzle/` | Dormant database scaffolding. The schema is intentionally empty; there is no active D1/R2 data dependency. |

`README.md` is useful as a general setup reference but is not fully current (for example, social-preview references have changed). This handoff and the actual source/configuration take precedence.

## Contact form and thank-you behavior

The homepage form in `app/page.tsx` posts directly to FormSubmit:

```text
POST https://formsubmit.co/nurgalieva.e@gmail.com
```

Its hidden form controls must remain aligned with the current behavior:

- `_captcha`: `false`
- `_subject`: `New portfolio inquiry`
- `_next`: `https://elvira-n.com/thank-you/`

The `/thank-you/` page is a static Next route, not a server callback. FormSubmit sends the message and then redirects the visitor to `_next`. Preserve the full canonical URL and its **trailing slash**: static export plus GitHub Pages otherwise risks a redirect or a route mismatch. Test the deployed flow with a real form submission only when the user authorizes sending an external email; otherwise verify the form action, hidden fields, build output, and the live thank-you URL.

## SEO, metadata, and visual conventions

- `metadataBase` and canonical metadata point to `https://elvira-n.com`.
- Use the current job title **Industrial & Manufacturing Engineer** in title, description, Open Graph/Twitter metadata, and the Person JSON-LD `jobTitle`.
- Keep the existing `Person` structured data accurate: name, EI status, professional site, LinkedIn, and qualified expertise. Never add unsupported credentials or employer claims.
- Open Graph and Twitter preview image: `/og.png`, 1200×630. If branding text changes, update the image and metadata together.
- Visual language: restrained navy/ink foundation, teal accent, clean technical typography, compact labels, high-contrast readable cards, and responsive layout. Do not introduce an unrelated visual style without a deliberate redesign request.

## Content accuracy and claim rules

### Credentials and facts that may be stated

- Colorado Engineer Intern (EI), active: **EI.0081521**.
- Fundamentals of Engineering exam: **Industrial Engineering passed**.
- Bauman Moscow State Technical University: Engineering Degree, Systems Engineering; NCEES evaluated as equivalent to a U.S. engineering bachelor's degree.
- The core direction: industrial/manufacturing engineering, process improvement, manufacturing systems, quality, and operations.

### Development areas — label as learning/in progress

Lean Six Sigma Green Belt, Python for engineering/data analysis and automation, Power BI, SQL/Python analytics, and BPMN/software proficiency are development areas. The current portfolio-study progress shown in the profile is:

- Lean Six Sigma Green Belt: 35%
- Python for Engineering Analytics: 45%
- Manufacturing Engineering: 40%

Do not present these as completed credentials, certifications, expert proficiency, or production experience.

### Never infer or overstate

- Do not claim Professional Engineer (PE) licensure.
- Do not call Elvira a certified Lean Six Sigma Green Belt or an expert in Python, Power BI, SQL, or BPMN.
- Do not invent performance metrics, project budgets, staff counts, employer addresses, manager names, GPA, salary history, degree dates, or completion dates.
- Do not convert learning projects, concept studies, or independent Kaizen work into paid manufacturing-project claims.
- Preserve actual work history and dates from the resume/profile source; tailor wording to a target role without changing facts.
- For applications, do not infer demographic, disability, veteran, salary, reference, or voluntary self-identification answers.

The local `Elvira_Nurgalieva_AI_Resume_Profile.txt` is an untracked, user-owned application-profile reference. It includes sensitive contact/address information and should not be published, committed, or copied to the public site unless the user explicitly asks.

## Deployment procedures

### GitHub Pages — primary domain

1. Read this handoff; inspect `git status --short` before editing.
2. Make the smallest requested source/content change.
3. Run `pnpm lint` and `pnpm build`; verify `out/` contains expected static routes, especially `/thank-you/` after contact changes.
4. Review `git diff --check` and the exact staged file list. Do not stage unrelated user files.
5. Commit the requested files and push the intended branch (normally `main` for the production release).
6. GitHub Actions workflow `.github/workflows/deploy-pages.yml` installs with `pnpm install --frozen-lockfile`, builds `out/`, adds `.nojekyll`, and deploys Pages.
7. Wait for the workflow and verify the affected `https://elvira-n.com/` route(s) after cache propagation.

GitHub Pages is static-only. Do not add API routes, server actions that require a server, or image optimization dependencies without redesigning the hosting approach.

### Sites deployment — separate public release

1. Use the `sites:sites-building` and `sites:sites-hosting` skills/tools. They are required for this project because `.openai/hosting.json` exists.
2. Preserve the local worktree and the separate Sites-managed source history. If a temporary clean worktree is needed, use it rather than overwriting uncommitted work.
3. Build through the Sites/Vite path (not the Next export): the Vite configuration packages a Worker-oriented `dist/` artifact.
4. Use the Sites connector to sync source, create/deploy a version, and retain its deployment result. Public deployment is an external release; do it only when the user asks/authorizes it.
5. Verify the requested `chatgpt.site` route after deployment. If content also belongs on the primary domain, perform and verify the GitHub Pages release separately.

Do not use a force push to reconcile Sites and GitHub histories. Do not assume a successful Vite/Sites release updated `origin/main`.

## Known issues and precautions at handoff time

These local changes existed at verification time and were **not** part of the committed site source. Treat them as user-owned unless the user explicitly directs otherwise:

```text
D  public/resume/Elvira-Nurgalieva-Profile.pdf
?? Elvira_Nurgalieva_AI_Resume_Profile.txt
?? tmp/
```

Implications:

- The public resume PDF is deleted in the current working tree. Do not silently restore, commit the deletion, or alter resume links. Ask the user which public resume file/version should be deployed if a resume change is requested.
- The profile text contains personal information for job applications and should remain private by default.
- `tmp/` contains working artifacts and should not be staged or removed without explicit direction.
- `package-lock.json` coexists with pnpm files. Follow pnpm because CI does; do not casually regenerate locks or switch package managers.
- The Sites configuration contains database/Worker scaffolding, but the present site needs no active database. Avoid adding stateful services unless the user expands scope.

## Recreate the site from scratch

1. Clone `git@github.com:ElviraLabs/personal_site.git` into the intended directory and checkout `main`.
2. Read this file in full; then run `git status --short` and `git remote -v` to ensure the checkout is the expected source.
3. Install Node 22+ and pnpm; run `corepack enable` and `pnpm install --frozen-lockfile`.
4. Run `pnpm dev` and inspect the home page, projects, journal, professional-development, and `/thank-you/` routes.
5. Add approved assets to `public/`; retain `public/og.png` or regenerate a compliant 1200×630 preview image if the brand changes.
6. Confirm `next.config.ts` retains static export, `trailingSlash: true`, and unoptimized images. Run `pnpm lint` and `pnpm build`.
7. Configure GitHub Pages for `ElviraLabs/personal_site`, retain the existing Pages workflow, and connect the custom domain `elvira-n.com` as required by GitHub Pages/DNS. Deploy by pushing a validated commit to `main`.
8. If recreating the Sites release too, retain `.openai/hosting.json`, use the required Sites skills to connect/sync the project, run the Vite/Worker build path, deploy a public Sites version, and verify its separate URL.
9. Configure FormSubmit for the listed recipient only with Elvira's approval. Ensure the form's `_next` target is the published canonical URL `https://elvira-n.com/thank-you/` and test the redirect appropriately.

## Safe future-update checklist

1. Read this handoff, inspect status, and identify which release surface the user means.
2. Preserve the positioning and claim rules above unless the user explicitly changes them.
3. Make minimal, source-of-truth changes; update metadata and `og.png` whenever the public brand title changes.
4. Build and lint with pnpm; review diffs and stage selectively.
5. Deploy only to the requested platform(s), then verify the exact live route(s).
6. Update this handoff in the same change when architecture, messaging, content rules, domains, source of truth, or deployment behavior materially changes.
