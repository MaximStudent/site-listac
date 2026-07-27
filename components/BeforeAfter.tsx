import Image from "next/image";

type Props = {
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
  caption: string;
};

/** Paire avant/après 4:3, badges bleus, légende commune + intervention (blueprint 02 §7). */
export default function BeforeAfter({ before, after, altBefore, altAfter, caption }: Props) {
  return (
    <figure className="m-0">
      <div className="grid grid-cols-2 gap-[var(--space-1)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
          <Image src={before} alt={altBefore} fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" />
          <span className="absolute left-2 top-2 rounded-[var(--radius)] bg-[var(--color-primary)] px-2 py-0.5 text-xs font-medium text-[var(--color-on-primary)]">
            Avant
          </span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
          <Image src={after} alt={altAfter} fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover" />
          <span className="absolute left-2 top-2 rounded-[var(--radius)] bg-[var(--color-primary)] px-2 py-0.5 text-xs font-medium text-[var(--color-on-primary)]">
            Après
          </span>
        </div>
      </div>
      <figcaption className="mt-2 text-sm text-[var(--color-text-muted)]">{caption}</figcaption>
    </figure>
  );
}
