import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <img src="/logo.svg" alt="ACR" width="28" height="28" className="dark:invert" />
              <span>ACR</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Agent Context Relay
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <div className="flex flex-col gap-2">
              <Link href="/#features" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</Link>
              <Link href="/#compare" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Compare</Link>
              <Link href="/docs" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Docs</Link>
              <Link href="/blog" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Resources</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/AgentContextRelay/acr-tc" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">GitHub</a>
              <a href="https://github.com/AgentContextRelay/acr-tc/releases" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Releases</a>
              <a href="https://github.com/AgentContextRelay/acr-tc/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">License</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Community</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/AgentContextRelay/acr-tc" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5">
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Agent Context Relay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
