import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Workflow,
  Layers3,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectGrid } from "@/components/project-grid";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main">
        <section className="hero container">
          <div className="hero-topline">
            <span className="hero-kicker">
              <i /> UTVECKLARE & PRODUKTBYGGARE
            </span>
            <span className="hero-index">PORTFOLIO / 2026</span>
          </div>
          <h1>
            Jag bygger digitala
            <br />
            idéer till <span className="hero-italic">verklighet.</span>
            <span className="hero-asterisk" aria-hidden="true">
              ✳
            </span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-description">
              <span className="intro-line" />
              <p>
                Jag är Johan Blomdahl. Jag bygger webbappar,
                <br className="desktop-break" /> AI-lösningar och e-handel –
                från första tanke
                <br className="desktop-break" /> till en produkt som fungerar i
                vardagen.
              </p>
            </div>
            <a className="button button-dark hero-cta" href="#projekt">
              Utforska mina projekt <ArrowDown size={17} />
            </a>
          </div>
          <div className="hero-footnote">
            <span>TEKNIK MED ETT TYDLIGT SYFTE</span>
            <div>
              <span>Webbutveckling</span>
              <i />
              <span>AI & automation</span>
              <i />
              <span>E-handel</span>
            </div>
            <span className="scroll-hint">
              SCROLLA FÖR ATT UTFORSKA <ArrowDown size={12} />
            </span>
          </div>
        </section>
        <ProjectGrid />
        <section className="about-section" id="om">
          <div className="container about-layout">
            <div className="about-intro">
              <p className="eyebrow">
                <span className="tiny-cross">+</span> OM MIG
              </p>
              <h2>
                Nyfiken på tekniken.
                <br />
                Fokuserad på
                <br />
                <span className="serif-italic">det den gör möjligt.</span>
              </h2>
              <div className="about-signature">
                Johan Blomdahl <span>↗</span>
              </div>
            </div>
            <div className="about-content">
              <p className="about-lead">
                Jag trivs där en idé möter ett riktigt problem. Där något kan
                bli enklare, smartare eller mer användbart.
              </p>
              <p>
                Mina projekt spänner från e-handel och kundportaler till
                AI-verktyg och appar som fungerar utan internet. Jag gillar att
                förstå helheten och få delarna att fungera tillsammans –
                gränssnittet, logiken och systemen bakom.
              </p>
              <p>
                För mig är tekniken ett verktyg. Det intressanta är vad vi kan
                bygga med den.
              </p>
              <div className="capabilities">
                <div>
                  <Code2 size={19} />
                  <span>Webb & produkt</span>
                </div>
                <div>
                  <Sparkles size={19} />
                  <span>AI & automation</span>
                </div>
                <div>
                  <Layers3 size={19} />
                  <span>E-handel & plattformar</span>
                </div>
                <div>
                  <Workflow size={19} />
                  <span>Integrationer & MCP</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
