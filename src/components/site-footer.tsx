import { ArrowUpRight, Mail } from "lucide-react";
import { Github } from "./github-icon";
import { profile } from "@/data/projects";

export function SiteFooter() {
  return (
    <>
      <section className="contact-section" id="kontakt">
        <div className="container contact-inner">
          <div>
            <p className="eyebrow">
              <span className="tiny-cross">+</span> NÄSTA PROJEKT
            </p>
            <h2>
              En idé som behöver
              <br />
              bli verklighet<span className="olive-text">?</span>
            </h2>
            <p>
              Jag gillar att prata om teknik, produkter och problem värda att
              lösa.
            </p>
          </div>
          <a
            className="contact-link"
            href={profile.email ? `mailto:${profile.email}` : profile.github}
            target={profile.email ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            {profile.email ? <Mail size={22} /> : <Github size={22} />}
            <span>
              {profile.email ? "Skicka ett mejl" : "Hitta mig på GitHub"}
            </span>
            <ArrowUpRight size={22} />
          </a>
        </div>
      </section>
      <footer className="site-footer container">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Byggt med omtanke. Och Next.js.</span>
        <a href="#top">Till toppen ↑</a>
      </footer>
    </>
  );
}
