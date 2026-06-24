import { Link } from "@tanstack/react-router";
import { Wheat, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/ristorante", label: "Ristorante" },
  { to: "/galleria", label: "Galleria" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-12">
            <Wheat className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-tight text-foreground">Agriturismo Capodimonte</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Fiano Romano · dal 1985</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+393332885510"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-warm transition-transform hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            333 288 5510
          </a>
        </nav>

        <button
          aria-label="Apri menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-3 text-base text-foreground/85 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+393332885510"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> 333 288 5510
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
