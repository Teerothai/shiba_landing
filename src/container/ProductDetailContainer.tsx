"use client";

import { ProductDetailView } from "@/view/ProductDetailView";
import type { Product } from "@/data/products";

interface ProductDetailContainerProps {
  isOpen: boolean;
  product: Product | null;
  selectedColorIndex: number;
  onClose: () => void;
  onOpenLINE: () => void;
  onCompare: () => void;
  onColorSelect: (index: number) => void;
}

export function ProductDetailContainer({
  isOpen,
  product,
  selectedColorIndex,
  onClose,
  onOpenLINE,
  onCompare,
  onColorSelect,
}: ProductDetailContainerProps) {
  if (!isOpen || !product) return null;

  return (
    <ProductDetailView
      product={product}
      selectedColorIndex={selectedColorIndex}
      onClose={onClose}
      onOpenLINE={onOpenLINE}
      onColorSelect={onColorSelect}
      onCompare={() => {
        onClose();
        onCompare();
      }}
    />
  );
}

export default ProductDetailContainer;
