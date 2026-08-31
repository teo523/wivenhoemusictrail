"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { venues, artistEventBySlug, locationById, type TimelineEvent } from "../data";

const DEFAULT_ROW_HEIGHT = 54;
const EVENT_HEIGHT = 38;
const TIME_HEADER_HEIGHT = 24;
const TIME_SCALE = 2;
const SIDEBAR_WIDTH = 150;

const basePath = "";

function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;

  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export default function Page() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [now, setNow] = useState<Date | null>(null);
  const [rowHeight, setRowHeight] =
    useState(DEFAULT_ROW_HEIGHT);

  const [selected, setSelected] = useState<
    (TimelineEvent & { venue: string }) | null
  >(null);

  // =========================================================
  // LIVE CLOCK + INITIAL CENTERING
  // =========================================================

  useEffect(() => {
    const firstNow = new Date();

    setNow(firstNow);

    const initialMinutes =
      firstNow.getHours() * 60 +
      firstNow.getMinutes() +
      firstNow.getSeconds() / 60;

    const frame = requestAnimationFrame(() => {
      const scroller = scrollRef.current;

      if (!scroller) return;

      scroller.scrollLeft = Math.max(
        0,
        initialMinutes * TIME_SCALE -
          scroller.clientWidth / 2
      );
    });

    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(interval);
    };
  }, []);

  const nowMinutes = now
    ? now.getHours() * 60 +
      now.getMinutes() +
      now.getSeconds() / 60
    : 0;

  // =========================================================
  // DYNAMIC ROW HEIGHT
  // =========================================================

  useEffect(() => {
    const calculateRowHeight = () => {
      const scroller = scrollRef.current;

      if (!scroller) return;
      if (venues.length === 0) return;

      const availableHeight =
        scroller.clientHeight - TIME_HEADER_HEIGHT;

      const calculatedHeight =
        availableHeight / venues.length;

      setRowHeight(calculatedHeight);
    };

    calculateRowHeight();

    window.addEventListener(
      "resize",
      calculateRowHeight
    );

    return () => {
      window.removeEventListener(
        "resize",
        calculateRowHeight
      );
    };
  }, []);

  // =========================================================
  // ADAPT EVENT HEIGHT TO ROW HEIGHT
  // =========================================================

  const eventHeight = Math.max(
    24,
    Math.min(
      EVENT_HEIGHT,
      rowHeight - 8
    )
  );

  return (
    <div className="timetable-page h-screen w-screen flex flex-col overflow-hidden">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="timetable-header shrink-0 px-3 py-2 flex items-center justify-between gap-2">

        <div className="flex items-center gap-2 min-w-0">

          {/* GOOSE LOGO */}
          <img
            src={`${basePath}/logo.png`}
            alt="Wivenhoe Music Trail goose logo"
            className="timetable-logo h-13 w-13 rounded-full object-cover shrink-0"
          />

          <div className="min-w-0">

            <div className="flex items-center gap-2">

              <h1 className="timetable-title font-bold text-sm sm:text-base leading-tight truncate">
                Wivenhoe Music Trail
              </h1>

              {/* LIVE DOT */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>

            </div>

            <p className="timetable-subtitle text-[10px] sm:text-xs truncate">
              Tap any event for details
            </p>

          </div>

        </div>

        {/* VIEW TABS */}
        <nav className="browse-nav" aria-label="Trail views">
          <Link href="/timetable/" className="is-active">Timeline</Link>
          <Link href="/artists/">Artists</Link>
        </nav>

      </header>

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <main
        ref={scrollRef}
        className="timeline-scroll flex-1 overflow-x-auto overflow-y-hidden"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >

        <div
          className="flex"
          style={{
            width:
              SIDEBAR_WIDTH +
              24 * 60 * TIME_SCALE,

            height:
              TIME_HEADER_HEIGHT +
              venues.length * rowHeight,
          }}
        >

          {/* =================================================
              SIDEBAR
          ================================================== */}

          <aside
            className="timetable-sidebar sticky left-0 z-40 shrink-0 shadow-xl"
            style={{
              width: SIDEBAR_WIDTH,
            }}
          >

            {/* TOP LEFT CORNER */}

            <div
              className="timetable-corner border-b"
              style={{
                height: TIME_HEADER_HEIGHT,
              }}
            >
              <div className="timetable-muted h-full flex items-center px-2 text-[9px] uppercase tracking-wider">
                Venues
              </div>
            </div>

            {/* VENUE ROWS */}

            {venues.map((venue) => (
              <div
                key={venue.name}
                className="timetable-venue-row flex items-center px-2 border-b"
                style={{
                  height: rowHeight,
                }}
              >
                <div className="w-full min-w-0">

                  <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">
                    {venue.name}
                  </div>

                  <div
                    className={`h-1 mt-1 rounded-full ${venue.color}`}
                  />

                </div>
              </div>
            ))}

          </aside>

          {/* =================================================
              TIMELINE WORLD
          ================================================== */}

          <section
            className="relative shrink-0"
            style={{
              width:
                24 * 60 * TIME_SCALE,

              height:
                TIME_HEADER_HEIGHT +
                venues.length * rowHeight,
            }}
          >

            {/* =================================================
                TIME RULER
            ================================================== */}

            <div
              className="timetable-ruler absolute top-0 left-0 right-0 border-b z-20"
              style={{
                height: TIME_HEADER_HEIGHT,
              }}
            >

              {Array.from({
                length: 24,
              }).map((_, hour) => (

                <div
                  key={`time-${hour}`}
                  className="timetable-hour absolute top-0 bottom-0 border-l"
                  style={{
                    left:
                      hour *
                      60 *
                      TIME_SCALE,
                  }}
                >

                  <span className="timetable-muted absolute top-1 left-1 text-[9px] whitespace-nowrap">
                    {String(hour).padStart(
                      2,
                      "0"
                    )}
                    :00
                  </span>

                </div>

              ))}

            </div>

            {/* =================================================
                VERTICAL HOUR GRID
            ================================================== */}

            {Array.from({
              length: 24,
            }).map((_, hour) => (

              <div
                key={`grid-${hour}`}
                className="timetable-grid absolute bottom-0 border-l pointer-events-none"
                style={{
                  top:
                    TIME_HEADER_HEIGHT,

                  left:
                    hour *
                    60 *
                    TIME_SCALE,
                }}
              />

            ))}

            {/* =================================================
                VENUE ROWS + EVENTS
            ================================================== */}

            {venues.map(
              (venue, rowIndex) => (

                <div
                  key={venue.name}
                  className="timetable-row absolute left-0 right-0 border-b"
                  style={{
                    top:
                      TIME_HEADER_HEIGHT +
                      rowIndex *
                        rowHeight,

                    height:
                      rowHeight,
                  }}
                >

                  {venue.events.map(
                    (event) => {

                      const isLive =
                        !!now &&
                        nowMinutes >=
                          event.start &&
                        nowMinutes <=
                          event.start +
                            event.duration;

                      return (

                        <button
                          key={
                            event.id
                          }
                          type="button"
                          aria-label={`More information about ${event.title}`}
                          onClick={() =>
                            setSelected({
                              ...event,
                              venue:
                                venue.name,
                            })
                          }
                          className={`
                            group
                            absolute
                            top-1/2
                            -translate-y-1/2
                            rounded-lg
                            px-2
                            text-left
                            border
                            border-black/10
                            shadow-md
                            transition-all
                            cursor-pointer
                            focus:outline-none
                            focus:ring-2
                            focus:ring-[#5966ae]/70
                            hover:brightness-110
                            ${venue.color}
                            ${
                              isLive
                                ? "opacity-100 ring-2 ring-[#5966ae]/30 shadow-lg"
                                : "opacity-60 hover:opacity-95"
                            }
                          `}
                          style={{
                            left:
                              event.start *
                              TIME_SCALE,

                            width:
                              Math.max(
                                event.duration *
                                  TIME_SCALE,
                                78
                              ),

                            height:
                              eventHeight,
                          }}
                        >

                          <div className="h-full flex items-center justify-between gap-1.5">

                            {/* EVENT TITLE */}

                            <div className="min-w-0 flex-1">

                              <div
                                className="
                                  font-semibold
                                  text-[10px]
                                  sm:text-[11px]
                                  leading-[1.15]
                                  line-clamp-2
                                  whitespace-normal
                                "
                              >
                                {
                                  event.title
                                }
                              </div>

                            </div>

                            {/* INFO CUE */}

                            <span
                              aria-hidden="true"
                              className="
                                shrink-0
                                flex
                                items-center
                                justify-center
                                h-4
                                w-4
                                rounded-full
                                bg-black/25
                                border
                                border-white/25
                                text-[9px]
                                font-bold
                                leading-none
                                transition-transform
                                group-hover:scale-110
                              "
                            >
                              i
                            </span>

                          </div>

                        </button>

                      );

                    }
                  )}

                </div>

              )
            )}

            {/* =================================================
                NOW LINE
            ================================================== */}

            {now && (

              <div
                className="timetable-now-line absolute bottom-0 w-[2px] z-30 pointer-events-none"
                style={{
                  top: 0,
                  left:
                    nowMinutes *
                    TIME_SCALE,
                }}
              >

                <div className="timetable-now-label absolute top-[2px] -translate-x-1/2 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                  NOW
                </div>

              </div>

            )}

          </section>

        </div>

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="timetable-footer shrink-0 px-3 py-1.5 text-[10px] border-t flex justify-between">

        <span>
          {now
            ? now.toLocaleTimeString(
                [],
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )
            : "--:--"}
        </span>

        <span>Swipe / scroll · tap events</span>

      </footer>

      {/* =====================================================
          TIMELINE DETAIL CARD
      ====================================================== */}

      {selected && (() => {
        const related = selected.artistEventIds.map((slug) => artistEventBySlug[slug]).filter(Boolean);
        const single = related.length === 1 ? related[0] : null;
        const singleLocation = single ? locationById[single.locationId] : null;

        return (
          <div className="fixed inset-0 z-[100] bg-black/35 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setSelected(null)}>
            <div className="w-full sm:max-w-md max-h-[88vh] timetable-modal border rounded-t-2xl sm:rounded-2xl overflow-y-auto shadow-2xl" onClick={(event) => event.stopPropagation()}>
              {single ? (
                <>
                  <img src={`${basePath}${single.image}`} alt={single.artist} className="w-full h-28 sm:h-36 object-cover bg-[#eee7db]" />
                  <div className="p-4">
                    <div className="timetable-muted text-[10px] uppercase tracking-wider">{selected.venue}</div>
                    <h2 className="text-lg sm:text-xl font-bold mt-0.5 leading-tight">{single.title}</h2>
                    <div className="timetable-secondary text-sm mt-0.5">{single.artist}</div>
                    <div className="timetable-muted text-xs mt-1">{formatTime(single.start)} – {formatTime(single.start + single.duration)}</div>
                    {singleLocation && <div className="mt-3"><div className="timetable-muted text-[10px] uppercase tracking-wider mb-0.5">Location</div><a href={singleLocation.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-1.5 text-xs timetable-link transition"><span aria-hidden="true">📍</span><span className="underline underline-offset-2 decoration-[#8e87b9]">{singleLocation.address}</span></a></div>}
                    <p className="timetable-secondary mt-3 text-xs sm:text-sm leading-5">{single.shortDescription}</p>
                    <div className="mt-4 flex gap-2"><a href={`${basePath}/events/${single.slug}/`} className="flex-1 text-center timetable-primary-button font-semibold text-sm rounded-lg px-3 py-2">More info</a><button onClick={() => setSelected(null)} className="px-3 py-2 rounded-lg timetable-secondary-button text-sm">Close</button></div>
                  </div>
                </>
              ) : (
                <div className="p-4">
                  <div className="timetable-muted text-[10px] uppercase tracking-wider">{selected.venue}</div>
                  <h2 className="text-xl font-bold mt-1">{selected.title}</h2>
                  <div className="timetable-muted text-xs mt-1">{formatTime(selected.start)} – {formatTime(selected.start + selected.duration)}</div>
                  {selected.shortDescription && <p className="timetable-secondary mt-3 text-sm">{selected.shortDescription}</p>}
                  <div className="mt-4 space-y-2">
                    {related.map((item) => {
                      const location = locationById[item.locationId];
                      return <a href={`${basePath}/events/${item.slug}/`} key={item.slug} className="flex gap-3 items-center rounded-xl border border-black/10 p-2 hover:bg-black/5 transition">
                        <img src={`${basePath}${item.image}`} alt="" className="h-14 w-14 rounded-lg object-cover bg-[#eee7db] shrink-0" />
                        <div className="min-w-0"><div className="font-semibold text-sm">{item.artist}</div><div className="timetable-muted text-xs">{formatTime(item.start)}{location ? ` · ${location.address}` : ""}</div><div className="timetable-secondary text-xs mt-0.5 line-clamp-1">{item.shortDescription}</div></div>
                      </a>;
                    })}
                  </div>
                  <button onClick={() => setSelected(null)} className="mt-4 w-full px-3 py-2 rounded-lg timetable-secondary-button text-sm">Close</button>
                </div>
              )}
            </div>
          </div>
        );
      })()}

    </div>
  );
}