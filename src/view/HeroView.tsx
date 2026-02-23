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
      className="hero-section relative flex flex-col bg-[#FCAFCE] pt-6"
    >
      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 flex flex-col justify-start mt-8">
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
        <p className="hero-subtitle text-[15px] md:text-lg text-center text-(--kawaii-brown)/80 mb-10 max-w-2xl mx-auto">
          ไม่ต้องมีเครดิต ชิบะโฟนพร้อมอยู่ข้างคุณ
          <br />
          ช่วยให้เข้าถึงเทคโนโลยีที่จำเป็น
          <br />
          และค่อย ๆ สร้างอนาคตทางการเงินที่ดีขึ้นไปด้วยกัน
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="hero-cta-btn">
            <LineButton
              onClick={onOpenLINE}
              size="xl"
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

      {/* Hero background + Feature Grid — overlaps content above */}
      <div className="relative z-10 w-full -mt-[clamp(5rem,12vw,10rem)] md:-mt-40 lg:-mt-[clamp(17rem,20vw,25rem)]">
        {/* Background image — sits above the yellow scalloped area */}
        <div className="w-full">
          <Image
            src={BACKGROUND.hero}
            alt=""
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Scalloped yellow body with features — overlaps bottom of background image */}
        <div
          className="hero-features-body relative z-10 -mt-[clamp(2rem,6vw,5rem)] pt-[clamp(2rem,5vw,3rem)] pb-[clamp(1.5rem,4vw,2.5rem)]"
          style={{
            background: `
              radial-gradient(60% 100% at 50% 100%, #FFF32B 99%, transparent 100%) top / clamp(40px,8vw,80px) clamp(20px,4vw,40px) repeat-x,
              linear-gradient(to bottom, transparent clamp(20px,4vw,40px), #FFF32B clamp(20px,4vw,40px))
            `,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto px-4">
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
