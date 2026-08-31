import Link from "next/link";

export default function MapPage() {
  return (
    <div className="browse-page map-page">
      <header className="browse-header">
        <Link href="/" className="browse-brand" aria-label="Back to Wivenhoe Music Trail home">
          <img src="/logo.png" alt="Wivenhoe Music Trail" />
          <div><strong>Wivenhoe Music Trail</strong><span>Map view</span></div>
        </Link>
        <nav className="browse-nav" aria-label="Trail views">
          <Link href="/timetable/">Timeline</Link>
          <span className="browse-nav-disabled is-current-disabled" aria-disabled="true">Map <small>soon</small></span>
          <Link href="/artists/">Artists</Link>
        </nav>
      </header>

      <main className="map-main">
        <section className="browse-intro map-intro map-coming-soon">
          <p className="browse-kicker">Coming soon</p>
          <h1>Interactive trail map</h1>
          <p>We&apos;re getting the Wivenhoe Music Trail map ready. Soon you&apos;ll be able to explore every venue and see the artists and events happening at each location.</p>
          <div className="map-coming-actions">
            <Link href="/timetable/">View timeline</Link>
            <Link href="/artists/">Browse artists</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
