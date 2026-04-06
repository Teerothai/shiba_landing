/**
 * Centralized Image Registry
 *
 * ============================================================
 * ไฟล์นี้เป็น "source of truth" ของรูปทั้งหมดในโปรเจกต์
 * เวลาจะเปลี่ยน path หรือรูปภาพ — แก้ที่ไฟล์นี้ไฟล์เดียว
 * ============================================================
 *
 * SSG: ทุกค่าเป็น string constant → resolve ตอน build time
 */

const B = "/assets/images";

// ============================================================
// Logo
// ============================================================

export const LOGO = {
  /** Logo */
  logo_landscape: `${B}/logo_landscape.png`,
  logo_portrait: `${B}/logo_portrait.png`,
  logo_no_word: `${B}/logo_no_word.png`,
  logo_footer: `${B}/logo_footer.jpg`,
} as const;

// ============================================================
// Mascot Images — ตัว Toro
// ============================================================

export const MASCOT = {
  /** Toro ถือมือถือ — ใช้ใน Hero (256px), Products, Packages, Community (168px) */
  toroWithPhone: `${B}/toroWithPhone.png`,

  /** หน้า Toro — ใช้ใน Header (32px), Footer (48px), Compare (168px), ProductDetail (36px) */
  toroFace: "/assets/toro-face.png",

  /** Toro ถือโทรศัพท์ (ท่ายืน) — ใช้ใน Compare CTA, Contact (168px) */
  toroHandlePhone: `${B}/toroHandlePhone.png`,
} as const;

// ============================================================
// Background Images
// ============================================================

export const BACKGROUND = {
  /** Hero section background — เต็มจอ, มีตัวอักษรซ้อนทับ */
  hero: `${B}/hero.png`,
} as const;

// ============================================================
// Package Card Images — รูปพื้นหลังการ์ดแพ็กเกจ
// ============================================================

export const PACKAGE_CARD = {
  puppy: `${B}/puppy.png`,
  plus: `${B}/plus.png`,
  promax: `${B}/promax.png`,
  ultra: `${B}/ultra.png`,
} as const;

export const PACKAGE_BADGE = {
  /** Like badge สำหรับ Ultra */
  like: `${B}/like.png`,
} as const;

// ============================================================
// Promotion Badge Images — ป้ายโปรโมชั่น
// ============================================================

export const PROMOTION = {
  puppy: `${B}/promotion_puppy.png`,
  plus: `${B}/promotion_plus.png`,
  promax: `${B}/promotion_promax.png`,
  ultra: `${B}/promotion_ultra.png`,
} as const;

// ============================================================
// Banner Images — สไลด์หน้าแรก
// ============================================================

export const BANNER = {
  slide1: `${B}/slide1.jpg`,
  slide2: `${B}/slide2.jpg`,
  slide1Mobile: `${B}/slide1Mobile.png`,
  slide2Mobile: `${B}/slide2Mobile.png`,
} as const;

// ============================================================
// Feature Images — จุดเด่น 4 ข้อ (Hero Section)
// ============================================================

export const FEATURE = {
  startWith50Thb: `${B}/startWith50Thb.png`,
  idCard: `${B}/idCard.png`,
  checkStatus: `${B}/checkStatus.png`,
  authentic: `${B}/authentic.png`,
} as const;

// ============================================================
// Lookup Maps — ใช้ใน dynamic rendering (key = package id)
// ============================================================

/** Package card image by package id */
export const packageImageMap: Record<string, string> = {
  puppy: PACKAGE_CARD.puppy,
  plus: PACKAGE_CARD.plus,
  promax: PACKAGE_CARD.promax,
  ultra: PACKAGE_CARD.ultra,
};

/** Promotion badge image by package id */
export const promotionImageMap: Record<string, string> = {
  puppy: PROMOTION.puppy,
  plus: PROMOTION.plus,
  promax: PROMOTION.promax,
  ultra: PROMOTION.ultra,
};

