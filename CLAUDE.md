# Bonnie — Project CLAUDE.md

## What This Is

One-page website for a relationship coaching practice. The client (Bonnie) is a relationship coach using Relational Life Therapy (RLT). The site needs to be direct, personal, and clearly differentiated from generic coaching sites.

**Live:** [bonnie-bloom.com](https://bonnie-bloom.com)

## Key Files

- `content/site.yml` — All editable content. This is what Pages CMS edits.
- `src/index.njk` — Nunjucks template. All HTML structure and styling.
- `.pages.yml` — Pages CMS field config. Defines what Bonnie sees in the editor.
- `.eleventy.js` — Build config. Copies images/CNAME, loads YAML data.
- `.github/workflows/build.yml` — GitHub Action: build + deploy to GitHub Pages.
- `brief.md` — Original content strategy. Source of truth for tone and intent.
- `EDITING.md` — Guide for Bonnie on how to edit the site.

## Stack

- **Eleventy 3.0.0** — static site generator (Nunjucks templates)
- **Tailwind CDN** + **Google Fonts** (DM Sans + Playfair Display) — loaded in template
- **GitHub Pages** — hosting, deployed via GitHub Actions (not branch source)
- **Pages CMS** — browser-based content editor at app.pagescms.org
- **Calendly** — booking integration (URL stored in `content/site.yml`)

## How Content Flows

1. Bonnie edits in Pages CMS → commits to `content/site.yml`
2. GitHub Action runs Eleventy → builds `_site/index.html`
3. GitHub Pages serves from the Actions artifact
4. ~60 seconds from save to live

## Content Structure

All content is in `content/site.yml`, grouped by section. The template at `src/index.njk` references fields via `{{ site.section.field }}`. HTML entities like `&nbsp;` require the `| safe` filter in the template.

## 9 Sections

1. **Hero** — "You're not broken. You're stuck in a pattern."
2. **Recognition** — "This might sound familiar"
3. **Reframe** — Pattern problem, not communication problem
4. **How I Work** — RESET framework (5 steps)
5. **What I Don't Do** — 4 contrast cards
6. **Quotes** — Client testimonials (carousel, duplicated for infinite scroll)
7. **Pricing** — 4 service tiers
8. **About** — Her story, credentials, belief statement
9. **Final CTA** — Book a free call

## Design Direction

- Warm, minimal, professional. Mobile-first.
- Colors: `#4A7C6F` (primary green), `#F5F0E8` (warm base), `#35584F` (dark accent), `#2D3633` (text)
- Typography: Playfair Display (headlines), DM Sans (body)
- **Avoid:** Stock photos, gradients, coaching cliches, pastel wellness palettes

## Decisions Made

- Content strategy finalized in `brief.md` — treat as approved copy.
- Tone: warm but direct. Basecamp clarity meets emotional intelligence.
- Domain: bonnie-bloom.com
- Booking: Calendly (15-min intro call)
- CMS: Pages CMS with magic link auth for Bonnie
- Hosting: GitHub Pages via Actions

## Adding/Changing Content Fields

1. Add field to `content/site.yml`
2. Reference in `src/index.njk` with `{{ site.field | safe }}`
3. Add field definition to `.pages.yml` for Pages CMS
4. Test locally with `npm run serve`, then push

## Open Questions

- Real testimonials (currently placeholder quotes)
