"use client";

import { useBannerSlider } from "@/hook/useBannerSlider";
import { BannerSliderView } from "@/view/BannerSliderView";
import { bannerSlides } from "@/data/banners";

/**
 * BannerSliderContainer - Manages banner slider state and interactions
 */
export function BannerSliderContainer() {
  const {
    currentSlide,
    goToSlide,
    goToNext,
    goToPrevious,
  } = useBannerSlider({
    slides: bannerSlides,
    autoPlayInterval: 8000,
    autoPlay: true,
  });

  return (
    <BannerSliderView
      slides={bannerSlides}
      currentSlide={currentSlide}
      onGoToSlide={goToSlide}
      onGoToNext={goToNext}
      onGoToPrevious={goToPrevious}
    />
  );
}

export default BannerSliderContainer;
