"use client";

import Image from "next/image";
import { Package, ArrowDown, Phone, Shield, Clock, Gift } from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";

interface HeroViewProps {
  onOpenLINE: () => void;
  onScrollToPackages: () => void;
}

// Feature highlights data
const features = [
  {
    icon: Phone,
    title: "ผ่อนวันละ 50 บาท",
    description: "เริ่มต้นง่าย ไม่หนักกระเป๋า",
    color: "bg-[var(--kawaii-pink)]",
  },
  {
    icon: Shield,
    title: "โปร่งใส 100%",
    description: "ไม่มีค่าใช้จ่ายซ่อนเร้น",
    color: "bg-[var(--kawaii-mint-green)]",
  },
  {
    icon: Clock,
    title: "ตรวจสอบ 24 ชม.",
    description: "เช็คสถานะได้ตลอดเวลา",
    color: "bg-[var(--kawaii-gold)]",
  },
  {
    icon: Gift,
    title: "ของแถม 30+ ชิ้น",
    description: "สิทธิพิเศษสำหรับสมาชิก",
    color: "bg-[var(--kawaii-soft-purple)]",
  },
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
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Image
              src="/assets/toro-with-phone.png"
              alt="Toro with phone"
              width={128}
              height={128}
              className="w-32 h-32 object-contain animate-float"
              priority
            />
            <span className="absolute -top-4 -right-4 text-4xl animate-wave">
              👋
            </span>
            <span className="absolute -bottom-2 -left-2 text-2xl animate-bounce">
              💖
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-[var(--kawaii-brown)] mb-6">
          ผ่อนมือถือให้ง่าย—สบายใจ
          <span className="block text-white mt-2">
            มีน้องชิบะอยู่เคียงข้าง
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-center text-[var(--kawaii-brown)]/80 mb-10 max-w-2xl mx-auto">
          เริ่มวันละ 50 บาท โปร่งใส เข้าใจง่าย
          <br />
          ตรวจเช็คสถานะได้ 24 ชม. พร้อมของแถมสูงสุด 30 ชิ้น++
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <LineButton
            onClick={onOpenLINE}
            size="xl"
            className="border-2 border-[#05a045] shadow-lg"
          />

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

        {/* Feature Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-kawaii-sm hover:shadow-kawaii-md transition-all hover:-translate-y-1 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[var(--kawaii-brown)] text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-[var(--kawaii-brown)]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroView;
