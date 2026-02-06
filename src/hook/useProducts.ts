"use client";

import { useState, useMemo, useCallback } from "react";
import { allProducts, packages } from "@/data/products";
import type { Product, Package } from "@/data/products";

type CategoryFilter = "all" | "iPhone" | "iPad";
type SortOption = "popular" | "price-low" | "price-high" | "newest";

interface UseProductsReturn {
  // Data
  products: Product[];
  filteredProducts: Product[];
  packages: Package[];
  
  // Filter state
  selectedCategory: CategoryFilter;
  sortBy: SortOption;
  
  // Actions
  setCategory: (category: CategoryFilter) => void;
  setSortBy: (sort: SortOption) => void;
  resetFilters: () => void;
  
  // Helpers
  getProductById: (id: string) => Product | undefined;
  productCount: number;
  filteredCount: number;
}

/**
 * useProducts - Product data and filtering hook
 * Encapsulates all product-related state and logic
 */
export function useProducts(): UseProductsReturn {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("popular");

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
      case "newest":
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      case "popular":
      default:
        result.sort((a, b) => (b.hot ? 1 : 0) - (a.hot ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategory, sortBy]);

  // Actions
  const setCategory = useCallback((category: CategoryFilter) => {
    setSelectedCategory(category);
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedCategory("all");
    setSortBy("popular");
  }, []);

  // Helper to get product by ID
  const getProductById = useCallback((id: string): Product | undefined => {
    return allProducts.find((p) => p.id === id);
  }, []);

  return {
    products: allProducts,
    filteredProducts,
    packages,
    selectedCategory,
    sortBy,
    setCategory,
    setSortBy,
    resetFilters,
    getProductById,
    productCount: allProducts.length,
    filteredCount: filteredProducts.length,
  };
}

export default useProducts;
