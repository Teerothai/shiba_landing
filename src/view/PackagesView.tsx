"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";
import { formatPriceCompact } from "@/lib/utils";
import type { Package } from "@/data/products";

interface PackagesViewProps {
  packages: Package[];
  onSelectPackage: (packageId: string) => void;
  onOpenLINE: () => void;
}

// Roadmap steps
const roadmapSteps = [
  { id: 1, text: "เพิ่มเพื่อน Line : @shibaphone\nหรือ คลิกที่นี่!" },
  { id: 2, text: "กดเข้าเมนูสินค้า เลือกสินค้าที่สนใจ\nรุ่น สี ความจุ รูปแบบการผ่อน" },
  { id: 3, text: "กรอกข้อมูล พร้อมเซ็นสัญญาออมดาวน์\nเพียง 2นาที" },
  { id: 4, text: 'กดเมนู "ส่งยอด" ชำระยอดเปิดบิลเพื่อจองเครื่อง ขั้นต่ำเพียง 50บาท' },
  { id: 5, text: 'กดเมนู "ส่งยอด" อัพสลิปของคุณได้เลย' },
];

// Package card background images
const packageImageMap: Record<string, string> = {
  puppy: "/assets/packages/shiba-puppy.png",
  plus: "/assets/packages/shiba-plus.png",
  promax: "/assets/packages/shiba-pro-max.png",
};

// Promotion badge images
const promotionImageMap: Record<string, string> = {
  puppy: "/assets/promotion/promotion-50-thb.png",
  plus: "/assets/promotion/promotion-100-thb.png",
  promax: "/assets/promotion/promotion-350-thb.png",
};

/**
 * PackageCard - The package image IS the card.
 * Content is overlaid on the white area of the image.
 */
function PackageCard({
  pkg,
}: {
  pkg: Package;
  onSelect: () => void;
  onOpenLINE: () => void;
  index: number;
}) {
  const packageImage = packageImageMap[pkg.id];
  const promotionImage = promotionImageMap[pkg.id];

  return (
    <div
      data-promoted={pkg.popular ? "true" : undefined}
      className={`relative gsap-package-card min-w-[280px] w-[280px] shrink-0 snap-center ${
        pkg.popular ? "scale-105" : ""
      }`}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[var(--kawaii-soft-purple)] text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1 shadow-md z-20">
          <Star className="w-3 h-3 fill-current" />
          แนะนำ
        </div>
      )}

      {/* The image IS the card */}
      <Image
        src={packageImage}
        alt={pkg.name}
        width={325}
        height={900}
        className="w-full h-auto"
        sizes="280px"
        priority
      />

      {/* Content overlaid on the white area of the image */}
      <div
        className={`absolute inset-x-0 top-[33%] bottom-0 flex flex-col pb-5 ${
          pkg.id === "promax" ? "pl-14 pr-4" : "px-5"
        }`}
      >
        {/* Subtitle */}
        <p className="text-center text-sm text-[var(--kawaii-brown)]/70 font-medium mb-2">
          {pkg.subtitle}
        </p>

        {/* Pricing */}
        <div
          className="text-center p-3 rounded-xl mb-3"
          style={{ backgroundColor: `${pkg.color}15` }}
        >
          <p className="text-sm text-[var(--kawaii-brown)]/70">เริ่มต้นวันละ</p>
          <p className="text-3xl font-bold" style={{ color: pkg.color }}>
            ฿{pkg.pay}
          </p>
          <p className="text-xs text-[var(--kawaii-brown)]/60">
            หรือ ฿{formatPriceCompact(pkg.monthlyStart)}/เดือน
          </p>
        </div>

        {/* Benefits */}
        <ul className="space-y-1.5 mb-2">
          {pkg.benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Check
                className="w-4 h-4 shrink-0"
                style={{ color: pkg.color }}
              />
              <span className="text-[var(--kawaii-brown)]">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Steps indicator */}
        <div className="text-center text-xs text-[var(--kawaii-brown)]/60 whitespace-nowrap">
          Battle Pass {pkg.steps} ขั้น
        </div>

        {/* Promotion badge */}
        <div className="flex justify-center mt-auto pt-2">
          <Image
            src={promotionImage}
            alt={`โปรโมชั่น ฿${pkg.pay}`}
            width={200}
            height={56}
            className="w-[180px] h-auto object-contain"
          />
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
}: PackagesViewProps) {
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
                src="/assets/toro-with-phone.png"
                alt="Toro with phone"
                width={168}
                height={168}
                className="w-42 h-42 object-contain animate-bounce-soft"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--kawaii-brown)] mb-3">
            แพ็กเกจการผ่อน
          </h2>
          <p className="text-lg text-[var(--kawaii-brown)]/80">
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
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-6 px-4 -mx-4 scrollbar-hide"
          >
            {/* Leading spacer so the first card can be centered */}
            <div className="shrink-0 w-[calc(50vw-160px)]" />
            {packages.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                index={index}
                onSelect={() => onSelectPackage(pkg.id)}
                onOpenLINE={onOpenLINE}
              />
            ))}
            {/* Trailing spacer so the last card can be centered */}
            <div className="shrink-0 w-[calc(50vw-160px)]" />
          </div>
          {/* Scroll hint */}
          <p className="text-center text-xs text-[var(--kawaii-brown)]/50 mt-2 lg:hidden">
            ← เลื่อนเพื่อดูแพ็กเกจทั้งหมด →
          </p>
        </div>

        {/* Roadmap */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-[var(--kawaii-brown)] text-center mb-8 gsap-fade-up">
            5 ขั้นตอนการผ่อน
          </h3>
          {/* Video */}
          <div className="max-w-sm mx-auto mb-16 gsap-video">
            <div className="rounded-2xl overflow-hidden shadow-kawaii-md aspect-[9/16]">
              <iframe
                src="https://www.youtube.com/embed/UtV_nRfMXgg"
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
                      <div className="gsap-step-line absolute left-6 top-12 h-[calc(100%-48px+24px)] w-0.5 -translate-x-1/2 bg-[var(--kawaii-brown)]/20" />
                    )}

                    {/* Step number */}
                    <div className="gsap-step-circle w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 bg-white border-2 border-[var(--kawaii-brown)]/20 text-[var(--kawaii-brown)]">
                      <span className="font-bold">{step.id}</span>
                    </div>

                    {/* Step content */}
                    <div className="gsap-step-content flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-sm font-semibold text-[var(--kawaii-brown)">
                        {step.text}
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
