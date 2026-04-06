"use client";

import Image from "next/image";
import {
  Smartphone,
  Tablet,
  Laptop,
  ShoppingCart,
  Gift,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/lib/ui/button";
import type { Product } from "@/data/products";
import { MASCOT } from "@/data/images";
import { ProductCardView } from "@/view/ProductCardView";

type SortOption = "popular" | "price-low" | "price-high" | "newest";

interface ProductsViewProps {
  products: Product[];
  selectedCategory: string;
  sortBy: SortOption;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: SortOption) => void;
  onPageChange: (page: number) => void;
  onProductClick: (productId: string) => void;
  onOpenLINE: () => void;
}

// Category filter options
const categories = [
  { id: "all", name: "ทั้งหมด", icon: ShoppingCart },
  { id: "iPhone", name: "iPhone", icon: Smartphone },
  { id: "iPad", name: "iPad", icon: Tablet },
  { id: "MacBook", name: "MacBook", icon: Laptop },
  { id: "android", name: "Android", icon: Smartphone },
  { id: "Combo set Apple Pencil", name: "Combo set", icon: Gift },
];

// Sort options
const sortOptions: { id: SortOption; label: string }[] = [
  { id: "popular", label: "ยอดนิยม" },
  { id: "newest", label: "ใหม่ล่าสุด" },
  { id: "price-low", label: "ราคาต่ำ → สูง" },
  { id: "price-high", label: "ราคาสูง → ต่ำ" },
];

/**
 * ProductsView - Product catalog section
 * Stateless presentation component
 */
export function ProductsView({
  products,
  selectedCategory,
  sortBy,
  currentPage,
  totalPages,
  totalProducts,
  onCategoryChange,
  onSortChange,
  onPageChange,
  onProductClick,
  onOpenLINE,
}: Readonly<ProductsViewProps>) {
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
                src={MASCOT.toroWithPhone}
                alt="Toro with phone"
                width={168}
                height={168}
                className="w-42 h-42 object-contain animate-float"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-kawaii-brown mb-3">
            สินค้าแนะนำ
          </h2>
          <p className="text-lg text-(--kawaii-brown)/80">
            iPhone, iPad, MacBook & Android คุณภาพ ราคาดี พร้อมแพ็กเกจผ่อนที่เหมาะกับคุณ
          </p>
        </div>

        {/* Category Filter - Dropdown on mobile, buttons on desktop */}
        <div className="mb-3">
          {/* Mobile dropdown */}
          <div className="md:hidden relative">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full appearance-none rounded-full bg-white/80 backdrop-blur-sm border-2 border-(--kawaii-pink)/20 px-5 py-3 pr-12 text-kawaii-brown font-medium text-base focus:outline-none focus:border-kawaii-pink transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-kawaii-pink pointer-events-none" />
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
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
        </div>

        {/* Sort Bar */}
        <div className="flex items-center justify-end gap-2 mb-6 mt-5">
          <ArrowUpDown className="w-4 h-4 text-(--kawaii-brown)/60" />
          <span className="text-sm text-(--kawaii-brown)/60 mr-1">
            เรียงตาม:
          </span>

          {/* Mobile dropdown */}
          <div className="md:hidden relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="appearance-none rounded-full bg-white/80 border border-(--kawaii-brown)/20 px-4 py-1.5 pr-8 text-xs font-medium text-kawaii-brown focus:outline-none focus:border-kawaii-pink transition-colors"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-(--kawaii-brown)/60 pointer-events-none" />
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-2">
            {sortOptions.map((opt) => (
              <Button
                key={opt.id}
                variant={sortBy === opt.id ? "default" : "ghost"}
                size="sm"
                rounded="full"
                onClick={() => onSortChange(opt.id)}
                className={`text-xs ${
                  sortBy === opt.id ? "" : "bg-white/60 hover:bg-white/80"
                }`}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {products.map((product) => (
            <ProductCardView
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4 mb-10">
            {/* Page info */}
            <p className="text-sm text-(--kawaii-brown)/70">
              หน้า {currentPage} / {totalPages} — แสดง{" "}
              <strong>{products.length}</strong> จาก{" "}
              <strong>{totalProducts}</strong> รายการ
            </p>

            {/* Pagination controls */}
            <div className="flex items-center gap-2">
              {/* Prev */}
              <Button
                variant="ghost"
                size="sm"
                rounded="full"
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="bg-white/60 hover:bg-white/80 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "ghost"}
                    size="sm"
                    rounded="full"
                    onClick={() => onPageChange(page)}
                    className={`min-w-9 h-9 ${
                      page === currentPage
                        ? ""
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                  >
                    {page}
                  </Button>
                ),
              )}

              {/* Next */}
              <Button
                variant="ghost"
                size="sm"
                rounded="full"
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="bg-white/60 hover:bg-white/80 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="gsap-product-cta bg-white/70 backdrop-blur-sm rounded-3xl p-6 inline-block shadow-kawaii-sm">
            <p className="text-kawaii-brown mb-4">
              สนใจสินค้า? สอบถามราคาพิเศษได้เลย
            </p>
            <Button onClick={onOpenLINE} variant="default" size="lg">
              สอบถามราคา & ผ่อนสินค้า
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsView;
