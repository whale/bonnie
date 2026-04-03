# Bonnie Bloom Coaching

One-page website for a relationship coaching practice. Direct, warm, anti-cliche — built on Relational Life Therapy (RLT) and the RESET framework.

**Live site:** [bonnie-bloom.com](https://bonnie-bloom.com)

## How It Works

Content lives in `content/site.yml`. The site is built with [Eleventy](https://www.11ty.dev/) (a static site generator) and deployed automatically via GitHub Actions to GitHub Pages.

**Editing flow:**
1. Bonnie (or anyone with access) edits content in [Pages CMS](https://app.pagescms.org)
2. Pages CMS saves the edit as a git commit
3. GitHub Actions builds the site (~60 seconds)
4. GitHub Pages serves the updated site

## For Bonnie (Content Editing)

See **[EDITING.md](EDITING.md)** — a step-by-step guide for editing the website.

## For Developers

### Project Structure

```
content/site.yml       ← All editable content (YAML)
src/index.njk          ← HTML template (Nunjucks)
images/                ← Site images
.eleventy.js           ← Build config
.pages.yml             ← Pages CMS field definitions
.github/workflows/     ← GitHub Actions build + deploy
brief.md               ← Original content strategy
```

### Local Development

```bash
npm install
npm run serve        # http://localhost:8080 with live reload
```

### Build

```bash
npm run build        # Output goes to _site/
```

### Dependencies

Deliberately minimal. Pinned to exact versions.

| Dependency | Version | What it does |
|---|---|---|
| `@11ty/eleventy` | 3.0.0 | Static site generator |
| `js-yaml` | 4.1.0 | Reads content YAML files |

Node version pinned in `.nvmrc` (v20).

### Adding a New Content Field

1. Add the field to `content/site.yml`
2. Reference it in `src/index.njk` using `{{ site.your_field | safe }}`
3. Add the field definition to `.pages.yml` so it appears in Pages CMS
4. Build locally to verify, then push

### Hosting

- **GitHub Pages** — deploys from GitHub Actions (not from branch)
- **Custom domain:** `bonnie-bloom.com` (CNAME managed in Eleventy passthrough)
- **HTTPS:** Managed by GitHub Pages automatically

### Rollback

If a build breaks, the last successful deploy stays live on GitHub Pages indefinitely. No action needed.

To revert a bad content edit: find the commit in git history and revert it.

To restore the pre-CMS static site (emergency only):
```bash
gh api repos/whale/bonnie/pages -X PUT -f build_type=legacy -f source='{"branch":"main","path":"/"}'
git checkout a22ace7 -- index.html   # Last commit with standalone HTML
git push
```

### Pages CMS

- Config: `.pages.yml` in repo root
- Admin: [app.pagescms.org](https://app.pagescms.org)
- Collaborators are managed in the Pages CMS web UI (invite via email)
- If Pages CMS goes down: edit `content/site.yml` directly on github.com or locally
