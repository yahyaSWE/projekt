"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { categories, projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectGrid() {
  const [category, setCategory] = useState<string>("Alla projekt");
  const [query, setQuery] = useState("");
  const filtered = projects.filter(
    (p) =>
      (category === "Alla projekt" || p.category === category) &&
      `${p.name} ${p.summary} ${p.description} ${p.tags.join(" ")}`
        .toLocaleLowerCase("sv")
        .includes(query.toLocaleLowerCase("sv").trim()),
  );
  return (
    <section
      id="projekt"
      className="projects-section container"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="tiny-cross">+</span> UTVALDA ARBETEN
          </p>
          <h2 id="projects-heading">
            Idéer som blivit verklighet<span className="olive-text">.</span>
          </h2>
        </div>
        <p>
          Olika utmaningar. Samma drivkraft.
          <br />
          Att bygga något som gör skillnad.
        </p>
      </div>
      <div className="project-controls">
        <div className="filter-list" aria-label="Filtrera projekt">
          {categories.map((c) => (
            <button
              key={c}
              className={
                category === c ? "filter-button selected" : "filter-button"
              }
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
              {c === "Alla projekt" && <span>{projects.length}</span>}
            </button>
          ))}
        </div>
        <div className="project-search">
          <Search size={16} />
          <input
            aria-label="Sök bland projekten"
            placeholder="Sök projekt"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Rensa sökningen">
              <X size={14} />
            </button>
          )}
        </div>
      </div>
      <span className="sr-only" role="status" aria-live="polite">
        {filtered.length} projekt visas
      </span>
      <div className="project-grid">
        {filtered.map((project, index) => (
          <article
            key={project.slug}
            className={`project-card ${index === 0 && category === "Alla projekt" && !query ? "featured-card" : ""}`}
          >
            <Link
              className="project-art-link"
              href={`/projekt/${project.slug}/`}
              aria-label={`Läs om ${project.name}`}
            >
              <ProjectVisual project={project} />
              <span className="project-hover-arrow">
                <ArrowUpRight size={22} />
              </span>
            </Link>
            <div className="project-card-info">
              <div className="project-meta">
                <span>{project.category}</span>
                {project.result && (
                  <span className="result-tag">0 → 3 mkr</span>
                )}
              </div>
              <Link
                href={`/projekt/${project.slug}/`}
                className="project-title-link"
              >
                <h3>{project.name}</h3>
                <ArrowUpRight size={21} />
              </Link>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <Search size={28} />
          <h3>Inga projekt matchade sökningen.</h3>
          <p>Prova ett annat ord eller visa alla projekt.</p>
          <button
            className="button button-dark"
            onClick={() => {
              setQuery("");
              setCategory("Alla projekt");
            }}
          >
            Visa alla projekt <ArrowUpRight size={16} />
          </button>
        </div>
      )}
      <div className="projects-bottom">
        <span>Från en första idé till en fungerande produkt.</span>
        <a
          href="https://github.com/yahyaSWE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mer på GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
