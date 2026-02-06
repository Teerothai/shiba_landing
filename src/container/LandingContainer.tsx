"use client";

import { useCallback } from "react";
import { useProducts } from "@/hook/useProducts";
import { useScrollNav } from "@/hook/useScrollNav";
import { HeroView } from "@/view/HeroView";
import { ProductsView } from "@/view/ProductsView";
import { PackagesView } from "@/view/PackagesView";
import { CommunityView } from "@/view/CommunityView";
import { ContactView } from "@/view/ContactView";
import { HeaderContainer } from "./HeaderContainer";
import { BannerSliderContainer } from "./BannerSliderContainer";
import { ScrollNavigator } from "./ScrollNavigator";

/**
 * LandingContainer - Main landing page container
 * Orchestrates all Views and manages shared state/actions
 */
export function LandingContainer() {
  // Hooks
  const {
    filteredProducts,
    packages,
    selectedCategory,
    setCategory,
  } = useProducts();

  const { activeSection, scrollToSection } = useScrollNav();

  // LINE Chat handler
  const openLINEChat = useCallback(() => {
    window.open("https://line.me/R/ti/p/@shibaphone", "_blank");
  }, []);

  // Product click handler - opens LINE chat for product inquiries
  const handleProductClick = useCallback(() => {
    openLINEChat();
  }, [openLINEChat]);

  // Package selection handler
  const handleSelectPackage = useCallback((packageId: string) => {
    console.log("Selected package:", packageId);
    openLINEChat();
  }, [openLINEChat]);

  return (
    <div className="min-h-screen w-full scroll-smooth bg-[var(--background)]">
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

        {/* Products Section */}
        <ProductsView
          products={filteredProducts}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setCategory(cat as "all" | "iPhone" | "iPad")}
          onProductClick={handleProductClick}
          onOpenLINE={openLINEChat}
        />

        {/* Packages Section */}
        <PackagesView
          packages={packages}
          onSelectPackage={handleSelectPackage}
          onOpenLINE={openLINEChat}
        />

        {/* Community Section */}
        <CommunityView onOpenLINE={openLINEChat} />

        {/* Contact Section */}
        <ContactView onOpenLINE={openLINEChat} />
      </main>

      {/* Scroll Navigator */}
      <ScrollNavigator
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
    </div>
  );
}

export default LandingContainer;
