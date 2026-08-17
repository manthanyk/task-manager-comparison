/** Monday Papertrail design: routes present an editorial comparison desk plus two direct task-work surfaces. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PairVersion from "./pages/PairVersion";
import VibeVersion from "./pages/VibeVersion";
function Router() { return <Switch><Route path="/" component={Home} /><Route path="/vibe-version" component={VibeVersion} /><Route path="/pair-version" component={PairVersion} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
