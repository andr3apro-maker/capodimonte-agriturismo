import { Wheat } from "lucide-react";

export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 text-primary/70">
      <span className="h-px w-16 bg-primary/30 sm:w-24" />
      <Wheat className="h-5 w-5" strokeWidth={1.5} />
      {label && (
        <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
      )}
      <Wheat className="h-5 w-5 -scale-x-100" strokeWidth={1.5} />
      <span className="h-px w-16 bg-primary/30 sm:w-24" />
    </div>
  );
}
