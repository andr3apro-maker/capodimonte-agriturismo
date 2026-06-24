import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Facebook, Clock, Car } from "lucide-react";
import { SectionDivider } from "../components/site/SectionDivider";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Agriturismo Capodimonte, Fiano Romano" },
      { name: "description", content: "Agriturismo Capodimonte — Via Civitellese 3, 00065 Fiano Romano (RM). Telefono 333 288 5510. Trova indicazioni e contatti." },
      { property: "og:title", content: "Contatti — Agriturismo Capodimonte" },
      { property: "og:description", content: "Via Civitellese 3, Fiano Romano (RM). Tel 333 288 5510." },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: Contatti,
});

function Contatti() {
  const mapsQuery = encodeURIComponent("Via Civitellese 3, 00065 Fiano Romano RM");
  return (
    <article>
      <section className="mx-auto max-w-4xl px-5 pb-12 pt-24 text-center">
        <span className="text-[11px] uppercase tracking-[0.25em] text-primary">Contatti</span>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">
          Vieni a trovarci.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Siamo a Fiano Romano, a pochi minuti dal casello autostradale e
          a circa 40 minuti dal centro di Roma.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <SectionDivider />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">Indirizzo</h2>
            <p className="mt-3 flex items-start gap-3 text-foreground/85">
              <MapPin className="mt-1 h-5 w-5 text-primary" strokeWidth={1.7} />
              <span>
                Via Civitellese, 3<br />
                00065 Fiano Romano (RM)<br />
                Città metropolitana di Roma Capitale
              </span>
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Apri in Google Maps →
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">Telefono e social</h2>
            <a
              href="tel:+393332885510"
              className="mt-4 flex items-center gap-3 text-foreground/85 hover:text-primary"
            >
              <Phone className="h-5 w-5 text-primary" strokeWidth={1.7} />
              <span className="text-lg">333 288 5510</span>
            </a>
            <a
              href="https://www.facebook.com/AgriturismoCapodimonte/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-3 text-foreground/85 hover:text-primary"
            >
              <Facebook className="h-5 w-5 text-primary" strokeWidth={1.7} />
              <span>facebook.com/AgriturismoCapodimonte</span>
            </a>
            <p className="mt-5 text-sm text-muted-foreground">
              Per prenotazioni, eventi privati o pranzi di gruppo,
              il modo più veloce per raggiungerci è una telefonata.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">Orari</h2>
            <p className="mt-4 flex items-start gap-3 text-foreground/85">
              <Clock className="mt-1 h-5 w-5 text-primary" strokeWidth={1.7} />
              <span>
                Pranzo · 12:30 – 15:00<br />
                Cena · 19:30 – 22:30<br />
                <span className="text-sm text-muted-foreground">Chiuso il martedì</span>
              </span>
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl">Come arrivare</h2>
            <p className="mt-4 flex items-start gap-3 text-foreground/85">
              <Car className="mt-1 h-5 w-5 text-primary" strokeWidth={1.7} />
              <span>
                A1 uscita Fiano Romano, poi seguire indicazioni per Civitellese.
                Ampio parcheggio gratuito nel piazzale del casale.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="overflow-hidden rounded-3xl border border-border shadow-warm">
          <iframe
            title="Mappa Agriturismo Capodimonte"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </article>
  );
}
