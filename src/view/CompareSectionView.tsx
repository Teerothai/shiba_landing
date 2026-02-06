"use client";

import Image from "next/image";
import {
  Smartphone,
  Cpu,
  Camera,
  HardDrive,
  Monitor,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { formatPriceCompact } from "@/lib/utils";
import type { Product } from "@/data/products";

interface CompareSectionViewProps {
  selectedProducts: [Product | undefined, Product | undefined];
  selectedIds: [string, string];
  availableProducts: Product[];
  onSelectProduct: (index: 0 | 1, productId: string) => void;
  onOpenLINE: () => void;
  onViewDetail: (productId: string) => void;
}

// Spec comparison rows
const specRows: {
  label: string;
  key: keyof Product["specs"];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}[] = [
  { label: "ความจุ", key: "storage", icon: HardDrive, color: "var(--kawaii-gold)" },
  { label: "ชิประมวลผล", key: "processor", icon: Cpu, color: "var(--kawaii-pink)" },
  { label: "หน้าจอ", key: "display", icon: Monitor, color: "var(--kawaii-soft-purple)" },
  { label: "กล้อง", key: "camera", icon: Camera, color: "var(--kawaii-mint-green)" },
];

// Custom select dropdown styling
const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236c4200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 12px center",
  paddingRight: "36px",
};

/**
 * CompareSectionView - Inline compare section on landing page
 * Sits between Products and Packages sections
 */
export function CompareSectionView({
  selectedProducts,
  selectedIds,
  availableProducts,
  onSelectProduct,
  onOpenLINE,
  onViewDetail,
}: CompareSectionViewProps) {
  const [product1, product2] = selectedProducts;

  return (
    <section
      id="compare"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #b2a5f2, #fcb0ce)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Image
                src="/assets/toro-face.png"
                alt="Toro mascot"
                width={64}
                height={64}
                className="w-16 h-16 object-contain animate-float"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            เปรียบเทียบสินค้า
          </h2>
          <p className="text-lg text-white/80">
            เลือก 2 รุ่นเพื่อดูข้อมูลเปรียบเทียบแบบละเอียด
          </p>
        </div>

        {/* Product Selectors */}
        <Card className="mb-8 animate-slide-in-up">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              เลือกรุ่นที่ต้องการเปรียบเทียบ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
              {/* Slot 1 */}
              <div>
                <label className="text-xs font-medium text-[var(--kawaii-brown)]/70 mb-1 block">
                  สินค้า 1
                </label>
                <select
                  value={selectedIds[0]}
                  onChange={(e) => onSelectProduct(0, e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[var(--kawaii-light-pink)]/30 bg-white text-[var(--kawaii-brown)] text-sm focus:border-[var(--kawaii-pink)] focus:outline-none transition-colors appearance-none cursor-pointer"
                  style={selectStyle}
                >
                  {availableProducts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — ฿{formatPriceCompact(p.price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* VS Divider */}
              <div className="hidden sm:flex items-center justify-center pb-1">
                <span className="text-xl font-bold text-[var(--kawaii-pink)]">
                  VS
                </span>
              </div>
              <div className="flex sm:hidden items-center justify-center">
                <span className="text-lg font-bold text-[var(--kawaii-pink)]">
                  VS
                </span>
              </div>

              {/* Slot 2 */}
              <div>
                <label className="text-xs font-medium text-[var(--kawaii-brown)]/70 mb-1 block">
                  สินค้า 2
                </label>
                <select
                  value={selectedIds[1]}
                  onChange={(e) => onSelectProduct(1, e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-[var(--kawaii-light-pink)]/30 bg-white text-[var(--kawaii-brown)] text-sm focus:border-[var(--kawaii-pink)] focus:outline-none transition-colors appearance-none cursor-pointer"
                  style={selectStyle}
                >
                  {availableProducts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — ฿{formatPriceCompact(p.price)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Overview Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
          {([product1, product2] as const).map((product) => {
            if (!product) return null;
            const monthlyPrice = Math.floor(product.price / 24);
            return (
              <Card
                key={product.id}
                className="overflow-hidden animate-slide-in-up"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  {/* Image */}
                  <div className="relative mb-3">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-2xl"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </div>
                    {/* Badges */}
                    <div className="absolute top-0 left-0 flex gap-1">
                      {product.hot && (
                        <span className="bg-[var(--kawaii-pink)] text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                          ฮิต
                        </span>
                      )}
                      {product.new && (
                        <span className="bg-[var(--kawaii-soft-purple)] text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                          ใหม่
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="font-semibold text-[var(--kawaii-brown)] text-sm md:text-base mb-1">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star className="w-3.5 h-3.5 fill-[var(--kawaii-gold)] text-[var(--kawaii-gold)]" />
                      <span className="text-xs text-[var(--kawaii-brown)]/70">
                        {product.rating}
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <p className="text-lg md:text-xl font-bold text-[var(--kawaii-pink)] mb-0.5">
                    ฿{formatPriceCompact(product.price)}
                  </p>
                  <p className="text-xs text-[var(--kawaii-brown)]/70 mb-3">
                    ผ่อน ฿{formatPriceCompact(monthlyPrice)}/เดือน
                  </p>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() => onViewDetail(product.id)}
                      variant="secondary"
                      size="sm"
                      className="w-full text-xs"
                    >
                      ดูรายละเอียด
                    </Button>
                    <Button
                      onClick={onOpenLINE}
                      variant="default"
                      size="sm"
                      className="w-full text-xs"
                    >
                      เลือกผ่อนชำระ
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <Card className="mb-8 animate-slide-in-up">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              เปรียบเทียบคุณสมบัติ
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Price Row */}
            <div className="grid grid-cols-3 border-b border-[var(--kawaii-light-pink)]/20">
              <div className="p-3 md:p-4 font-medium text-sm text-[var(--kawaii-brown)] bg-[var(--kawaii-light-pink)]/10 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[var(--kawaii-pink)]" />
                ราคา
              </div>
              {([product1, product2] as const).map((product, i) => (
                <div
                  key={i}
                  className="p-3 md:p-4 text-center border-l border-[var(--kawaii-light-pink)]/20"
                >
                  {product ? (
                    <>
                      <p className="font-bold text-[var(--kawaii-pink)] text-sm md:text-base">
                        ฿{formatPriceCompact(product.price)}
                      </p>
                      <p className="text-[10px] md:text-xs text-[var(--kawaii-brown)]/60">
                        ดาวน์ ฿{formatPriceCompact(product.down)}
                      </p>
                    </>
                  ) : (
                    <span className="text-[var(--kawaii-brown)]/30">—</span>
                  )}
                </div>
              ))}
            </div>

            {/* Spec Rows */}
            {specRows.map((spec) => (
              <div
                key={spec.key}
                className="grid grid-cols-3 border-b border-[var(--kawaii-light-pink)]/20 last:border-b-0"
              >
                <div className="p-3 md:p-4 font-medium text-sm text-[var(--kawaii-brown)] bg-[var(--kawaii-light-pink)]/10 flex items-center gap-2">
                  <span style={{ color: spec.color }}>
                    <spec.icon className="w-4 h-4" />
                  </span>
                  <span className="hidden sm:inline">{spec.label}</span>
                  <span className="sm:hidden text-xs">{spec.label}</span>
                </div>
                {([product1, product2] as const).map((product, i) => (
                  <div
                    key={i}
                    className="p-3 md:p-4 text-center text-xs md:text-sm text-[var(--kawaii-brown)] border-l border-[var(--kawaii-light-pink)]/20"
                  >
                    {product?.specs[spec.key] ?? (
                      <span className="text-[var(--kawaii-brown)]/30">—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Connectivity (for iPads) */}
            {(product1?.specs.connectivity || product2?.specs.connectivity) && (
              <div className="grid grid-cols-3 border-b border-[var(--kawaii-light-pink)]/20">
                <div className="p-3 md:p-4 font-medium text-sm text-[var(--kawaii-brown)] bg-[var(--kawaii-light-pink)]/10 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[var(--kawaii-soft-purple)]" />
                  <span className="hidden sm:inline">การเชื่อมต่อ</span>
                  <span className="sm:hidden text-xs">เชื่อมต่อ</span>
                </div>
                {([product1, product2] as const).map((product, i) => (
                  <div
                    key={i}
                    className="p-3 md:p-4 text-center text-xs md:text-sm text-[var(--kawaii-brown)] border-l border-[var(--kawaii-light-pink)]/20"
                  >
                    {product?.specs.connectivity ?? (
                      <span className="text-[var(--kawaii-brown)]/30">—</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Features Comparison */}
        {(product1?.features || product2?.features) && (
          <Card className="mb-8 animate-slide-in-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                ฟีเจอร์พิเศษ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {([product1, product2] as const).map((product, i) => (
                  <div key={i}>
                    <h4 className="font-medium text-sm text-[var(--kawaii-brown)] mb-2">
                      {product?.name ?? "—"}
                    </h4>
                    {product?.features ? (
                      <ul className="space-y-1.5">
                        {product.features.map((feature, fi) => (
                          <li
                            key={fi}
                            className="flex items-center gap-1.5 text-xs text-[var(--kawaii-brown)]/80"
                          >
                            <Check className="w-3.5 h-3.5 text-[var(--kawaii-mint-green)] shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-[var(--kawaii-brown)]/40">
                        ไม่มีข้อมูล
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 inline-block shadow-kawaii-md">
            <Image
              src="/assets/toro-handle-phone.png"
              alt="Toro"
              width={56}
              height={56}
              className="w-14 h-14 object-contain mx-auto mb-3 animate-float"
            />
            <h4 className="text-lg font-bold text-[var(--kawaii-brown)] mb-1">
              พบสินค้าที่ใช่แล้ว?
            </h4>
            <p className="text-sm text-[var(--kawaii-brown)]/70 mb-4 max-w-sm">
              ทีม SHiBA พร้อมให้คำปรึกษาและช่วยเลือกแพ็กเกจที่เหมาะกับคุณ
            </p>
            <LineButton
              onClick={onOpenLINE}
              size="lg"
              label="ปรึกษาใน LINE"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompareSectionView;
