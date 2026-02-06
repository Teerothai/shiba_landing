"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { formatPriceCompact } from "@/lib/utils";
import type { Package } from "@/data/products";

interface PackagesViewProps {
  packages: Package[];
  onSelectPackage: (packageId: string) => void;
  onOpenLINE: () => void;
}

// Roadmap steps
const roadmapSteps = [
  { id: 1, title: "สมัครสมาชิก", description: "ลงทะเบียนผ่าน LINE 2 นาที" },
  { id: 2, title: "เลือกแพ็กเกจ", description: "เลือกแบบที่เหมาะกับคุณ" },
  { id: 3, title: "เลือกสินค้า", description: "เลือกมือถือที่ต้องการ" },
  { id: 4, title: "อนุมัติ", description: "รอผลอนุมัติ 6-24 ชม." },
  { id: 5, title: "รับสินค้า", description: "จัดส่งถึงบ้านฟรี" },
];

/**
 * PackageCard - Individual package display
 */
function PackageCard({
  pkg,
  onSelect,
  onOpenLINE,
  index,
}: {
  pkg: Package;
  onSelect: () => void;
  onOpenLINE: () => void;
  index: number;
}) {
  return (
    <Card
      data-promoted={pkg.popular ? "true" : undefined}
      className={`relative overflow-visible animate-slide-in-up min-w-[280px] w-[280px] shrink-0 snap-center ${
        pkg.popular ? "ring-2 ring-[var(--kawaii-soft-purple)] scale-105" : ""
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--kawaii-soft-purple)] text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1 shadow-md z-10">
          <Star className="w-3 h-3 fill-current" />
          แนะนำ
        </div>
      )}

      <CardHeader className="text-center pb-2">
        {/* Icon */}
        <div className="text-5xl mb-2">{pkg.icon}</div>
        <CardTitle className="text-xl">{pkg.name}</CardTitle>
        <p className="text-sm text-[var(--kawaii-brown)]/70">{pkg.subtitle}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Pricing */}
        <div
          className="text-center p-4 rounded-xl"
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
        <ul className="space-y-2">
          {pkg.benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Check
                className="w-4 h-4 flex-shrink-0"
                style={{ color: pkg.color }}
              />
              <span className="text-[var(--kawaii-brown)]">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Steps indicator */}
        <div className="text-center text-xs text-[var(--kawaii-brown)]/60">
          Battle Pass {pkg.steps} ขั้น
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <Button
            onClick={onSelect}
            variant={pkg.popular ? "purple" : "outline"}
            size="lg"
            className="w-full"
          >
            เลือกแพ็กเกจนี้
          </Button>
          <LineButton
            onClick={onOpenLINE}
            size="sm"
            label="สอบถามเพิ่มเติม"
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
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
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
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
            แพ็กเกจ SHIBA
          </h2>
          <p className="text-lg text-[var(--kawaii-brown)]/80">
            เลือกแพ็กเกจที่เหมาะกับคุณ พร้อมติดตาม milestone แบบน้องหมา
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
          <h3 className="text-xl font-bold text-[var(--kawaii-brown)] text-center mb-8">
            ขั้นตอนการสมัครง่ายๆ
          </h3>
          {/* Video */}
          <div className="max-w-sm mx-auto mb-16">
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
                    className="flex gap-4 items-start relative"
                  >
                    {/* Vertical line connecting to next step */}
                    {!isLast && (
                      <div className="absolute left-6 top-12 h-[calc(100%-48px+24px)] w-0.5 -translate-x-1/2 bg-[var(--kawaii-brown)]/20" />
                    )}

                    {/* Step number */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 bg-white border-2 border-[var(--kawaii-brown)]/20 text-[var(--kawaii-brown)]">
                      <span className="font-bold">{step.id}</span>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold text-[var(--kawaii-brown)]">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[var(--kawaii-brown)]/70">
                        {step.description}
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
