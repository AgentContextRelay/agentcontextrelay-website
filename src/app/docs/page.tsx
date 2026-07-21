import Link from "next/link";
import { Book, Code, Terminal, Workflow, GitBranch, Puzzle } from "lucide-react";

const sections = [
  {
    icon: Book,
    title: "Getting Started",
    desc: "Install ACR, set up your first project, and launch your first coding agent.",
    href: "/docs#getting-started",
  },
  {
    icon: Terminal,
    title: "Terminal & PTY",
    desc: "Up to 50 concurrent PTY sessions, split panes, zoom, copy/paste, and command blocks.",
    href: "/docs#terminal",
  },
  {
    icon: Workflow,
    title: "Agent Context Relay",
    desc: "Capture, normalize, compact, and relay context between agents. The core ACR loop.",
    href: "/docs#acr",
  },
  {
    icon: GitBranch,
    title: "Git Worktrees",
    desc: "Automatic worktree creation, management, and cleanup. Per-branch terminal isolation.",
    href: "/docs#worktrees",
  },
  {
    icon: Code,
    title: "Architecture",
    desc: "Rust backend (Tauri v2), SolidJS frontend, alacritty_terminal, MCP protocol.",
    href: "/docs#architecture",
  },
  {
    icon: Puzzle,
    title: "Plugins & MCP",
    desc: "Plugin system with hot reload, MCP Proxy Hub, capability-gated runtime.",
    href: "/docs#plugins",
  },
];

export default function DocsPage() {
  return (
    <div className="container-custom py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Documentation</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Everything you need to know about Agent Context Relay (ACR).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {sections.map((s) => (
            <Link key={s.title} href={s.href} className="card group">
              <s.icon size={24} className="text-acr-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 id="getting-started">Getting Started</h2>
          <p>
            ACR (Agent Context Relay) is a cross-platform desktop application for running
            and managing multiple AI coding agents. It is built with Rust (Tauri v2) and
            SolidJS, providing a native-feeling terminal IDE with agent orchestration.
          </p>
          <h3>Installation</h3>
          <p>Pre-built binaries are coming soon. For now, build from source:</p>
          <pre className="code-block !p-4 text-sm">
{`git clone https://github.com/AgentContextRelay/acr-tc.git
cd acr-tc
pnpm install
pnpm tauri dev`}
          </pre>
          <p>Requirements: Rust 1.95+, Node.js 22+, pnpm 9+, macOS / Windows / Linux.</p>

          <h2 id="terminal">Terminal & PTY</h2>
          <p>
            ACR supports up to 50 concurrent PTY sessions, each running in its own terminal
            tab. Terminals are never unmounted — hidden tabs stay alive with full scroll
            history. Session state persists across app restarts.
          </p>
          <ul>
            <li>Split panes: up to 6 panes per tab, vertical and horizontal</li>
            <li>Zoom per-terminal: Cmd+= / Cmd+- / Cmd+0</li>
            <li>Copy/paste with trailing whitespace trimming</li>
            <li>Command blocks: navigable, collapsible terminal segments</li>
            <li>Auto-standby: SIGSTOP idle agent terminals to save CPU</li>
            <li>Foreground process detection on macOS and Windows</li>
          </ul>

          <h2 id="acr">Agent Context Relay</h2>
          <p>
            The core innovation of ACR is the context relay loop:
          </p>
          <ol>
            <li><strong>Capture</strong> — Record every agent session into a durable, append-only project record (<code>.acr/events.jsonl</code>)</li>
            <li><strong>Normalize</strong> — Convert provider-specific transcripts into a provider-neutral model (supports Claude, Codex, Gemini)</li>
            <li><strong>Compact</strong> — Generate a compact, inspectable handoff packet with decisions, open questions, and git state</li>
            <li><strong>Relay</strong> — Deliver the packet to a target agent through the managed launch workflow</li>
          </ol>
          <p>
            Handoff provenance events link source and target sessions, creating an
            auditable chain of agent continuity.
          </p>

          <h2 id="worktrees">Git Worktrees</h2>
          <p>
            ACR fully manages Git worktrees: auto-creation on branch click,
            per-branch terminal isolation, and a Worktree Manager panel showing
            PR status, dirty file counts, and last commit at a glance.
          </p>

          <h2 id="architecture">Architecture</h2>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2 border-b">Layer</th>
                <th className="text-left p-2 border-b">Technology</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Frontend", "SolidJS + TypeScript + Vite"],
                ["Backend", "Tauri v2 (Rust) — ~190 Tauri commands"],
                ["Terminal", "alacritty_terminal (patched) + Canvas renderer"],
                ["Editor", "CodeMirror 6"],
                ["Speech", "whisper-rs (local, GPU-accelerated)"],
                ["Storage", "JSON config + SQLite + JSONL (.acr/)"],
                ["Agent Protocol", "MCP + HTTP REST + WebSocket/SSE"],
                ["Auth", "OS keyring + OAuth 2.1 + bcrypt"],
                ["Search", "BM25 + text_rank"],
              ].map(([layer, tech]) => (
                <tr key={layer}>
                  <td className="p-2 border-b font-medium">{layer}</td>
                  <td className="p-2 border-b text-gray-600 dark:text-gray-400">{tech}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 id="plugins">Plugins & MCP</h2>
          <p>
            ACR supports plugins as ES modules with hot reload and crash isolation.
            The capability-gated runtime ensures plugins only access what they declare.
            The MCP Proxy Hub manages upstream MCP servers with credential management
            and OAuth support.
          </p>
        </div>
      </div>
    </div>
  );
}
