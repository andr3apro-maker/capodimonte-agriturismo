import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Wheat } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Wheat className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <span className="font-display text-xl">Agriturismo Capodimonte</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-accent-foreground/75">
            Cucina della tradizione laziale, prodotti della nostra terra, ospitalità di famiglia
            tra le colline di Fiano Romano.
          </p>
        </div>

        <div
          itemScope
          itemType="https://schema.org/Restaurant"
          className="space-y-3 text-sm"
        >
          <h3 className="font-display text-lg text-accent-foreground">Dove siamo</h3>
          <meta itemProp="name" content="Agriturismo Capodimonte" />
          <p
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            className="flex items-start gap-2 text-accent-foreground/85"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.7} />
            <span>
              <span itemProp="streetAddress">Via Civitellese, 3</span>
              <br />
              <span itemProp="postalCode">00065</span>{" "}
              <span itemProp="addressLocality">Fiano Romano</span>{" "}
              <span itemProp="addressRegion">RM</span>
            </span>
          </p>
          <p className="flex items-center gap-2 text-accent-foreground/85">
            <Phone className="h-4 w-4" strokeWidth={1.7} />
            <a href="tel:+393332885510" itemProp="telephone" className="hover:underline">
              333 288 5510
            </a>
          </p>
          <a
            href="https://www.facebook.com/AgriturismoCapodimonte/"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="sameAs"
            className="inline-flex items-center gap-2 text-accent-foreground/85 hover:underline"
          >
            <Facebook className="h-4 w-4" strokeWidth={1.7} />
            Seguici su Facebook
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent-foreground">Sezioni</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-accent-foreground/85">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/chi-siamo" className="hover:underline">Chi siamo</Link></li>
            <li><Link to="/ristorante" className="hover:underline">Ristorante</Link></li>
            <li><Link to="/galleria" className="hover:underline">Galleria</Link></li>
            <li><Link to="/contatti" className="hover:underline">Contatti</Link></li>
          </ul>
          <p className="mt-6 text-xs text-accent-foreground/60">
            Aperto a pranzo e cena · gradita la prenotazione
          </p>
        </div>
      </div>
      <div className="border-t border-accent-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-accent-foreground/60">
          © {new Date().getFullYear()} Agriturismo Capodimonte — Via Civitellese 3, Fiano Romano (RM)
        </p>
      </div>
    </footer>
  );
}
