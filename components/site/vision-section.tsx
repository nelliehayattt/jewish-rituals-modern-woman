export function VisionSection() {
  return (
    <section
      id="vision"
      className="bg-[linear-gradient(90deg,var(--color-warm)_0%,var(--color-blush)_100%)] px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2rem,10vw,3.7rem)] leading-[0.98] tracking-[-0.03em] text-[var(--color-burgundy)]">
            A path to
            <span className="mt-1 block italic text-[var(--color-rose)]">
              ritual, belonging, and feminine spiritual depth
            </span>
          </h2>
        </div>

        <div className="max-w-none border-t border-[color:rgba(73,23,41,0.12)] pt-4 text-[0.94rem] leading-6 text-[var(--color-copy)] md:max-w-lg md:border-l md:border-t-0 md:pl-7 md:pt-0 md:text-[0.98rem] md:leading-7">
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            What this means
          </p>
          <p className="mb-4">
            This work helps Jewish women reclaim womanhood through Jewish
            ritual, especially the practices and wisdom entrusted to women.
          </p>
          <p>
            It is a bridge for women who did not grow up with these rituals,
            yet who feel deeply Jewish and want more depth, meaning, and a
            stronger connection to identity, feminine power, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
