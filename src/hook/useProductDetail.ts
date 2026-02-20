"use client";

import { useState, useCallback } from "react";
import { allProducts } from "@/data/products";
import type { Product } from "@/data/products";

interface UseProductDetailReturn {
  isOpen: boolean;
  product: Product | null;
  selectedColorIndex: number;

  openProduct: (productId: string) => void;
  close: () => void;
  selectColor: (index: number) => void;
}

export function useProductDetail(): UseProductDetailReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const openProduct = useCallback((productId: string) => {
    const found = allProducts.find((p) => p.id === productId);
    if (found) {
      setProduct(found);
      setSelectedColorIndex(0);
      setIsOpen(true);
    }
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setProduct(null);
    setSelectedColorIndex(0);
  }, []);

  const selectColor = useCallback((index: number) => {
    setSelectedColorIndex(index);
  }, []);

  return {
    isOpen,
    product,
    selectedColorIndex,
    openProduct,
    close,
    selectColor,
  };
}

export default useProductDetail;
