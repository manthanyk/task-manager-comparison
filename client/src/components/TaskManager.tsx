/**
 * Monday Papertrail design: a tactile editorial task work surface with paper-like hierarchy,
 * Ultramarine Ink emphasis, decisive checkmarks, and monospaced evidence labels.
 */
import { Check, Plus } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Filter = "all" | "active" | "completed";
type Task = { id: number; title: string; completed: boolean };
const initialTasks: Task[] = [
  { id: 1, title: "Map the filter state", completed: false },
  { id: 2, title: "Test the active task view", completed: false },
  { id: 3, title: "Keep the implementation explainable", completed: true },
];
const filters: Array<{ key: Filter; label: string }> = [
  { key: "all", label: "All" }, { key: "active", label: "Active" }, { key: "completed", label: "Completed" },
];

export function TaskManager({ mode }: { mode: "vibe" | "pair" }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<Filter>("all");
  const [title, setTitle] = useState("");
  const visibleTasks = useMemo(() => tasks.filter((task) => filter === "all" || (filter === "active" ? !task.completed : task.completed)), [filter, tasks]);
  const activeCount = tasks.filter((task) => !task.completed).length;
  const isVibe = mode === "vibe";

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    setTasks((current) => [{ id: Date.now(), title: trimmedTitle, completed: false }, ...current]);
    setTitle("");
    setFilter("all");
  }
  function toggleTask(taskId: number) { setTasks((current) => current.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task)); }

  return <section className={`task-manager ${isVibe ? "task-manager--vibe" : "task-manager--pair"}`}>
    <div className="task-manager__topline"><span>{isVibe ? "GENERATED WORKSPACE" : "PAIR-BUILT WORKSPACE"}</span><span>{activeCount} ACTIVE</span></div>
    <div className="task-manager__heading"><div><p className="eyebrow">PERSONAL TASK MANAGER</p><h1>{isVibe ? "Move fast." : "Keep the thread."}</h1></div><div className="task-manager__count"><strong>{tasks.length}</strong><span>tasks</span></div></div>
    <form className="task-entry" onSubmit={addTask}><label className="sr-only" htmlFor={`${mode}-task-title`}>New task title</label><input id={`${mode}-task-title`} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Write a task and press Enter" maxLength={120} /><button type="submit" aria-label="Add task"><Plus aria-hidden="true" size={20} /><span>Add</span></button></form>
    <div className="task-filter" aria-label="Filter tasks"><span className="task-filter__label">SHOW</span>{filters.map((item) => <button type="button" key={item.key} className={filter === item.key ? "is-selected" : ""} onClick={() => setFilter(item.key)} aria-pressed={filter === item.key}>{item.label}</button>)}</div>
    <div className="task-list" aria-live="polite">{visibleTasks.length ? visibleTasks.map((task, index) => <article className={`task-row ${task.completed ? "is-complete" : ""}`} key={task.id}><span className="task-row__index">{String(index + 1).padStart(2, "0")}</span><button className="task-row__toggle" type="button" onClick={() => toggleTask(task.id)} aria-label={`Mark ${task.title} as ${task.completed ? "active" : "complete"}`} aria-pressed={task.completed}>{task.completed && <Check aria-hidden="true" size={15} strokeWidth={3} />}</button><span className="task-row__title">{task.title}</span><span className="task-row__state">{task.completed ? "DONE" : "OPEN"}</span></article>) : <div className="task-empty">No tasks in this filter. Try another view.</div>}</div>
  </section>;
}
