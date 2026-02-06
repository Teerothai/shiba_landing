"use client";

import Image from "next/image";
import { Check, MessageCircle, Star } from "lucide-react";
import { Button } from "@/lib/ui/button";
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
  { id: 1, title: "สมัครสมาชิก", description: "ลงทะเบียนผ่าน LINE 2 นาที", completed: true },
  { id: 2, title: "เลือกแพ็กเกจ", description: "เลือกแบบที่เหมาะกับคุณ", completed: true },
  { id: 3, title: "เลือกสินค้า", description: "เลือกมือถือที่ต้องการ", completed: false },
  { id: 4, title: "อนุมัติ", description: "รอผลอนุมัติ 6-24 ชม.", completed: false },
  { id: 5, title: "รับสินค้า", description: "จัดส่งถึงบ้านฟรี", completed: false },
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
      className={`relative overflow-visible animate-slide-in-up ${
        pkg.popular ? "ring-2 ring-[var(--kawaii-mint-green)] scale-105" : ""
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--kawaii-mint-green)] text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Star className="w-3 h-3 fill-current" />
          ฮิตที่สุด
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
            variant={pkg.popular ? "mint" : "outline"}
            size="lg"
            className="w-full"
          >
            เลือกแพ็กเกจนี้
          </Button>
          <Button onClick={onOpenLINE} variant="ghost" size="sm" className="w-full">
            <MessageCircle className="w-4 h-4" />
            สอบถามเพิ่มเติม
          </Button>
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
                width={64}
                height={64}
                className="w-16 h-16 object-contain animate-bounce-soft"
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

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={index}
              onSelect={() => onSelectPackage(pkg.id)}
              onOpenLINE={onOpenLINE}
            />
          ))}
        </div>

        {/* Roadmap */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[var(--kawaii-brown)] text-center mb-8">
            ขั้นตอนการสมัครง่ายๆ
          </h3>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--kawaii-brown)]/20" />
            <div
              className="absolute left-6 top-0 w-0.5 bg-[var(--kawaii-pink)] transition-all"
              style={{ height: "40%" }}
            />

            {/* Steps */}
            <div className="space-y-6">
              {roadmapSteps.map((step) => (
                <div key={step.id} className="flex gap-4 items-start">
                  {/* Step indicator */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${
                      step.completed
                        ? "bg-[var(--kawaii-pink)] text-white"
                        : "bg-white border-2 border-[var(--kawaii-brown)]/20 text-[var(--kawaii-brown)]"
                    }`}
                  >
                    {step.completed ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="font-bold">{step.id}</span>
                    )}
                  </div>

                  {/* Step content */}
                  <div
                    className={`flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-4 ${
                      step.completed ? "shadow-kawaii-sm" : "opacity-70"
                    }`}
                  >
                    <h4 className="font-semibold text-[var(--kawaii-brown)]">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[var(--kawaii-brown)]/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackagesView;
