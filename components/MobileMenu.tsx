"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Training", "#training"],
    ["Education", "#education"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        className="text-2xl text-gray-300"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-white/10 bg-black/95 p-6 shadow-2xl">
          <div className="flex flex-col gap-5 text-sm text-gray-300">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="transition hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}