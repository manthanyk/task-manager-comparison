# Taskloop: Vibe Coding vs AI Pair Programming

This repository contains **two working, standalone task-manager implementations** with the same deliberately narrow feature scope: add a task, mark it completed, and filter by **All**, **Active**, or **Completed**. The root project provides a comparison workspace at `/`, with direct routes to interactive visual versions at `/vibe-version` and `/pair-version`.

> **Submission integrity notice.** The assignment requires first-hand evidence from a named vibe tool and a named pair-programming tool. This repository deliberately does **not** fabricate those tool sessions, timings, suggestion counts, deployment URLs, or personal video. Use the included completion checklist to replace marked evidence fields with facts from your own session before submitting.

## Repository map

| Path | Purpose |
| --- | --- |
| [`app-spec.md`](./app-spec.md) | Fixed feature specification used for both builds. |
| [`vibe-version/`](./vibe-version) | Standalone HTML/CSS/JavaScript task-manager implementation with a visual-first structure. |
| [`pair-version/`](./pair-version) | Standalone HTML/CSS/JavaScript task-manager implementation with small, traceable functions. |
| `client/` | React comparison workspace that previews both builds at application routes. |
| [`PROJECT_COMPLETION_CHECKLIST.md`](./PROJECT_COMPLETION_CHECKLIST.md) | Honest handoff for remaining account- and evidence-dependent requirements. |

## Run locally

```bash
pnpm install
pnpm dev
```

Then open the comparison desk at `http://localhost:3000`, the vibe preview at `http://localhost:3000/vibe-version`, or the pair preview at `http://localhost:3000/pair-version`.

## Live Deployments

| Build | Live URL |
| --- | --- |
| Vibe version | **Pending publication:** add the URL after you publish this build. |
| Pair version | **Pending publication:** add the URL after you publish this build. |

## Comparison Table

Replace every bracketed field below only with measurements and observations you personally recorded while using the instructor-approved tools. The brief explicitly marks invented or vague evidence as unacceptable.

| Dimension | Vibe Version — [record the actual tool] | Pair Version — [record the actual tool] | Verdict |
| --- | --- | --- |
| **Speed** | `[minutes from one prompt to a running app]`; `[generated file count]`; `[what the tool created in one pass]` | `[minutes from project setup to a running app]`; `[manual edits or accepted suggestions]` | `[Which approach was faster in your recorded session, and by how much?]` |
| **Control** | `[specific request the generator honored or ignored]` | `[specific structure, function, or UI decision you made while coding]` | `[Who controlled more implementation choices, based on the examples above?]` |
| **Code Quality** | `[component/file structure and any duplication or navigation observation]` | `[component/file structure and the largest component or clearest boundary]` | `[Which codebase a teammate could navigate more easily, and why?]` |
| **Explainability** | `[one piece of generated logic you did or did not understand immediately]` | `[one function or state flow you could explain line by line]` | `[Which build you could explain more confidently, with evidence?]` |
| **Editability** | `[time and files touched for one comparable change]` | `[time and files touched for the same comparable change]` | `[Which change path was shorter and more predictable?]` |

## When I Would Use Each Tool

**Vibe coding tool for:** `[a narrowly scoped, visual, or disposable scenario]` — because `[cite a specific speed or first-pass UI observation from your actual build]`.

**AI pair programming for:** `[a maintainable or likely-to-change production scenario]` — because `[cite a specific control, explainability, or editability observation from your actual build]`.

## Evidence and video plan

In a 2–3 minute recording, demonstrate both public deployments by adding one task, marking it complete, and switching through the three filters. Then explain at least two **recorded** build differences, such as measured setup time, component/file count, an overridden inline suggestion, or the time required for the same requirement change. Record with your camera enabled and share the finished Google Drive file as “Anyone with the link can view.”

## Pull Request description template

```md
## AI coding comparison submission

- Vibe tool used: [Lovable / v0 / Google AI Studio Build]
- Pair-programming tool used: [GitHub Copilot / Cursor]
- Vibe deployment: [public URL]
- Pair deployment: [public URL]
- Key observation: [one specific, measured comparison result]
- Video: [public Google Drive URL]
```

## Final handoff

Before submitting, work through [`PROJECT_COMPLETION_CHECKLIST.md`](./PROJECT_COMPLETION_CHECKLIST.md). It identifies the remaining actions that cannot be truthfully completed without your own approved-tool sessions, public hosting and GitHub account, and personal camera recording.

