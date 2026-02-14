"use client";

import Image from "next/image";
import { Package, ArrowDown } from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";
import { BACKGROUND, FEATURE } from "@/data/images";

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
      className="hero-section min-h-screen relative flex flex-col bg-contain bg-position-[center_top] bg-no-repeat md:bg-cover md:bg-position-[center_-1050px]"
      style={{ backgroundImage: `url(${BACKGROUND.hero})` }}
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 flex-1 flex flex-col justify-start pt-10 pb-3 md:pt-30 md:pb-15">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-kawaii-brown mb-6">
          <span className="hero-title inline-block">
            ผ่อนไปใช้ไป ไว้ใจชิบะโฟน
          </span>
          <span className="block text-white mt-2 hero-title-accent text-3xl">
            เริ่มต้นผ่อน เพียงวันละ 50บาท
          </span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subtitle text-lg md:text-xl text-center text-(--kawaii-brown)/80 mb-10 max-w-2xl mx-auto">
          ไม่ต้องมีเครดิต ชิบะโฟนพร้อมอยู่ข้างคุณ
          <br />
          ช่วยให้เข้าถึงเทคโนโลยีที่จำเป็น
          <br />
          และค่อย ๆ สร้างอนาคตทางการเงินที่ดีขึ้นไปด้วยกัน
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-33 md:mb-90">
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
      </div>

      {/* Feature Grid — full-width scalloped yellow background */}
      <div className="relative z-10 w-full">
        {/* Scalloped top edge — repeating radial gradient for consistent size */}
        {/* Yellow body with scalloped top edge */}
        <div
          className="hero-features-body pt-10 md:pt-12 pb-10"
          style={{
            background: `
              radial-gradient(60% 100% at 50% 100%, #FFF32B 99%, transparent 100%) top / 80px 40px repeat-x,
              linear-gradient(to bottom, transparent 40px, #FFF32B 40px)
            `,
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
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
      </div>
    </section>
  );
}

export default HeroView;
