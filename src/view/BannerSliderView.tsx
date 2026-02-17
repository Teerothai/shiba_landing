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
  onGoToNext,
  onGoToPrevious,
}: BannerSliderViewProps) {
  if (slides.length === 0) return null;

  return (
    <section className="relative w-full pt-[72px] sm:pt-[80px]">
      {/* Banner Container — height is driven by the image's natural aspect ratio */}
      <div className="relative w-full overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full shrink-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={600}
                priority={slide.id === 1}
                className="w-full h-auto block"
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
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-kawaii-brown" />
            </button>
            <button
              onClick={onGoToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-kawaii-brown" />
            </button>
          </>
        )}

      </div>
    </section>
  );
}

export default BannerSliderView;
