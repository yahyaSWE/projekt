import {
  ArrowRight,
  Check,
  FileText,
  Folder,
  House,
  Leaf,
  LockKeyhole,
  Plus,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  CircleCheck,
  BookOpen,
  Layers3,
  Command,
} from "lucide-react";
import type { Project } from "@/data/projects";
import Image from "next/image";

function BrowserBar({ title }: { title: string }) {
  return (
    <div className="browser-bar">
      <span className="browser-dots">
        <i />
        <i />
        <i />
      </span>
      <span>{title}</span>
      <LockKeyhole size={9} />
    </div>
  );
}

export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  if (project.screenshot) {
    return (
      <div
        className={`project-visual project-screenshot theme-${project.theme} ${large ? "visual-large" : ""}`}
      >
        <Image
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          fill
          sizes={
            large
              ? "(max-width: 600px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 72px), 1240px"
              : "(max-width: 600px) calc(100vw - 40px), (max-width: 1100px) calc((100vw - 100px) / 2), 606px"
          }
          loading={project.slug === "offertdirekt" ? "eager" : "lazy"}
        />
      </div>
    );
  }
  return (
    <div
      className={`project-visual theme-${project.theme} visual-${project.visual} ${large ? "visual-large" : ""}`}
      role="img"
      aria-label={`Illustrativ gränssnittsskiss för ${project.name}, inte en skärmdump`}
    >
      <div className="visual-texture" />
      {project.visual === "quote" && (
        <div className="quote-composition">
          <div className="app-window quote-window">
            <BrowserBar title="Offertdirekt" />
            <div className="quote-app">
              <aside className="mock-sidebar">
                <b>
                  <span className="mock-brand-dot" />
                  od.
                </b>
                <span className="active">
                  <House size={12} /> Översikt
                </span>
                <span>
                  <FileText size={12} /> Offerter
                </span>
                <span>
                  <Folder size={12} /> Kunder
                </span>
                <small>DIN VERKSAMHET</small>
                <span>
                  <Layers3 size={12} /> Inställningar
                </span>
              </aside>
              <div className="mock-main">
                <div className="mock-heading">
                  <div>
                    <small>GOD MORGON</small>
                    <h4>Dags för nästa uppdrag.</h4>
                  </div>
                  <span className="mock-avatar">JB</span>
                </div>
                <div className="mock-stats">
                  <div>
                    <span>Aktiva offerter</span>
                    <b>12</b>
                  </div>
                  <div>
                    <span>Signerade</span>
                    <b>
                      8 <small>↗</small>
                    </b>
                  </div>
                </div>
                <div className="mock-row-title">
                  Senaste offerter <Plus size={10} />
                </div>
                {[
                  "Badrumsrenovering",
                  "Målning av fasad",
                  "Service & underhåll",
                ].map((x, i) => (
                  <div className="mock-table-row" key={x}>
                    <FileText size={12} />
                    <span>
                      {x}
                      <small>Offert #00{i + 1}</small>
                    </span>
                    <em className={i === 0 ? "signed" : ""}>
                      {i === 0 ? "Signerad" : "Utkast"}
                    </em>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="floating-ai">
            <span className="ai-icon">
              <Sparkles size={17} />
            </span>
            <div>
              <b>Från tanke till offert.</b>
              <span>Med lite hjälp av AI.</span>
            </div>
            <Check size={14} />
          </div>
        </div>
      )}
      {project.visual === "garage" && (
        <div className="garage-composition">
          <div className="app-window garage-window">
            <BrowserBar title="Garageexperten" />
            <div className="garage-shop">
              <div className="garage-top">
                <b>
                  <House size={15} /> GARAGEEXPERTEN
                </b>
                <span>Garageportar &nbsp; Tillbehör &nbsp; Inspiration</span>
              </div>
              <div className="garage-hero">
                <div>
                  <small>PLATS FÖR MER.</small>
                  <h4>
                    Ett bättre hem
                    <br />
                    börjar i garaget.
                  </h4>
                  <span className="mock-button">
                    Utforska sortimentet <ArrowRight size={10} />
                  </span>
                </div>
                <div className="garage-building">
                  <div className="garage-roof" />
                  <div className="garage-wall">
                    <div className="garage-door" />
                  </div>
                  <div className="garage-ground" />
                </div>
              </div>
              <div className="garage-features">
                <span>
                  <Check size={10} /> Genomtänkt kvalitet
                </span>
                <span>ERP ↔ E-handel</span>
                <b>Klarna.</b>
              </div>
            </div>
          </div>
          <div className="result-sticker">
            <TrendingUp size={18} />
            <b>0 → 3 mkr</b>
            <span>på fyra månader</span>
          </div>
        </div>
      )}
      {project.visual === "secure" && (
        <div className="secure-composition">
          <div className="secure-orbit orbit-one" />
          <div className="secure-orbit orbit-two" />
          <div className="secure-icon">
            <ShieldCheck size={44} strokeWidth={1.3} />
          </div>
          <div className="app-window secure-window">
            <div className="secure-heading">
              <span className="secure-brand">
                <ShieldCheck size={16} /> Safehelp
              </span>
              <span>
                <i /> Lokal AI
              </span>
            </div>
            <h4>
              Din information.
              <br />
              På dina villkor.
            </h4>
            <div className="secure-document">
              <FileText size={24} />
              <div>
                <b>Dokumentanalys</b>
                <span>Bearbetas lokalt på din enhet</span>
              </div>
              <CircleCheck size={17} />
            </div>
            <div className="waveform">
              {Array.from({ length: 30 }, (_, i) => (
                <i key={i} style={{ height: `${8 + ((i * 13) % 29)}px` }} />
              ))}
            </div>
            <div className="secure-bottom">
              <LockKeyhole size={11} /> OCR & transkribering · Lokala modeller
            </div>
          </div>
        </div>
      )}
      {project.visual === "crm" && (
        <div className="app-window mini-window crm-window">
          <BrowserBar title="LeadFlow CRM" />
          <div className="mini-app">
            <div className="mini-toolbar">
              <b>Din pipeline</b>
              <span>+ Ny affär</span>
            </div>
            <div className="kanban">
              {["Nya leads", "I dialog", "Offert"].map((name, i) => (
                <div key={name}>
                  <small>
                    <i />
                    {name}
                    <b>{3 - i}</b>
                  </small>
                  {["Nordlys AB", "Studio Forma", "Berg & Co"]
                    .slice(i === 2 ? 1 : 0, i === 0 ? 3 : 3 - i)
                    .map((x, j) => (
                      <div className="kanban-card" key={x}>
                        <em>
                          {["Webbformulär", "Instagram", "Prospektering"][j]}
                        </em>
                        <strong>{x}</strong>
                        <span>
                          <i /> Nästa steg <ArrowRight size={8} />
                        </span>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {project.visual === "portal" && (
        <div className="app-window mini-window portal-window">
          <BrowserBar title="Devanor · Kundportal" />
          <div className="mini-app">
            <div className="portal-title">
              <b>
                devanor<span>.</span>
              </b>
              <span>
                Din kundportal <LockKeyhole size={10} />
              </span>
            </div>
            <h4>Allt samlat. För dig.</h4>
            <div className="portal-folders">
              {["Certifikat", "Dokument", "Support"].map((x, i) => (
                <div key={x}>
                  {i === 2 ? <Command size={22} /> : <Folder size={22} />}
                  <b>{x}</b>
                  <span>
                    Öppna <ArrowUp />
                  </span>
                </div>
              ))}
            </div>
            <div className="chat-message">
              <span className="mock-avatar">D</span>
              <div>
                Hur kan vi hjälpa dig?<small>Support via Chatwoot</small>
              </div>
              <span className="chat-dot" />
            </div>
          </div>
        </div>
      )}
      {project.visual === "commerce" && (
        <div className="commerce-composition">
          <div className="app-window mini-window commerce-window">
            <BrowserBar title="Joart Commerce" />
            <div className="mini-app">
              <div className="commerce-nav">
                <b>joart.</b>
                <span>En grund. Fler möjligheter.</span>
              </div>
              <div className="commerce-products">
                {["a", "b", "c"].map((x, i) => (
                  <div key={x}>
                    <div className={`abstract-product product-${x}`}>
                      <i />
                    </div>
                    <span>
                      {
                        [
                          "Genomtänkt form",
                          "Utvalda material",
                          "Vardagens favoriter",
                        ][i]
                      }
                    </span>
                    <small>Din butik. Ditt uttryck.</small>
                  </div>
                ))}
              </div>
              <div className="commerce-stack">
                <b>Medusa</b>
                <Plus size={10} />
                <b>Next.js</b>
                <Plus size={10} />
                <b>Payload</b>
              </div>
            </div>
          </div>
        </div>
      )}
      {project.visual === "offline" && (
        <div className="offline-composition">
          <div className="offline-copy">
            <Leaf size={28} />
            <b>natura</b>
            <span>
              Ingen uppkoppling.
              <br />
              Inga hinder.
            </span>
            <small>
              <i /> OFFLINE-FIRST
            </small>
          </div>
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-content">
              <div>
                <Leaf size={15} />
                <span>Natura</span>
                <span className="offline-dot" />
              </div>
              <small>EN LOKAL ÖVERENSKOMMELSE</small>
              <h4>Vi är överens.</h4>
              <div className="qr-code">
                {Array.from({ length: 81 }, (_, i) => (
                  <i
                    key={i}
                    className={(i * 17 + (i % 4)) % 7 > 2 ? "qr-dark" : ""}
                  />
                ))}
              </div>
              <span className="phone-caption">Skanna. Signera. Klart.</span>
              <div className="phone-sign">
                <ShieldCheck size={12} /> Kryptografiskt signerat
              </div>
            </div>
          </div>
        </div>
      )}
      {project.visual === "ledger" && (
        <div className="app-window mini-window ledger-window">
          <BrowserBar title="Bokföring & MCP" />
          <div className="mini-app">
            <div className="mini-toolbar">
              <b>Din ekonomi, i ordning.</b>
              <span>Översikt</span>
            </div>
            <div className="ledger-lines">
              {["Verifikationer", "Fakturor", "Rapporter"].map((x, i) => (
                <div key={x}>
                  <span>
                    <FileText size={13} />
                    {x}
                  </span>
                  <div style={{ width: `${70 - i * 18}%` }} />
                  <Check size={12} />
                </div>
              ))}
            </div>
            <div className="mcp-bridge">
              <span>
                <Command size={16} /> Claude
              </span>
              <i />
              <b>MCP</b>
              <i />
              <span>
                <BookOpen size={16} /> Bokföring
              </span>
            </div>
          </div>
        </div>
      )}
      {project.visual === "health" && (
        <div className="app-window mini-window health-window">
          <BrowserBar title="Tibb.nu" />
          <div className="mini-app">
            <div className="health-nav">
              <b>
                tibb<span>.</span>
              </b>
              <span>Kunskap &nbsp; Behandlingar &nbsp; Kurser</span>
            </div>
            <div className="health-content">
              <div>
                <small>KUNSKAP SOM FÖRENAR</small>
                <h4>
                  Plats för hälsa.
                  <br />
                  Rum för lärande.
                </h4>
                <span className="mock-button">
                  Upptäck kurserna <ArrowRight size={10} />
                </span>
              </div>
              <div className="botanical">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <span />
              </div>
            </div>
            <div className="health-links">
              <span>
                Kurser <ArrowRight size={11} />
              </span>
              <span>
                Bokningar <ArrowRight size={11} />
              </span>
              <span>
                Kunskap <ArrowRight size={11} />
              </span>
            </div>
          </div>
        </div>
      )}
      {project.visual === "trading" && (
        <div className="app-window mini-window trading-window">
          <BrowserBar title="Slowlax" />
          <div className="mini-app">
            <div className="mini-toolbar">
              <b>
                slowlax<span>↗</span>
              </b>
              <span>Din kunskapsplattform</span>
            </div>
            <h4>Investera i din kunskap.</h4>
            <div className="course-cards">
              {["Grunderna", "Strategi", "Fördjupning"].map((x, i) => (
                <div key={x}>
                  <span>0{i + 1}</span>
                  <BookOpen size={21} />
                  <b>{x}</b>
                  <small>Utforska kursen →</small>
                </div>
              ))}
            </div>
            <div className="trading-bottom">
              KURSER <i /> MEDLEMSKAP <i /> UTVECKLING
            </div>
          </div>
        </div>
      )}
      {project.visual === "scooter" && (
        <div className="app-window mini-window scooter-window">
          <BrowserBar title="Elscooter Sweden" />
          <div className="mini-app">
            <div className="scooter-nav">
              <b>
                elscooter<span>sweden.</span>
              </b>
              <span>Elfordon &nbsp; Tillbehör &nbsp; Service</span>
            </div>
            <div className="scooter-hero">
              <div>
                <small>EN VARDAG I RÖRELSE</small>
                <h4>
                  Mer frihet.
                  <br />
                  Mindre avstånd.
                </h4>
                <span className="mock-button">
                  Upptäck elfordon <ArrowRight size={10} />
                </span>
              </div>
              <svg
                className="scooter-drawing"
                viewBox="0 0 180 145"
                fill="none"
                aria-hidden="true"
              >
                <ellipse cx="95" cy="133" rx="76" ry="4" fill="#d8dfd2" />
                <circle cx="40" cy="119" r="17" fill="#3a443a" />
                <circle cx="40" cy="119" r="9" fill="#a6b19d" />
                <circle cx="147" cy="119" r="17" fill="#3a443a" />
                <circle cx="147" cy="119" r="9" fill="#a6b19d" />
                <path
                  d="M39 117H119L132 100L113 22"
                  stroke="#526451"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M114 22L140 118"
                  stroke="#7c8f72"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M99 22H126"
                  stroke="#3a443a"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M49 113H109"
                  stroke="#d99969"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M25 102Q40 91 54 103"
                  stroke="#526451"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M133 103Q147 94 161 104"
                  stroke="#526451"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <rect
                  x="115"
                  y="35"
                  width="8"
                  height="5"
                  rx="2"
                  fill="#e9c594"
                />
              </svg>
            </div>
            <div className="scooter-foot">
              <span>E-HANDEL</span>
              <i />
              <span>PLATTFORMSUTVECKLING</span>
              <i />
              <span>MARKNADSFÖRING</span>
            </div>
          </div>
        </div>
      )}
      <span className="sketch-label">Gränssnittsskiss</span>
    </div>
  );
}

function ArrowUp() {
  return <span aria-hidden="true">↗</span>;
}
