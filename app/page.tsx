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
          <div className="landing-event-tags" aria-label="Event highlights">
            <span>Live music</span>
            <span>Open studios</span>
            <span>Workshops</span>
            <span>DJ sets</span>
          </div>
        </section>

        <section className="landing-timetable-card" aria-label="Event timetable">
          <div className="landing-map-icon" aria-hidden="true">🎵</div>
          <div className="landing-timetable-copy">
            <h2>Explore the full programme</h2>
            <p>
              See what is happening throughout the day and plan your own trail around Wivenhoe.
            </p>
            <Link href="/timetable/" className="landing-timetable-button">
              View the timetable <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
