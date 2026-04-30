import { pastEvents, upcomingEvents } from "@/data/site";

type EventItemProps = {
  title: string;
  date: string;
  location: string;
  href: string;
};

function EventItem({ title, date, location, href }: EventItemProps) {
  const content = (
    <>
      <span className="font-display text-[1.05rem] text-[var(--color-burgundy)] md:text-[1.28rem]">
        {title}
      </span>
      <span className="text-[var(--color-muted)]"> — {date}</span>
      {location ? (
        <span className="text-[var(--color-rose)]"> · {location}</span>
      ) : null}
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline text-[0.94rem] leading-7 text-[var(--color-copy)] transition-colors duration-200 hover:text-[var(--color-burgundy)] md:text-[0.98rem] md:leading-8"
        >
          {content}
        </a>
      ) : (
        <span className="inline text-[0.94rem] leading-7 text-[var(--color-copy)] md:text-[0.98rem] md:leading-8">
          {content}
        </span>
      )}
    </li>
  );
}

export function EventsSection() {
  return (
    <section id="events" className="bg-[#fff9f5] px-6 pt-3 pb-8 md:px-10 md:pt-4 md:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-3xl md:mb-8">
          <p className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)] md:text-sm">
            Where You Can Find Me
          </p>
          <h2 className="font-display text-[clamp(2rem,9vw,3.8rem)] leading-[0.96] text-[var(--color-burgundy)]">
            Events
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="mb-2.5 font-display text-[1.55rem] text-[var(--color-burgundy)] md:mb-3 md:text-[1.8rem]">
              Upcoming
            </h3>
            <ul className="space-y-2">
              {upcomingEvents.map((event) => (
                <EventItem key={event.title} {...event} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2.5 font-display text-[1.55rem] text-[var(--color-burgundy)] md:mb-3 md:text-[1.8rem]">
              Past
            </h3>
            <ul className="space-y-2">
              {pastEvents.map((event) => (
                <EventItem key={event.title} {...event} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
