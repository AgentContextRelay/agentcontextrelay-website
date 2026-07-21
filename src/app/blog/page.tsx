import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates, deep-dives, and announcements from the Agent Context Relay project.",
};

const posts = [
  {
    title: "Introducing Agent Context Relay (ACR)",
    date: "2026-07-21",
    slug: "introducing-acr",
    excerpt:
      "ACR is a cross-platform desktop IDE for running, managing, and chaining multiple AI coding agents. Learn about the Capture → Normalize → Compact → Relay loop that makes it possible to hand off context between agents seamlessly.",
  },
];

export default function BlogPage() {
  return (
    <div className="container-custom py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Updates, deep-dives, and announcements from the ACR project.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="card group">
              <time className="text-sm text-gray-400 dark:text-gray-500">{post.date}</time>
              <h2 className="text-xl font-bold mt-1 mb-2 group-hover:text-acr-600 dark:group-hover:text-acr-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              <div className="mt-4">
                <span className="text-sm font-medium text-acr-600 dark:text-acr-400">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Intro post content */}
        <article className="mt-16 prose dark:prose-invert max-w-none">
          <h2 id="introducing-acr">Introducing Agent Context Relay (ACR)</h2>
          <p>
            <strong>July 21, 2026</strong>
          </p>

          <h3>What is ACR?</h3>
          <p>
            Agent Context Relay (ACR) is an open-source, cross-platform desktop IDE
            built for developers who work with multiple AI coding agents. If you use
            Claude Code, Codex CLI, Gemini CLI, Aider, or any other terminal-based
            coding agent — ACR is the workspace that ties them all together.
          </p>

          <h3>The problem</h3>
          <p>
            Modern AI-assisted development often involves running multiple agents
            across different branches, tasks, and even different providers. Each agent
            operates in isolation — there's no built-in way to hand off context from
            one agent to another. When you switch from Claude Code to Codex, you start
            from scratch: re-explain the problem, re-establish the context, re-do the
            discovery work.
          </p>

          <h3>The ACR solution</h3>
          <p>
            ACR introduces a vendor-neutral context relay system:
          </p>
          <ol>
            <li>
              <strong>Capture</strong> — Every agent session is recorded into a
              durable, append-only project record stored in <code>.acr/events.jsonl</code>.
            </li>
            <li>
              <strong>Normalize</strong> — Provider-specific transcript formats
              (Claude JSONL, Codex rollout JSONL, Gemini JSON) are converted into a
              single provider-neutral model.
            </li>
            <li>
              <strong>Compact</strong> — A handoff packet is generated containing
              decisions made, open questions, git state, and the exact next action.
            </li>
            <li>
              <strong>Relay</strong> — The packet is delivered to the target agent
              through ACR's managed launch workflow, so the next agent continues
              exactly where the first left off.
            </li>
          </ol>

          <h3>Beyond relay — a full terminal IDE</h3>
          <p>
            ACR isn't just about relay. It's a complete development environment:
          </p>
          <ul>
            <li><strong>Up to 50 concurrent terminal sessions</strong> — each in its own tab with full scroll history</li>
            <li><strong>Git worktree orchestration</strong> — auto-create, manage, and clean up worktrees per branch</li>
            <li><strong>Agent launcher</strong> — visual matrix of 169 agent × provider × model combinations</li>
            <li><strong>Session history browser</strong> — browse past sessions as rendered chat transcripts</li>
            <li><strong>Built-in AI Chat</strong> — multi-provider, with autonomous agent mode</li>
            <li><strong>Usage dashboard</strong> — real-time rate limits, 7-day charts, 52-week heatmaps</li>
            <li><strong>Plugin system</strong> — ES modules, hot reload, capability-gated runtime</li>
            <li><strong>MCP Proxy Hub</strong> — manage upstream MCP servers with OAuth</li>
            <li><strong>Voice dictation</strong> — local on-device Whisper, fully private</li>
          </ul>

          <h3>Current status</h3>
          <p>
            ACR is under active development. The project is in its M1 milestone —
            completing one full Claude → Codex continuity loop. Core features already
            implemented include:
          </p>
          <ul>
            <li>Passive session capture with default-on opt-out</li>
            <li>Claude and Codex transcript normalization</li>
            <li>Archive-to-.acr with git provenance</li>
            <li>Agent launcher with compatibility matrix (169 combos, 332 evidence edges)</li>
            <li>Handoff packet generation and relay workflow</li>
            <li>Session history browser with read-only chat transcripts</li>
            <li>Resume-from-history and ACR-context launch mode</li>
          </ul>
          <p>
            Pre-built binaries are coming soon. For now, you can build from source
            and follow development on{" "}
            <a href="https://github.com/AgentContextRelay/acr-tc" className="text-acr-600 dark:text-acr-400">
              GitHub
            </a>.
          </p>
        </article>
      </div>
    </div>
  );
}
