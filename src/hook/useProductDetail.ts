"use client";

import { useState, useCallback } from "react";
import { allProducts } from "@/data/products";
import type { Product } from "@/data/products";

interface UseProductDetailReturn {
  // State
  isOpen: boolean;
  product: Product | null;
  selectedImageIndex: number;

  // Actions
  openProduct: (productId: string) => void;
  close: () => void;
  setImageIndex: (index: number) => void;
}

/**
 * useProductDetail - Product detail modal hook
 * Manages modal state and selected product
 */
export function useProductDetail(): UseProductDetailReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openProduct = useCallback((productId: string) => {
    const found = allProducts.find((p) => p.id === productId);
    if (found) {
      setProduct(found);
      setSelectedImageIndex(0);
      setIsOpen(true);
    }
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setProduct(null);
    setSelectedImageIndex(0);
  }, []);

  const setImageIndex = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  return {
    isOpen,
    product,
    selectedImageIndex,
    openProduct,
    close,
    setImageIndex,
  };
}

export default useProductDetail;
