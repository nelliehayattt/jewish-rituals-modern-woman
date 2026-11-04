import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./mikveh-beach-club.css";

export const metadata: Metadata = {
  title: "Mikveh Beach Club | Jewish Rituals for the Modern Woman",
  description:
    "Collective ocean immersions for Jewish women, bringing together Mikveh, Torah, feminine wisdom, song, celebration, and community in Los Angeles.",
  alternates: {
    canonical: "/mikveh-beach-club",
  },
  openGraph: {
    title: "Mikveh Beach Club",
    description:
      "Ancient ritual. Living waters. Jewish women together.",
    type: "website",
    images: [
      "https://www.jewishwomensrituals.com/images/mikveh-beach-club/hero-ocean-towel.webp",
    ],
  },
};

const links = {
  partiful: "https://partiful.com/u/q4Xy3iislbf763gy22At",
  substack: "https://substack.com/@mikvehbeachclub",
  whatsapp: "https://substack.com/@mikvehbeachclub",
  schedule: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2zOEFmtoXoaWIFvUHzSrTk3ef7aZxCcOGng4efNG-wo1hHnEvUUXId06z7QcM33UUM6P_K55ha",
  course: "https://stan.store/nelliehayat/p/mikveh-immersion-and-fertility-course",
  book: "https://stan.store/nelliehayat/p/the-power-of-the-beautiful-jewish-woman-is-out-now",
};

const experiences = [
  {
    title: "Torah",
    text: "Wisdom rooted in Jewish tradition, the Jewish calendar and the ancient ritual of mikveh.",
    src: "/images/mikveh-beach-club/last-gathering-shofar.jpg",
    alt: "A shofar being blown during a Mikveh Beach Club gathering",
  },
  {
    title: "Community",
    text: "Jewish women gathering, learning, singing, celebrating and experiencing ritual together.",
    src: "/images/mikveh-beach-club/last-gathering-circle.jpg",
    alt: "Jewish women gathered in a circle by the ocean",
  },
  {
    title: "Immersion",
    text: "Learning together about the power of Mikveh as a ritual for healing, honoring our cycles, and marking transitions.",
    src: "/images/mikveh-beach-club/last-gathering-immersion.jpg",
    alt: "Women entering the ocean together for immersion",
  },
  {
    title: "Joy",
    text: "Music. Movement. Food. Beauty. Friendship. Celebration.",
    src: "/images/mikveh-beach-club/last-gathering-movement.jpg",
    alt: "Women moving and celebrating together on the beach",
  },
];

const lastGatheringPhotos = [
  {
    src: "/images/mikveh-beach-club/last-gathering-group.jpg",
    alt: "A large group of Jewish women celebrating together in the ocean",
    className: "proof-photo proof-photo-banner",
  },
  {
    src: "/images/mikveh-beach-club/last-gathering-shofar.jpg",
    alt: "The shofar being blown at the beach gathering",
    className: "proof-photo proof-photo-tall",
  },
  {
    src: "/images/mikveh-beach-club/last-gathering-immersion.jpg",
    alt: "Women celebrating together in the Pacific during Mikveh Beach Club",
    className: "proof-photo proof-photo-large",
  },
  {
    src: "/images/mikveh-beach-club/last-gathering-movement.jpg",
    alt: "Women dancing and moving together on the beach",
    className: "proof-photo",
  },
  {
    src: "/images/mikveh-beach-club/last-gathering-circle.jpg",
    alt: "A wide circle of Jewish women gathered for teaching by the ocean",
    className: "proof-photo proof-photo-wide",
  },
];

export default function MikvehBeachClubPage() {
  return (
    <main className="mbc-page">
      <header className="nav" aria-label="Jewish Rituals and Mikveh Beach Club">
        <Link className="nav-parent" href="/">
          Jewish Rituals
          <span>for the modern woman</span>
        </Link>
        <a className="nav-club" href="#top">Mikveh Beach Club</a>
        <a className="nav-action" href="#next-immersion">Next immersion</a>
      </header>

      <section className="hero" id="top" aria-label="Mikveh Beach Club welcome">
        <Image
          src="/images/mikveh-beach-club/hero-ocean-towel.webp"
          alt="Mikveh Beach Club towel, flowers, shells, and pomegranate by the ocean"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-copy">
          <h1>Mikveh Beach Club</h1>
          <p className="hero-tagline">
            Ancient ritual. Living waters. Jewish women together.
          </p>
          <p className="hero-description">
            Collective ocean immersions bringing together mikveh, Torah,
            feminine wisdom, song, celebration and community.
          </p>
          <div className="hero-actions">
            <a className="primary-cta hero-cta" href="#next-immersion">
              Join the next immersion
            </a>
            <a className="quiet-cta hero-learn-cta" href="#founder">
              Meet the founder
            </a>
          </div>
          <p className="hero-location">Los Angeles · By the ocean · For Jewish women</p>
        </div>
      </section>

      <section className="social-proof" aria-label="Mikveh Beach Club gatherings">
        <div className="section proof-copy">
          <h2>This is Mikveh Beach Club.</h2>
          <p>
            Jewish women gathering by the ocean to learn, sing, move,
            celebrate, hear the shofar, and immerse together in the Pacific.
          </p>
        </div>
        <div className="proof-mosaic" aria-label="Scenes from Mikveh Beach Club gatherings">
          {lastGatheringPhotos.map((photo) => (
            <figure className={photo.className} key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1800}
                height={1400}
                sizes="(min-width: 881px) 1040px, calc(100vw - 28px)"
              />
            </figure>
          ))}
        </div>
      </section>

      <div className="shoreline-chapter" aria-label="Mikveh Beach Club story and community">
        <section className="manifesto section" id="why">
          <p className="overline">Our why</p>
          <h2>A new way to experience mikveh.</h2>
          <div className="manifesto-copy">
            <p>
              Mikveh is an ancient Jewish ritual of immersion, a way to mark
              transition, release what has been, and prepare for what comes
              next.
            </p>
            <p>
              And yet, for many women today, the ritual has become closely tied
              to marriage, practiced privately and alone, usually inside a
              building. For so many Jewish women, that can make something deeply
              powerful feel taboo, shameful, or simply out of reach.
            </p>
            <p>
              <strong>
                Mikveh Beach Club began with a burning desire to experience
                this ritual differently.
              </strong>{" "}
              Alive again. Purposeful. Expansive. Open to every Jewish woman.
            </p>
            <p>
              So we bring it back into nature, into living waters, and into
              community, held by Torah, feminine wisdom, music, beauty, and joy.
            </p>
            <p>
              We gather to honor change, release, renewal, and new beginnings.
              Then we immerse together, with friends and community, feeling
              seen, supported, nourished, and witnessed.
            </p>
            <p className="manifesto-closing">
              Because transition should never be marked alone.
            </p>
          </div>
        </section>

        <section className="experience section" aria-labelledby="experience-heading">
          <div className="experience-heading">
            <p className="overline" id="experience-heading">What happens at Mikveh Beach Club</p>
            <p>Because Jewish ritual can be profound and alive.</p>
          </div>
          <div className="experience-grid">
            {experiences.map((item) => (
              <article className="experience-block" key={item.title}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1400}
                  height={1750}
                  sizes="(min-width: 881px) 250px, (min-width: 621px) 50vw, 112px"
                />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="next-immersion section" id="next-immersion">
          <div className="next-copy">
            <p className="overline">Come to the water</p>
            <h2>Find the next immersion.</h2>
            <p>
              We gather throughout the year for Torah, feminine wisdom, song,
              celebration, community, and collective immersion in the Pacific.
            </p>
            <p>
              Follow Mikveh Beach Club to be the first to know when a new
              gathering opens.
            </p>
            <a className="primary-cta" href={links.partiful} target="_blank" rel="noreferrer">
              See upcoming immersions
            </a>
          </div>
          <figure className="next-art">
            <Image
              src="/images/mikveh-beach-club/past-event-ocean-entry.jpg"
              alt="Women walking into the ocean together at Mikveh Beach Club"
              width={1368}
              height={1824}
              sizes="(min-width: 881px) 430px, min(100vw - 28px, 520px)"
            />
          </figure>
        </section>
      </div>

      <section className="founder section" id="founder">
        <div className="founder-image">
          <Image
            src="/images/mikveh-beach-club/nellie-about-jwr.webp"
            alt="Nellie Hayat teaching in community"
            width={780}
            height={1050}
            sizes="(min-width: 881px) 390px, min(100vw - 40px, 390px)"
          />
        </div>
        <div className="founder-copy">
          <p className="overline">Your host &amp; Mikveh teacher</p>
          <h2>Nellie Hayat</h2>
          <p>
            Nellie is a certified Mikveh and Niddah teacher, Jewish educator,
            and founder of Mikveh Beach Club. She creates joyful, meaningful
            ways for Jewish women to experience ancient ritual through Torah,
            feminine wisdom, and community.
          </p>
          <div className="founder-links">
            <a href={links.course} target="_blank" rel="noreferrer">
              <span>Learn with Nellie</span>
              <em>Mikveh &amp; Niddah</em>
            </a>
            <a className="founder-book-link" href={links.book} target="_blank" rel="noreferrer">
              <span>Read her book</span>
              <em>The Power of the Jewish Woman</em>
            </a>
          </div>
        </div>
      </section>

      <section className="join section" aria-label="Continue learning with Nellie Hayat">
        <div className="join-shell">
          <p className="overline">Go deeper</p>
          <h2>Continue your journey with Nellie.</h2>
          <p>
            Private guidance and deeper learning in Mikveh, Niddah, feminine
            wisdom, and Jewish ritual.
          </p>
          <a className="primary-cta light" href={links.schedule} target="_blank" rel="noreferrer">
            Schedule a call with Nellie
          </a>
          <div className="join-paths" aria-label="More ways to learn and connect">
            <a href={links.course} target="_blank" rel="noreferrer">
              Explore the Mikveh &amp; Fertility Course
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p><Link href="/">Jewish Rituals for the Modern Woman</Link></p>
        <p>Mikveh Beach Club</p>
        <p>Jewish rituals. Feminine energy. Ocean. Community.</p>
      </footer>
    </main>
  );
}
