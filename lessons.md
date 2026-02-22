# Lessons

## Deployment

- **What happened:** Deployed to Vercel without checking how other projects deploy. Had to tear it down and redo on GitHub Pages.
- **Rule:** Static HTML sites go to GitHub Pages (`whale.github.io/project-name`). Vercel is for projects with build steps. Always check existing projects before deploying anything new.

## Site Comparison

- **What happened:** Compared relationaltherapies.com to our site using a text dump and got the verbosity read backwards. Called their site wordy when it's actually tighter section-for-section.
- **Rule:** When comparing two sites, do three passes — don't collapse them into one:
  - **Content strategy:** Count sentences per section, not total word count. Note what each section *does* (teaches, reassures, sells, differentiates) and how much text it uses to do it. Where does the site repeat itself? Where does it stay disciplined?
  - **Design/visual:** Screenshot both at the same viewport width. Compare section height, heading scale, whitespace-to-text ratio, how much the layout carries vs. how much the copy carries. Note what breaks up the text (photos, cards, icons, callouts) and what's left as unbroken paragraphs.
  - **Implementation:** Note interactive patterns (carousels, accordions, video embeds), responsive behavior, and anything that requires JS vs. CSS-only. Check what's static and what's dynamic.

## Git Hygiene

- **What happened:** Pushed Playwright screenshots and console logs to the repo on first deploy. Had to clean up in a second commit.
- **Rule:** Add `.gitignore` before the first commit. Especially when Playwright is generating screenshots during development.
