const rows = [
  { cap: "Terminal sessions", ghostty: "Yes", cursor: "Yes", claude: "No", acr: "Yes (50)" },
  { cap: "AI coding agents", ghostty: "No", cursor: "Built-in", claude: "Built-in", acr: "Any agent (10+ detected)" },
  { cap: "Parallel agents", ghostty: "No", cursor: "Limited", claude: "No", acr: "Unlimited" },
  { cap: "Git worktree orchestration", ghostty: "No", cursor: "No", claude: "No", acr: "Automatic" },
  { cap: "Agent observability", ghostty: "No", cursor: "No", claude: "No", acr: "Real-time" },
  { cap: "Agent context relay", ghostty: "No", cursor: "No", claude: "No", acr: "Capture ? Normalize ? Relay" },
  { cap: "Session history browser", ghostty: "No", cursor: "No", claude: "No", acr: "Full transcripts" },
  { cap: "Agent launcher (matrix)", ghostty: "No", cursor: "No", claude: "No", acr: "169 combos, 332 edges" },
  { cap: "Global Workspace", ghostty: "No", cursor: "Yes", claude: "No", acr: "Multi-repo" },
  { cap: "Usage dashboard", ghostty: "No", cursor: "No", claude: "Basic", acr: "Full (heatmap, per-project)" },
  { cap: "Remote access (phone/tablet)", ghostty: "No", cursor: "No", claude: "Mobile app", acr: "PWA + E2E relay" },
  { cap: "Voice dictation", ghostty: "No", cursor: "Extension", claude: "Built-in", acr: "Local Whisper" },
  { cap: "MCP Proxy Hub", ghostty: "No", cursor: "No", claude: "No", acr: "Built-in" },
  { cap: "Plugin system", ghostty: "No", cursor: "Extensions", claude: "No", acr: "Hot reload + SDK" },
  { cap: "GitHub Issues & PR management", ghostty: "No", cursor: "Extension", claude: "No", acr: "Built-in" },
  { cap: "Multi-account & Enterprise GitHub", ghostty: "No", cursor: "No", claude: "No", acr: "github.com + GHE" },
  { cap: "Built-in AI Chat", ghostty: "No", cursor: "Built-in", claude: "Built-in", acr: "Multi-provider" },
  { cap: "CI Auto-Heal", ghostty: "No", cursor: "No", claude: "No", acr: "Built-in" },
];

function Cell({ val, highlight }: { val: string; highlight?: boolean }) {
  const isYes = val.startsWith("Yes") || val.includes("?") || val.includes("+") || val.includes("Full") || val.includes("Real-time") || val.includes("Automatic") || val.includes("Built-in") || val.includes("Unlimited") || val.includes("Hot reload") || val.includes("Multi-repo") || val.includes("Multi-provider") || val.includes("Local Whisper") || val.includes("PWA");
  const isNo = val === "No";
  const isPartial = val === "Limited" || val === "Basic" || val === "Extension";

  return (
    <td className={`px-4 py-3 text-sm ${highlight ? "bg-acr-50/50 dark:bg-acr-950/30 font-medium" : ""}`}>
      <span className={
        isNo ? "text-red-500" :
        isPartial ? "text-yellow-500" :
        isYes ? "text-green-600 dark:text-green-400 font-medium" :
        ""
      }>
        {val}
      </span>
    </td>
  );
}

export function Compare() {
  return (
    <section id="compare" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">How it compares</h2>
          <p className="section-subtitle mx-auto">
            ACR is an AI-native IDE built on a modern terminal — with agent continuity no other tool provides.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
                <th className="text-left px-4 py-3 text-sm font-semibold">Capability</th>
                <th className="px-4 py-3 text-sm font-semibold">Ghostty / Kitty</th>
                <th className="px-4 py-3 text-sm font-semibold">Cursor IDE</th>
                <th className="px-4 py-3 text-sm font-semibold">Claude Desktop</th>
                <th className="px-4 py-3 text-sm font-semibold text-acr-600 dark:text-acr-400 bg-acr-50/50 dark:bg-acr-950/30">ACR</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-gray-800/50">
                  <td className="px-4 py-3 text-sm font-medium">{r.cap}</td>
                  <Cell val={r.ghostty} />
                  <Cell val={r.cursor} />
                  <Cell val={r.claude} />
                  <Cell val={r.acr} highlight />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
