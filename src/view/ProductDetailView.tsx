"use client";

import Image from "next/image";
import {
  X,
  Package,
  ArrowRight,
  Check,
  Camera,
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
import { MASCOT } from "@/data/images";

const LIGHT_HEX_VALUES = new Set([
  "#F5F5F7",
  "#F5F0E8",
  "#F0EFEA",
  "#EDEDEA",
  "#E3E4E5",
  "#E3E2DD",
  "#F4E0C7",
  "#E6D5B8",
  "#F9E472",
  "#D4D4D4",
]);

interface ProductDetailViewProps {
  product: Product;
  selectedColorIndex: number;
  onClose: () => void;
  onOpenLINE: () => void;
  onCompare: () => void;
  onColorSelect: (index: number) => void;
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
  display: {
    label: "หน้าจอ",
    icon: Monitor,
    color: "var(--kawaii-soft-purple)",
  },
  camera: { label: "กล้อง", icon: Camera, color: "var(--kawaii-mint-green)" },
  connectivity: {
    label: "การเชื่อมต่อ",
    icon: Monitor,
    color: "var(--kawaii-gold)",
  },
};

/**
 * ProductDetailView - Product detail modal UI
 * Stateless presentation component
 */
export function ProductDetailView({
  product,
  selectedColorIndex,
  onClose,
  onOpenLINE,
  onCompare,
  onColorSelect,
}: ProductDetailViewProps) {
  const monthlyPrice = Math.floor(product.price / 24);
  const selectedColor = product.colors?.[selectedColorIndex];
  const displayImage = selectedColor?.image ?? product.image;

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
                    src={MASCOT.toroFace}
                    alt="Toro mascot"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain animate-bounce-soft"
                  />
                  <div>
                    <CardTitle>{product.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      {product.hot && (
                        <span className="bg-kawaii-pink text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          ฮิต
                        </span>
                      )}
                      {product.new && (
                        <span className="bg-kawaii-soft-purple text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          ใหม่
                        </span>
                      )}
                      <span className="text-[10px] text-(--kawaii-brown)/60 bg-(--kawaii-light-pink)/20 px-2 py-0.5 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
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
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 mb-4">
                    <Image
                      src={displayImage}
                      alt={
                        selectedColor
                          ? `${product.name} - ${selectedColor.name}`
                          : product.name
                      }
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Colors */}
                  {product.colors && product.colors.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-kawaii-brown mb-4">
                        สีที่มีให้เลือก
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {product.colors.map((color, index) => {
                          const isSelected = index === selectedColorIndex;
                          const isLight = LIGHT_HEX_VALUES.has(
                            color.hex.toUpperCase(),
                          );
                          return (
                            <button
                              key={color.name}
                              type="button"
                              onClick={() => onColorSelect(index)}
                              className="flex flex-col items-center gap-1.5 cursor-pointer w-16 py-1"
                            >
                              <div
                                className={`w-8 h-8 rounded-full shadow-sm transition-shadow ${
                                  isSelected
                                    ? "ring-2 ring-kawaii-pink ring-offset-2"
                                    : isLight
                                      ? "ring-1 ring-gray-200"
                                      : ""
                                }`}
                                style={{ backgroundColor: color.hex }}
                              />
                              <span
                                className={`text-[11px] w-full text-center leading-tight truncate ${
                                  isSelected
                                    ? "font-medium text-kawaii-pink"
                                    : "text-(--kawaii-brown)/70"
                                }`}
                              >
                                {color.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div>
                  {/* Name */}
                  <h1 className="text-2xl lg:text-3xl font-bold text-kawaii-brown mb-3">
                    {product.name}
                  </h1>
                  {/* Price */}
                  <div className="mb-5">
                    <div className="text-3xl font-bold text-kawaii-pink mb-1">
                      ฿{formatPriceCompact(product.price)}
                    </div>
                    <div className="text-base text-(--kawaii-brown)/70">
                      ออมดาวน์ ฿{formatPriceCompact(product.down)}
                    </div>
                    <div className="text-sm text-(--kawaii-brown)/60 mt-1">
                      ผ่อน ฿{formatPriceCompact(monthlyPrice)}/เดือน
                    </div>
                  </div>

                  {/* Description */}
                  {product.description && (
                    <p className="text-sm text-(--kawaii-brown)/80 mb-5 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  {/* Key Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mb-5">
                      <h4 className="font-semibold text-kawaii-brown mb-2 text-sm">
                        จุดเด่น
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {product.features.slice(0, 6).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 text-xs text-(--kawaii-brown)/80"
                          >
                            <Check className="w-3.5 h-3.5 text-kawaii-mint-green shrink-0" />
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
              {/* Storage Options */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-kawaii-brown mb-4">
                  ความจุให้เลือก
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.specs.storage.map((size) => (
                    <span
                      key={size}
                      className="px-4 py-2 rounded-xl border-2 border-(--kawaii-gold)/30 bg-(--kawaii-gold)/5 text-sm font-medium text-kawaii-brown"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-kawaii-brown mb-4">
                  ข้อมูลจำเพาะ
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(product.specs).map(([key, value]) => {
                    if (!value || key === "storage") return null;
                    const config = specConfig[key];
                    if (!config) return null;
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-3 p-3 bg-(--kawaii-light-pink)/5 rounded-xl"
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
                          <div className="font-medium text-kawaii-brown text-xs">
                            {config.label}
                          </div>
                          <div className="text-sm text-(--kawaii-brown)/80">
                            {value}
                          </div>
                        </div>
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
