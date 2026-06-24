import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock } from "lucide-react";
import sala from "../assets/sala.jpg";
import { SectionDivider } from "../components/site/SectionDivider";

export const Route = createFileRoute("/ristorante")({
  head: () => ({
    meta: [
      { title: "Ristorante — Agriturismo Capodimonte, Fiano Romano" },
      { name: "description", content: "Menù dell'Agriturismo Capodimonte: antipasti della casa, pasta fatta a mano, abbacchio, saltimbocca e dolci della tradizione laziale." },
      { property: "og:title", content: "Ristorante — Agriturismo Capodimonte" },
      { property: "og:description", content: "Cucina laziale della tradizione, pasta fatta a mano e prodotti dell'orto." },
      { property: "og:url", content: "/ristorante" },
    ],
    links: [{ rel: "canonical", href: "/ristorante" }],
  }),
  component: Ristorante,
});

const menu = [
  {
    section: "Antipasti",
    items: [
      { n: "Antipasto della casa", d: "Salumi nostrani, pecorino, bruschette al pomodoro e olio del nostro frantoio." },
      { n: "Crostini misti", d: "Fegatini alla romana, ricotta e erbette dell'orto, lardo e miele." },
      { n: "Fritti dell'aia", d: "Fiori di zucca, olive ascolane, supplì al ragù." },
    ],
  },
  {
    section: "Primi",
    items: [
      { n: "Fettuccine al ragù", d: "Pasta tirata a mano, ragù di carne cotto lentamente per cinque ore." },
      { n: "Tonnarelli cacio e pepe", d: "Pecorino romano DOP e pepe nero macinato al momento." },
      { n: "Gnocchi del giovedì", d: "Patate, sugo finto o burro e salvia. Solo il giovedì, come si deve." },
      { n: "Minestra di stagione", d: "Quello che ci porta l'orto, cotto piano in pentola di coccio." },
    ],
  },
  {
    section: "Secondi",
    items: [
      { n: "Abbacchio al forno", d: "Cosciotto di agnello, patate e rosmarino del nostro giardino." },
      { n: "Saltimbocca alla romana", d: "Vitello, prosciutto crudo, salvia e marsala." },
      { n: "Pollo ruspante in umido", d: "Cotto con olive nere, pomodoro fresco e vino bianco." },
      { n: "Coniglio alla cacciatora", d: "Aromi dell'orto, vino rosso e pinoli." },
    ],
  },
  {
    section: "Dolci",
    items: [
      { n: "Tiramisù della nonna", d: "Ricetta di famiglia, mascarpone e caffè della moka." },
      { n: "Crostata di visciole", d: "Pasta frolla e marmellata di visciole fatta in casa." },
      { n: "Ciambellone al vino", d: "Servito con vin santo o passito." },
    ],
  },
];

function Ristorante() {
  return (
    <article>
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={sala} alt="Sala da pranzo dell'Agriturismo Capodimonte" width={1280} height={960} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background" />
        </div>
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-36 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-primary">Il ristorante</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">
            La cucina della casa.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Un menù di stagione che racconta la tradizione laziale.
            Quello che segue è un assaggio: la carta cambia spesso, secondo l'orto e il mercato.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16">
        <SectionDivider label="Il menù" />
      </section>

      <section className="mx-auto max-w-4xl space-y-16 px-5 pb-20">
        {menu.map((group) => (
          <div key={group.section}>
            <h2 className="font-display text-3xl text-primary sm:text-4xl">{group.section}</h2>
            <div className="mt-6 divide-y divide-border/70">
              {group.items.map((item) => (
                <div key={item.n} className="grid gap-1 py-5 sm:grid-cols-[1fr_2fr] sm:gap-8">
                  <h3 className="font-display text-xl text-foreground">{item.n}</h3>
                  <p className="text-muted-foreground">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="rounded-2xl bg-muted/60 p-6 text-sm italic text-muted-foreground">
          Per intolleranze, allergie o richieste particolari, segnalateci tutto al momento della
          prenotazione: prepareremo qualcosa pensato apposta per voi.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 sm:grid-cols-2 sm:p-12">
          <div>
            <h2 className="font-display text-3xl">Prenotare un tavolo</h2>
            <p className="mt-3 text-muted-foreground">
              Siamo aperti a pranzo e cena. La domenica e nei giorni di festa si consiglia
              di prenotare con qualche giorno di anticipo.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" /> Pranzo 12:30–15:00 · Cena 19:30–22:30
            </p>
          </div>
          <div className="flex items-center justify-start sm:justify-end">
            <a
              href="tel:+393332885510"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-warm"
            >
              <Phone className="h-5 w-5" /> Chiama 333 288 5510
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
