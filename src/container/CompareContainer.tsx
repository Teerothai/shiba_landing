"use client";

import { useCompare } from "@/hook/useCompare";
import { CompareView } from "@/view/CompareView";

interface CompareContainerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLINE: () => void;
  onViewDetail: (productId: string) => void;
}

/**
 * CompareContainer - Manages compare modal state
 * Bridges useCompare hook with CompareView
 */
export function CompareContainer({
  isOpen,
  onClose,
  onOpenLINE,
  onViewDetail,
}: CompareContainerProps) {
  const { selectedIds, selectedProducts, availableProducts, selectProduct } =
    useCompare();

  if (!isOpen) return null;

  return (
    <CompareView
      selectedProducts={selectedProducts}
      selectedIds={selectedIds}
      availableProducts={availableProducts}
      onSelectProduct={selectProduct}
      onClose={onClose}
      onOpenLINE={onOpenLINE}
      onViewDetail={(productId) => {
        onClose();
        onViewDetail(productId);
      }}
    />
  );
}

export default CompareContainer;
