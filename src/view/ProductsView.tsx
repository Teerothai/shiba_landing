"use client";

import Image from "next/image";
import { Smartphone, Tablet, ShoppingCart, Flame, Sparkles } from "lucide-react";
import { Button } from "@/lib/ui/button";
import { Card, CardContent } from "@/lib/ui/card";
import { formatPriceCompact } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductsViewProps {
  products: Product[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onProductClick: (productId: string) => void;
  onOpenLINE: () => void;
}

// Category filter options
const categories = [
  { id: "all", name: "ทั้งหมด", icon: ShoppingCart },
  { id: "iPhone", name: "iPhone", icon: Smartphone },
  { id: "iPad", name: "iPad", icon: Tablet },
];

/**
 * ProductCard - Individual product display
 */
function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: (productId: string) => void;
  index: number;
}) {
  const monthlyPrice = Math.floor(product.price / 24);

  return (
    <Card
      className="group cursor-pointer gsap-product-card gsap-hover-lift"
      onClick={() => onClick(product.id)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.hot && (
            <span className="bg-[var(--kawaii-pink)] text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <Flame className="w-3 h-3" />
              ฮิต
            </span>
          )}
          {product.new && (
            <span className="bg-[var(--kawaii-soft-purple)] text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              ใหม่
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        {/* Category Badge */}
        <span className="text-xs text-[var(--kawaii-brown)]/60 bg-[var(--kawaii-light-pink)]/20 px-2 py-0.5 rounded-full">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="font-semibold text-[var(--kawaii-brown)] mt-2 mb-1 line-clamp-2">
          {product.name}
        </h3>

        {/* Specs Summary */}
        <p className="text-xs text-[var(--kawaii-brown)]/60 mb-3">
          {product.specs.storage} • {product.specs.processor}
        </p>

        {/* Pricing */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-[var(--kawaii-brown)]/60">ราคาเต็ม</p>
            <p className="text-lg font-bold text-[var(--kawaii-brown)]">
              ฿{formatPriceCompact(product.price)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[var(--kawaii-pink)]">เริ่มต้น/เดือน</p>
            <p className="text-lg font-bold text-[var(--kawaii-pink)]">
              ฿{formatPriceCompact(monthlyPrice)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * ProductsView - Product catalog section
 * Stateless presentation component
 */
export function ProductsView({
  products,
  selectedCategory,
  onCategoryChange,
  onProductClick,
  onOpenLINE,
}: ProductsViewProps) {
  return (
    <section
      id="products"
      className="min-h-screen py-20"
      style={{ backgroundColor: "var(--kawaii-mint-green)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 gsap-section-header">
          <div className="flex justify-center mb-4">
            <div className="relative gsap-section-mascot gsap-parallax-mascot">
              <Image
                src="/assets/toro-with-phone.png"
                alt="Toro with phone"
                width={168}
                height={168}
                className="w-42 h-42 object-contain animate-float"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--kawaii-brown)] mb-3">
            สินค้าแนะนำ
          </h2>
          <p className="text-lg text-[var(--kawaii-brown)]/80">
            iPhone & iPad คุณภาพ ราคาดี พร้อมแพ็กเกจผ่อนที่เหมาะกับคุณ
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "ghost"}
              size="lg"
              rounded="full"
              onClick={() => onCategoryChange(cat.id)}
              className={`gsap-filter-btn ${
                selectedCategory === cat.id
                  ? ""
                  : "bg-white/60 hover:bg-white/80"
              }`}
            >
              <cat.icon className="w-5 h-5" />
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {products.slice(0, 9).map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={onProductClick}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="gsap-product-cta bg-white/70 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-kawaii-sm">
            <p className="text-[var(--kawaii-brown)] mb-4">
              แสดง <strong>{Math.min(9, products.length)}</strong> จาก{" "}
              <strong>{products.length}</strong> รายการ
            </p>
            <Button onClick={onOpenLINE} variant="default" size="lg">
              ดูสินค้าทั้งหมด & สอบถามราคา
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsView;
