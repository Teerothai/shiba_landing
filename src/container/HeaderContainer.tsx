"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/lib/ui/button";

type SectionId = "home" | "products" | "packages" | "community" | "contact";

interface HeaderContainerProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onOpenLINE: () => void;
}

// Navigation items
const navItems: { key: SectionId; label: string }[] = [
  { key: "home", label: "หน้าแรก" },
  { key: "products", label: "สินค้า" },
  { key: "packages", label: "แพ็กเกจ" },
  { key: "community", label: "Community" },
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
    <header className="fixed top-0 left-0 right-0 z-50 kawaii-glass border-b-2 border-[var(--kawaii-light-pink)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <div className="relative">
              <Image
                src="/assets/toro-face.png"
                alt="Toro mascot"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[var(--kawaii-pink)] rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[var(--kawaii-brown)]">
                ชิบะโฟน
              </h1>
              <p className="text-xs text-[var(--kawaii-brown)]/70 hidden sm:block">
                ผ่อนง่าย สบายใจ มีชิบะคอยดูแล
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigate(item.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-[var(--kawaii-light-pink)]/20 ${
                  activeSection === item.key
                    ? "text-[var(--kawaii-pink)] bg-[var(--kawaii-light-pink)]/10"
                    : "text-[var(--kawaii-brown)]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Button
              onClick={onOpenLINE}
              variant="line"
              size="default"
              rounded="full"
              className="hidden sm:flex"
            >
              <MessageCircle className="w-4 h-4" />
              ทักไลน์เลย
            </Button>

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
          <div className="lg:hidden py-4 border-t border-[var(--kawaii-light-pink)]/20 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigate(item.key)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all ${
                    activeSection === item.key
                      ? "text-[var(--kawaii-pink)] bg-[var(--kawaii-light-pink)]/10"
                      : "text-[var(--kawaii-brown)] hover:bg-[var(--kawaii-light-pink)]/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-4 px-4">
              <Button
                onClick={onOpenLINE}
                variant="line"
                size="lg"
                rounded="full"
                className="w-full"
              >
                <MessageCircle className="w-5 h-5" />
                ทักไลน์เลย
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderContainer;
