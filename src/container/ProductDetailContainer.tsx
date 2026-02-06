"use client";

import { ProductDetailView } from "@/view/ProductDetailView";
import type { Product } from "@/data/products";

interface ProductDetailContainerProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onOpenLINE: () => void;
  onCompare: () => void;
}

/**
 * ProductDetailContainer - Manages product detail modal
 * Bridges product data with ProductDetailView
 */
export function ProductDetailContainer({
  isOpen,
  product,
  onClose,
  onOpenLINE,
  onCompare,
}: ProductDetailContainerProps) {
  if (!isOpen || !product) return null;

  return (
    <ProductDetailView
      product={product}
      onClose={onClose}
      onOpenLINE={onOpenLINE}
      onCompare={() => {
        onClose();
        onCompare();
      }}
    />
  );
}

export default ProductDetailContainer;
