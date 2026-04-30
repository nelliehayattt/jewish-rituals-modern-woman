import { siteMetadata } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#fff8f5] px-6 py-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm uppercase tracking-[0.16em] text-[var(--color-muted)] md:flex-row md:text-left">
          <span>{siteMetadata.name}</span>
          <span className="font-display text-xl text-[var(--color-gold)]">✧</span>
          <span>{siteMetadata.tagline}</span>
        </div>
        <p className="mx-auto mt-5 max-w-4xl text-center text-[0.9rem] leading-6 text-[var(--color-muted)]">
          {siteMetadata.footerDescription}
        </p>
      </div>
    </footer>
  );
}
