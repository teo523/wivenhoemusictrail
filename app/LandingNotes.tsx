"use client";

import { useEffect, useRef } from "react";

export default function LandingNotes() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const notes = ["♪", "♫", "♩", "♬", "♭"];
    bg.replaceChildren();

    for (let i = 0; i < 20; i++) {
      const note = document.createElement("div");
      note.className = "landing-note";
      note.textContent = notes[Math.floor(Math.random() * notes.length)];
      note.style.left = Math.random() * 100 + "vw";
      note.style.top = Math.random() * 100 + "vh";
      note.style.fontSize = 18 + Math.random() * 28 + "px";
      note.style.animationDuration = 10 + Math.random() * 12 + "s";
      note.style.animationDelay = -Math.random() * 20 + "s";
      bg.appendChild(note);
    }
  }, []);

  return <div ref={bgRef} className="landing-background-notes" aria-hidden="true" />;
}
