import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[color:rgba(73,23,41,0.08)] bg-[rgba(255,249,244,0.88)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-between px-6 py-3.5 md:px-10 md:py-4">
        <Link
          href="/#top"
          className="max-w-[10.5rem] font-display text-[0.96rem] leading-[1] tracking-[-0.02em] text-[var(--color-burgundy)] md:max-w-[12rem] md:text-[1.02rem]"
        >
          Jewish Rituals
          <span className="block text-[0.88em] italic text-[var(--color-rose)]">
            for the modern woman
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="/mikveh-beach-club"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-rose)] transition-colors duration-200 hover:text-[var(--color-burgundy)] md:text-[0.68rem] md:tracking-[0.18em]"
          >
            <span className="md:hidden">Beach Club</span>
            <span className="hidden md:inline">Mikveh Beach Club</span>
          </Link>
          <a
            href="mailto:nellie.hayat@gmail.com"
            className="hidden rounded-full border border-[color:rgba(73,23,41,0.15)] px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-burgundy)] transition-colors duration-200 hover:bg-[var(--color-blush)] md:inline-flex"
          >
            Reach Out
          </a>
        </div>
      </div>
    </header>
  );
}
