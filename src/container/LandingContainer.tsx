"use client";

import { useCallback } from "react";
import { useProducts } from "@/hook/useProducts";
import { useScrollNav } from "@/hook/useScrollNav";
import { useProductDetail } from "@/hook/useProductDetail";
import { useCompare } from "@/hook/useCompare";
import { useGSAPAnimations } from "@/hook/useGSAPAnimations";
import { WaveDivider } from "@/lib/ui/wave-divider";
import { HeroView } from "@/view/HeroView";
import { ProductsView } from "@/view/ProductsView";
import { CompareSectionView } from "@/view/CompareSectionView";
import { PackagesView } from "@/view/PackagesView";
import { CommunityView } from "@/view/CommunityView";
import { ContactView } from "@/view/ContactView";
import { FooterView } from "@/view/FooterView";
import { HeaderContainer } from "./HeaderContainer";
import { BannerSliderContainer } from "./BannerSliderContainer";
import { ProductDetailContainer } from "./ProductDetailContainer";

/**
 * LandingContainer - Main landing page container
 * Orchestrates all Views and manages shared state/actions
 */
export function LandingContainer() {
  // Hooks
  const {
    paginatedProducts,
    packages,
    selectedCategory,
    setCategory,
    sortBy,
    setSortBy,
    currentPage,
    totalPages,
    setPage,
    filteredCount,
  } = useProducts();

  const { activeSection, scrollToSection } = useScrollNav();
  const productDetail = useProductDetail();
  const compare = useCompare();
  const gsapContainerRef = useGSAPAnimations();

  // LINE Chat handler
  const openLINEChat = useCallback(() => {
    window.open("https://line.me/R/ti/p/@shibaphone", "_blank");
  }, []);

  // Product click handler - opens product detail modal
  const handleProductClick = useCallback(
    (productId: string) => {
      productDetail.openProduct(productId);
    },
    [productDetail],
  );

  // Package selection handler
  const handleSelectPackage = useCallback(
    (packageId: string) => {
      console.log("Selected package:", packageId);
      openLINEChat();
    },
    [openLINEChat],
  );

  // Compare -> View Detail handler
  const handleCompareViewDetail = useCallback(
    (productId: string) => {
      productDetail.openProduct(productId);
    },
    [productDetail],
  );

  // Product Detail -> Compare handler
  const handleOpenCompare = useCallback(() => {
    scrollToSection("compare");
  }, [scrollToSection]);

  return (
    <div
      ref={gsapContainerRef}
      className="min-h-screen w-full scroll-smooth bg-background"
    >
      {/* Fixed Header */}
      <HeaderContainer
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenLINE={openLINEChat}
      />

      {/* Banner Slider - Top of page below header */}
      <BannerSliderContainer />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroView
          onOpenLINE={openLINEChat}
          onScrollToPackages={() => scrollToSection("packages")}
        />

        {/* Wave: Hero yellow → Products mint */}
        <WaveDivider topColor="#FFF32B" bottomColor="#5ddbba" variant={1} />

        {/* Products Section */}
        <ProductsView
          products={paginatedProducts}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          currentPage={currentPage}
          totalPages={totalPages}
          totalProducts={filteredCount}
          onCategoryChange={(cat) =>
            setCategory(
              cat as
                | "all"
                | "iPhone"
                | "iPad"
                | "android"
                | "Combo set Apple Pencil",
            )
          }
          onSortChange={setSortBy}
          onPageChange={setPage}
          onProductClick={handleProductClick}
          onOpenLINE={openLINEChat}
        />

        {/* Wave: Products mint → Compare purple-pink gradient */}
        <WaveDivider topColor="#5ddbba" bottomColor="#b2a5f2" variant={2} />

        {/* Compare Section - Below Products */}
        <CompareSectionView
          selectedProducts={compare.selectedProducts}
          selectedIds={compare.selectedIds}
          availableProducts={compare.availableProducts}
          groupedProducts={compare.groupedProducts}
          onSelectProduct={compare.selectProduct}
          onOpenLINE={openLINEChat}
          onViewDetail={handleCompareViewDetail}
        />

        {/* Wave: Compare pink → Packages gold */}
        <WaveDivider topColor="#b2a5f2" bottomColor="#f7c77c" variant={3} />

        {/* Packages Section */}
        <PackagesView
          packages={packages}
          onSelectPackage={handleSelectPackage}
          onOpenLINE={openLINEChat}
        />

        {/* Wave: Packages gold → Community light pink */}
        <WaveDivider topColor="#f7c77c" bottomColor="#fcb0ce" variant={4} />

        {/* Community Section */}
        <CommunityView onOpenLINE={openLINEChat} />

        {/* Wave: Community light pink → Contact purple */}
        <WaveDivider topColor="#fcb0ce" bottomColor="#b2a5f2" variant={1} />

        {/* Contact Section */}
        <ContactView onOpenLINE={openLINEChat} />

        {/* Wave: Contact purple → Footer brown */}
        <WaveDivider topColor="#b2a5f2" bottomColor="#643918" variant={2} />
      </main>

      {/* Footer */}
      <FooterView onOpenLINE={openLINEChat} onNavigate={scrollToSection} />

      {/* Product Detail Modal */}
      <ProductDetailContainer
        isOpen={productDetail.isOpen}
        product={productDetail.product}
        selectedColorIndex={productDetail.selectedColorIndex}
        onClose={productDetail.close}
        onOpenLINE={openLINEChat}
        onCompare={handleOpenCompare}
        onColorSelect={productDetail.selectColor}
      />
    </div>
  );
}

export default LandingContainer;
