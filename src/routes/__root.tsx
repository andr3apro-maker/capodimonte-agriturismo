import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Qualcosa è andato storto</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Riprova tra un momento o torna alla home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Riprova
          </button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "Cgk3CFNNHhTi61USE7OF8SNvBhgxZtdiBvr0E6wjkQ4" },
      { title: "Agriturismo Capodimonte — Cucina laziale a Fiano Romano" },
      {
        name: "description",
        content:
          "Agriturismo a Fiano Romano (RM): sapori autentici della campagna romana, prodotti dell'orto e ospitalità di famiglia. Prenota: 333 288 5510.",
      },
      { name: "author", content: "Agriturismo Capodimonte" },
      { property: "og:site_name", content: "Agriturismo Capodimonte" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Agriturismo Capodimonte — Cucina laziale a Fiano Romano" },
      { name: "twitter:title", content: "Agriturismo Capodimonte — Cucina laziale a Fiano Romano" },
      { property: "og:description", content: "Agriturismo a Fiano Romano (RM): sapori autentici della campagna romana, prodotti dell'orto e ospitalità di famiglia. Prenota: 333 288 5510." },
      { name: "twitter:description", content: "Agriturismo a Fiano Romano (RM): sapori autentici della campagna romana, prodotti dell'orto e ospitalità di famiglia. Prenota: 333 288 5510." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b959e2c5-92a2-445a-a9e0-f81be340c9b8/id-preview-70d0e874--c2d6807e-ab8a-412e-8f9a-5c8276bcdf35.lovable.app-1782314168678.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b959e2c5-92a2-445a-a9e0-f81be340c9b8/id-preview-70d0e874--c2d6807e-ab8a-412e-8f9a-5c8276bcdf35.lovable.app-1782314168678.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Agriturismo Capodimonte",
          servesCuisine: ["Italiana", "Laziale", "Romana"],
          priceRange: "€€",
          telephone: "+39 333 288 5510",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Civitellese, 3",
            addressLocality: "Fiano Romano",
            postalCode: "00065",
            addressRegion: "RM",
            addressCountry: "IT",
          },
          sameAs: ["https://www.facebook.com/AgriturismoCapodimonte/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
