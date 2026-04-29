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
      <span className="font-display text-[1.28rem] text-[var(--color-burgundy)]">
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
          className="inline text-[0.98rem] leading-8 text-[var(--color-copy)] transition-colors duration-200 hover:text-[var(--color-burgundy)]"
        >
          {content}
        </a>
      ) : (
        <span className="inline text-[0.98rem] leading-8 text-[var(--color-copy)]">
          {content}
        </span>
      )}
    </li>
  );
}

export function EventsSection() {
  return (
    <section id="events" className="bg-[#fff9f5] px-6 pt-4 pb-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Where You Can Find Me
          </p>
          <h2 className="font-display text-[clamp(2.3rem,5vw,3.8rem)] leading-[0.96] text-[var(--color-burgundy)]">
            Events
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="mb-3 font-display text-[1.8rem] text-[var(--color-burgundy)]">
              Upcoming
            </h3>
            <ul className="space-y-2">
              {upcomingEvents.map((event) => (
                <EventItem key={event.title} {...event} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-display text-[1.8rem] text-[var(--color-burgundy)]">
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
