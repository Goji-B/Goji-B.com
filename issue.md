# Generic Issue Format (Activities)

Use this file as the shared meaning of a plain-text issue post.  
If someone posts in this structure, any contributor should be able to implement the change without extra clarification.

## Expected Input Format

```text
Game
Slug: <activity-slug>
Title: <activity-title>
Hub: <main|getting-ready>
Submitter
Email: <submitter-email>
Suggestion
<free-text change request>
```

## Field Meaning

- `Slug`: canonical activity route key (for example `bubble-pop-abc`).
- `Title`: human-facing activity name.
- `Hub`: activity group (`main` or `getting-ready`).
- `Email`: requestor contact (for follow-up only; do not expose in UI).
- `Suggestion`: requested behavior change in plain language.

## Implementation Contract

When an issue arrives in this format:

1. Locate component/page by `Slug` and `Hub`.
2. Convert `Suggestion` into explicit, testable rules.
3. Resolve ambiguous wording by creating non-overlapping ranges and documenting assumptions.
4. Implement minimal UI/logic updates only for that request.
5. Add/adjust labels in issue tracker if available:
   - `game/<slug>`
   - `hub/<hub>`
   - `status/new` -> `status/done` when complete

## Ambiguity Resolution Rule

If suggestion text has overlapping thresholds (for example, "20 and more" and "25 and more"), normalize into mutually exclusive ranges with the same intent, then record the normalized table in the issue comment or PR notes.

## Parsed Example (Current Request)

### Raw Issue

```text
Game
Slug: bubble-pop-abc
Title: Bubble Pop ABC
Hub: main
Submitter
Email: madhu.chandra@yahoo.com
Suggestion
Put 5Star for less than 15 seconds. 4 start up to 20 seconds three for 20 and more. Two for 25 and more. 1 for more than 30
```

### Normalized Requirement

Apply a star rating based on completion time:

- 5 stars: `< 15s`
- 4 stars: `>= 15s` and `< 20s`
- 3 stars: `>= 20s` and `< 25s`
- 2 stars: `>= 25s` and `<= 30s`
- 1 star: `> 30s`

### Suggested Acceptance Criteria

- Game shows a star rating at completion.
- Exactly one rating is shown per run.
- Boundary checks are correct at `15s`, `20s`, `25s`, and `30s`.
- Existing gameplay is unchanged except rating display.
