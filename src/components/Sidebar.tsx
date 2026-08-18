"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ARCHIVE", href: "#archive" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b border-card-border bg-[#131313] px-4 xl:hidden">
        <p className="text-sm font-bold text-foreground">{profile.name}</p>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:text-foreground"
          aria-label="메뉴"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-60 flex-col items-center border-r border-card-border bg-[#131313] py-10 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        {/* Profile */}
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-4 h-28 w-28 overflow-hidden rounded-full ring-2 ring-accent/30">
            <img
              src="/profile.jpeg"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-base font-bold text-foreground">{profile.name}</p>
          <p className="text-sm text-muted">{profile.title}</p>
        </div>

        {/* Navigation */}
        <nav className="w-full flex-1 px-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mb-1.5 block rounded-lg px-4 py-3 text-center text-sm font-semibold tracking-wider text-muted transition-all hover:bg-accent/10 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom links */}
        <div className="flex gap-4 pt-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={profile.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            aria-label="Blog"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="12" y="16.5" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">T</text>
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
