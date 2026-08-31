import { createFileRoute } from "@tanstack/react-router";
import esterno from "../assets/esterno.jpg";
import campagna from "../assets/campagna.jpg";
import { SectionDivider } from "../components/site/SectionDivider";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Agriturismo a Conduzione Familiare a Fiano Romano | Capodimonte" },
      {
        name: "description",
        content:
          "Agriturismo Capodimonte, agriturismo a conduzione familiare a Fiano Romano nella campagna romana vicino a Roma. Tre generazioni dedicati alla cucina tradizionale laziale e all'accoglienza.",
      },
      { property: "og:title", content: "Agriturismo a Conduzione Familiare a Fiano Romano | Capodimonte" },
      {
        property: "og:description",
        content:
          "La storia di Agriturismo Capodimonte, agriturismo a conduzione familiare a Fiano Romano, nella campagna romana: tre generazioni di cucina tradizionale laziale e accoglienza.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://agriturismocapodimonte.netlify.app/chi-siamo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Agriturismo a Conduzione Familiare a Fiano Romano | Capodimonte" },
      {
        name: "twitter:description",
        content:
          "Agriturismo Capodimonte a Fiano Romano, nella campagna romana: tre generazioni di cucina tradizionale laziale e accoglienza familiare.",
      },
    ],
    links: [{ rel: "canonical", href: "https://agriturismocapodimonte.netlify.app/chi-siamo" }],
  }),
  component: ChiSiamo,
});

function ChiSiamo() {
  return (
    <article>
      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={esterno} alt="Casale di Agriturismo Capodimonte, agriturismo a conduzione familiare a Fiano Romano nella campagna romana" width={1280} height={960} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-36 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-primary">Chi siamo</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">
            Agriturismo a conduzione familiare<br />a Fiano Romano, nella campagna romana
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Da oltre quarant'anni la famiglia Capodimonte accoglie gli ospiti nel suo casale
            a Fiano Romano, con la semplicità di una cucina tradizionale laziale fatta in casa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-10 px-5 pb-16">
        <SectionDivider label="La nostra storia" />

        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Tutto è cominciato nel 1985, quando i nonni hanno aperto le porte del casale
            ai primi ospiti, servendo i piatti che si erano sempre cucinati in famiglia:
            fettuccine al ragù, abbacchio al forno, la torta di mele della domenica.
          </p>
          <p>
            Da allora poco è cambiato. Oggi siamo arrivati alla terza generazione,
            ma la cucina è ancora quella della nonna, l'orto è lo stesso che curava il nonno,
            e i tavoli — quando il tempo lo permette — si apparecchiano ancora sotto il pergolato.
          </p>
          <p>
            Crediamo nella filiera cortissima, nelle ricette pazienti, nel servizio senza
            fretta. Crediamo che un pranzo possa durare un pomeriggio intero, e che dopo
            il caffè ci sia sempre tempo per un ammazzacaffè di nostra produzione.
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl border border-border bg-card p-8 sm:grid-cols-3">
          {[
            { n: "1985", l: "Anno di fondazione" },
            { n: "3", l: "Generazioni in cucina" },
            { n: "0 km", l: "Dal nostro orto" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="font-display text-4xl text-primary">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grain grain-overlay overflow-hidden rounded-3xl">
          <img src={campagna} alt="La nostra campagna" width={1280} height={960} loading="lazy" className="h-[40vh] w-full object-cover" />
        </div>
      </section>
    </article>
  );
}
