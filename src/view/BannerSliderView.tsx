import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BannerSlide } from "@/hook/useBannerSlider";

interface BannerSliderViewProps {
  slides: BannerSlide[];
  currentSlide: number;
  onGoToSlide: (index: number) => void;
  onGoToNext: () => void;
  onGoToPrevious: () => void;
}

/**
 * BannerSliderView - Stateless banner slider UI component
 */
export function BannerSliderView({
  slides,
  currentSlide,
  onGoToSlide,
  onGoToNext,
  onGoToPrevious,
}: BannerSliderViewProps) {
  if (slides.length === 0) return null;

  return (
    <section className="relative w-full pt-[72px] sm:pt-[80px]">
      {/* Banner Container */}
      <div className="relative w-full aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] max-h-[300px] overflow-hidden bg-gradient-to-r from-[var(--kawaii-light-pink)] to-[var(--kawaii-cream)]">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={onGoToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--kawaii-brown)]" />
            </button>
            <button
              onClick={onGoToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--kawaii-brown)]" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => onGoToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-[var(--kawaii-pink)] scale-125"
                    : "bg-white/70 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Decorative gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

export default BannerSliderView;
