"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";
import { LOGO } from "@/data/images";

type SectionId = "home" | "products" | "compare" | "packages" | "community" | "contact";

interface HeaderContainerProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onOpenLINE: () => void;
}

// Navigation items
const navItems: { key: SectionId; label: string }[] = [
  { key: "home", label: "หน้าแรก" },
  { key: "products", label: "สินค้า" },
  { key: "compare", label: "เทียบรุ่น" },
  { key: "packages", label: "แพ็กเกจ" },
  { key: "community", label: "รีวิวชิบะโฟน" },
  { key: "contact", label: "ติดต่อ" },
];

/**
 * HeaderContainer - Fixed navigation header
 * Manages mobile menu state and navigation
 */
export function HeaderContainer({
  activeSection,
  onNavigate,
  onOpenLINE,
}: HeaderContainerProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = useCallback(
    (sectionId: SectionId) => {
      onNavigate(sectionId);
      setMobileMenuOpen(false);
    },
    [onNavigate]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 kawaii-glass border-b-2 border-kawaii-light-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <Image
              src={LOGO.logo_landscape}
              alt="ชิบะโฟน logo"
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigate(item.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-kawaii-light-pink/20 ${
                  activeSection === item.key
                    ? "text-kawaii-pink bg-kawaii-light-pink/10"
                    : "text-kawaii-brown"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <LineButton
              onClick={onOpenLINE}
              size="default"
              className="hidden sm:flex"
            />

            {/* Mobile Menu Toggle */}
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-kawaii-light-pink/20 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigate(item.key)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all ${
                    activeSection === item.key
                      ? "text-kawaii-pink bg-kawaii-light-pink/10"
                      : "text-kawaii-brown hover:bg-kawaii-light-pink/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-4 px-4">
              <LineButton
                onClick={onOpenLINE}
                size="lg"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderContainer;
