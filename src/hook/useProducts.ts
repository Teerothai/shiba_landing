"use client";

import { useState, useMemo, useCallback } from "react";
import { allProducts, packages } from "@/data/products";
import type { Product, Package } from "@/data/products";

type CategoryFilter =
  | "all"
  | "iPhone"
  | "iPad"
  | "MacBook"
  | "android"
  | "Combo set Apple Pencil";
type SortOption = "popular" | "price-low" | "price-high" | "newest";

const ITEMS_PER_PAGE = 6;

interface UseProductsReturn {
  // Data
  products: Product[];
  filteredProducts: Product[];
  paginatedProducts: Product[];
  packages: Package[];

  // Filter state
  selectedCategory: CategoryFilter;
  sortBy: SortOption;

  // Pagination state
  currentPage: number;
  totalPages: number;

  // Actions
  setCategory: (category: CategoryFilter) => void;
  setSortBy: (sort: SortOption) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;

  // Helpers
  getProductById: (id: string) => Product | undefined;
  productCount: number;
  filteredCount: number;
}

/**
 * useProducts - Product data, filtering, and pagination hook
 * Encapsulates all product-related state and logic
 */
export function useProducts(): UseProductsReturn {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [currentPage, setCurrentPage] = useState(1);

  // Memoized filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest": {
        // ใหม่สุด→เก่าสุด โดยคงลำดับ iPhone → iPad → MacBook → Android → Combo
        const categoryOrder: Record<string, number> = {
          iPhone: 0,
          iPad: 1,
          MacBook: 2,
          android: 3,
          "Combo set Apple Pencil": 4,
        };
        const originalIdx = new Map(allProducts.map((p, i) => [p.id, i]));
        result.sort((a, b) => {
          const catDiff = (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99);
          if (catDiff !== 0) return catDiff;
          // ภายในกลุ่มเดียวกัน เรียงจากใหม่→เก่า (reverse index)
          return (originalIdx.get(b.id) ?? 0) - (originalIdx.get(a.id) ?? 0);
        });
        break;
      }
      case "popular":
      default:
        // hot products first, then the rest in original order
        result.sort((a, b) => {
          if (a.hot && !b.hot) return -1;
          if (!a.hot && b.hot) return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Actions
  const setCategory = useCallback((category: CategoryFilter) => {
    setSelectedCategory(category);
    setCurrentPage(1); // reset to page 1 on category change
  }, []);

  const setPage = useCallback(
    (page: number) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    },
    [totalPages]
  );

  const handleSetSortBy = useCallback((sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1); // reset to page 1 on sort change
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedCategory("all");
    setSortBy("popular");
    setCurrentPage(1);
  }, []);

  // Helper to get product by ID
  const getProductById = useCallback((id: string): Product | undefined => {
    return allProducts.find((p) => p.id === id);
  }, []);

  return {
    products: allProducts,
    filteredProducts,
    paginatedProducts,
    packages,
    selectedCategory,
    sortBy,
    currentPage,
    totalPages,
    setCategory,
    setSortBy: handleSetSortBy,
    setPage,
    resetFilters,
    getProductById,
    productCount: allProducts.length,
    filteredCount: filteredProducts.length,
  };
}

export default useProducts;
