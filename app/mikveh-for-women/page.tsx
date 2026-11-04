import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const learningUrl =
  "https://stan.store/nelliehayat/p/mikveh-immersion-and-fertility-course";
const scheduleUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2zOEFmtoXoaWIFvUHzSrTk3ef7aZxCcOGng4efNG-wo1hHnEvUUXId06z7QcM33UUM6P_K55ha";

export const metadata: Metadata = {
  title: "Mikveh for Women | Learn with Nellie Hayat",
  description:
    "Learn Mikveh and Niddah with certified teacher Nellie Hayat in Los Angeles or online, or discover collective ocean immersions through Mikveh Beach Club.",
  alternates: {
    canonical: "/mikveh-for-women",
  },
};

export default function MikvehForWomenPage() {
  return (
    <main id="top" className="min-h-screen bg-[var(--color-cream)] text-[var(--color-copy)]">
      <SiteHeader />

      <section className="grid min-h-[88svh] overflow-hidden bg-[linear-gradient(135deg,#fff9f4_0%,#f8e8e7_52%,#dceff2_100%)] pt-16 md:grid-cols-[minmax(0,0.56fr)_minmax(360px,0.44fr)] md:pt-0">
        <div className="relative z-10 flex items-center px-6 py-14 md:px-10 md:py-24">
          <div className="mx-auto w-full max-w-2xl md:ml-auto md:mr-10">
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-rose)]">
              Mikveh for women
            </p>
            <h1 className="font-display text-[clamp(3rem,11vw,6.4rem)] leading-[0.9] tracking-[-0.04em] text-[var(--color-burgundy)]">
              Ancient ritual.
              <span className="mt-2 block italic text-[var(--color-rose)]">
                Living meaning.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.08rem] leading-7 md:text-[1.22rem] md:leading-8">
              Learn the practice of Mikveh and Niddah with depth and clarity, or
              experience immersion in living waters with Jewish women in
              community.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={learningUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-burgundy)] px-7 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
              >
                Learn with Nellie
              </a>
              <a
                href="/mikveh-beach-club"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:rgba(77,29,49,0.2)] px-7 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-burgundy)] transition-colors hover:bg-white/60"
              >
                Discover the Beach Club
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[48svh] md:min-h-[88svh]">
          <Image
            src="/images/mikveh-beach-club/past-event-ocean-entry.jpg"
            alt="Jewish women entering the ocean together for Mikveh"
            fill
            priority
            sizes="(min-width: 768px) 44vw, 100vw"
            className="object-cover object-[center_58%]"
          />
          <div className="absolute inset-y-0 left-0 hidden w-[28%] bg-[linear-gradient(90deg,#f8e8e7_0%,rgba(248,232,231,0)_100%)] md:block" />
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Two ways into the water
            </p>
            <h2 className="font-display text-[clamp(2.4rem,7vw,4.5rem)] leading-[0.96] text-[var(--color-burgundy)]">
              Study the ritual.
              <span className="block italic text-[var(--color-rose)]">
                Experience it together.
              </span>
            </h2>
          </div>

          <div className="grid border-y border-[color:rgba(77,29,49,0.12)] md:grid-cols-2">
            <article className="py-9 md:py-12 md:pr-12">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-rose)]">
                Private and small-group learning
              </p>
              <h3 className="font-display text-[2rem] leading-none text-[var(--color-burgundy)] md:text-[2.5rem]">
                Mikveh &amp; Niddah with Nellie
              </h3>
              <p className="mt-5 max-w-lg leading-7">
                Learn with a certified Mikveh and Niddah teacher who brings
                tradition, warmth, and practical clarity to questions around
                marriage, fertility, cycles, intimacy, and meaningful immersion.
                Available in Los Angeles and online.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                <a
                  className="font-semibold text-[var(--color-rose)] underline decoration-[rgba(184,105,141,0.35)] underline-offset-4"
                  href={learningUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore private learning
                </a>
                <a
                  className="font-semibold text-[var(--color-burgundy)] underline decoration-[rgba(77,29,49,0.24)] underline-offset-4"
                  href={scheduleUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a conversation
                </a>
              </div>
            </article>

            <article className="border-t border-[color:rgba(77,29,49,0.12)] py-9 md:border-l md:border-t-0 md:py-12 md:pl-12">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#1f6f8f]">
                Collective ocean immersions
              </p>
              <h3 className="font-display text-[2rem] leading-none text-[#083e5a] md:text-[2.5rem]">
                Mikveh Beach Club
              </h3>
              <p className="mt-5 max-w-lg leading-7">
                Gather by the ocean for Torah, feminine wisdom, song,
                celebration, and collective immersion. Ancient ritual becomes
                alive, embodied, and held in community.
              </p>
              <a
                href="/mikveh-beach-club"
                className="mt-6 inline-flex font-semibold text-[#1f6f8f] underline decoration-[rgba(31,111,143,0.3)] underline-offset-4"
              >
                Enter Mikveh Beach Club
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#4d1d31_0%,#71304f_100%)] px-6 py-14 text-white md:px-10 md:py-18">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#efc9d9]">
            A ritual for real life
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4rem)] leading-[0.98]">
            Mikveh can hold beginnings, endings, healing, cycles, fertility,
            marriage, and change.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#f3dbe5]">
            Whether you are approaching Mikveh for the first time or returning
            with new questions, you do not have to navigate the ritual alone.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
