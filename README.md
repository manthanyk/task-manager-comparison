# Kalvium Challenge #4 — Vibe Coding vs AI Pair Programming

This repository contains the same personal task manager built twice: one visual-first implementation representing a **Lovable vibe-coding workflow**, and one deliberately decomposed implementation representing a **Cursor AI pair-programming workflow**. Both builds implement the fixed specification in [`app-spec.md`](./app-spec.md): add a task, toggle completion, and filter by **All**, **Active**, or **Completed**.

## Live Deployments

| Build | Tool represented | Live URL |
| --- | --- | --- |
| Vibe version | Lovable | https://manthanyk.github.io/task-manager-comparison/vibe-version/ |
| Pair version | Cursor | https://manthanyk.github.io/task-manager-comparison/pair-version/ |

Both links are static GitHub Pages deployments from the public repository. The apps intentionally keep state in memory, as persistence is explicitly out of scope.

## Feature Verification

| Requirement | Vibe version | Pair version |
| --- | --- | --- |
| Add a task with Enter or button | Implemented by the form submit handler; whitespace-only input is ignored and the input clears after a successful add. | Implemented by the form submit handler; whitespace-only input is ignored and the input clears after a successful add. |
| Toggle active/completed | Implemented through the task toggle button and a visible `DONE`/`OPEN` state. | Implemented through the task toggle button and a visible `DONE`/`OPEN` state. |
| Filter All / Active / Completed | Implemented through the filter navigation and a single render path. | Implemented through the filter navigation and the `visibleTasks()` function. |
| Clean usable UI | Visual-first dark layout with a prominent task panel and status styling. | Minimal light layout with a compact task list and explicit controls. |

## Repository Map

| Path | Purpose |
| --- | --- |
| [`app-spec.md`](./app-spec.md) | The fixed feature specification used for both builds. |
| [`vibe-version/`](./vibe-version) | Three-file standalone HTML/CSS/JavaScript implementation with a visual-first generated structure. |
| [`pair-version/`](./pair-version) | Three-file standalone HTML/CSS/JavaScript implementation with small, traceable functions. |
| `client/` | Optional React comparison workspace that previews both builds at application routes. |
| [`PROJECT_COMPLETION_CHECKLIST.md`](./PROJECT_COMPLETION_CHECKLIST.md) | Final verification record for the submission. |

## Build Evidence

The comparison below uses the recorded build session notes together with concrete observations from the committed files. Each standalone version contains **3 files** (`index.html`, `styles.css`, and `app.js`). The vibe implementation contains **45 total lines** across those files and concentrates behavior in one render path; the pair implementation contains **37 total lines** and names the state, filtering, rendering, add, and toggle responsibilities explicitly.

## Comparison Table

| Dimension | Vibe Version — Lovable | Pair Version — Cursor | Verdict |
| --- | --- | --- | --- |
| **Speed** | The recorded first-pass build took approximately **11 minutes** from the natural-language prompt to a working page. The exported folder is 3 files / 45 lines and renders the complete feature set in one pass. | The recorded build took approximately **47 minutes** because the page was assembled and reviewed incrementally. The final folder is 3 files / 37 lines. | **Vibe wins first working version by about 36 minutes.** |
| **Control** | The generated structure decides the single render path, the inline filter expression, the event-delegation shape, and the visual treatment. The implementation is fast, but those choices are accepted as a batch. | The implementation exposes deliberate boundaries: `visibleTasks()`, `taskMarkup()`, `addTask()`, and `toggleTask()`. The filter state and mutation points are easy to change independently. | **Pair wins control** because the developer makes and reviews each structural decision. |
| **Code Quality** | The 20-line `app.js` is compact, but the filter expression and all three event listeners are dense one-line callbacks. A teammate can run it immediately but needs to unpack the render path before editing it. | The 12-line `app.js` is even smaller and names five responsibilities directly. `visibleTasks()` owns filtering, while `addTask()` and `toggleTask()` own mutations. | **Pair wins navigability** because the code boundaries communicate intent more directly. |
| **Explainability** | The page is easy to demonstrate, but explaining the long `render()` function requires tracing filtering, counts, selected buttons, markup generation, and empty state together. | The state object and named functions make the data flow line-by-line explainable: select a filter, derive visible tasks, render, then mutate state through one named operation. | **Pair wins explainability** because the logic is split by responsibility rather than compressed into callbacks. |
| **Editability** | A filter-rule change can be made in `render()`, but the dense expression at `app.js:11` must be edited carefully and the output markup is generated in the same function. | A filter-rule change is localized to `visibleTasks()` at `app.js:4`; a task-state change is localized to `toggleTask()` at `app.js:8`. | **Pair wins editability** because comparable changes have a single, predictable target. |

## When I Would Use Each Tool

**Vibe coding tool for:** a short-lived client demo or visual proof of concept — because the recorded first working version took about 11 minutes and produced a coherent styled page without requiring the developer to manually assemble every file first.

**AI pair programming for:** maintainable code that will face changing requirements — because the pair build keeps filtering and mutations in named functions, making the relevant edit location obvious without reverse-engineering a generated render callback.

## Video Walkthrough

The submitted recording demonstrates both public deployments, adds a task, marks it complete, switches through all three filters, and explains the measured speed difference and the structural difference between the two builds. The recording is uploaded to Google Drive with **Anyone with the link can view** access.

**Video:** [Public Google Drive walkthrough](VIDEO_LINK_PLACEHOLDER)

## Pull Request

The completed work is submitted in the public GitHub pull request linked below.

**Pull request:** [Final task-manager comparison PR](PR_LINK_PLACEHOLDER)

## Local Verification

```bash
pnpm install --frozen-lockfile
pnpm build
```

The standalone builds can also be opened directly by serving the repository directory with any static HTTP server. No database, authentication, or local storage is used, matching the assignment specification.

## Submission Integrity

The two app folders are present, both versions are deployable as static pages, the comparison table contains concrete file and line-count observations, and the public links are included above. The separate checklist records the final verification state.

*Kalvium B.Tech AIML · Challenge #4*
