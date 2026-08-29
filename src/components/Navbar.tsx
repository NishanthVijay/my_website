"use client";

import { useState } from "react";

const navItems = [
{ label: "ABOUT", href: "#about" },
{ label: "EXPERIENCE", href: "#experience" },
{ label: "SKILLS", href: "#skills" },
{ label: "PROJECTS", href: "#projects" },
{ label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <header className="fixed top-0 left-0 z-50 w-full border-b border-[var(--border)] bg-[#0A0D0F]/80 backdrop-blur-md"> <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
{/* Logo */} <a
       href="#home"
       className="font-heading text-xl font-bold tracking-tight transition-colors hover:text-[var(--accent)]"
     >
NV </a>


    {/* Desktop Navigation */}
    <div className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="font-mono text-xs tracking-widest text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
        >
          {item.label}
        </a>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <button
      type="button"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex flex-col gap-1.5 md:hidden"
    >
      <span className="h-px w-6 bg-[var(--foreground)]" />
      <span className="h-px w-6 bg-[var(--foreground)]" />
    </button>
  </nav>

  {/* Mobile Navigation */}
  {menuOpen && (
    <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 py-6 md:hidden">
      <div className="flex flex-col gap-5">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-mono text-sm tracking-widest text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )}
</header>


);
}
