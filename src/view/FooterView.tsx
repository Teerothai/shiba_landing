"use client";

import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { LineButton } from "@/lib/ui/line-button";
import { MASCOT } from "@/data/images";

type SectionId =
  | "home"
  | "products"
  | "compare"
  | "packages"
  | "community"
  | "contact";

interface FooterViewProps {
  onOpenLINE: () => void;
  onNavigate: (sectionId: SectionId) => void;
}

const footerLinks: { key: SectionId; label: string }[] = [
  { key: "home", label: "หน้าแรก" },
  { key: "products", label: "สินค้า" },
  { key: "compare", label: "เทียบรุ่น" },
  { key: "packages", label: "แพ็กเกจ" },
  { key: "community", label: "Community" },
  { key: "contact", label: "ติดต่อเรา" },
];

/**
 * FooterView - Site footer with links, contact info, and branding
 * Stateless presentation component
 */
export function FooterView({ onOpenLINE, onNavigate }: FooterViewProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kawaii-brown text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 gsap-footer-col">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={MASCOT.toroFace}
                alt="Toro mascot"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">ชิบะโฟน</h3>
                <p className="text-xs text-white/60">SHiBA Phone</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              ผ่อนมือถือให้ง่าย สบายใจ มีน้องชิบะอยู่เคียงข้าง
              ระบบผ่อนที่โปร่งใส เข้าใจง่าย เริ่มต้นวันละ 50 บาท
            </p>
            <LineButton onClick={onOpenLINE} size="default" />
          </div>

          {/* Quick Links */}
          <div className="gsap-footer-col">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              เมนู
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => onNavigate(link.key)}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="gsap-footer-col">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              ติดต่อเรา
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-kawaii-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">064-771-2246</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-kawaii-mint-green mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  เปิดบริการ 09:00 - 18:00 น. (ทุกวัน)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-kawaii-pink mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/LkvGvmDfNRNhW6979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  บริษัท ชิบะ โฟน จำกัด
                  <br />
                  แขวงคลองต้นไทร คลองสาน
                  <br />
                  กรุงเทพมหานคร 10600
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Trust */}
          <div className="gsap-footer-col">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              ทำไมต้องเลือกเรา
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-base">✅</span>
                ผ่อนเริ่มต้น วันละ 50บาท
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-base">✅</span>
                ไม่มีเครดิตก็ผ่อนได้ ใช้บัตรประชาชนใบเดียว
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-base">✅</span>
                สินค้าแท้ ประกันศูนย์ มีบริการหลังการขาย
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-base">✅</span>
                มีระบบตรวจสอบสถานะ และ มีทีมช่วยแนะนำส่วนตัว 24 ชั่วโมง
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/50">
              &copy; {currentYear} บริษัท ชิบะ โฟน จำกัด. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-white/50">
              <span>Made with</span>
              <span className="text-kawaii-pink animate-pulse">♥</span>
              <span>by SHiBA Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterView;
