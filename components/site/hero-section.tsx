import Image from "next/image";
import heroImage from "@/public/images/SvitlanaSorokaPhotographer_DSC_7711.jpg";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--color-cream)] md:grid md:min-h-screen md:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)]"
    >
      <div className="relative z-10 flex items-center px-6 pb-12 pt-24 md:px-10 md:pb-20 md:pt-30">
        <div className="relative max-w-[20rem] sm:max-w-[25rem] md:max-w-[34rem]">
          <div className="mb-5 flex items-center gap-3 md:mb-8 md:gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[1.1rem] leading-none text-[rgba(198,161,91,0.75)] md:text-[1.55rem]">
                ✧
              </span>
              <div className="h-px w-8 bg-[var(--color-gold)]/65 md:w-12" />
            </div>

            <p className="font-display text-[1.15rem] italic tracking-[0.01em] text-[var(--color-rose)] md:text-[1.7rem]">
              Sacred feminine wisdom
            </p>
          </div>

          <h1 className="max-w-[34rem] font-display text-[clamp(2.95rem,15vw,5.4rem)] leading-[0.94] tracking-[-0.04em] text-[var(--color-burgundy)]">
            Jewish Rituals
            <span className="mt-1 block text-[0.78em] italic text-[var(--color-rose)]">
              for the modern woman
            </span>
          </h1>

          <div className="my-5 flex items-center gap-3 md:my-8">
            <div className="h-px w-24 bg-[var(--color-gold)] md:w-32" />
            <span className="text-[var(--color-gold)]">✦</span>
            <div className="h-px w-12 bg-[var(--color-gold)]/70 md:w-[4.5rem]" />
          </div>

          <p className="max-w-[18rem] text-[1.32rem] leading-[1.22] text-[var(--color-copy)] sm:max-w-[22rem] sm:text-[1.46rem] md:max-w-[28rem] md:text-[1.85rem]">
            <span className="font-display italic text-[var(--color-rose)]">
              For the woman seeking more
              <br />
              depth, meaning, and connection.
            </span>
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center md:mt-9 md:gap-4">
            <a
              href="#offerings"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#8f3f6a_0%,#7e335c_100%)] px-7 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-200 hover:opacity-92 sm:w-auto"
            >
              Work With Me
            </a>
            <a
              href="#events"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[color:rgba(143,63,106,0.28)] bg-transparent px-7 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-rose)] transition-colors duration-200 hover:bg-white/50 sm:w-auto"
            >
              See Events
            </a>
          </div>
        </div>
      </div>

      <div className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-screen">
        <Image
          src={heroImage}
          alt="Woman standing outdoors in soft natural light"
          fill
          priority
          placeholder="blur"
          className="object-cover object-[center_20%] md:object-[center_22%]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="hidden md:absolute md:inset-y-0 md:left-0 md:block md:w-[42%] md:bg-[linear-gradient(90deg,rgba(255,249,244,1)_0%,rgba(255,249,244,0.92)_32%,rgba(255,249,244,0.55)_62%,rgba(255,249,244,0)_100%)]" />
      </div>
    </section>
  );
}
