# Feedback on Activities — design notes

**Status:** Plan agreed — **not implemented** on the site yet. Do jobs in **§6** in order.  
**Scope:** All activity game pages under **`/activities/`** (including current and future promoted games).  
**Repo:** [Goji-B.com](https://github.com/Goji-B/Goji-B.com) · Live hub: https://goji-b.com/activities/getting-ready/  
**Backend (for this phase):** Cloudflare Worker + GitHub App writing into a private repo: `improvements`.  
**Pi / AMS note:** `activities-management-system.md` is deferred for now (kept for later, richer workflow).

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

Work through **one job at a time**. Do not wire the live site (Phase C) until Phase B passes a curl test.

### Phase A — GitHub (`improvements` repo + App)

| # | Job | Done |
|---|-----|------|
| **A1** | Create a **private** GitHub repository named **`improvements`** (under your account or `Goji-B` org). | [x] |
| **A2** | Add a short README describing: “One GitHub Issue per activity suggestion; not live site code.” | [x] |
| **A3** | Go to **GitHub → Settings → Developer settings → GitHub Apps → New GitHub App**. Name e.g. `Goji-B Feedback`. Homepage: `https://goji-b.com`. | [ ] |
| **A4** | Set **Repository permissions → Issues: Read and write**. Webhook: **off** for v1 (optional later). | [ ] |
| **A5** | **Install** the App on **`improvements` only** (not on public `Goji-B.com`). | [ ] |
| **A6** | Save securely (password manager / offline): **App ID**, **Installation ID**, **private key** (`.pem`, download once). | [ ] |
| **A7** | Create GitHub **labels** (optional but recommended): `status/new`, `hub/main`, `hub/getting-ready`, and `game/<slug>` for games you expect feedback on first (add more labels as needed). | [x] |
| **A8** | Decide issue **title/body format** (see §7 draft template); adjust when §8 open items are answered. | [x] |

### Phase B — Cloudflare Worker (form → Issue)

| # | Job | Done |
|---|-----|------|
| **B1** | Create a **free Cloudflare account** at [cloudflare.com](https://www.cloudflare.com) if you do not have one. | [ ] |
| **B2** | Open **Workers & Pages → Create → Worker**. Name e.g. `goji-feedback`. Note the URL: `https://goji-feedback.<subdomain>.workers.dev`. | [ ] |
| **B3** | In Worker **Settings → Variables and Secrets**, add secrets (never commit these): `GITHUB_APP_ID`, `GITHUB_APP_PRIVATE_KEY` (full PEM), `GITHUB_INSTALLATION_ID`, `GITHUB_REPO` (e.g. `Goji-B/improvements`). | [ ] |
| **B4** | Add variable `ALLOWED_ORIGIN` = `https://goji-b.com` (for CORS). | [ ] |
| **B5** | Deploy Worker script that: accepts **POST** JSON; validates `game`, `email`, `suggestion`; checks **honeypot**; builds GitHub App JWT → installation token → **creates Issue** with labels. | [x] code in `improvements` repo `worker/` — deploy pending |
| **B6** | Add **CORS**: respond to `OPTIONS`; `Access-Control-Allow-Origin: https://goji-b.com` on success/error. | [x] in worker code |
| **B7** | Add **rate limiting** (simple per-IP or Cloudflare rules) and reject oversized bodies. | [x] max body size in worker; optional CF rules later |
| **B8** | **Test with curl** (or Postman): POST sample JSON → confirm a new Issue appears in `improvements` with correct game, email, text, timestamp/URL in body. | [ ] |
| **B9** | Test **reject** cases: missing email, empty suggestion, filled honeypot, wrong HTTP method. | [ ] |
| **B10** | Record the **Worker URL** in a safe place; this is the only endpoint the public site will call. | [ ] |

### Phase C — Public site (`Goji-B.com` — implement when user approves build)

| # | Job | Done |
|---|-----|------|
| **C1** | Create `site/src/pages/activities/feedback.astro` — form: game (from `?game=`), **required email**, **required suggestion**, honeypot, thank-you state. | [ ] |
| **C2** | Create shared component e.g. `ActivityFeedbackBlob.astro` — link: `/activities/feedback/?game=<slug>&hub=...`. | [ ] |
| **C3** | Add blob to **`GettingReadyGameShell.astro`** (all Getting Ready games). | [ ] |
| **C4** | Add blob to **`ActivityLayout.astro`** (main hub activities). | [ ] |
| **C5** | Resolve game title from `gettingReadyGames.ts` + main activity inventory; fallback dropdown if `game` unknown. | [ ] |
| **C6** | Wire form **POST** to Worker URL (public config only — no GitHub secrets in repo). | [ ] |
| **C7** | **Phone test:** open a game → Suggest an improvement → submit → Issue in `improvements` with correct labels. | [ ] |
| **C8** | Build, commit, push `main`; verify on live goji-b.com. | [ ] |

### Phase D — Editor workflow (ongoing, no extra infra)

| # | Job | Done |
|---|-----|------|
| **D1** | On GitHub, filter `improvements` Issues by label `game/<slug>` when reviewing one game. | [ ] |
| **D2** | When implementing a fix in `Goji-B.com`, reference or close the feedback Issue in the PR description. | [ ] |
| **D3** | Move Issue status via labels (e.g. `status/new` → `status/done` / `status/wont-fix`) — define full set in §8. | [ ] |

### Phase E — Later (not blocking launch)

| # | Job | Done |
|---|-----|------|
| **E1** | Privacy page on goji-b.com + link from feedback form (§8 wording). | [ ] |
| **E2** | Add other GitHub users to private `improvements` repo. | [ ] |
| **E3** | Optional: custom domain `feedback.goji-b.com` → Worker (DNS in Cloudflare). | [ ] |
| **E4** | Optional: auto “we received it” email via Resend/SendGrid from Worker (not GitHub). | [ ] |
| **E5** | Optional: Cloudflare Turnstile (CAPTCHA) if spam appears. | [ ] |
| **E6** | Revisit **Pi AMS** (`activities-management-system.md`) only if GitHub Issues workflow becomes too limited. | [ ] |

**Rough time (first time):** Phase A ~30 min · Phase B ~1–2 h · Phase C ~1–2 h · Phase D ongoing.

---

## 7. Issue template (draft for Worker body)

Use this until §8 item 1 is finalized.

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

## 9. Open decisions (decide before or during Phase B/C)

1. **Issue title format** — `[slug] summary` (draft in §7) vs summary only?
2. **Label schema** — full list for `status/*` and when to create `game/*` labels (all 142 games upfront vs on first feedback)?
3. **Email replies** — auto “we received it” on submit (Phase E4) vs manual reply from GitHub only?
4. **Privacy wording** — one-liner on form (retention / deletion on request / contact email)?

---

## 10. Security & spam (lightweight)

- Honeypot field (leave empty).  
- Rate limit via Worker.  
- No file uploads in v1.  
- Do not publish personal email in plain HTML after submit — use Worker POST only.

---

*Created 2026-05-16. Agreed 2026-05-27 (§5). Implementation: follow §6 in order; site build (Phase C) when user approves.*
