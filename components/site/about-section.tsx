import Image from "next/image";
import aboutImage from "@/public/images/nellie-about.jpg";
import { aboutNellie } from "@/data/site";

export function AboutSection() {
  return (
    <section className="bg-[var(--color-cream)] pt-0 pb-4">
      <div className="grid items-start gap-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10">
        <div className="relative min-h-[14.5rem] overflow-hidden sm:min-h-[18rem] md:min-h-[29rem]">
          <Image
            src={aboutImage}
            alt="Nellie Hayat speaking in community"
            fill
            className="object-cover object-[50%_-8.5rem] md:object-[38%_center]"
            sizes="(min-width: 768px) 42vw, 100vw"
            priority={false}
          />
          <div className="absolute inset-x-0 top-0 h-[32%] bg-[linear-gradient(180deg,rgba(255,249,244,1)_0%,rgba(255,249,244,0.9)_42%,rgba(255,249,244,0.34)_76%,rgba(255,249,244,0)_100%)] md:hidden" />
          <p className="absolute left-6 top-3 z-10 text-[0.94rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-burgundy)] md:hidden">
            {aboutNellie.title}
          </p>
          <div className="absolute inset-x-0 bottom-0 h-[14%] bg-[linear-gradient(180deg,rgba(255,249,244,0)_0%,rgba(255,249,244,0.45)_72%,rgba(255,249,244,1)_100%)] md:inset-y-0 md:right-0 md:left-auto md:h-auto md:w-[38%] md:bg-[linear-gradient(90deg,rgba(255,249,244,0)_0%,rgba(255,249,244,0.84)_52%,rgba(255,249,244,1)_100%)]" />
        </div>

        <div className="px-6 pt-5 md:max-w-2xl md:px-10 md:pt-10">
          <p className="mb-2.5 hidden text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)] md:mb-3 md:block md:text-sm">
            {aboutNellie.title}
          </p>

          <h2 className="mb-4 font-display text-[clamp(2rem,9vw,3.5rem)] leading-[0.98] text-[var(--color-burgundy)] md:mb-5">
            Rooted in leadership, ritual, and community.
          </h2>

          <div className="space-y-4 text-[0.94rem] leading-6 text-[var(--color-copy)] md:text-[0.98rem] md:leading-7">
            {aboutNellie.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
