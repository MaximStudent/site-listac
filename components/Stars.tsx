import { Star } from "lucide-react";

/** Note affichée — valeur réelle uniquement. */
export default function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-[var(--color-primary)]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} strokeWidth={2} fill="currentColor" />
      ))}
    </span>
  );
}
