"use client";

import { useState, useMemo, useCallback } from "react";
import { allProducts, getGroupedProducts } from "@/data/products";
import type { Product, ProductGroup } from "@/data/products";

interface UseCompareReturn {
  // State
  isOpen: boolean;
  selectedIds: [string, string];
  selectedProducts: [Product | undefined, Product | undefined];
  availableProducts: Product[];
  groupedProducts: ProductGroup[];

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
  const comparableProducts = useMemo(
    () => allProducts.filter((p) => p.category !== "Combo set Apple Pencil"),
    []
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<[string, string]>([
    comparableProducts[0]?.id ?? "",
    comparableProducts[1]?.id ?? "",
  ]);

  const selectedProducts = useMemo<[Product | undefined, Product | undefined]>(
    () => [
      comparableProducts.find((p) => p.id === selectedIds[0]),
      comparableProducts.find((p) => p.id === selectedIds[1]),
    ],
    [comparableProducts, selectedIds]
  );

  const selectProduct = useCallback((index: 0 | 1, productId: string) => {
    setSelectedIds((prev) => {
      const next = [...prev] as [string, string];
      next[index] = productId;
      return next;
    });
  }, []);

  const groupedProducts = useMemo(
    () => getGroupedProducts().filter((g) => g.label !== "Combo set Apple Pencil"),
    []
  );

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    selectedIds,
    selectedProducts,
    availableProducts: comparableProducts,
    groupedProducts,
    open,
    close,
    selectProduct,
  };
}

export default useCompare;
