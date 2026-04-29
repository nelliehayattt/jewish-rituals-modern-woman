import { siteMetadata } from "@/data/site";
import Image from "next/image";
import heroImage from "@/public/images/SvitlanaSorokaPhotographer_DSC_7711.jpg";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative grid min-h-screen overflow-hidden bg-[var(--color-cream)] md:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)]"
    >
      <div className="relative z-10 flex items-center px-6 pb-18 pt-30 md:px-10 md:pb-20">
        <div className="relative max-w-[34rem]">
          <div className="mb-7 flex items-center gap-4 md:mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[1.35rem] leading-none text-[rgba(198,161,91,0.75)] md:text-[1.55rem]">
                ✧
              </span>
              <div className="h-px w-10 bg-[var(--color-gold)]/65 md:w-12" />
            </div>

            <p className="font-display text-[1.45rem] italic tracking-[0.01em] text-[var(--color-rose)] md:text-[1.7rem]">
              Sacred feminine wisdom
            </p>
          </div>

          <h1 className="max-w-[34rem] font-display text-[clamp(3.65rem,7vw,5.4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-burgundy)]">
            Jewish Rituals
            <span className="mt-1 block text-[0.78em] italic text-[var(--color-rose)]">
              for the modern woman
            </span>
          </h1>

          <div className="my-7 flex items-center gap-3 md:my-8">
            <div className="h-px w-32 bg-[var(--color-gold)]" />
            <span className="text-[var(--color-gold)]">✦</span>
            <div className="h-px w-18 bg-[var(--color-gold)]/70" />
          </div>

          <p className="max-w-[28rem] text-[1.7rem] leading-[1.24] text-[var(--color-copy)] md:text-[1.85rem]">
            <span className="font-display italic text-[var(--color-rose)]">
              For the woman seeking more
              <br />
              depth, meaning, and connection.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-9">
            <a
              href={siteMetadata.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8f3f6a_0%,#7e335c_100%)] px-7 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-200 hover:opacity-92"
            >
              Book a Session
            </a>
            <a
              href="#events"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[color:rgba(143,63,106,0.28)] bg-transparent px-7 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-rose)] transition-colors duration-200 hover:bg-white/50"
            >
              See Events
            </a>
          </div>
        </div>
      </div>

      <div className="relative min-h-[72vh] md:min-h-screen">
        <Image
          src={heroImage}
          alt="Woman standing outdoors in soft natural light"
          fill
          priority
          placeholder="blur"
          className="object-cover object-[center_22%]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-y-0 left-0 w-[34%] bg-[linear-gradient(90deg,rgba(255,249,244,1)_0%,rgba(255,249,244,0.92)_32%,rgba(255,249,244,0.55)_62%,rgba(255,249,244,0)_100%)] md:w-[42%]" />
      </div>
    </section>
  );
}
