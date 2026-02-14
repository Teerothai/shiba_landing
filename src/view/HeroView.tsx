"use client";

import Image from "next/image";
import { Package, ArrowDown } from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";
import { MASCOT, FEATURE } from "@/data/images";

interface HeroViewProps {
  onOpenLINE: () => void;
  onScrollToPackages: () => void;
}

// Feature highlights — each image already contains icon, title & description
const features = [
  { src: FEATURE.startWith50Thb, alt: "ผ่อนเริ่มต้นวันละ 50 บาท" },
  { src: FEATURE.idCard, alt: "ใช้บัตรประชาชนใบเดียว ไม่มีเครดิตก็ผ่อนได้" },
  { src: FEATURE.checkStatus, alt: "มีระบบตรวจสอบสถานะ และทีมช่วยแนะนำ 24 ชม." },
  { src: FEATURE.authentic, alt: "สินค้าแท้ ประกันศูนย์ มีบริการหลังการขาย" },
];

/**
 * HeroView - Main landing section with CTA
 * Stateless presentation component
 */
export function HeroView({ onOpenLINE, onScrollToPackages }: HeroViewProps) {
  return (
    <section
      id="home"
      className="min-h-screen py-20 relative"
      style={{
        background: "linear-gradient(135deg, #ff8ab7, #f7c77c)",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 min-h-screen flex flex-col justify-center">
        {/* Mascot with wave emoji */}
        <div className="flex justify-center mb-4">
          <div className="relative hero-mascot">
            <Image
              src={MASCOT.toroWithPhone}
              alt="Toro with phone"
              width={128}
              height={128}
              className="w-52 h-52 md:w-64 md:h-64 object-contain animate-float"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-[var(--kawaii-brown)] mb-6">
          <span className="hero-title inline-block">
            ผ่อนไปใช้ไป ไว้ใจชิบะโฟน
          </span>
          <span className="block text-white mt-2 hero-title-accent text-3xl">
            เริ่มต้นผ่อน เพียงวันละ 50บาท
          </span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subtitle text-lg md:text-xl text-center text-[var(--kawaii-brown)]/80 mb-10 max-w-2xl mx-auto">
          ไม่ต้องมีเครดิต ชิบะโฟนพร้อมอยู่ข้างคุณ
          <br />
          ช่วยให้เข้าถึงเทคโนโลยีที่จำเป็น
          <br />
          และค่อย ๆ สร้างอนาคตทางการเงินที่ดีขึ้นไปด้วยกัน
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <div className="hero-cta-btn">
            <LineButton
              onClick={onOpenLINE}
              size="xl"
              className="border-2 border-[#05a045] shadow-lg"
            />
          </div>

          <div className="hero-cta-btn">
            <Button
              onClick={onScrollToPackages}
              variant="secondary"
              size="xl"
              rounded="full"
            >
              <Package className="w-6 h-6" />
              ดูแพ็กเกจ
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.src}
              className="hero-feature gsap-hover-lift"
            >
              <Image
                src={feature.src}
                alt={feature.alt}
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroView;
