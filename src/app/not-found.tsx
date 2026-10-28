import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <span className="eyebrow">404 / SIDAN SAKNAS</span>
      <h1>Här var det tomt.</h1>
      <p>
        Projektet eller sidan du letar efter finns inte på den här adressen.
      </p>
      <Link className="button button-dark" href="/">
        <ArrowLeft size={16} /> Till startsidan
      </Link>
    </main>
  );
}
