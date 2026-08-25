import Link from "next/link";
import LandingNotes from "./LandingNotes";

export default function HomePage() {
  return (
    <div className="landing-page">
      <LandingNotes />
      <main className="landing-container">
        <img src="/logo.png" className="landing-logo" alt="Wivenhoe Music Trail Logo" />

        <section className="landing-intro" aria-labelledby="page-title">
          <p className="landing-eyebrow">Saturday 12 September 2026</p>
          <p className="landing-lead">A day of music all around Wivenhoe!</p>
          <p className="landing-description">
            Live music, open studios, workshops, DJ sets and more, popping up in venues and unexpected spaces across town.
          </p>
        </section>

        <section className="landing-timetable-card" aria-label="Event timetable">
          <div className="landing-timetable-accent" aria-hidden="true">♪</div>
          <div className="landing-timetable-copy">
            <p className="landing-timetable-kicker">Plan your trail</p>
            <h2>The full timetable is here</h2>
            <p>
              Explore everything happening across Wivenhoe and build your own route through the day.
            </p>
            <Link href="/timetable/" className="landing-timetable-button">
              View the timetable <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <div className="landing-event-tags" aria-label="Event highlights">
          <span>Live music</span>
          <span>Open studios</span>
          <span>Workshops</span>
          <span>DJ sets</span>
        </div>
      </main>
    </div>
  );
}
