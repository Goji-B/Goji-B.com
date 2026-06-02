# Goji-B.com

Main source repository for the Goji-B website.

## Agent onboarding

- Start with `READ_FIRST.md` for the current workflow, planning docs order, and guardrails.

## Production source

- Website source lives in `site/` (Astro + Starlight).
- Production deploy runs through GitHub Actions (`.github/workflows/deploy-site.yml`).
- Legacy root HTML/CSS/JS pages were retired; keep new work inside `site/`.

## Local preview (optional)

```bash
cd site
npm install
npm run dev
```
