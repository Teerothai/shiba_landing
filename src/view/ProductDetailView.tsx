"use client";

import Image from "next/image";
import {
  X,
  Star,
  Heart,
  Share2,
  Package,
  ArrowRight,
  Check,
  Camera,
  Battery,
  Cpu,
  Monitor,
  HardDrive,
  Flame,
  Sparkles,
} from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { formatPriceCompact } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductDetailViewProps {
  product: Product;
  onClose: () => void;
  onOpenLINE: () => void;
  onCompare: () => void;
}

// Spec icons mapping
const specConfig: Record<
  string,
  {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }
> = {
  storage: { label: "ความจุ", icon: HardDrive, color: "var(--kawaii-gold)" },
  processor: { label: "ชิประมวลผล", icon: Cpu, color: "var(--kawaii-pink)" },
  display: { label: "หน้าจอ", icon: Monitor, color: "var(--kawaii-soft-purple)" },
  camera: { label: "กล้อง", icon: Camera, color: "var(--kawaii-mint-green)" },
  connectivity: { label: "การเชื่อมต่อ", icon: Monitor, color: "var(--kawaii-gold)" },
};

// Package options
const packageOptions = [
  { name: "Shiba Puppy", period: 36, icon: "🐕", color: "var(--kawaii-pink)" },
  { name: "Shiba Plus", period: 24, icon: "⚖️", color: "var(--kawaii-mint-green)", popular: true },
  { name: "Shiba Pro Max", period: 12, icon: "👑", color: "var(--kawaii-soft-purple)" },
];

/**
 * ProductDetailView - Product detail modal UI
 * Stateless presentation component
 */
export function ProductDetailView({
  product,
  onClose,
  onOpenLINE,
  onCompare,
}: ProductDetailViewProps) {
  const monthlyPrice = Math.floor(product.price / 24);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="animate-slide-in-up">
            {/* Header */}
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/toro-face.png"
                    alt="Toro mascot"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain animate-bounce-soft"
                  />
                  <div>
                    <CardTitle>{product.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      {product.hot && (
                        <span className="bg-[var(--kawaii-pink)] text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          ฮิต
                        </span>
                      )}
                      {product.new && (
                        <span className="bg-[var(--kawaii-soft-purple)] text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          ใหม่
                        </span>
                      )}
                      <span className="text-[10px] text-[var(--kawaii-brown)]/60 bg-[var(--kawaii-light-pink)]/20 px-2 py-0.5 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Product Image */}
                <div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  {/* Name & Rating */}
                  <h1 className="text-2xl lg:text-3xl font-bold text-[var(--kawaii-brown)] mb-3">
                    {product.name}
                  </h1>

                  {product.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating!)
                                ? "fill-[var(--kawaii-gold)] text-[var(--kawaii-gold)]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-[var(--kawaii-brown)]">
                        {product.rating}
                      </span>
                      {product.reviewCount && (
                        <span className="text-sm text-[var(--kawaii-brown)]/60">
                          ({product.reviewCount} รีวิว)
                        </span>
                      )}
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-5">
                    <div className="text-3xl font-bold text-[var(--kawaii-pink)] mb-1">
                      ฿{formatPriceCompact(product.price)}
                    </div>
                    <div className="text-base text-[var(--kawaii-brown)]/70">
                      หรือผ่อน ฿{formatPriceCompact(monthlyPrice)}/เดือน
                    </div>
                    <div className="text-sm text-[var(--kawaii-brown)]/60 mt-1">
                      วางดาวน์ ฿{formatPriceCompact(product.down)}
                    </div>
                  </div>

                  {/* Description */}
                  {product.description && (
                    <p className="text-sm text-[var(--kawaii-brown)]/80 mb-5 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  {/* Key Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mb-5">
                      <h4 className="font-semibold text-[var(--kawaii-brown)] mb-2 text-sm">
                        จุดเด่น
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {product.features.slice(0, 6).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 text-xs text-[var(--kawaii-brown)]/80"
                          >
                            <Check className="w-3.5 h-3.5 text-[var(--kawaii-mint-green)] flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button
                      onClick={onOpenLINE}
                      variant="default"
                      size="lg"
                      className="w-full"
                    >
                      <Package className="w-5 h-5" />
                      เลือกแพ็กเกจผ่อน
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        onClick={onCompare}
                        variant="secondary"
                        size="default"
                        className="w-full text-sm"
                      >
                        เปรียบเทียบ
                      </Button>
                      <LineButton
                        onClick={onOpenLINE}
                        size="default"
                        label="ปรึกษา"
                        className="w-full text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[var(--kawaii-brown)] mb-4">
                  ข้อมูลจำเพาะ
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(product.specs).map(([key, value]) => {
                    if (!value) return null;
                    const config = specConfig[key];
                    if (!config) return null;
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-3 p-3 bg-[var(--kawaii-light-pink)]/5 rounded-xl"
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${config.color}15` }}
                        >
                          <span style={{ color: config.color }}>
                            <config.icon className="w-4 h-4" />
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-[var(--kawaii-brown)] text-xs">
                            {config.label}
                          </div>
                          <div className="text-sm text-[var(--kawaii-brown)]/80">
                            {value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Package Options */}
              <div>
                <h3 className="text-lg font-bold text-[var(--kawaii-brown)] mb-4">
                  แพ็กเกจผ่อนชำระ
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {packageOptions.map((pkg) => {
                    const monthly = Math.floor(product.price / pkg.period);
                    return (
                      <div
                        key={pkg.name}
                        className={`kawaii-card p-4 text-center relative ${
                          pkg.popular
                            ? "ring-2 ring-[var(--kawaii-mint-green)]"
                            : ""
                        }`}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[var(--kawaii-mint-green)] text-white text-[10px] font-semibold px-3 py-0.5 rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            ฮิตสุด
                          </div>
                        )}
                        <div className="text-2xl mb-2">{pkg.icon}</div>
                        <h4 className="font-bold text-[var(--kawaii-brown)] text-sm mb-1">
                          {pkg.name}
                        </h4>
                        <div
                          className="text-xl font-bold mb-0.5"
                          style={{ color: pkg.color }}
                        >
                          ฿{formatPriceCompact(monthly)}/เดือน
                        </div>
                        <div className="text-xs text-[var(--kawaii-brown)]/60 mb-3">
                          {pkg.period} เดือน
                        </div>
                        <Button
                          onClick={onOpenLINE}
                          variant={pkg.popular ? "mint" : "outline"}
                          size="sm"
                          className="w-full text-xs"
                        >
                          เลือก
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailView;
