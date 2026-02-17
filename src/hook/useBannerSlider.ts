"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
 * Manual navigation (goToSlide / goToNext / goToPrevious) resets the timer.
 */
export function useBannerSlider({
  slides,
  autoPlayInterval = 5000,
  autoPlay: initialAutoPlay = true,
}: UseBannerSliderOptions): UseBannerSliderReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(initialAutoPlay);
  const resetKey = useRef(0);

  const totalSlides = slides.length;

  const resetTimer = useCallback(() => {
    resetKey.current += 1;
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index);
        resetTimer();
      }
    },
    [totalSlides, resetTimer]
  );

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetTimer();
  }, [totalSlides, resetTimer]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetTimer();
  }, [totalSlides, resetTimer]);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Auto-play effect — re-runs whenever resetKey changes (manual nav resets the interval)
  useEffect(() => {
    if (!isPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, totalSlides, autoPlayInterval, resetKey.current]);

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
