"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function BeforeAfterSlider({ beforeImage, afterImage, alt }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100, 0, 100));
  }, []);

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    updatePosition(event.clientX);
  };

  const stopDragging = () => setIsDragging(false);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") setPosition((prev) => clamp(prev - 5, 0, 100));
    else if (event.key === "ArrowRight") setPosition((prev) => clamp(prev + 5, 0, 100));
    else if (event.key === "Home") setPosition(0);
    else if (event.key === "End") setPosition(100);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden bg-neutral-800 sm:aspect-[16/10]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <Image
        src={afterImage}
        alt={`${alt} after`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="pointer-events-none object-cover"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${alt} before`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90"
        style={{ left: `${position}%` }}
      />

      <div
        role="slider"
        tabIndex={0}
        aria-label="Slide to compare before and after images"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/60 bg-black/60 text-white backdrop-blur-sm"
        style={{ left: `${position}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 7 3 12l5 5" />
          <path d="M16 7l5 5-5 5" />
        </svg>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/60 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-black/60 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-white">
        After
      </span>

      <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-white/90">
        Slide to compare
      </span>
    </div>
  );
}

export function BeforeAfterCard({ car, viewBasePath }) {
  const { name, beforeImage, afterImage, description } = car;

  const viewHref = viewBasePath && car.id ? `${viewBasePath}/${car.id}` : null;

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30">
      <div className="flex items-start justify-between gap-3 px-5 pb-3 pt-4">
        <h3 className="text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
          {name}
        </h3>
        {viewHref && (
          <Link
            href={viewHref}
            className="shrink-0 rounded-full border border-primary/60 bg-primary/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-primary transition hover:bg-primary/20"
          >
            View
          </Link>
        )}
      </div>

      <BeforeAfterSlider
        beforeImage={beforeImage}
        afterImage={afterImage}
        alt={name}
      />

      {description && (
        <p className="px-5 py-4 text-sm leading-relaxed text-white/70">{description}</p>
      )}
    </article>
  );
}

export default function BeforeAfterCards({ cars = [], viewBasePath }) {
  if (!cars.length) return null;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {cars.map((car, index) => (
        <BeforeAfterCard key={car.id ?? car.name ?? index} car={car} viewBasePath={viewBasePath} />
      ))}
    </div>
  );
}
