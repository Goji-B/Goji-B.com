# Feedback on Activities — design notes

**Status:** Thought / proposal — **not implemented** on the site yet.  
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

If `game` is missing or unknown, show a generic “Getting Ready activity” line and a dropdown to pick the game (fallback).

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

## 5. Implementation checklist (when approved)

- [ ] Add `feedback-thoughts.md` decisions to `local-activities-site-plan.md` §10 log (optional).  
- [ ] Create page `site/src/pages/activities/feedback.astro`.  
- [ ] Add blob component on both shells:
  - `GettingReadyGameShell.astro` (Getting Ready games)
  - `ActivityLayout.astro` (main activities)
- [ ] Deploy a Cloudflare Worker endpoint that creates GitHub Issues in private repo `improvements` (using GitHub App credentials kept on Worker).
- [ ] Wire the feedback page to POST to the Worker endpoint (no secrets in the public repo).
- [ ] Test from phone: open game → suggest → submit → verify an Issue appears with correct `game=<slug>` and includes required `email+text`.
- [ ] Add honeypot + thank-you state.  
- [ ] Later: Privacy page link; COPPA-aware wording if site targets children directly (form is usually filled by adult).  
- [ ] Keep the “Suggest an improvement” blob on both current and future activity games.

---

## 6. Copy bank (ready to use)

**Blob:** `Suggest an improvement`  
**Feedback page title:** `Suggest an improvement`  
**Email helper:** `Required. We won’t use it for marketing.`  
**Submit:** `Send suggestion`  
**Success:** `Thanks! We read every suggestion.`

---

## 7. Open decisions (agree before build)

1. **Issue title format** — should it be `[game]` + summary, or just the summary?
2. **Label schema** — which labels do we want for `hub`, `status`, and `game=<slug>`?
3. **Email replies** — do we auto-send a “we received it” thank-you on submit, or only later/manual?
4. **Privacy wording** — what should the one-liner say (retention / deletion on request / contact)?

---

## 8. Security & spam (lightweight)

- Honeypot field (leave empty).  
- Rate limit via Worker.  
- No file uploads in v1.  
- Do not publish personal email in plain HTML after submit — use Worker POST only.

---

*Document created 2026-05-16. Implement only after user agrees on §7.*
