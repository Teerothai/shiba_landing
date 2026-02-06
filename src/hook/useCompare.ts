"use client";

import { useState, useMemo, useCallback } from "react";
import { allProducts } from "@/data/products";
import type { Product } from "@/data/products";

interface UseCompareReturn {
  // State
  isOpen: boolean;
  selectedIds: [string, string];
  selectedProducts: [Product | undefined, Product | undefined];
  availableProducts: Product[];

  // Actions
  open: () => void;
  close: () => void;
  selectProduct: (index: 0 | 1, productId: string) => void;
}

/**
 * useCompare - Compare products hook
 * Manages modal state and product selection for comparison
 */
export function useCompare(): UseCompareReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<[string, string]>([
    allProducts[0]?.id ?? "",
    allProducts[1]?.id ?? "",
  ]);

  const selectedProducts = useMemo<[Product | undefined, Product | undefined]>(
    () => [
      allProducts.find((p) => p.id === selectedIds[0]),
      allProducts.find((p) => p.id === selectedIds[1]),
    ],
    [selectedIds]
  );

  const selectProduct = useCallback((index: 0 | 1, productId: string) => {
    setSelectedIds((prev) => {
      const next = [...prev] as [string, string];
      next[index] = productId;
      return next;
    });
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    selectedIds,
    selectedProducts,
    availableProducts: allProducts,
    open,
    close,
    selectProduct,
  };
}

export default useCompare;
