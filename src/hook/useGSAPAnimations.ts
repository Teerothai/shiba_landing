"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Helper: create a scroll-triggered fromTo animation.
 * Uses fromTo() to avoid the immediateRender flash that from() causes,
 * and `once: true` so elements stay visible after reveal.
 */
function scrollReveal(
  target: gsap.TweenTarget,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  trigger: Element | null,
  startPos = "top 88%"
) {
  if (!trigger) return;
  gsap.fromTo(target, fromVars, {
    ...toVars,
    scrollTrigger: {
      trigger,
      start: startPos,
      once: true,
    },
  });
}

/**
 * useGSAPAnimations - Main hook for all page animations
 *
 * Uses GSAP + ScrollTrigger to create:
 * - Hero entrance timeline (immediate on load)
 * - Scroll-triggered section reveals (play once, stay visible)
 * - Staggered card animations
 * - Parallax mascot effects
 * - Roadmap step-by-step reveal
 *
 * Respects prefers-reduced-motion.
 * Cleans up all animations on unmount.
 */
export function useGSAPAnimations(): RefObject<HTMLDivElement | null> {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // ═══════════════════════════════════════
      // 1. HERO SECTION - Plays on page load
      // ═══════════════════════════════════════
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
        delay: 0.2,
      });

      // Mascot entrance - playful elastic bounce
      heroTl.from(".hero-mascot", {
        scale: 0,
        rotation: -20,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.4)",
      });

      // Wave emoji pop
      heroTl.from(
        ".hero-wave",
        { scale: 0, rotation: -45, opacity: 0, duration: 0.6, ease: "back.out(3)" },
        "-=0.6"
      );

      // Heart emoji
      heroTl.from(
        ".hero-heart",
        { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2)" },
        "-=0.3"
      );

      // Title
      heroTl.from(
        ".hero-title",
        { y: 60, opacity: 0, duration: 0.9 },
        "-=0.3"
      );

      // Title accent line
      heroTl.from(
        ".hero-title-accent",
        { y: 40, opacity: 0, duration: 0.7 },
        "-=0.5"
      );

      // Subtitle
      heroTl.from(
        ".hero-subtitle",
        { y: 30, opacity: 0, duration: 0.6 },
        "-=0.3"
      );

      // CTA buttons
      heroTl.from(
        ".hero-cta-btn",
        { y: 30, opacity: 0, scale: 0.9, stagger: 0.15, duration: 0.5, ease: "back.out(1.5)" },
        "-=0.2"
      );

      // Feature cards
      heroTl.from(
        ".hero-feature",
        { y: 50, opacity: 0, scale: 0.8, rotation: -3, stagger: 0.1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      );

      // ═══════════════════════════════════════
      // 2. SECTION HEADERS - Scroll triggered
      // ═══════════════════════════════════════
      gsap.utils.toArray<HTMLElement>(".gsap-section-header").forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });

        const mascot = el.querySelector(".gsap-section-mascot");
        if (mascot) {
          tl.fromTo(
            mascot,
            { scale: 0, rotation: -15, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
          );
        }

        const title = el.querySelector("h2");
        if (title) {
          tl.fromTo(
            title,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.4"
          );
        }

        const subtitle = el.querySelector("p");
        if (subtitle) {
          tl.fromTo(
            subtitle,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            "-=0.3"
          );
        }
      });

      // ═══════════════════════════════════════
      // 3. PRODUCT CARDS - Batch ScrollTrigger
      // ═══════════════════════════════════════
      const productCards = container.querySelectorAll<HTMLElement>(".gsap-product-card");
      if (productCards.length > 0) {
        gsap.set(productCards, { opacity: 0, y: 40, scale: 0.95 });

        ScrollTrigger.batch(productCards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              duration: 0.6,
              ease: "back.out(1.4)",
              overwrite: true,
            });
          },
        });
      }

      // Product filter buttons
      const filterBtns = container.querySelectorAll<HTMLElement>(".gsap-filter-btn");
      if (filterBtns.length > 0) {
        scrollReveal(
          filterBtns,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.5)" },
          filterBtns[0].parentElement
        );
      }

      // Product CTA box
      const productCta = container.querySelector(".gsap-product-cta");
      if (productCta) {
        scrollReveal(
          productCta,
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7 },
          productCta,
          "top 90%"
        );
      }

      // ═══════════════════════════════════════
      // 4. COMPARE SECTION
      // ═══════════════════════════════════════
      const compareSelector = container.querySelector(".gsap-compare-selector");
      if (compareSelector) {
        scrollReveal(
          compareSelector,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          compareSelector
        );
      }

      // Compare product cards - slide from sides
      const compareCards = container.querySelectorAll<HTMLElement>(".gsap-compare-card");
      compareCards.forEach((card, i) => {
        scrollReveal(
          card,
          { x: i === 0 ? -60 : 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
          card
        );
      });

      // Compare table rows
      const compareTable = container.querySelector(".gsap-compare-table");
      if (compareTable) {
        const rows = compareTable.querySelectorAll<HTMLElement>(".gsap-compare-row");
        if (rows.length > 0) {
          gsap.fromTo(
            rows,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              stagger: 0.08,
              duration: 0.5,
              scrollTrigger: { trigger: compareTable, start: "top 85%", once: true },
            }
          );
        }
      }

      // Compare CTA
      const compareCta = container.querySelector(".gsap-compare-cta");
      if (compareCta) {
        scrollReveal(
          compareCta,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" },
          compareCta,
          "top 90%"
        );
      }

      // ═══════════════════════════════════════
      // 5. PACKAGE CARDS
      // ═══════════════════════════════════════
      const packageCards = container.querySelectorAll<HTMLElement>(".gsap-package-card");
      if (packageCards.length > 0) {
        gsap.set(packageCards, { opacity: 0, y: 50, scale: 0.9 });

        ScrollTrigger.batch(packageCards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.15,
              duration: 0.7,
              ease: "back.out(1.5)",
              overwrite: true,
            });
          },
        });
      }

      // Video section
      const videoSection = container.querySelector(".gsap-video");
      if (videoSection) {
        scrollReveal(
          videoSection,
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8 },
          videoSection
        );
      }

      // ═══════════════════════════════════════
      // 6. ROADMAP STEPS - Sequential reveal
      // ═══════════════════════════════════════
      const roadmapSteps = container.querySelectorAll<HTMLElement>(".gsap-roadmap-step");
      roadmapSteps.forEach((step) => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: step, start: "top 88%", once: true },
        });

        const circle = step.querySelector(".gsap-step-circle");
        if (circle) {
          tl.fromTo(
            circle,
            { scale: 0, rotation: -180, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 0.5, ease: "back.out(2)" }
          );
        }

        const content = step.querySelector(".gsap-step-content");
        if (content) {
          tl.fromTo(
            content,
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            "-=0.2"
          );
        }

        const line = step.querySelector(".gsap-step-line");
        if (line) {
          tl.fromTo(
            line,
            { scaleY: 0 },
            { scaleY: 1, transformOrigin: "top center", duration: 0.4 },
            "-=0.2"
          );
        }
      });

      // ═══════════════════════════════════════
      // 7. COMMUNITY POSTS - Stagger reveal
      // ═══════════════════════════════════════
      const communityPosts = container.querySelectorAll<HTMLElement>(".gsap-community-post");
      communityPosts.forEach((post, i) => {
        scrollReveal(
          post,
          { x: i % 2 === 0 ? -50 : 50, y: 20, opacity: 0, rotation: i % 2 === 0 ? -2 : 2 },
          { x: 0, y: 0, opacity: 1, rotation: 0, duration: 0.7, ease: "power2.out" },
          post
        );
      });

      // ═══════════════════════════════════════
      // 8. CONTACT SECTION
      // ═══════════════════════════════════════
      const contactCta = container.querySelector(".gsap-contact-cta");
      if (contactCta) {
        scrollReveal(
          contactCta,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
          contactCta
        );
      }

      // Contact cards - slide from sides
      const contactCards = container.querySelectorAll<HTMLElement>(".gsap-contact-card");
      contactCards.forEach((card, i) => {
        scrollReveal(
          card,
          { x: i === 0 ? -50 : 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
          card
        );
      });

      // Final CTA card
      const finalCta = container.querySelector(".gsap-final-cta");
      if (finalCta) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: finalCta, start: "top 88%", once: true },
        });

        tl.fromTo(
          finalCta,
          { y: 40, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" }
        );

        const ctaMascot = finalCta.querySelector(".gsap-cta-mascot");
        if (ctaMascot) {
          tl.fromTo(
            ctaMascot,
            { scale: 0, rotation: -20 },
            { scale: 1, rotation: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" },
            "-=0.4"
          );
        }
      }

      // ═══════════════════════════════════════
      // 9. FOOTER
      // ═══════════════════════════════════════
      const footerCols = container.querySelectorAll<HTMLElement>(".gsap-footer-col");
      if (footerCols.length > 0) {
        gsap.fromTo(
          footerCols,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            scrollTrigger: {
              trigger: footerCols[0].parentElement,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      // ═══════════════════════════════════════
      // 10. PARALLAX MASCOTS
      // ═══════════════════════════════════════
      gsap.utils.toArray<HTMLElement>(".gsap-parallax-mascot").forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el.closest("section"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
          y: -30,
          ease: "none",
        });
      });

      // ═══════════════════════════════════════
      // 11. GENERIC FADE-UP ELEMENTS
      // ═══════════════════════════════════════
      gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((el) => {
        scrollReveal(
          el,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
          el
        );
      });

      // ═══════════════════════════════════════
      // 12. HEADER SCROLL EFFECT
      // ═══════════════════════════════════════
      const header = container.querySelector("header");
      if (header) {
        let lastScrollY = 0;

        ScrollTrigger.create({
          start: "top -80",
          end: "max",
          onUpdate: (self) => {
            const scrollY = self.scroll();
            const direction = scrollY > lastScrollY ? "down" : "up";

            if (direction === "down" && scrollY > 200) {
              gsap.to(header, { y: -100, duration: 0.3, ease: "power2.in" });
            } else {
              gsap.to(header, { y: 0, duration: 0.3, ease: "power2.out" });
            }

            lastScrollY = scrollY;
          },
        });
      }

      // ═══════════════════════════════════════
      // 13. SMOOTH HOVER EFFECTS
      // ═══════════════════════════════════════
      gsap.utils.toArray<HTMLElement>(".gsap-hover-lift").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, {
            y: -6,
            scale: 1.02,
            boxShadow: "0 12px 40px rgba(255, 138, 183, 0.25)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            y: 0,
            scale: 1,
            boxShadow: "0 2px 8px rgba(255, 138, 183, 0.15)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // ═══════════════════════════════════════
      // 14. REFRESH after images load
      // ═══════════════════════════════════════
      // Recalculate trigger positions after page settles
      window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return containerRef;
}
