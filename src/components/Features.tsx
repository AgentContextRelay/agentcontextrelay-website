import {
  Layers, GitBranch, Eye, MessageSquare, RefreshCw, Monitor,
  Activity, Mic, Puzzle, Bug, Workflow, Zap, Shield,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  problem?: string;
  solution: string;
  points: string[];
  highlight?: string;
  codeExample?: string;
  reverse?: boolean;
}

const features: Feature[] = [
  {
    icon: Layers,
    title: "Run many AI sessions in parallel",
    problem: '"I need to run Claude Code on five branches at once — but context collision is a nightmare."',
    solution:
      "Launch multiple coding agents simultaneously. Each session runs in its own Git worktree — no context collision, no lost threads, no \"which terminal was that?\" moments.",
    points: [
      "Up to 50 terminal sessions running simultaneously",
      "Each session works on its own isolated copy of the repo",
      "No stash conflicts, no branch switching, no waiting",
      "Activity dashboard showing every session at a glance",
    ],
    codeExample: `  BRANCH           AGENT          STATUS
  feature/auth     Claude Code    Working...
  fix/payments     Claude Code    ? Confirm (Y/n)
  refactor/api     Claude Code    Working...
  feature/search   Claude Code    Rate limited (4:32)
  wip/migration    Codex          Working...`,
  },
  {
    icon: GitBranch,
    title: "Git worktrees, fully managed",
    problem: '"git worktree add ../feature-x origin/main && cd ../feature-x — every single time. And I have 8 worktrees. Which one has the PR approved?"',
    solution:
      "Click a branch in the sidebar. ACR auto-creates the worktree, opens a terminal inside it, and cleans up when the branch is merged. The Worktree Manager gives you a bird's-eye view across all repos.",
    points: [
      "Automatic worktree creation on branch click, per-branch isolation",
      "Worktree Manager panel — PR status, dirty file counts, last commit at a glance",
      "Post-merge cleanup dialog — delete branch, archive worktree in one click",
      "Terminal auto-follows your cd — switch into a worktree and the tab reassigns",
      "Configurable base branch, setup scripts, auto-fetch intervals",
    ],
    codeExample: `  WORKTREE MANAGER           PR    FILES
  myapp
    main                     —      —
    feature/auth       Open   +3
    bugfix/session     Merged  0
    refactor/api       Draft  +7
  [Clean up merged]  [Fetch all]`,
    reverse: true,
  },
  {
    icon: Eye,
    title: "Observe your AI agents",
    problem: '"Your agent hit a rate limit 10 minutes ago. You didn\'t notice."',
    solution:
      "ACR understands what your agents are doing. Rate limits, questions, errors, and idle states surface automatically — no hunting through terminal windows.",
    points: [
      "Detect active tasks, waiting input, rate limits, and idle agents",
      "Provider-specific countdown timers for rate limits",
      "Notification sounds and keyboard overlay when agents need input",
      "Activity dashboard showing all sessions at a glance",
    ],
    highlight:
      "Claude Usage Dashboard — real-time rate limit bars, 7-day usage chart, 52-week contribution heatmap, per-project cost insights. Know exactly where your tokens go.",
    codeExample: `  CLAUDE USAGE DASHBOARD
  Rate Limits
  Opus    ████████░░  78%  resets 2:41
  Sonnet  ██░░░░░░░░  18%

  7-Day Usage
  Mon ██████  $4.20
  Tue ████    $2.80
  Wed ████████  $5.60`,
  },
  {
    icon: RefreshCw,
    title: "Agent Context Relay — seamless handoff",
    problem: '"I just spent 2 hours with Claude Code, now I need Codex to continue. But I have to explain everything from scratch."',
    solution:
      "ACR's core innovation: capture a session into a normalized, provider-neutral record. Generate a compact handoff packet with decisions, open questions, and git state. Relay it to another agent — they continue exactly where the first left off.",
    points: [
      "Capture any agent session into the project-local .acr/ record",
      "Normalize transcripts across Claude, Codex, Gemini, and more",
      "Generate compact, inspectable handoff packets",
      "Target agent receives full context — no re-explanation needed",
      "Full provenance linking source and target sessions",
    ],
    highlight:
      "The Capture → Normalize → Compact → Relay loop is ACR's product core. One agent's output becomes the next agent's input — automatically.",
    reverse: true,
  },
  {
    icon: Workflow,
    title: "Coding Agent Lifecycle Management",
    problem: '"Which agents do I have installed? Are they compatible? How do I launch Codex with GPT-5 on this project?"',
    solution:
      "ACR detects all installed coding agents, maintains a compatibility matrix, and provides a visual launcher to configure and start any agent with the right model, project, and permissions.",
    points: [
      "Auto-detect Claude Code, Codex, Gemini CLI, Aider, Goose, OpenCode, and 10+ more",
      "Interactive launcher with agent × provider × model matrix",
      "Per-launch YOLO/permission control",
      "Favorites, recents, and pinning for quick access",
      "ACR Context mode — resume from a relay packet",
    ],
    codeExample: `  AGENT LAUNCHER
  ? Coding Agent        ? Provider
  ? Claude Code         ? Anthropic Claude
  ? Codex               ? OpenAI GPT-5
  ? Gemini CLI          ? Google Gemini
  ? Aider               ? OpenRouter
  ? Goose               ? Ollama (local)
  ? OpenCode`,
  },
  {
    icon: MessageSquare,
    title: "Built-in AI Chat & autonomous agent",
    problem: '"I want to ask a quick question about this terminal output without copy-pasting into another tool."',
    solution:
      "A conversational AI companion that sees your terminal as you see it. Ask about errors, get code suggestions, or let the autonomous agent take the wheel and drive your terminal directly.",
    points: [
      "Multi-provider: Ollama (local, free), Anthropic, OpenAI, OpenRouter, or any compatible endpoint",
      "Streaming markdown with syntax highlighting and \"Run this\" action back to the terminal",
      "Autonomous AI Agent (ReAct loop) with 12 tools: read screen, send input, edit files, search code, run commands",
      "Session knowledge: the agent learns from your terminal history — commands, errors, fix patterns",
      "Live cost tracking: prompt/completion tokens and estimated cost per turn",
      "Per-terminal chat state, conversation history, detachable panel for multi-monitor",
    ],
    reverse: true,
  },
  {
    icon: Activity,
    title: "See what your agents changed",
    problem: '"Check the diff in VS Code. Check PR status on GitHub. Check CI in another tab."',
    solution:
      "The feedback loop happens in the same window — diffs, PR status, CI results, code editing, and automatic CI failure recovery.",
    points: [
      "Diff panel — working tree or last 5 commits, click for inline diff",
      "PR status badges (open/merged/draft), CI rings, review state, merge & approve from the app",
      "Multiple GitHub accounts — several github.com logins plus GitHub Enterprise Server (PAT)",
      "GitHub Issues panel — filter by assigned/created/mentioned, labels with colors, close/reopen",
      "Built-in CodeMirror 6 editor with syntax highlighting and disk conflict detection",
      "CI Auto-Heal — fetches failure logs and injects them into your agent for automatic fix",
    ],
    codeExample: `  CHANGED FILES              +/-
  M src/auth/jwt.ts          +42 -18
  M src/auth/middleware.ts    +15 -3
  A src/auth/refresh.ts      +67
  D src/auth/sessions.ts     -89

  PR #247  Open  CI ?  Review: Approved`,
  },
  {
    icon: Monitor,
    title: "Global Workspace & Multi-Monitor",
    solution:
      "All your repos, branches, and terminals live in one workspace that persists across restarts. Detach any tab into its own native OS window and drag it to a second monitor.",
    points: [
      "Global Workspace — every repo, branch, and terminal in a single app",
      "Detachable tabs — float any terminal into its own OS window",
      "Split panes — up to 6 panes per tab, drag-resize, per-branch layout memory",
      "Multi-monitor — drag detached windows to any display",
      "Native drag and drop — drop files and folders into the terminal",
    ],
    reverse: true,
  },
  {
    icon: Shield,
    title: "Session persistence & history browser",
    solution:
      "Browse past coding-agent sessions per project. Open any session as a read-only rendered chat transcript — user/agent turns, tool calls, file changes. Resume from history or relay to a new agent.",
    points: [
      "Per-project provider session lists (Claude, Codex, Gemini)",
      "Chat-rendered read-only transcripts with collapsible tool calls",
      "One-click resume into a terminal",
      "Archive sessions into the project-local .acr/ record",
      "Provider-neutral: one viewer for all agents",
    ],
    codeExample: `  SESSIONS — myapp
  Claude Code
  ? 2026-07-20  Refactor auth layer   42 msgs  ? Open
  ? 2026-07-19  Fix payment bug       28 msgs  ? Open
  Codex
  ? 2026-07-20  Add search endpoint   35 msgs  ? Open`,
  },
  {
    icon: Mic,
    title: "Voice dictation",
    solution:
      "Dictate commands and prompts using local on-device Whisper speech recognition — no cloud, no latency, fully private.",
    points: [
      "Local Whisper model — runs entirely on your device",
      "GPU-accelerated on Apple Silicon and CUDA",
      "Dictate into any terminal or the AI Chat panel",
    ],
    reverse: true,
  },
  {
    icon: Puzzle,
    title: "Plugin system & MCP Proxy Hub",
    solution:
      "Extend ACR with plugins (ES modules, hot reload, capability-gated). Connect any MCP server through the built-in MCP Proxy Hub with credential management and OAuth support.",
    points: [
      "Plugin system with hot reload and crash isolation",
      "Capability-gated runtime for security",
      "MCP Proxy Hub — manage upstream MCP servers",
      "OAuth and credential management built in",
      "Install plugins from folder, ZIP, URL, or registry",
    ],
  },
  {
    icon: Zap,
    title: "Near-native terminal performance",
    solution:
      "A WebView terminal shouldn't feel like one. Off-main-thread rendering, binary frame protocol, and Apple Silicon QoS tuning deliver input latency that feels native.",
    points: [
      "alacritty_terminal-based VT emulation",
      "Canvas renderer with off-main-thread decoding",
      "Binary frame protocol for minimal overhead",
      "OSC 133 semantic prompt/command/output marking",
      "Command blocks — navigable, collapsible terminal segments",
      "Auto-standby: SIGSTOP idle agent terminals to save CPU and battery",
    ],
    reverse: true,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Everything you need to run{" "}
            <span className="gradient-text">agents at scale</span>
          </h2>
          <p className="section-subtitle mx-auto">
            ACR builds on a full-featured terminal IDE and adds agent continuity — capture, normalize, compact, relay.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((f, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                f.reverse ? "" : ""
              }`}
            >
              <div className={f.reverse ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-acr-50 dark:bg-acr-950 text-acr-600 dark:text-acr-400 mb-4">
                  <f.icon size={22} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                {f.problem && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 italic border-l-2 border-gray-300 dark:border-gray-700 pl-4 mb-4">
                    {f.problem}
                  </div>
                )}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {f.solution}
                </p>
                <ul className="space-y-2">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-acr-500 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                {f.highlight && (
                  <div className="mt-4 p-3 rounded-lg bg-acr-50 dark:bg-acr-950 border border-acr-200 dark:border-acr-800 text-sm text-acr-700 dark:text-acr-300">
                    {f.highlight}
                  </div>
                )}
              </div>
              <div className={f.reverse ? "lg:order-1" : ""}>
                {f.codeExample && (
                  <div className="code-block">{f.codeExample}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
