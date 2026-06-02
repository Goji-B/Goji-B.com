# Feedback on Activities — design notes

**Status:** **Phases A–C live** (2026-05-27), plus **anti-abuse hardening live** (2026-06-02). Ongoing: Phase D (review on GitHub). Phase E mostly deferred.  
**Scope:** All activity game pages under **`/activities/`** (including current and future promoted games).  
**Public site:** [Goji-B.com](https://github.com/Goji-B/Goji-B.com) · Feedback form: https://goji-b.com/activities/feedback/  
**Improvements inbox:** https://github.com/Goji-B/improvements (private)  
**Worker:** `https://goji-feedback.goji-feedback.workers.dev` (config: `site/src/data/activityFeedbackConfig.ts`)  
**GitHub App:** `Goji-B Feedback` (installed on `improvements` only)  
**Worker source:** `Goji-B/improvements` repo → `worker/`  
**Pi / AMS note:** `activities-management-system.md` deferred (no Pi for this phase).

---

## 1. Goal

Let parents, kids (with help), and testers **suggest improvements** without leaving the activities flow for long. Editors (you / Goji-B team) receive readable suggestions **with the game name attached**, and can follow up using the email address provided.

---

## 2. On every activity game page

### 2.1 “Blob” (short call-to-action)

Place **below the game** (above “Getting Ready games” / “All activities” back links), same visual language as other soft buttons (pill shape, not competing with play UI).

**Blob label (fixed):** **Suggest an improvement**  
**Accessibility:** Button or link with clear purpose; not only emoji.

### 2.2 Where it goes

One shared feedback page for all activities:

```text
/activities/feedback/?game=<slug>
```

Examples:

- From Nature Scavenger: `.../feedback/?game=nature-scavenger`
- From Road I Spy: `.../feedback/?game=road-i-spy`

The feedback page **reads `game` from the URL**, looks up the title in `gettingReadyGames.ts`, and shows:

- **Game:** Nature Scavenger (read-only, so senders see what we recorded)
- Hidden field `game` = slug (for submission)
- **Email** (required)
- **Suggestion** text area (required)

If `game` is missing or unknown, show a generic “Activity” line and a dropdown to pick the game (fallback).

---

## 3. Feedback page content

### 3.1 Headline

**Suggest an improvement**

### 3.2 Intro (plain language)

> We’re still improving these games. Tell us what would make this one more fun or easier to play.

### 3.3 Game name (auto)

- **Label:** `This suggestion is for`
- **Value:** Human title from data, e.g. **Nature Scavenger** 🌿  
- **Technical:** Hidden input `game=nature-scavenger` for the handler

### 3.4 Email (required)

- **Label:** `Your email`
- **Helper text (required):**  
  > We need your email to contact you. We won’t use it for marketing.

- **Validation:** Basic email format check only.
- **Privacy:** Link to a future **Privacy** page when it exists; one line on this page is enough for now.

### 3.5 Suggestion box

- **Label:** `Your suggestion`
- **Placeholder:** e.g. `What would you change? What was confusing or fun?`
- **Min length:** e.g. 10 characters (avoid empty spam)
- **Max length:** e.g. 2000 characters

### 3.6 Submit

- **Button:** `Send suggestion`
- **After submit:** Thank-you screen:  
  > Thanks! We read every suggestion.

### 3.7 Navigation

- **Back:** link to the game they came from (`/activities/<slug>/`) when `?game=` is valid  
- **Back to Activities hub**

Use `ActivityLayout` (or same shell as other activities) for consistency.

---

## 4. How to get suggestions to editors (GitHub-based)

**Phase 1 (current goal):** The site submits feedback to a **Cloudflare Worker**.

The Worker uses a **GitHub App** to create a **new Issue** in a **private repo** called `improvements` (only **you** have access for now; other users later).

**What ends up in each Issue:**
- `game=<slug>` (and optionally `hub=<getting-ready|main|future>`)
- Page URL + timestamp
- **Required** submitter email
- Required suggestion text

**No Pi involvement for this phase:** `activities-management-system.md` is deferred until later.

**Review on GitHub (one game = one place):**
- Use GitHub labels (e.g. `game/chess-kids`, `hub/getting-ready`) to group issues per game
- Editors review issues during a GitHub session, then implement in `Goji-B.com`

---

## 5. Agreed decisions (locked — 2026-05-27)

| Topic | Decision |
|--------|----------|
| Blob text | **Suggest an improvement** |
| Email | **Required** |
| Scope | All **current and future** activity game pages |
| Storage | Private GitHub repo **`improvements`** |
| Access | **You only** for now; add users later |
| Intake | **Cloudflare Worker** + **GitHub App** (no Pi) |
| Public site | Still **GitHub Pages**; Worker URL only in public config (no secrets in `Goji-B.com`) |
| Cost | GitHub Issues + private repo + Worker free tier expected at our volume |

---

## 6. Implementation jobs (do in order)

Phases **A–C** completed 2026-05-27. Phase **D** is ongoing whenever you review or fix games.

### Phase A — GitHub (`improvements` repo + App) — complete

| # | Job | Done |
|---|-----|------|
| **A1** | Create a **private** GitHub repository named **`improvements`** (under your account or `Goji-B` org). | [x] |
| **A2** | Add a short README describing: “One GitHub Issue per activity suggestion; not live site code.” | [x] |
| **A3** | Go to **GitHub → Settings → Developer settings → GitHub Apps → New GitHub App**. Name **`Goji-B Feedback`**. Homepage: `https://goji-b.com`. | [x] |
| **A4** | Set **Repository permissions → Issues: Read and write**. Webhook: **off** for v1 (optional later). | [x] |
| **A5** | **Install** the App on **`improvements` only** (not on public `Goji-B.com`). | [x] |
| **A6** | Save securely (password manager / offline): **App ID**, **Installation ID**, **private key** (`.pem`, download once). | [x] in Wrangler secrets |
| **A7** | Create GitHub **labels**: `status/new`, `status/done`, `status/wont-fix`, `hub/main`, `hub/getting-ready`, `game/<slug>` (142 games). | [x] |
| **A8** | Issue **title/body format** (see §7); implemented in Worker. | [x] |

### Phase B — Cloudflare Worker (form → Issue) — complete

| # | Job | Done |
|---|-----|------|
| **B1** | Create a **free Cloudflare account** at [cloudflare.com](https://www.cloudflare.com) if you do not have one. | [x] |
| **B2** | Worker name **`goji-feedback`**. URL: `https://goji-feedback.goji-feedback.workers.dev`. | [x] |
| **B3** | Wrangler secrets: `GITHUB_APP_ID`, `GITHUB_APP_PRIVATE_KEY`, `GITHUB_INSTALLATION_ID`. | [x] |
| **B4** | `ALLOWED_ORIGIN` = `https://goji-b.com` (CORS). | [x] |
| **B5** | Deploy Worker: POST JSON → validate → honeypot → GitHub Issue with labels. | [x] |
| **B6** | **CORS**: `OPTIONS` + `Access-Control-Allow-Origin: https://goji-b.com`. | [x] |
| **B7** | Max body size in Worker; optional Cloudflare rate rules later. | [x] |
| **B8** | POST test → Issue appears in `improvements` with correct game, email, text. | [x] |
| **B9** | Test **reject** cases (missing email, empty suggestion, honeypot, wrong method). | [ ] optional |
| **B10** | Worker URL recorded in `site/src/data/activityFeedbackConfig.ts`. | [x] |
| **B11** | Add Turnstile verification in Worker (`TURNSTILE_SECRET_KEY`, hostname check). | [x] |
| **B12** | Add KV-backed abuse controls (`FEEDBACK_KV`): IP/email rate limits + 24h duplicate detection. | [x] |
| **B13** | Add lightweight spam-text heuristics + clearer rejection reasons (`429`/`409`/captcha). | [x] |

### Phase C — Public site (`Goji-B.com`) — complete

| # | Job | Done |
|---|-----|------|
| **C1** | `site/src/pages/activities/feedback.astro` — required email + suggestion, honeypot, thank-you. | [x] |
| **C2** | `ActivityFeedbackBlob.astro` → `/activities/feedback/?game=&hub=`. | [x] |
| **C3** | Blob on **`GettingReadyGameShell.astro`** (all Getting Ready games). | [x] |
| **C4** | Blob on all **9 main** activity pages. | [x] |
| **C5** | Titles from `gettingReadyGames` + `mainActivities.ts`; dropdown fallback. | [x] |
| **C6** | Form POST to Worker URL via `activityFeedbackConfig.ts`. | [x] |
| **C7** | Live test: game → Suggest an improvement → submit → Issue in `improvements`. | [x] |
| **C8** | Build, push `main` (`05633c8`); live on goji-b.com. | [x] |
| **C9** | Add Cloudflare Turnstile widget to feedback form + token payload; wire `PUBLIC_CF_TURNSTILE_SITE_KEY` in Pages build. | [x] |
| **C10** | Improve user-facing failure messages and retry flow (reset captcha on failed submit). | [x] |

### Phase D — Editor workflow (ongoing, no extra infra)

| # | Job | Done |
|---|-----|------|
| **D1** | On GitHub, filter `improvements` Issues by label `game/<slug>` when reviewing one game. | [ ] |
| **D2** | When implementing a fix in `Goji-B.com`, reference or close the feedback Issue in the PR description. | [ ] |
| **D3** | Move Issue status via labels (e.g. `status/new` → `status/done` / `status/wont-fix`) — define full set in §8. | [ ] |

### Phase E — Later (not blocking launch; excluding completed E5)

| # | Job | Done |
|---|-----|------|
| **E1** | Privacy page on goji-b.com + link from feedback form (§8 wording). | [ ] |
| **E2** | Add other GitHub users to private `improvements` repo. | [ ] |
| **E3** | Optional: custom domain `feedback.goji-b.com` → Worker (DNS in Cloudflare). | [ ] |
| **E4** | Optional: auto “we received it” email via Resend/SendGrid from Worker (not GitHub). | [ ] |
| **E5** | Cloudflare Turnstile (CAPTCHA) anti-bot protection. | [x] implemented 2026-06-02 |
| **E6** | Revisit **Pi AMS** (`activities-management-system.md`) only if GitHub Issues workflow becomes too limited. | [ ] |

**Rough time (first time):** Phase A ~30 min · Phase B ~1–2 h · Phase C ~1–2 h · Phase D ongoing.

---

## 7. Issue template (in use — Worker body)

**Title (draft):** `[<game-slug>] <first line of suggestion, max ~80 chars>`

**Body (draft):**

```markdown
## Game
- **Slug:** nature-scavenger
- **Title:** Nature Scavenger
- **Hub:** getting-ready

## Submitter
- **Email:** parent@example.com

## Suggestion
<full text>

## Meta
- **Page:** https://goji-b.com/activities/getting-ready/nature-scavenger/
- **Submitted:** 2026-05-27T12:00:00Z
```

**Labels (draft):** `status/new`, `hub/getting-ready`, `game/nature-scavenger`

---

## 8. Copy bank (ready to use)

**Blob:** `Suggest an improvement`  
**Feedback page title:** `Suggest an improvement`  
**Email helper:** `Required. We won’t use it for marketing.`  
**Submit:** `Send suggestion`  
**Success:** `Thanks! We read every suggestion.`

---

## 9. Open decisions (remaining)

1. ~~**Issue title format**~~ — **Done:** `[slug] summary` (§7, live in Worker).
2. ~~**Label schema**~~ — **Done:** `status/*`, `hub/*`, `game/*` for all 142 games + 3 status + 2 hub.
3. **Email replies** — auto “we received it” on submit (Phase E4) vs manual reply from GitHub only?
4. **Privacy wording** — one-liner on form + Privacy page (Phase E1).

---

## 9.1 Deferred next-six list (resume checklist)

Use this as the short restart list when feedback work resumes:

1. **E1 Privacy page + form link** — publish data-use/retention wording.
2. **E2 Repo access** — add additional maintainers to private `improvements`.
3. **E3 Optional feedback subdomain** — `feedback.goji-b.com` routing.
4. **E4 Return email automation** — provider integration + templates (`thank_you`, `need_info`, `implemented`).
5. **D1–D3 Editor workflow discipline** — labels, triage routine, and PR/issue linkage.
6. **E6 Pi AMS decision gate** — only if GitHub Issues flow becomes insufficient.

---

## 10. Security & spam (live baseline + optional extras)

- Honeypot field (live).  
- Cloudflare Turnstile (live on feedback page + Worker verification).  
- KV-backed limits (live): IP 5/10m, IP 20/day, email 3/hour.  
- 24h duplicate detection by normalized hash (`game + email + suggestion`) (live).  
- Lightweight spam-text heuristics (live) to reject obvious junk.  
- No file uploads in v1.  
- Do not publish personal email in plain HTML after submit — use Worker POST only.

---

*Created 2026-05-16. Agreed 2026-05-27 (§5). Phases A–C completed 2026-05-27. Anti-abuse hardening (Turnstile + KV limits/dedupe + UX errors) completed 2026-06-02. Next: Phase D (ongoing), remaining Phase E when needed.*
