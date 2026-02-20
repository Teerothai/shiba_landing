import Image from "next/image";
import { Flame, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/lib/ui/card";
import { formatPriceCompact } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductCardViewProps {
  product: Product;
  onClick: (productId: string) => void;
}

export function ProductCardView({ product, onClick }: ProductCardViewProps) {
  const monthlyPrice = Math.floor(product.price / 24);

  return (
    <Card
      className="group cursor-pointer gsap-product-card gsap-hover-lift"
      onClick={() => onClick(product.id)}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-t-2xl bg-linear-to-br from-gray-50 to-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.hot && (
            <span className="bg-kawaii-pink text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <Flame className="w-3 h-3" />
              ฮิต
            </span>
          )}
          {product.new && (
            <span className="bg-kawaii-soft-purple text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              ใหม่
            </span>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <span className="text-xs text-(--kawaii-brown)/60 bg-(--kawaii-light-pink)/20 px-2 py-0.5 rounded-full">
          {product.category}
        </span>

        <h3 className="font-semibold text-kawaii-brown mt-2 mb-1 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-(--kawaii-brown)/60 mb-3">
          {product.specs.processor} • {product.specs.display}
        </p>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-(--kawaii-brown)/60">ราคาเต็ม</p>
            <p className="font-bold text-kawaii-brown">
              ฿{formatPriceCompact(product.price)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-kawaii-pink">เริ่มต้น/เดือน</p>
            <p className="font-bold text-kawaii-pink">
              ฿{formatPriceCompact(monthlyPrice)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
