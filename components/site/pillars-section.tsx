import { pillars } from "@/data/site";

export function PillarsSection() {
  return (
    <section
      id="pillars"
      className="bg-[linear-gradient(180deg,#fffaf6_0%,#fff7f2_100%)] px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-4xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            The Three Pillars
          </p>
          <h2 className="font-display text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.95] text-[var(--color-burgundy)]">
            A map for the modern Jewish woman who remembers there is more.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-0">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`px-0 md:px-6 ${
                index === 0 ? "" : "md:border-l md:border-[color:rgba(73,23,41,0.10)]"
              } ${index === 0 ? "md:pr-7" : ""} ${
                index === 1 ? "md:px-7" : ""
              } ${index === 2 ? "md:pl-7" : ""}`}
            >
              <div className="mb-3">
                <div className="mb-1.5 flex items-end gap-2">
                  <span className="font-display text-[2.05rem] leading-none text-[var(--color-rose)]">
                    {pillar.number}.
                  </span>
                  <h3 className="font-display text-[1.95rem] leading-[0.95] tracking-[-0.03em] text-[var(--color-burgundy)]">
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
                <p className="max-w-[16.5rem] font-display text-[1.08rem] leading-[1.28] italic text-[var(--color-rose)]">
                  {pillar.lead}
                </p>

                <p className="max-w-[16.5rem] text-[0.94rem] leading-[1.48] text-[var(--color-copy)]">
                  {pillar.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
