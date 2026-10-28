import { ArrowUpRight, Link2, Mail, Phone } from "lucide-react";
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
          <div className="contact-links">
            <a
              className="contact-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link2 size={22} />
              <span>LinkedIn</span>
              <ArrowUpRight size={22} />
            </a>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail size={22} />
              <span>{profile.email}</span>
              <ArrowUpRight size={22} />
            </a>
            <a className="contact-link" href={`tel:${profile.phone}`}>
              <Phone size={22} />
              <span>{profile.phoneDisplay}</span>
              <ArrowUpRight size={22} />
            </a>
          </div>
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
