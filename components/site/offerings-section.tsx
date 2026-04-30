import Image from "next/image";
import portraitImage from "@/public/images/SvitlanaSorokaPhotographer_DSC_7285.jpg";
import {
  primaryOfferings,
  secondaryOfferingNote,
  siteMetadata,
} from "@/data/site";

export function OfferingsSection() {
  return (
    <section id="offerings" className="relative min-h-[420px] overflow-hidden md:min-h-[500px]">
      <Image
        src={portraitImage}
        alt="Portrait in motion under warm evening light"
        fill
        placeholder="blur"
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(88,33,60,0.98)_0%,rgba(128,60,93,0.94)_66%,rgba(128,60,93,0.36)_100%)] md:bg-[linear-gradient(90deg,rgba(88,33,60,0.98)_0%,rgba(128,60,93,0.92)_52%,rgba(128,60,93,0.15)_100%)]" />

      <div className="relative z-10 flex min-h-[420px] items-center px-6 py-12 md:min-h-[500px] md:px-10 md:py-18">
        <div className="max-w-2xl text-white">
          <p className="mb-3 text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-[#f4d2df] md:text-sm">
            Work With Me
          </p>

          <h2 className="mb-4 font-display text-[clamp(2.1rem,9vw,3.9rem)] leading-[1.02] md:mb-5">
            For the Jewish woman ready to reclaim{" "}
            <span className="italic text-[#f8dbe5]">ritual, identity, and feminine power</span>.
          </h2>

          <div className="mb-5 h-px w-20 bg-[var(--color-gold)] md:mb-6 md:w-24" />

          <ul className="space-y-3.5 md:space-y-4">
            {primaryOfferings.map((offering) => (
              <li key={offering.title} className="max-w-xl">
                <a
                  href={offering.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <h3 className="font-display text-[1.28rem] leading-none text-white transition-colors duration-200 group-hover:text-[#fff3f7] md:text-[1.45rem]">
                    {offering.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] leading-[1.45] text-[#f3dbe5] md:text-[0.94rem] md:leading-6">
                    {offering.description}
                  </p>
                  <span className="mt-2 inline-flex text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f8dbe5] underline decoration-white/30 underline-offset-4 transition-colors duration-200 group-hover:text-white">
                    Click
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-4 max-w-xl text-[0.88rem] leading-[1.45] text-[#f3dbe5] md:mt-5 md:text-[0.92rem] md:leading-6">
            Also available for {secondaryOfferingNote.toLowerCase()}{" "}
            <a
              href={siteMetadata.speakingInquiryUrl}
              className="underline decoration-white/35 underline-offset-4 transition-colors duration-200 hover:text-white"
            >
              Reach out.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
