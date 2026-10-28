"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { projects } from "@/data/projects";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Johan Blomdahl, startsida"
        >
          jb<span>.</span>
        </Link>
        <button
          className="mobile-menu"
          type="button"
          aria-label={open ? "Stäng menyn" : "Öppna menyn"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Huvudnavigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          <Link href="/#projekt" onClick={() => setOpen(false)}>
            Projekt <span className="nav-count">{projects.length}</span>
          </Link>
          <Link href="/#om" onClick={() => setOpen(false)}>
            Om mig
          </Link>
          <Link
            href="/#kontakt"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Säg hej <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
