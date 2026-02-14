"use client";

import { useState, useEffect, useCallback } from "react";
import type { BannerSlide } from "@/data/banners";

export type { BannerSlide };

interface UseBannerSliderOptions {
  slides: BannerSlide[];
  autoPlayInterval?: number;
  autoPlay?: boolean;
}

interface UseBannerSliderReturn {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  isPlaying: boolean;
  toggleAutoPlay: () => void;
}

/**
 * useBannerSlider - Hook for managing banner slider state and autoplay
 */
export function useBannerSlider({
  slides,
  autoPlayInterval = 5000,
  autoPlay: initialAutoPlay = true,
}: UseBannerSliderOptions): UseBannerSliderReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(initialAutoPlay);

  const totalSlides = slides.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
      }
    },
    [totalSlides]
  );

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, totalSlides, autoPlayInterval, goToNext]);

  return {
    currentSlide,
    totalSlides,
    goToSlide,
    goToNext,
    goToPrevious,
    isPlaying,
    toggleAutoPlay,
  };
}
