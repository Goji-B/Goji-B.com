# Goji-B / company site — master plan & policies

**Purpose:** Single reference for **what we decided**, **how we work**, and **what to do next**. Keep this file in the repo root so context survives machine or agent changes.  
**Not for the public web** unless you deliberately publish it.

**Repo:** [https://github.com/Goji-B/Goji-B.com](https://github.com/Goji-B/Goji-B.com)

---

## 1. Business & product (what we are building)

- **Company:** Electronics firm building **electronic modules** and shipping **first-class Zephyr RTOS sample code**.
- **Samples policy:** Even though we call them “samples,” they must be **fully functional**, **high standard**, and **credible for buyers** — not throwaway demos. This supports **sales** and helps **new learners** adopt the hardware without fighting broken examples.
- **Content shape (phase 1):** About **10–15 modules**, each with roughly **three complete Zephyr samples** reflecting **different use cases** for the same module.
- **Audience order:** **Investors** first (clarity, polish, credibility); then **customers** and **learners**.
- **Traffic:** Low initially; investor demos matter more than scale at first.

---

## 2. Technical stack (locked decisions)

| Topic | Decision |
|--------|-----------|
| **Site framework** | **Astro** + **Starlight** (documentation + marketing hybrid). |
| **Language** | **TypeScript**, **strict** mode. |
| **Output** | **Static** site (`npm run build` → `dist/`). No requirement for Node at **runtime** on the server. |
| **Content** | **MDX / Starlight** pages; later **structured data** (YAML/JSON) for modules, SKUs, compatibility matrices. |
| **Zephyr / firmware** | **Source of truth = Git repos** (tags/releases as appropriate). Website **explains, links, and excerpts** — it does **not** replace the repo as the buildable project. |

**Rationale:** Fast pages, minimal client JS, excellent for technical docs, same artifact hosts on **Pi**, **GitHub Pages**, or any static CDN later.

---

## 3. Repositories & folders (current direction)

### Primary website repo (active)

- **GitHub:** [https://github.com/Goji-B/Goji-B.com](https://github.com/Goji-B/Goji-B.com)
- **Current contents (legacy v0):** Static **HTML + CSS + JS** at repo root (`index.html`, `script.js`, `styles.css`, etc.), plus **`CNAME`** (custom domain for GitHub Pages), `LICENSE`, `README.md`.
- **Target layout after Starlight scaffold:**

```text
Goji-B.com/                    # repo root — clone of GitHub repo
├── CNAME                      # Pages / custom domain (keep; may duplicate into Astro public/ when deploying)
├── README.md
├── LICENSE
├── goji_b_plan.md             # this file — continuity & policy
├── index.html                 # legacy — remove or replace when new site goes live
├── script.js, styles.css, ... # legacy — same
└── site/                      # NEW: Astro + Starlight project
    ├── src/
    ├── public/                # put CNAME here when Astro deploy is the only publish path
    ├── astro.config.mjs
    └── dist/                  # build output — deploy this to hosting (do not hand-edit)
```

- **Scaffold command** (run from **repo root**, after clone):

```bash
npm create astro@latest site -- --template starlight --install --typescript strict --git false --yes
```

Use a **`site/`** subfolder so we **do not overwrite** existing root files until **cutover** is intentional.

### Legacy / Pi path (historical)

- **`ro.gogie.com`** on a **Raspberry Pi** was discussed for early hosting (**reverse VPN** exposes it). **Plans shifted** toward **GitHub** as the main development home under **Goji-B/Goji-B.com**; Pi may still be used for other roles or staging — **not required** for the public site if **GitHub Pages** is primary.
- Older **`public_html/`** + PHP experiments live outside this repo; treat as **superseded** for the main company site unless you revive them.

### Laptop working copy

- **Intended path:** `C:\zephyrproject\Goji-B.com` (clone of [Goji-B/Goji-B.com](https://github.com/Goji-B/Goji-B.com)).
- **Node.js:** **20 LTS** (or current LTS from [nodejs.org](https://nodejs.org)).

---

## 4. Before we switch sites — workflow on the legacy root (today’s path)

While the live site still serves **root** `index.html` + assets (before Starlight cutover):

1. **Edit** files at repo root (`index.html`, `styles.css`, `script.js`, etc.) as needed.
2. **Commit** with a short message describing the change.
3. **Push** to `origin` (usually `main`).
4. **Wait for GitHub Pages:** changes typically appear within **about one to five minutes**; use a **hard refresh** (e.g. Ctrl+F5) if you still see old styles.
5. **Do not** delete `CNAME` or break custom-domain settings until the Astro deploy path is confirmed.

After Starlight lives in **`site/`**, local preview: `cd site && npm run dev`. Production build: `cd site && npm run build` → deploy **`site/dist/`** per §6.

---

## 5. Git, GitHub, and what we publish

### Policies

1. **The GitHub repo holds the *source* of the website** (Astro/Starlight, markdown, config, this plan file). **Do not** maintain a repo that is **only** built HTML with **no** source — it makes updates painful and loses history.
2. **`dist/`** is a **build artifact.** Default: add **`dist/` to `.gitignore`** in the Astro project. Deploy `dist/` via **GitHub Actions** and/or manual upload — **do not** rely on committing `dist/` unless you have a deliberate, documented exception.
3. **Optional:** **GitHub Actions** runs `npm ci` + `npm run build` on push; publishes to **GitHub Pages**. Then **local Node is optional** for *deployment*, but **still recommended** on the laptop for `npm run dev` (fast preview).
4. **GitHub Pages vs Pi:** **Pages** is a strong option for **reliability** and **low ops** for a static site. **Pi** remains valid for self-hosting or staging. They are **alternatives**, not mutually exclusive (e.g. Pi staging + Pages production).

### Custom domain

- Repo already includes **`CNAME`** for GitHub Pages. When Astro becomes the only site, ensure **`CNAME`** is copied into **`site/public/CNAME`** (or equivalent deploy step) so the live domain keeps working.

---

## 6. Development environment (Windows) — lessons learned

- **PowerShell & npm:** If `npm` fails with *running scripts is disabled*, set for current user:

  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

  Or use **cmd.exe** / `npm.cmd` instead of `npm.ps1`.

- **Chocolatey:** **Optional.** Not required for Node or Astro. **Winget** (`winget install OpenJS.NodeJS.LTS`) or the **official Node installer** is enough.

---

## 7. Workflow (how we work)

1. **Update this plan** when decisions change — **before** or **right after** big pivots.
2. **Site content** lives under **`site/src`** (Starlight) once scaffolded; until then, legacy root files apply.
3. **Zephyr projects** live in **their own Git repos**; pages **link** to them with clear **version/board** notes.
4. **Ship (Starlight era):** `cd site && npm run build` → deploy **`site/dist/`** to the chosen host (Pages workflow, manual upload, or Pi `public_html`).

---

## 8. Checklist (living)

### Tooling

- [x] Node.js LTS working on laptop (incl. PowerShell execution policy if needed).
- [ ] Clone [Goji-B/Goji-B.com](https://github.com/Goji-B/Goji-B.com) to `C:\zephyrproject\Goji-B.com` (if not already).
- [x] **`goji_b_plan.md`** in repo root (this file).
- [ ] Run Starlight scaffold into **`site/`** (see §3).
- [ ] `npm run dev` in `site/` — confirm starter loads.
- [ ] `npm run build` — confirm `site/dist/` exists.

### Hosting & cutover

- [ ] Configure **GitHub Pages** (and/or Actions) to serve **`site/dist`** after build.
- [ ] Preserve **custom domain** (`CNAME`) through deploy.
- [ ] Remove or archive **legacy** root `index.html` / old assets when the new site is live.
- [ ] Decide final **canonical URL** (e.g. `goji-b.com` vs other) and document in *Decisions* below.

### Content (investor phase)

- [ ] Starlight **sidebar**: Home → Company → Modules → per-module **Overview**, **specs**, **Sample 1 / 2 / 3** + **Git links**.
- [ ] Placeholder pages for **10–15 modules**.
- [ ] **Three sample stubs per module** (purpose, board, Zephyr version, repo URL).

### Later

- [ ] Replace stubs with real copy, diagrams, compatibility tables.
- [ ] Optional: CI to **build** Zephyr samples in separate repos.
- [ ] Headless CMS **only if** non-devs must edit copy often (v1 can stay Git-only).

---

## 9. Decisions log (append-only style)

| Date | Decision |
|------|----------|
| 2026-05 | Stack: **Astro + Starlight**, TS strict, **static** output. |
| 2026-05 | **Zephyr code** in **Git repos**; site = narrative + links. |
| 2026-05 | **~10–15 modules**, **~3 Zephyr samples** each for first phase. |
| 2026-05 | **Develop on laptop**; **`site/dist`** is what gets hosted. |
| 2026-05 | **GitHub** repo [Goji-B/Goji-B.com](https://github.com/Goji-B/Goji-B.com) is the **main** website project; Starlight in **`site/`** to preserve legacy root until cutover. |
| 2026-05 | **Source in Git**; **`dist/`** via build/CI — avoid repo that is only built files. |
| 2026-05 | **GitHub Pages** encouraged for reliability; **Pi** optional / staging / other uses. |
| 2026-05-04 | Canonical planning doc in repo: **`goji_b_plan.md`**; retired transfer file `goji_B_Plan.md.txt`. |

---

## 10. Open questions

- **Canonical domain** and branding: Goji-B.com vs historical **ro.gogie.com** naming in collateral.
- **TLS:** If using Pages, Microsoft/GitHub handles edge TLS; if Pi, where does termination happen (VPN vs box)?
- **CMS:** Git-only for v1 vs Sanity/Contentful later.

---

## 11. Agent / handoff policy (read this first)

When continuing this project in a **new chat or agent**:

1. **Read `goji_b_plan.md`** in the repo root.
2. **Do not** replace the whole repo with a greenfield Astro app at root until **legacy cutover** is agreed — use **`site/`** for Starlight.
3. **Preserve** `CNAME` and domain behavior when changing deploy.
4. **Prefer** small, focused changes; match existing project conventions inside `site/` once scaffolded.
5. **Zephyr samples** are **not** inlined as the only copy — **link to Git** with version/board clarity.

---

## 12. File change log

| Date | Change |
|------|--------|
| 2026-05-04 | Created consolidated plan (product, stack, repo layout, Git/Pages policies, Windows notes, checklist, agent handoff). |
| 2026-05-04 | Added §4 *Before we switch sites* (legacy root edit → commit → push → Pages timing). |
| 2026-05-04 | Renamed / replaced transfer artifact; canonical file is **`goji_b_plan.md`**. |
