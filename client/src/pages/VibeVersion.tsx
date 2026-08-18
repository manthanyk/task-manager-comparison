/** Monday Papertrail design: the vibe build uses a saturated, expressive paper workspace while preserving the exact shared feature set. */
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { TaskManager } from "@/components/TaskManager";

export default function VibeVersion() {
  return <main className="app-page app-page--vibe"><header className="app-page__header"><Link href="/" className="app-brand"><img src="/manus-storage/taskloop-logo_f20e8361.png" alt="" /><span>TASKLOOP<br />FIELD NOTE</span></Link><span className="app-page__badge"><Sparkles size={14} /> VIBE VERSION</span></header><div className="app-page__intro"><div><p className="eyebrow">BUILD 01 / VISUAL FIRST</p><h1>Prompt. Generate.<br /><em>Inspect.</em></h1></div><p>Fast output is useful only when its structure still leaves a trail you can follow.</p></div><div className="inspection-strip inspection-strip--vibe"><span>INSPECTION / 01</span><span>PATH: PROMPT → EXPORT</span><span>STATUS: RUNNABLE</span></div><TaskManager mode="vibe" /><Link href="/" className="page-return"><ArrowLeft size={14} /> Return to the evidence desk</Link></main>;
}
