# READ FIRST — Goji-B Agent Onboarding

Use this file first when a new agent starts work in this repo.

## 1) Read order (top priority)

1. `local-activities-site-plan.md`  
   - Main source of truth for Activities product behavior, workflow, and decisions.
2. `feedback-thoughts.md`  
   - Feedback system status, phased checklist, issue format, and anti-abuse state.
3. `activities-management-system.md`  
   - Long-term AMS direction and deferred Pi plan.
4. `issue.md`  
   - Generic issue text format and normalization rules for implementation.
5. `README.md`  
   - Repo basics and where production code lives (`site/`).
6. `local-business-site-plan.md` *(only when work touches deploy/domain/business docs)*.

## 2) Current operating model (active)

- Primary workstream now: **improve activities from pasted issues**.
- User will paste issue text in chat (using the `Game / Slug / Title / Hub / Submitter / Suggestion` format).
- Agent should:
  1. Parse issue
  2. Implement code change
  3. Run build checks (`cd site && npm run build`)
  4. Commit + push to `main`
- **Default:** commit and push when done, unless user explicitly says not to.

## 3) Feedback platform state (as of 2026-06-02)

- Live: feedback page + worker + private improvements repo intake.
- Live protection: Turnstile, worker-side verification, KV rate limits, dedupe, spam checks, clearer retry/error messages.
- Deferred next-six list is documented in:
  - `feedback-thoughts.md` §9.1
  - `local-activities-site-plan.md` §9.1
  - `activities-management-system.md` §11.1

## 4) Code areas most often touched

- Main activity pages: `site/src/pages/activities/*.astro`
- Game components: `site/src/components/games/*.astro`
- Feedback page: `site/src/pages/activities/feedback.astro`
- Feedback config: `site/src/data/activityFeedbackConfig.ts`
- Deploy workflow: `.github/workflows/deploy-site.yml`
- Worker source (separate repo clone): `improvements-repo/worker/src/index.js`
- Worker config: `improvements-repo/worker/wrangler.toml`

## 5) Guardrails

- Follow age-band and UX rules in `local-activities-site-plan.md` §3.
- Do not introduce secrets into public repo files.
- Do not start Pi AMS implementation unless explicitly requested.
- Prefer focused diffs tied to one issue at a time.
