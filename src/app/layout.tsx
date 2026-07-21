import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "ACR — Agent Context Relay",
    template: "%s — ACR",
  },
  description:
    "ACR (Agent Context Relay) is a cross-platform desktop IDE for running, managing, and chaining multiple AI coding agents. Capture, normalize, compact, and relay context between agents seamlessly.",
  keywords: [
    "ACR", "Agent Context Relay", "AI coding agent", "Claude Code", "Codex",
    "multi-agent IDE", "agent orchestration", "context relay", "terminal IDE",
    "AI developer tools",
  ],
  authors: [{ name: "Agent Context Relay" }],
  openGraph: {
    type: "website",
    title: "ACR — Agent Context Relay",
    description:
      "Run many AI coding agents in parallel. Each in its own Git worktree. Seamless context relay between agents.",
    siteName: "ACR",
    url: "https://agentcontextrelay.com",
  },
  metadataBase: new URL("https://agentcontextrelay.com"),
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
