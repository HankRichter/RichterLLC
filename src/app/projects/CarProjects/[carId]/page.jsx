"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import useCarousel from "../../../hooks/useCarousel";
import { carProjects } from "../carData";

export default function CarPhotosPage() {
  const params = useParams();
  const router = useRouter();

  const car = useMemo(
    () => carProjects.find((project) => project.id === params.carId) ?? null,
    [params.carId]
  );

  const photos = car?.photos ?? [];

  const { next, prev, goTo, visibleItems, visibleIndex } = useCarousel(photos, 1, true);
  const activePhoto = visibleItems[0] ?? "";

  const handleClose = () => router.back();

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-white/70">Project not found.</p>
        <button
          type="button"
          onClick={handleClose}
          className="mt-4 rounded-md bg-primary px-4 py-2 font-semibold text-white transition hover:bg-primary-dark"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">{car.name}</h1>
        <button
          type="button"
          onClick={handleClose}
          className="rounded-md bg-primary px-3 py-1.5 text-white transition hover:bg-primary-dark"
        >
          <span className="hidden sm:inline">Close</span>
          <span className="text-lg leading-none sm:hidden">&times;</span>
        </button>
      </div>

      <div className="group relative mb-4 h-72 w-full overflow-hidden rounded-xl bg-white/5 sm:h-[28rem]">
        {activePhoto ? (
          <Image
            src={activePhoto}
            alt={`${car.name} photo ${visibleIndex + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 90vw"
            className="object-contain"
            priority
          />
        ) : null}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-60 transition hover:bg-black/70 group-hover:opacity-100"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-60 transition hover:bg-black/70 group-hover:opacity-100"
        >
          &#8250;
        </button>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-2 py-0.5 font-mono text-xs text-white">
          {visibleIndex + 1} / {photos.length}
        </span>
      </div>

      {car.description && (
        <p className="mb-5 text-white/70">{car.description}</p>
      )}

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {photos.map((photoSrc, index) => {
          const isActive = index === visibleIndex;

          return (
            <button
              key={photoSrc}
              type="button"
              onClick={() => goTo(index)}
              className={`overflow-hidden rounded-lg border-2 transition ${
                isActive ? "border-primary" : "border-transparent hover:border-primary/50"
              }`}
            >
              <div className="relative h-16 w-full sm:h-20">
                <Image
                  src={photoSrc}
                  alt={`${car.name} thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
