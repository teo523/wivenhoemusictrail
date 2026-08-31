import Link from "next/link";
import { artistEvents, locationById } from "../data";

function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export default function ArtistsPage() {
  const events = [...artistEvents].sort((a, b) => {
  // First: chronological order
  if (a.start !== b.start) {
    return a.start - b.start;
  }

  // Second: manual order for events at the same time
  return (a.artistOrder ?? 999) - (b.artistOrder ?? 999);
});

  return (
    <div className="browse-page">
      <header className="browse-header">
        <Link href="/" className="browse-brand" aria-label="Back to Wivenhoe Music Trail home">
          <img src="/logo.png" alt="Wivenhoe Music Trail" />
          <div><strong>Wivenhoe Music Trail</strong><span>Artist & event view</span></div>
        </Link>
        <nav className="browse-nav" aria-label="Trail views">
          <Link href="/timetable/">Timeline</Link><Link href="/artists/" className="is-active">Artists</Link>
        </nav>
      </header>

      <main className="browse-main">
        <section className="browse-intro">
          <p className="browse-kicker">Saturday 12 September 2026</p>
          <h1>Artists & events</h1>
          <p>Check who, where, and when is happening!</p>
        </section>

        <section className="artist-card-grid" aria-label="All Music Trail artists and events">
          {events.map((event) => {
            const location = locationById[event.locationId];
            return (
              <Link href={`/events/${event.slug}/`} className="artist-event-card" key={event.slug}>
                <div className="artist-event-image-wrap">
                  <img src={event.image} alt={event.artist} className="artist-event-image" />
                  <span className="artist-event-time">{formatTime(event.start)}</span>
                </div>
                <div className="artist-event-copy">
                  <p className="artist-event-venue">{location?.name ?? "Location TBC"}</p>
                  <h2>{event.artist}</h2>
                  <p className="artist-event-artist">{event.title}</p>
                  <p className="artist-event-description">{event.shortDescription}</p>
                  <span className="artist-event-more">{event.tbc ? "Details TBC →" : "More info →"}</span>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </div>
  );
}
