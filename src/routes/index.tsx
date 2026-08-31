import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Leaf, UtensilsCrossed, Heart, ArrowRight } from "lucide-react";
import heroImg from "../assets/hero-casale.jpg";
import pergolato from "../assets/pergolato.jpg";
import piatto from "../assets/piatto.jpg";
import campagna from "../assets/campagna.jpg";
import { SectionDivider } from "../components/site/SectionDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agriturismo Capodimonte | Agriturismo a Fiano Romano" },
      { name: "description", content: "Agriturismo Capodimonte a Fiano Romano, nella campagna romana. Cucina tradizionale laziale, prodotti genuini e ospitalità in un ambiente autentico." },
      { property: "og:title", content: "Agriturismo Capodimonte | Agriturismo a Fiano Romano" },
      { property: "og:description", content: "Agriturismo Capodimonte a Fiano Romano, nella campagna romana. Cucina tradizionale laziale, prodotti genuini e ospitalità in un ambiente autentico." },
      { property: "og:url", content: "https://agriturismocapodimonte.netlify.app/" },
    ],
    links: [{ rel: "canonical", href: "https://agriturismocapodimonte.netlify.app/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grain grain-overlay relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Casale dell'Agriturismo Capodimonte nella campagna di Fiano Romano al tramonto"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 sm:pb-28">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-background/85 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-foreground/80 backdrop-blur">
            <Leaf className="h-3.5 w-3.5 text-secondary" /> Fiano Romano · dal 1985
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-white drop-shadow-md sm:text-6xl md:text-7xl">
            Agriturismo Capodimonte a Fiano Romano
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Un casale di famiglia immerso fra ulivi e vigneti, dove la cucina laziale incontra
            i prodotti della nostra terra. Una tavola, una storia, ogni giorno.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+393332885510"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-warm transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" /> Prenota un tavolo
            </a>
            <Link
              to="/ristorante"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Scopri il menù <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO + HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionDivider label="La nostra filosofia" />
        <div className="mt-10 grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Una terra generosa,<br />una tavola sincera.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              All'Agriturismo Capodimonte tutto comincia fuori: nell'orto, nel forno a legna,
              tra le file degli ulivi. Portiamo in tavola quello che la stagione ci offre,
              cucinato con le ricette di sempre e l'aggiunta di un po' di pazienza.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Siamo a pochi minuti da Roma, ma il ritmo qui è quello della campagna.
              Vieni a sederti sotto il pergolato.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -rotate-1 rounded-3xl bg-secondary/25" />
            <img
              src={campagna}
              alt="Filari di ulivi e orto nella campagna di Fiano Romano"
              width={1280}
              height={960}
              loading="lazy"
              className="relative rounded-2xl object-cover shadow-warm"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: UtensilsCrossed,
              title: "Cucina della tradizione",
              text: "Pasta fatta a mano, abbacchio, saltimbocca, dolci della nonna. Ricette laziali servite come a casa.",
            },
            {
              icon: Leaf,
              title: "Prodotti dell'orto",
              text: "Verdure di stagione, olio, vino e conserve dalla nostra terra. Filiera cortissima, gusto lungo.",
            },
            {
              icon: Heart,
              title: "Accoglienza di famiglia",
              text: "Tre generazioni dietro ai fornelli e in sala. Vi accogliamo come si accoglie un amico.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-warm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BIG IMAGE BAND */}
      <section className="relative">
        <div className="grain grain-overlay relative h-[60vh] min-h-[420px] overflow-hidden">
          <img
            src={pergolato}
            alt="Tavolata conviviale sotto il pergolato all'Agriturismo Capodimonte"
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-12">
            <p className="max-w-xl font-display text-3xl leading-snug text-foreground sm:text-4xl">
              «Si mangia bene quando si mangia insieme.»
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              — La famiglia Capodimonte
            </p>
          </div>
        </div>
      </section>

      {/* PREVIEW RISTORANTE */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-3 rotate-1 rounded-3xl bg-primary/15" />
            <img
              src={piatto}
              alt="Fettuccine al ragù della casa"
              width={1280}
              height={960}
              loading="lazy"
              className="relative rounded-2xl object-cover shadow-warm"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary">Il ristorante</span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Un menù che cambia con la campagna.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Antipasti della casa, pasta tirata al mattino, secondi cotti lenti,
              dolci fatti in casa. La carta segue le stagioni e quello che porta l'orto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/ristorante"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
              >
                Vedi il menù <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/galleria"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                Guarda la galleria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grain grain-overlay relative overflow-hidden rounded-3xl bg-accent px-8 py-14 text-accent-foreground sm:px-14 sm:py-20">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_auto]">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Vieni a trovarci a Fiano Romano.
              </h2>
              <p className="mt-4 max-w-xl text-accent-foreground/85">
                Per prenotare un tavolo, organizzare un pranzo di famiglia o una cena tra amici,
                chiamaci: ti rispondiamo direttamente dal casale.
              </p>
              <p className="mt-6 flex items-center gap-2 text-sm text-accent-foreground/80">
                <MapPin className="h-4 w-4" /> Via Civitellese, 3 · 00065 Fiano Romano (RM)
              </p>
            </div>
            <a
              href="tel:+393332885510"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-warm transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-5 w-5" /> 333 288 5510
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
