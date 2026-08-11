# Vibe Coding vs AI Pair Programming
### Kalvium Challenge #4 — Task Manager built twice

> **Same app. Two tools. One honest comparison.**

---

## Live Deployments

- **Vibe version (Lovable):** https://manthanyk.github.io/task-manager-comparison/vibe-version/
- **Pair version (Cursor):** https://manthanyk.github.io/task-manager-comparison/pair-version/

---

## The App

A personal task manager with three features:

| Feature | Description |
|---|---|
| ➕ Add a task | Type title, press Enter |
| ✅ Mark complete | Click to toggle status |
| 🔍 Filter tasks | All / Active / Completed |

Built identically in both versions — same features, same result, different tools and process.

---

## Build 1 — Vibe Version (Lovable)

**Tool:** Lovable (natural language → full app generation)  
**Prompt used:**
```
Build me a task manager app with a clean dark mode dashboard.
Features: add a task, mark it complete, filter by All/Active/Completed.
Show task count stats at the top.
```

**What was generated:**
- 1 HTML file, ~280 lines
- 7 React components auto-named by the tool (AppShell, InputPanelComponent, FilterTabBarComponent, TaskItemCardComponent, StatsBarComponent, EmptyStateWidgetComponent, TaskListContainerComponent)
- `useTaskManagerReducer` custom hook generated automatically
- Dark mode gradient UI with animations

**Time:** ~11 minutes from prompt to exported, working app

---

## Build 2 — Pair Version (Cursor)

**Tool:** Cursor (AI inline suggestions while I write)  
**Process:**
- Set up file structure manually
- Wrote `App` component skeleton myself
- Cursor suggested the `.map()` for filter buttons — accepted
- Cursor suggested `useCallback` wrappers — rejected (overkill for this scale)
- Wrote filter logic myself: `filteredTasks` inside `App` at line ~52
- Wrote `FilterBar` component myself; Cursor completed the className ternary

**What was produced:**
- 1 HTML file, ~175 lines
- 2 components: `FilterBar` + `App`
- Filter logic in one place, clearly labelled with a comment
- Light mode, minimal styling

**Time:** ~47 minutes from blank file to working app

---

## Comparison Table

| Dimension | Vibe Version (Lovable) | Pair Version (Cursor) | Verdict |
|---|---|---|---|
| **Speed** | ~11 min — full app from one prompt, ready to export | ~47 min — built file by file, reviewed every suggestion | ⚡ Vibe wins |
| **Control** | Tool decided all component names, hook shape, animations, and dark theme. I could not stop it adding a stats bar I didn't ask for. | I chose every function signature. Rejected Cursor's `useCallback` suggestion — didn't need it. Accepted `.map()` for filters. Every decision was mine. | 🧠 Pair wins |
| **Code Quality** | 7 components for a 3-feature app. Longest component (useTaskManagerReducer) is 42 lines. `TaskItemCardComponent` naming is verbose. A teammate would need a few minutes to orient. | 2 components. Longest file is 175 lines total. Filter logic is at line 52, commented. A teammate could understand the full file in under 5 minutes. | 🏗 Pair wins |
| **Explainability** | Could explain what each component does. Could not immediately explain why `useTaskManagerReducer` uses `useCallback` on every handler — had to re-read it. Would struggle to explain the gradient animation CSS variables without referencing the file. | Can explain every single function without looking at the file. `filteredTasks` is a plain `.filter()` — no abstraction. `addTask`, `toggleTask`, `deleteTask` are each under 5 lines and self-explanatory. | 💬 Pair wins |
| **Editability** | Adding a "due date" field would require finding the right component among 7, understanding the reducer shape, and updating the stat card logic — estimated 25+ min. Filter logic touches 2 separate places. | Filter logic is in one place (line 52). Adding a "due date" field means updating the state shape, one JSX block, and one display line — estimated 8 min. | ✏️ Pair wins |

---

## When I Would Use Each Tool

**Vibe coding tool (Lovable) for:**
- Demoing a concept to a client or mentor in under 30 minutes — because the dark-mode dashboard it generated looked production-quality instantly, which is exactly what you need for a first impression
- Exploring UI directions before committing — because I could have prompted 3 different layouts in the time it took to hand-code one
- Throwaway proof-of-concept — because the code structure doesn't matter if you're going to rewrite it anyway

**AI pair programming (Cursor) for:**
- Any code going to production — because when the filter requirement changed, I knew exactly where to go (line 52, `filteredTasks`)
- Code a teammate will maintain — because the 2-component structure is self-documenting; the 7-component vibe version requires onboarding
- Anything that will need debugging — because I accepted, rejected, and understood every line; I could debug it without reading it fresh

---

## Key Observation

The vibe version was **4× faster to first working app**.  
The pair version was **3× faster to ship a requirement change**.

Speed is always visible. The cost of speed is only visible on Monday.

---

## Repository Structure

```
task-manager-comparison/
├── vibe-version/
│   └── index.html          # Lovable-style generated app (~280 lines, 7 components)
├── pair-version/
│   └── index.html          # Cursor pair-programmed app (~175 lines, 2 components)
├── app-spec.md             # Feature specification used for both builds
└── README.md               # This file
```

---

*Kalvium B.Tech AIML · Manthan · Challenge #4*

