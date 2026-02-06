"use client";

type SectionId = "home" | "products" | "packages" | "community" | "contact";

interface ScrollNavigatorProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

// Section data
const sections: { id: SectionId; label: string }[] = [
  { id: "home", label: "หน้าแรก" },
  { id: "products", label: "สินค้า" },
  { id: "packages", label: "แพ็กเกจ" },
  { id: "community", label: "Community" },
  { id: "contact", label: "ติดต่อ" },
];

/**
 * ScrollNavigator - Fixed side navigation dots
 * Shows current section and allows quick navigation
 */
export function ScrollNavigator({
  activeSection,
  onNavigate,
}: ScrollNavigatorProps) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className="group relative flex items-center"
          aria-label={`Go to ${section.label}`}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-2 py-1 bg-[var(--kawaii-brown)] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section.label}
          </span>

          {/* Dot */}
          <span
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === section.id
                ? "bg-[var(--kawaii-pink)] scale-125 shadow-kawaii-sm"
                : "bg-[var(--kawaii-brown)]/30 hover:bg-[var(--kawaii-brown)]/50"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default ScrollNavigator;
