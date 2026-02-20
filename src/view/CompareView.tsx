"use client";

import Image from "next/image";
import {
  X,
  Smartphone,
  Cpu,
  Camera,
  HardDrive,
  Monitor,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { formatPriceCompact } from "@/lib/utils";
import type { Product, ProductGroup } from "@/data/products";
import { MASCOT } from "@/data/images";

interface CompareViewProps {
  selectedProducts: [Product | undefined, Product | undefined];
  selectedIds: [string, string];
  availableProducts: Product[];
  groupedProducts: ProductGroup[];
  onSelectProduct: (index: 0 | 1, productId: string) => void;
  onClose: () => void;
  onOpenLINE: () => void;
  onViewDetail: (productId: string) => void;
}

// Spec comparison rows (non-array specs)
const specRows: {
  label: string;
  key: keyof Product["specs"];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}[] = [
  { label: "ชิประมวลผล", key: "processor", icon: Cpu, color: "var(--kawaii-pink)" },
  { label: "หน้าจอ", key: "display", icon: Monitor, color: "var(--kawaii-soft-purple)" },
  { label: "กล้อง", key: "camera", icon: Camera, color: "var(--kawaii-mint-green)" },
];

/**
 * CompareView - Product comparison modal UI
 * Stateless presentation component
 */
export function CompareView({
  selectedProducts,
  selectedIds,
  groupedProducts,
  onSelectProduct,
  onClose,
  onOpenLINE,
  onViewDetail,
}: CompareViewProps) {
  const [product1, product2] = selectedProducts;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Image
                src={MASCOT.toroFace}
                alt="Toro mascot"
                width={40}
                height={40}
                className="w-10 h-10 object-contain animate-bounce-soft"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">
                  เปรียบเทียบสินค้า
                </h2>
                <p className="text-sm text-white/70">
                  เลือก 2 รุ่นเพื่อดูข้อมูลเปรียบเทียบ
                </p>
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Product Selectors */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {([0, 1] as const).map((index) => (
                  <div key={index}>
                    <label className="text-xs font-medium text-(--kawaii-brown)/70 mb-1 block">
                      สินค้า {index + 1}
                    </label>
                    <select
                      value={selectedIds[index]}
                      onChange={(e) => onSelectProduct(index, e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border-2 border-(--kawaii-light-pink)/30 bg-white text-kawaii-brown text-sm focus:border-kawaii-pink focus:outline-none transition-colors appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236c4200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        paddingRight: "36px",
                      }}
                    >
                      {groupedProducts.map((group) => (
                        <optgroup key={group.label} label={group.label}>
                          {group.products.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} — ฿{formatPriceCompact(p.price)}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Product Overview Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {([product1, product2] as const).map((product) => {
              if (!product) return null;
              const monthlyPrice = Math.floor(product.price / 24);
              return (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="p-4 text-center">
                    {/* Image */}
                    <div className="relative mb-3">
                      <div className="relative w-28 h-28 mx-auto">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-2xl"
                          sizes="112px"
                        />
                      </div>
                      {/* Badges */}
                      <div className="absolute top-0 left-0 flex gap-1">
                        {product.hot && (
                          <span className="bg-kawaii-pink text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                            ฮิต
                          </span>
                        )}
                        {product.new && (
                          <span className="bg-kawaii-soft-purple text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">
                            ใหม่
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="font-semibold text-kawaii-brown text-sm mb-1">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <p className="text-xl font-bold text-kawaii-pink mb-0.5">
                      ฿{formatPriceCompact(product.price)}
                    </p>
                    <p className="text-xs text-(--kawaii-brown)/70 mb-3">
                      ฿{formatPriceCompact(monthlyPrice)}/เดือน
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
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                เปรียบเทียบคุณสมบัติ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Price Row */}
              <div className="grid grid-cols-3 border-b border-(--kawaii-light-pink)/20">
                <div className="p-3 font-medium text-sm text-kawaii-brown bg-(--kawaii-light-pink)/10 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-kawaii-pink" />
                  ราคา
                </div>
                {([product1, product2] as const).map((product, i) => (
                  <div
                    key={i}
                    className="p-3 text-center border-l border-(--kawaii-light-pink)/20"
                  >
                    {product ? (
                      <>
                        <p className="font-bold text-kawaii-pink">
                          ฿{formatPriceCompact(product.price)}
                        </p>
                        <p className="text-xs text-(--kawaii-brown)/60">
                          ดาวน์ ฿{formatPriceCompact(product.down)}
                        </p>
                      </>
                    ) : (
                      <span className="text-kawaii-brown-30">—</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Storage Row */}
              <div className="grid grid-cols-3 border-b border-(--kawaii-light-pink)/20">
                <div className="p-3 font-medium text-sm text-kawaii-brown bg-(--kawaii-light-pink)/10 flex items-center gap-2">
                  <span style={{ color: "var(--kawaii-gold)" }}>
                    <HardDrive className="w-4 h-4" />
                  </span>
                  ความจุ
                </div>
                {([product1, product2] as const).map((product, i) => (
                  <div
                    key={i}
                    className="p-3 text-center border-l border-(--kawaii-light-pink)/20"
                  >
                    {product ? (
                      <span className="text-sm text-kawaii-brown">
                        {product.specs.storage.join(", ")}
                      </span>
                    ) : (
                      <span className="text-kawaii-brown-30">—</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Spec Rows */}
              {specRows.map((spec) => (
                <div
                  key={spec.key}
                  className="grid grid-cols-3 border-b border-(--kawaii-light-pink)/20 last:border-b-0"
                >
                  <div className="p-3 font-medium text-sm text-kawaii-brown bg-(--kawaii-light-pink)/10 flex items-center gap-2">
                    <span style={{ color: spec.color }}>
                      <spec.icon className="w-4 h-4" />
                    </span>
                    {spec.label}
                  </div>
                  {([product1, product2] as const).map((product, i) => (
                    <div
                      key={i}
                      className="p-3 text-center text-sm text-kawaii-brown border-l border-(--kawaii-light-pink)/20"
                    >
                      {product?.specs[spec.key] ?? (
                        <span className="text-kawaii-brown-30">—</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Connectivity (for iPads) */}
              {(product1?.specs.connectivity || product2?.specs.connectivity) && (
                <div className="grid grid-cols-3 border-b border-(--kawaii-light-pink)/20">
                  <div className="p-3 font-medium text-sm text-kawaii-brown bg-(--kawaii-light-pink)/10 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-kawaii-soft-purple" />
                    การเชื่อมต่อ
                  </div>
                  {([product1, product2] as const).map((product, i) => (
                    <div
                      key={i}
                      className="p-3 text-center text-sm text-kawaii-brown border-l border-(--kawaii-light-pink)/20"
                    >
                      {product?.specs.connectivity ?? (
                        <span className="text-kawaii-brown-30">—</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features Comparison */}
          {(product1?.features || product2?.features) && (
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  ฟีเจอร์พิเศษ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {([product1, product2] as const).map((product, i) => (
                    <div key={i}>
                      <h4 className="font-medium text-sm text-kawaii-brown mb-2">
                        {product?.name ?? "—"}
                      </h4>
                      {product?.features ? (
                        <ul className="space-y-1.5">
                          {product.features.map((feature, fi) => (
                            <li
                              key={fi}
                              className="flex items-center gap-1.5 text-xs text-(--kawaii-brown)/80"
                            >
                              <Check className="w-3.5 h-3.5 text-kawaii-mint-green shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-kawaii-brown-40">
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
          <Card>
            <CardContent className="p-6 text-center">
              <Image
                src={MASCOT.toroHandlePhone}
                alt="Toro"
                width={64}
                height={64}
                className="w-16 h-16 object-contain mx-auto mb-3 animate-float"
              />
              <h4 className="text-lg font-bold text-kawaii-brown mb-1">
                พบสินค้าที่ใช่แล้ว?
              </h4>
              <p className="text-sm text-(--kawaii-brown)/70 mb-4">
                ทีม SHiBA พร้อมให้คำปรึกษาและช่วยเลือกแพ็กเกจที่เหมาะกับคุณ
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <LineButton
                  onClick={onOpenLINE}
                  size="lg"
                  label="ปรึกษาใน LINE"
                />
                <Button
                  onClick={onClose}
                  variant="secondary"
                  size="lg"
                  rounded="full"
                >
                  กลับหน้าหลัก
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CompareView;
