"use client";

import { useState, useEffect, useCallback } from "react";

type SectionId = "home" | "products" | "compare" | "packages" | "community" | "contact";

interface UseScrollNavReturn {
  activeSection: SectionId;
  scrollToSection: (sectionId: SectionId) => void;
}

/**
 * useScrollNav - Navigation and scroll handling hook
 * Manages active section detection and smooth scrolling
 */
export function useScrollNav(): UseScrollNavReturn {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  // Intersection Observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  }, []);

  return {
    activeSection,
    scrollToSection,
  };
}

export default useScrollNav;
