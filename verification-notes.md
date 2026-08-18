# Verification Notes

## Local browser check: vibe version

The Vite-served `/vibe-version/` route loaded successfully with page title `Taskloop — Two Builds, One App` and zero console errors. The rendered page exposed the required New task title textbox, Add task button, and All / Active / Completed filter controls. Three starter tasks rendered, with two active and one completed. The page also exposed accessible toggle buttons for each task.

## Local browser check: pair version

The Vite-served `/pair-version/` route loaded successfully with the same page title and zero console errors. It exposed the required New task title textbox, Add task button, and All / Active / Completed filter controls. Three starter tasks rendered, with two active and one completed. The pair route also exposed accessible toggle buttons for each task.

## Pair interaction check

Typing `Video walkthrough task` and pressing Enter increased the total from 3 to 4, increased active tasks from 2 to 3, inserted the new task at the top, and left the textbox empty. No console errors were reported.

## Pair completion check

Clicking the newly added task’s toggle changed its accessible label from “mark ... complete” to “mark ... active,” changed the visible state from `OPEN` to `DONE`, and reduced the active count from 3 to 2. No console errors were reported.

## Route note

The Vite development server resolves `/vibe-version/` and `/pair-version/` to the comparison workspace’s React preview routes, which is why the preview snapshot uses `client/src/components/TaskManager.tsx` metadata. The raw standalone folder files will be verified separately through a static-file server before GitHub Pages publication.

## Raw static pair-version check

The exact `pair-version/index.html` served by the static server loaded with title `Task Manager — Pair Version`. It exposed the task-title textbox, Add task button, All / Active / Completed filters, three starter task rows, and correct initial counts of 3 total and 2 active.

## Raw static vibe-version check

The exact `vibe-version/index.html` served by the static server loaded with title `Task Manager — Vibe Version`. It exposed the task-title textbox, Add task button, All / Active / Completed filters, three starter task rows, and correct initial counts of 3 total and 2 active.
