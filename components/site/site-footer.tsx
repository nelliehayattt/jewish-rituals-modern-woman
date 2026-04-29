import { siteMetadata } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#fff8f5] px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm uppercase tracking-[0.16em] text-[var(--color-muted)] md:flex-row md:text-left">
        <span>{siteMetadata.name}</span>
        <span className="font-display text-xl text-[var(--color-gold)]">✧</span>
        <span>{siteMetadata.tagline}</span>
      </div>
    </footer>
  );
}
