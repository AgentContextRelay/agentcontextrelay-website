"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" className="fill-acr-600" />
            <path d="M8 12h6l4 8-4 4H8l4-6-4-6Z" fill="white" />
            <path d="M18 8h6l-4 8 4 4h-6l-4-6 4-6Z" fill="white" opacity="0.7" />
          </svg>
          <span className="hidden sm:inline">ACR</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/#features" className="nav-link px-3 py-2">Features</Link>
          <Link href="/#compare" className="nav-link px-3 py-2">Compare</Link>
          <Link href="/docs" className="nav-link px-3 py-2">Docs</Link>
          <Link href="/blog" className="nav-link px-3 py-2">Blog</Link>
          <a
            href="https://github.com/AgentContextRelay/acr-tc/releases"
            className="btn-primary !py-2 !px-4 !text-sm ml-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="container-custom py-4 flex flex-col gap-2">
            <Link href="/#features" className="nav-link px-3 py-2" onClick={() => setMobileOpen(false)}>Features</Link>
            <Link href="/#compare" className="nav-link px-3 py-2" onClick={() => setMobileOpen(false)}>Compare</Link>
            <Link href="/docs" className="nav-link px-3 py-2" onClick={() => setMobileOpen(false)}>Docs</Link>
            <Link href="/blog" className="nav-link px-3 py-2" onClick={() => setMobileOpen(false)}>Blog</Link>
            <a
              href="https://github.com/AgentContextRelay/acr-tc/releases"
              className="btn-primary !py-2 !px-4 !text-sm w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
