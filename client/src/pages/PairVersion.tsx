/** Monday Papertrail design: the pair build uses an orderly ruled-paper workspace to express deliberate control and easy-to-trace decisions. */
import { ArrowLeft, Braces } from "lucide-react";
import { Link } from "wouter";
import { TaskManager } from "@/components/TaskManager";

export default function PairVersion() {
  return <main className="app-page app-page--pair"><header className="app-page__header"><Link href="/" className="app-brand"><img src="/manus-storage/taskloop-logo_f20e8361.png" alt="" /><span>TASKLOOP<br />FIELD NOTE</span></Link><span className="app-page__badge"><Braces size={14} /> PAIR VERSION</span></header><div className="app-page__intro"><div><p className="eyebrow">BUILD 02 / CONTROL FIRST</p><h1>Trace. Decide.<br /><em>Change.</em></h1></div><p>Each function earns its place. Each state change leaves a mark you can explain tomorrow.</p></div><div className="inspection-strip inspection-strip--pair"><span>INSPECTION / 02</span><span>PATH: IDEA → FUNCTION</span><span>STATUS: TRACEABLE</span></div><TaskManager mode="pair" /><Link href="/" className="page-return"><ArrowLeft size={14} /> Return to the evidence desk</Link></main>;
}
