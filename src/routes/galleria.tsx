import { createFileRoute } from "@tanstack/react-router";
import hero from "../assets/hero-casale.jpg";
import esterno from "../assets/esterno.jpg";
import sala from "../assets/sala.jpg";
import pergolato from "../assets/pergolato.jpg";
import piatto from "../assets/piatto.jpg";
import campagna from "../assets/campagna.jpg";
import antipasto from "../assets/antipasto.jpg";
import dolce from "../assets/dolce.jpg";
import { SectionDivider } from "../components/site/SectionDivider";

export const Route = createFileRoute("/galleria")({
  head: () => ({
    meta: [
      { title: "Agriturismo Capodimonte Fiano Romano | Galleria foto" },
      {
        name: "description",
        content:
          "Galleria fotografica di Agriturismo Capodimonte a Fiano Romano: il casale, la sala da pranzo, i piatti della cucina laziale, il pergolato e la campagna romana.",
      },
      { property: "og:title", content: "Agriturismo Capodimonte Fiano Romano | Galleria foto" },
      {
        property: "og:description",
        content:
          "Foto di Agriturismo Capodimonte, agriturismo a Fiano Romano nella campagna romana vicino a Roma: casale, sala, piatti e pergolato.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://agriturismocapodimonte.netlify.app/galleria" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Agriturismo Capodimonte Fiano Romano | Galleria foto" },
      {
        name: "twitter:description",
        content:
          "Foto del casale, della sala, dei piatti e della campagna di Agriturismo Capodimonte a Fiano Romano.",
      },
    ],
    links: [{ rel: "canonical", href: "https://agriturismocapodimonte.netlify.app/galleria" }],
  }),
  component: Galleria,
});

type Shot = { src: string; alt: string; span?: string };

const shots: Shot[] = [
  { src: hero, alt: "Casale in pietra a due piani di Agriturismo Capodimonte al tramonto, con prato, cipressi e terrazza verso la campagna romana", span: "sm:col-span-2 sm:row-span-2" },
  { src: piatto, alt: "Piatto di spaghetti al ragù in ciotola di ceramica rustica, con grana grattugiata e basilico su tavolo di legno" },
  { src: pergolato, alt: "Tavolata apparecchiata sotto un pergolato di viti affacciato sui filari della vigna" },
  { src: sala, alt: "Sala da pranzo del ristorante con pareti in pietra, travi a vista, pavimento in cotto e tavoli apparecchiati", span: "sm:col-span-2" },
  { src: campagna, alt: "Campagna romana all'alba con filari di ulivi e vigneti che salgono verso le colline" },
  { src: antipasto, alt: "Tagliere di antipasto con salumi, formaggi, olive, pomodorini e bruschette" },
  { src: esterno, alt: "Ingresso in pietra del casale con pergolato di edera e vasi di terracotta" },
  { src: dolce, alt: "Dolce a strati di crema e cacao servito in ciotola di ceramica" },
];

function Galleria() {
  return (
    <article>
      <section className="mx-auto max-w-4xl px-5 pb-12 pt-24 text-center">
        <span className="text-[11px] uppercase tracking-[0.25em] text-primary">Galleria</span>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">
          Sguardi dal casale.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Un piccolo album della nostra giornata: dall'orto al forno, dalla sala al pergolato.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <SectionDivider />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`group grain grain-overlay relative overflow-hidden rounded-2xl bg-muted ${s.span ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-3 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                {s.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
}
