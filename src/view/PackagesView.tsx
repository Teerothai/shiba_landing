"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Package } from "@/data/products";
import { roadmapSteps } from "@/data/roadmap";
import {
  MASCOT,
  PACKAGE_BADGE,
  packageImageMap,
  promotionImageMap,
} from "@/data/images";

interface PackagesViewProps {
  packages: Package[];
  onSelectPackage: (packageId: string) => void;
  onOpenLINE: () => void;
}

/**
 * PackageCard - The package image IS the card.
 * Content is overlaid on the white area of the image.
 */
function PackageCard({
  pkg,
}: Readonly<{
  pkg: Package;
  onSelect: () => void;
  onOpenLINE: () => void;
  index: number;
}>) {
  const packageImage = packageImageMap[pkg.id];
  const promotionImage = promotionImageMap[pkg.id];

  return (
    <div
      data-promoted={pkg.popular ? "true" : undefined}
      className="relative gsap-package-card min-w-[180px] w-[180px] sm:min-w-[220px] sm:w-[220px] lg:min-w-[240px] lg:w-[240px] shrink-0 snap-center lg:snap-align-none"
    >
      {/* Like badge for Ultra */}
      {pkg.id === "ultra" && (
        <div className="absolute top-1 md:top-2 md:left-2 z-20">
          <Image
            src={PACKAGE_BADGE.like}
            alt="Like"
            width={200}
            height={200}
            className="w-13 h-13 object-contain"
          />
        </div>
      )}

      {/* The image IS the card */}
      <Image
        src={packageImage}
        alt={pkg.name}
        width={325}
        height={900}
        className="w-full h-auto"
        sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 240px"
        priority
      />

      {/* Content overlaid on the white area of the image */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col px-3 pb-3 md:px-5 md:pb-5 top-[36%]">
        {/* Benefits */}
        <ul className="mb-2">
          {pkg.benefits.map((benefit, i) => {
            const included = benefit.included !== false;
            const isLast = i === pkg.benefits.length - 1;
            return (
              <li
                key={i}
                className={cn(
                  "flex items-start gap-2 text-[15.5px] md:text-[19px] py-1.5 sm:py-2",
                  !isLast && "border-b border-kawaii-brown/30",
                )}
              >
                {included ? (
                  <Check className="w-5 h-5 shrink-0 text-green-500 mt-0.5" />
                ) : (
                  <X className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                )}
                <span
                  className={cn(
                    "font-semibold leading-tight",
                    !included && "text-(--kawaii-brown)/50",
                    benefit.highlight
                      ? "text-[#f95a9a]"
                      : included && "text-kawaii-brown",
                  )}
                >
                  {benefit.text}
                  {benefit.sub && (
                    <span className="block text-xs font-normal text-(--kawaii-brown)/60">
                      {benefit.sub}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Promotion badge - pinned to bottom */}
        <div className="mt-auto flex flex-col items-center">
          <div className="flex justify-center pt-2">
            <Image
              src={promotionImage}
              alt={`โปรโมชั่น ฿${pkg.pay}`}
              width={200}
              height={56}
              className="w-[120px] md:w-[180px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * PackagesView - Package selection section
 * Stateless presentation component
 */
export function PackagesView({
  packages,
  onSelectPackage,
  onOpenLINE,
}: Readonly<PackagesViewProps>) {
  return (
    <section
      id="packages"
      className="min-h-screen py-20"
      style={{ backgroundColor: "var(--kawaii-gold)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 gsap-section-header">
          <div className="flex justify-center mb-4">
            <div className="relative gsap-section-mascot gsap-parallax-mascot">
              <Image
                src={MASCOT.toroWithPhone}
                alt="Toro with phone"
                width={168}
                height={168}
                className="w-42 h-42 object-contain animate-bounce-soft"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-kawaii-brown mb-3">
            แพ็กเกจการผ่อน
          </h2>
          <p className="text-lg text-(--kawaii-brown)/80">
            เลือกแพ็กเกจสุดคุ้ม พร้อมระดับสมาชิกสุดพิเศษ
            <br />
            อย่างอิสระตามต้องการ!
          </p>
        </div>

        {/* Packages - Horizontal Scroll, centered on Pro Max */}
        <div className="relative mb-16">
          <div
            ref={(node) => {
              if (!node) return;
              // Auto-scroll to the promoted (Pro Max) card on mount
              const promoted =
                node.querySelector<HTMLElement>("[data-promoted]");
              if (promoted) {
                const scrollLeft =
                  promoted.offsetLeft -
                  node.offsetWidth / 2 +
                  promoted.offsetWidth / 2;
                node.scrollLeft = scrollLeft;
              }
            }}
            className="flex gap-3 sm:gap-4 lg:gap-8 overflow-x-auto snap-x snap-mandatory lg:overflow-visible lg:snap-none lg:justify-center pb-6 pt-6 px-4 -mx-4 lg:mx-0 lg:px-0 scrollbar-hide"
          >
            {/* Leading spacer so the first card can be centered (mobile only) */}
            <div className="shrink-0 w-[calc(50vw-100px)] sm:w-[calc(50vw-120px)] lg:hidden" />
            {packages.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                index={index}
                onSelect={() => onSelectPackage(pkg.id)}
                onOpenLINE={onOpenLINE}
              />
            ))}
            {/* Trailing spacer so the last card can be centered (mobile only) */}
            <div className="shrink-0 w-[calc(50vw-100px)] sm:w-[calc(50vw-120px)] lg:hidden" />
          </div>
          {/* Scroll hint */}
          <p className="text-center text-xs text-(--kawaii-brown)/50 mt-2 lg:hidden">
            ← เลื่อนเพื่อดูแพ็กเกจทั้งหมด →
          </p>
        </div>

        {/* Roadmap */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-kawaii-brown text-center mb-8 gsap-fade-up">
            5 ขั้นตอนการผ่อน
          </h3>
          {/* Video */}
          <div className="max-w-sm mx-auto mb-16 gsap-video">
            <div className="rounded-3xl overflow-hidden shadow-kawaii-md aspect-9/16">
              <iframe
                src="https://www.youtube.com/embed/pV3ih8tzQcc"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="SHiBA Phone - วิธีสมัคร"
              />
            </div>
          </div>

          <div className="relative">
            {/* Steps */}
            <div className="space-y-6">
              {roadmapSteps.map((step, index) => {
                const isLast = index === roadmapSteps.length - 1;
                return (
                  <div
                    key={step.id}
                    className="flex gap-4 items-start relative gsap-roadmap-step"
                  >
                    {/* Vertical line connecting to next step */}
                    {!isLast && (
                      <div className="gsap-step-line absolute left-6 top-12 h-[calc(100%-48px+24px)] w-0.5 -translate-x-1/2 bg-(--kawaii-brown)/20" />
                    )}

                    {/* Step number */}
                    <div className="gsap-step-circle w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 bg-white border-2 border-(--kawaii-brown)/20 text-kawaii-brown">
                      <span className="font-bold">{step.id}</span>
                    </div>

                    {/* Step content */}
                    <div
                      className={cn(
                        "gsap-step-content flex-1 rounded-2xl p-4 bg-white/80 backdrop-blur-sm",
                      )}
                    >
                      <p className="text-sm font-semibold text-[var(--kawaii-brown)">
                        {step.text}{" "}
                        {step.lineAction && (
                          <button
                            type="button"
                            onClick={onOpenLINE}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#06C755] px-3 py-1 text-sm font-bold text-white shadow-sm transition-all hover:brightness-110 hover:shadow-md active:scale-95 align-middle"
                          >
                            <Image
                              src="/assets/icon/line-icon.png"
                              alt="LINE"
                              width={18}
                              height={18}
                              className="w-4.5 h-4.5 object-contain"
                            />
                            คลิกที่นี่!
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackagesView;
