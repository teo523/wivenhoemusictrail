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

        <section className="landing-timetable-card landing-explore-card" aria-label="Explore the Music Trail">
          <div className="landing-timetable-copy landing-explore-copy">
            <p className="landing-timetable-kicker">Plan your trail</p>
            <h2>Explore the Music Trail your way</h2>
            <p>
              Follow the day live, find events around Wivenhoe, or browse every artist and performance.
            </p>

            <div className="landing-view-grid" aria-label="Choose a view">
              <Link href="/timetable/" className="landing-view-tile landing-view-timeline">
                <span className="landing-view-icon" aria-hidden="true">▥</span>
                <strong>Timeline</strong>
                <small>What&apos;s happening when</small>
              </Link>

              <div
                className="landing-view-tile landing-view-map landing-view-disabled"
                aria-disabled="true"
              >
                <span className="landing-view-badge">Coming soon</span>
                <span className="landing-view-icon" aria-hidden="true">⌖</span>
                <strong>Map</strong>
                <small>Find venues around town</small>
              </div>

              <Link href="/artists/" className="landing-view-tile landing-view-artists">
                <span className="landing-view-icon" aria-hidden="true">♫</span>
                <strong>Artists</strong>
                <small>Browse every event</small>
              </Link>
            </div>
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
