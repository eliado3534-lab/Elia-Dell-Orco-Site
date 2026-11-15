import { useEffect, useRef, useState, type TouchEvent as ReactTouchEvent } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ImageSlot from '@/components/ui/ImageSlot';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import type { GalleryImage } from '@/data/types';

interface PhotoGalleryProps {
  index: string;
  title: string;
  images: GalleryImage[];
}

export default function PhotoGallery({ index, title, images }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((i) => (i === null ? i : (i + 1) % count));
      if (event.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? i : (i - 1 + count) % count));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, count]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  const step = (delta: number) => setActiveIndex((i) => (i === null ? i : (i + delta + count) % count));

  const handleTouchStart = (event: ReactTouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: ReactTouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section className="border-t border-line py-16 md:py-24">
      <Reveal>
        <SectionHeading index={index} label={title} />
      </Reveal>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {images.map((image, i) => (
          <Reveal key={image.label} delay={(i % 3) * 100} className="mb-6 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open ${image.label}`}
              className="group block w-full text-left"
            >
              <ImageSlot
                src={image.src}
                alt={image.label}
                placeholder={`[PHOTO ${String(i + 1).padStart(2, '0')}: ${image.label}]`}
                aspectClassName=""
                fit="natural"
                grayscale={false}
                className="transition-transform duration-500 group-hover:-translate-y-1"
              />
              <p className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest2 text-ash transition-colors group-hover:text-paper">
                <span>[{String(i + 1).padStart(2, '0')}]</span>
                <span>VIEW ↗</span>
              </p>
            </button>
          </Reveal>
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setActiveIndex(null)}
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest2 text-ash">
            <span>
              [{String(activeIndex + 1).padStart(2, '0')}] / {String(count).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="flex h-10 w-10 items-center justify-center border border-line text-paper transition-colors hover:border-paper"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <div
            className="flex min-h-0 flex-1 items-center justify-center gap-4 py-4 md:gap-8 md:py-6"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
              className="hidden h-12 w-12 shrink-0 items-center justify-center border border-line text-paper transition-colors hover:border-paper md:flex"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <div className="flex h-full min-w-0 flex-1 items-center justify-center">
              <img
                src={active.src}
                alt={active.label}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
              className="hidden h-12 w-12 shrink-0 items-center justify-center border border-line text-paper transition-colors hover:border-paper md:flex"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <p
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 pt-3 text-center font-mono text-[10px] uppercase tracking-widest2 text-ash md:hidden"
          >
            ✦&nbsp;&nbsp;← swipe →&nbsp;&nbsp;✦
          </p>
        </div>
      )}
    </section>
  );
}
