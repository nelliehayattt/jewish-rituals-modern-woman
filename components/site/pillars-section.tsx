import Link from "next/link";
import { pillars } from "@/data/site";

export function PillarsSection() {
  return (
    <section
      id="pillars"
      className="bg-[linear-gradient(180deg,#fffaf6_0%,#fff7f2_100%)] px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-4xl md:mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            The Three Pillars
          </p>
          <h2 className="font-display text-[clamp(2.25rem,11vw,4.8rem)] leading-[0.95] text-[var(--color-burgundy)]">
            A map for the modern Jewish woman who remembers there is more.
          </h2>
        </div>

        <div className="grid gap-0 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`py-5 md:px-6 md:py-0 ${
                index === 0 ? "" : "border-t border-[color:rgba(73,23,41,0.08)] md:border-l md:border-t-0 md:border-[color:rgba(73,23,41,0.10)]"
              } ${index === 0 ? "md:pr-7" : ""} ${
                index === 1 ? "md:px-7" : ""
              } ${index === 2 ? "md:pl-7" : ""}`}
            >
              <div className="mb-3">
                <div className="mb-1.5 flex items-end gap-2">
                  <span className="font-display text-[1.8rem] leading-none text-[var(--color-rose)] md:text-[2.05rem]">
                    {pillar.number}.
                  </span>
                  <h3 className="font-display text-[1.7rem] leading-[0.95] tracking-[-0.03em] text-[var(--color-burgundy)] md:text-[1.95rem]">
                    {pillar.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-[var(--color-gold)]/70" />
                  <span className="text-[0.65rem] text-[var(--color-gold)]">✦</span>
                  <div className="h-px w-6 bg-[var(--color-gold)]/55" />
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="max-w-none font-display text-[1.02rem] leading-[1.3] italic text-[var(--color-rose)] md:max-w-[16.5rem] md:text-[1.08rem]">
                  {pillar.lead}
                </p>

                <p className="max-w-none text-[0.93rem] leading-[1.52] text-[var(--color-copy)] md:max-w-[16.5rem] md:text-[0.94rem] md:leading-[1.48]">
                  {pillar.text}
                </p>

                {"links" in pillar && pillar.links ? (
                  <p className="max-w-none text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] md:max-w-[16.5rem]">
                    Click:{" "}
                    {pillar.links.map((link, linkIndex) => (
                      <span key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[var(--color-burgundy)] transition-colors duration-200 hover:text-[var(--color-rose)]"
                        >
                          {link.label}
                        </Link>
                        {linkIndex < pillar.links.length - 1 ? (
                          <span className="px-1.5 text-[var(--color-gold)]">•</span>
                        ) : null}
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
