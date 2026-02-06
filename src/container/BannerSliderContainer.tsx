"use client";

import { useBannerSlider, type BannerSlide } from "@/hook/useBannerSlider";
import { BannerSliderView } from "@/view/BannerSliderView";

// Banner slides data
const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    src: "/assets/banner/mock-banner-1.png",
    alt: "ชิบะโฟน โปรโมชั่นพิเศษ - ผ่อนง่าย สบายใจ",
  },
  {
    id: 2,
    src: "/assets/banner/mock-banner-2.png",
    alt: "iPhone รุ่นใหม่ล่าสุด - ผ่อน 0% นาน 10 เดือน",
  },
  {
    id: 3,
    src: "/assets/banner/mock-banner-3.png",
    alt: "iPad Pro - สำหรับทุกการสร้างสรรค์",
  },
];

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
