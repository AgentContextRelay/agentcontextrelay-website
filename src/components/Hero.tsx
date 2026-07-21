import { Download, Github, Terminal, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="hero-glow" />
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-acr-50 dark:bg-acr-950 border border-acr-200 dark:border-acr-800 text-sm font-medium text-acr-700 dark:text-acr-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acr-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-acr-500" />
            </span>
            Active development — open source
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance">
            Run many AI coding agents{" "}
            <span className="gradient-text">in parallel</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
            Agent Context Relay (ACR) is a cross-platform desktop IDE that lets you
            launch, manage, and chain multiple AI coding agents — each in its own
            isolated Git worktree. Capture context, normalize it, and relay it
            between agents for seamless continuity.
          </p>

          {/* Three pillars */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { title: "Capture", desc: "Record every agent session into a durable, append-only project record." },
              { title: "Normalize", desc: "Provider-neutral transcripts — Claude, Codex, Gemini, and more." },
              { title: "Relay", desc: "Hand off context from one agent to another. Continuous workflow." },
            ].map((p) => (
              <div key={p.title} className="card text-left">
                <h3 className="font-semibold text-acr-600 dark:text-acr-400">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/AgentContextRelay/acr-tc/releases"
              className="btn-primary text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download ACR
            </a>
            <a
              href="https://github.com/AgentContextRelay/acr-tc"
              className="btn-secondary text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              View on GitHub
            </a>
            <Link href="/docs" className="btn-ghost text-lg">
              Read the docs <ChevronRight size={16} />
            </Link>
          </div>

          {/* Install section */}
          <div className="mt-12 max-w-xl mx-auto">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Install via terminal
            </p>
            <div className="space-y-3">
              <div className="code-block text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">macOS / Linux</span>
                </div>
                <code className="text-sm">
                  curl -fsSL https://agentcontextrelay.com/install.sh | sh
                </code>
              </div>
              <div className="code-block text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">Windows (PowerShell)</span>
                </div>
                <code className="text-sm">
                  irm https://agentcontextrelay.com/install.ps1 | iex
                </code>
              </div>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              Installers coming soon. For now, build from{" "}
              <a href="https://github.com/AgentContextRelay/acr-tc" className="text-acr-500 hover:underline" target="_blank" rel="noopener noreferrer">
                source
              </a>.
            </p>
          </div>

          {/* Status bar mockup */}
          <div className="mt-16 code-block max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
              <Terminal size={14} />
              <span>Activity Dashboard — 5 agents running</span>
            </div>
            <div className="space-y-1 text-sm">
              <div><span className="text-gray-500">BRANCH</span>{"          "}<span className="text-gray-500">AGENT</span>{"          "}<span className="text-gray-500">STATUS</span></div>
              <div>feature/auth{"     "}<span className="text-acr-400">Claude Code</span>{"    "}<span className="text-green-400">Working...</span></div>
              <div>fix/payments{"     "}<span className="text-acr-400">Claude Code</span>{"    "}<span className="text-yellow-400">? Confirm (Y/n)</span></div>
              <div>refactor/api{"     "}<span className="text-acr-400">Codex</span>{"          "}<span className="text-green-400">Working...</span></div>
              <div>feature/search{"   "}<span className="text-acr-400">Claude Code</span>{"    "}<span className="text-red-400">Rate limited</span> (4:32)</div>
              <div>wip/migration{"    "}<span className="text-acr-400">Gemini CLI</span>{"     "}<span className="text-green-400">Working...</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
