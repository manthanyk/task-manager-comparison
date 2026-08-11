# Task Manager — App Specification

Both versions must implement exactly these features. No additions, no removals.

## Features

### 1. Add a Task
- Text input field
- Press Enter or click button to add
- Input clears after adding
- Empty input is ignored

### 2. Mark Complete
- Click to toggle task between active ↔ completed
- Visual indication of completed state (strikethrough / dimmed)

### 3. Filter Tasks
- Three filter options: **All**, **Active**, **Completed**
- Only show tasks matching the selected filter

### 4. UI Requirements
- Clean, usable interface
- Does not need to be complex

## Out of Scope
- Persistence (localStorage / database)
- Due dates
- Priority levels
- User authentication

## Evaluation Dimensions
After building both versions, compare across:
1. **Speed** — time from zero to working app
2. **Control** — who made decisions (you vs the tool)
3. **Code Quality** — can a teammate navigate it?
4. **Explainability** — can you explain every line?
5. **Editability** — how fast can you change it?
