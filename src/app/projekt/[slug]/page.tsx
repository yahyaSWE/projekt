import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  LockKeyhole,
  Smartphone,
} from "lucide-react";
import { Github } from "@/components/github-icon";
import { projects } from "@/data/projects";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.name ?? "Projektet hittades inte",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];
  return (
    <div id="top">
      <SiteHeader />
      <main id="main" className="project-detail container">
        <Link className="back-link" href="/#projekt">
          <ArrowLeft size={16} /> Alla projekt
        </Link>
        <div className="detail-heading">
          <div>
            <p className="eyebrow">
              {project.category} <span>/</span> {project.eyebrow}
            </p>
            <h1>
              {project.name}
              <span className="olive-text">.</span>
            </h1>
          </div>
          <div className="project-tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <p className="detail-summary">{project.summary}</p>
        {project.screenshot ? (
          <a
            className="detail-screenshot-link"
            href={project.screenshot.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Öppna fullstor skärmbild av ${project.name}`}
          >
            <ProjectVisual project={project} large />
            <span className="screenshot-expand">
              Visa större bild <ArrowUpRight size={14} />
            </span>
          </a>
        ) : (
          <ProjectVisual project={project} large />
        )}
        <div className="detail-content">
          <aside className="detail-sidebar">
            <span className="eyebrow">OM PROJEKTET</span>
            <h2>{project.eyebrow}</h2>
            <p>{project.description}</p>
            {project.appStores && (
              <div className="app-store-links">
                <span className="eyebrow">HÄMTA APPEN</span>
                {project.appStores.map((store) => (
                  <a
                    className="app-store-link"
                    key={store.platform}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Smartphone size={21} />
                    <span>
                      <small>
                        {store.platform === "ios"
                          ? "För iPhone och iPad"
                          : "För Android"}
                      </small>
                      <strong>{store.label}</strong>
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            )}
            <div className="project-external-links">
              {project.website && (
                <a
                  className="button button-outline"
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={17} /> Besök webbplatsen{" "}
                  <ArrowUpRight size={16} />
                </a>
              )}
              {project.repo && (
                <a
                  className="button button-outline"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={17} />{" "}
                  {project.visibility === "private"
                    ? "Privat GitHub-repo"
                    : "Visa på GitHub"}
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
            {project.visibility === "private" && (
              <small className="repo-note">
                <LockKeyhole size={12} /> Källkoden kräver åtkomst till repot.
              </small>
            )}
            {project.visibility === "unknown" && (
              <small className="repo-note">
                Repoåtkomst har inte kunnat verifieras.
              </small>
            )}
          </aside>
          <div className="detail-story">
            <section>
              <p className="eyebrow">01 / UTGÅNGSPUNKT</p>
              <h2>Problemet att lösa</h2>
              <p>{project.challenge}</p>
            </section>
            <section>
              <p className="eyebrow">02 / GENOMFÖRANDE</p>
              <h2>{project.contributionHeading ?? "Det jag byggde"}</h2>
              <p>{project.solution}</p>
              <ul className="feature-list">
                {project.features.map((f) => (
                  <li key={f}>
                    <Check size={17} />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
            {project.result && (
              <section className="detail-result">
                <p className="eyebrow">03 / RESULTAT</p>
                <b>{project.result.value}</b>
                <h3>{project.result.label}</h3>
                <p>{project.result.context}</p>
              </section>
            )}
            {project.note && <p className="project-note">{project.note}</p>}
          </div>
        </div>
        <Link className="next-project" href={`/projekt/${next.slug}/`}>
          <span>
            <small>NÄSTA PROJEKT</small>
            <strong>{next.name}</strong>
          </span>
          <ArrowRight size={32} />
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
