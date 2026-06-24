ns

## Obiettivo
Sito vetrina multi-pagina per **Agriturismo Capodimonte** a Fiano Romano (RM). Stile rurale autentico, palette Terra & Salvia (terracotta caldo + verde salvia + neutri sabbia), contenuti placeholder coerenti con la tradizione laziale.

## Struttura del sito
5 route separate (SEO-friendly, ognuna con meta tag propri):

```text
src/routes/
  __root.tsx        → header + footer condivisi
  index.tsx         → / Home con hero, intro, anteprima sezioni
  chi-siamo.tsx     → /chi-siamo storia famiglia e filosofia
  ristorante.tsx    → /ristorante menù, piatti tipici, info
  galleria.tsx      → /galleria foto casale, campagna, piatti
  contatti.tsx      → /contatti indirizzo, mappa, telefono, FB
```

Header con logo testuale "Agriturismo Capodimonte" + nav (Home, Chi siamo, Ristorante, Galleria, Contatti, telefono cliccabile).
Footer con indirizzo, telefono, link Facebook, orari, credit.

## Direzione visiva
**Palette Terra & Salvia** (token in `src/styles.css`):
- background sabbia caldo `#faf6ee`
- foreground bruno scuro `#2d2418`
- primary terracotta `#c4654a`
- secondary verde salvia `#87a878`, accent verde scuro `#4a6741`
- muted pesca chiara `#e8a87c` per dettagli

**Typography**: display serif rustico (Fraunces o Cormorant per titoli) + sans umanista (Work Sans / Nunito Sans per body). Caricati via `<link>` Google Fonts nel `__root.tsx` head.

**Texture & dettagli rurali**:
- Grana carta sottile su sfondi (CSS noise via SVG data URI)
- Bordi arrotondati morbidi, ombre calde tinte terracotta
- Divisori decorativi con icone spiga/foglia (lucide: Wheat, Leaf)
- Hero con immagine generata (casale + campagna laziale al tramonto)
- Sezioni alternate fondo sabbia / fondo crema

**Motion** minimale: fade-in on scroll leggero su sezioni.

## Contenuti placeholder coerenti
- **Home**: hero "Sapori autentici della campagna romana", 3 highlight (cucina della tradizione, prodotti dell'orto, ambiente familiare), call-to-action prenotazione telefonica.
- **Chi siamo**: storia famiglia, legame con la terra di Fiano Romano, filosofia km0.
- **Ristorante**: menù tipico laziale in card (antipasti della casa, fettuccine al ragù, abbacchio scottadito, saltimbocca, tiramisù della nonna), nota su prodotti propri, info prenotazione.
- **Galleria**: grid foto (casale, sala interna, tavolata, piatti, campagna, orto).
- **Contatti**: card con indirizzo (Via Civitellese 3, 00065 Fiano Romano RM), telefono `333 288 5510` (link `tel:`), link Facebook, embed mappa Google (iframe statico sull'indirizzo), orari placeholder.

## Immagini
Generate con imagegen (preferito JPG, salvate in `src/assets/`):
1. Hero — casale rustico nella campagna laziale, luce dorata serale
2. Esterno — facciata in pietra e portico con vite
3. Sala da pranzo — tavoli in legno apparecchiati, atmosfera calda
4. Piatto — fettuccine al ragù in piatto rustico
5. Campagna/orto — filari, ulivi, colline
6. Tavolata conviviale all'aperto sotto pergolato

## Dettagli tecnici
- Stack esistente TanStack Start + Tailwind v4 (token in `src/styles.css` con `@theme inline`, palette in `:root`).
- Nessun backend richiesto (sito vetrina puro, no Lovable Cloud).
- Tutti i `createFileRoute` con `head()` proprio (title/description/og distinti per pagina).
- Footer e Header come componenti in `src/components/site/`.
- Link Facebook ufficiale: `https://www.facebook.com/AgriturismoCapodimonte/`.
- Telefono e indirizzo marcati con microdata schema.org LocalBusiness/Restaurant nel footer per SEO.

## Fuori scope
- Sezione Camere (non inclusa, agriturismo trattato come ristorante).
- Sistema di prenotazione online (solo telefono).
- CMS / area admin.
- Traduzioni multilingua (solo italiano).
