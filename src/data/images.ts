/**
 * Centralized Image Registry — Cloudinary CDN
 *
 * ============================================================
 * ไฟล์นี้เป็น "source of truth" ของรูปทั้งหมดในโปรเจกต์
 * เวลาจะเปลี่ยน path หรือย้ายไป CDN — แก้ที่ไฟล์นี้ไฟล์เดียว
 * ============================================================
 *
 * SSG: ทุกค่าเป็น string constant → resolve ตอน build time
 *
 * Cloudinary Quality Levels:
 *   q_auto:good  = default (~80%) — สำหรับรูปที่ต้องชัด
 *   q_auto:low   = eco (~60%) — สำหรับรูปทั่วไป ประหยัดกว่า
 *   q_auto:low   = low (~40%) — สำหรับ background ที่มีเนื้อหาซ้อนทับ
 *   q_XX         = กำหนดเอง (เช่น q_50)
 */

const C = "https://res.cloudinary.com/db7aaytcs/image/upload";

// ============================================================
// Mascot Images — ตัว Toro
// ============================================================

export const MASCOT = {
  /** Toro ถือมือถือ — ใช้ใน Hero (256px), Products, Packages, Community (168px) */
  toroWithPhone: `${C}/f_auto,q_auto:low,w_512/v1771064868/toro-with-phone_zkyaiv.png`,

  /** หน้า Toro — ใช้ใน Header (32px), Footer (48px), Compare (168px), ProductDetail (36px) */
  toroFace: "/assets/toro-face.png",

  /** Toro ถือโทรศัพท์ (ท่ายืน) — ใช้ใน Compare CTA, Contact (168px) */
  toroHandlePhone: `${C}/f_auto,q_auto:low,w_336/v1771064867/toro-handle-phone_b6spwl.png`,
} as const;

// ============================================================
// Background Images
// q_auto:low + w_1440 เพราะอยู่หลังเนื้อหา ไม่ต้องคมมาก
// ============================================================

export const BACKGROUND = {
  /** Hero section background — เต็มจอ, มีตัวอักษรซ้อนทับ → q_auto:low ลดได้เยอะ */
  hero: `${C}/f_auto,q_auto:low,w_1440/v1771092255/20250605-151005_1_uqtljh.png`,
} as const;

// ============================================================
// Package Card Images — รูปพื้นหลังการ์ดแพ็กเกจ
// แสดงที่ 180-240px → w_480 (2x Retina)
// ============================================================

export const PACKAGE_CARD = {
  puppy: `${C}/f_auto,q_auto:low,w_480/v1771064651/shiba-puppy_zqshvw.png`,
  plus: `${C}/f_auto,q_auto:low,w_480/v1771064651/shiba-plus_urr2ot.png`,
  promax: `${C}/f_auto,q_auto:low,w_480/v1771064652/shiba-pro-max_a2fiqb.png`,
} as const;

export const PACKAGE_BADGE = {
  /** Like badge สำหรับ Pro Max — แสดงที่ 52px → w_104 */
  like: `${C}/f_auto,q_auto:low,w_104/v1771064651/like_yz7zkp.png`,
} as const;

// ============================================================
// Promotion Badge Images — ป้ายโปรโมชั่น
// แสดงที่ 120-180px → w_360 (2x Retina)
// ============================================================

export const PROMOTION = {
  puppy: `${C}/f_auto,q_auto:low,w_360/v1771064829/promotion-50-thb_slcy8r.png`,
  plus: `${C}/f_auto,q_auto:low,w_360/v1771064830/promotion-100-thb_hhnb7r.png`,
  promax: `${C}/f_auto,q_auto:low,w_360/v1771064831/promotion-350-thb_nbj83k.png`,
} as const;

// ============================================================
// Banner Images — สไลด์หน้าแรก
// ============================================================

export const BANNER = {
  slide1: `${C}/f_auto,q_auto:low,w_1920/v1771325073/Banner1_ihgrx3.png`,
  slide2: `${C}/f_auto,q_auto:low,w_1920/v1771325073/Banner2_o0srn4.png`,
} as const;

// ============================================================
// Feature Images — จุดเด่น 4 ข้อ (Hero Section)
// แสดงที่ ~320px (grid-cols-4) → w_640 (2x Retina)
// ============================================================

export const FEATURE = {
  startWith50Thb: `${C}/f_auto,q_auto:low,w_640/v1771325142/50B_mvkueh.png`,
  idCard: `${C}/f_auto,q_auto:low,w_640/v1771325143/id_card_legavp.png`,
  checkStatus: `${C}/f_auto,q_auto:low,w_640/v1771325144/%E0%B8%A1%E0%B8%B5%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A_dteudb.png`,
  authentic: `${C}/f_auto,q_auto:low,w_640/v1771325146/%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%97%E0%B9%89_n2oywq.png`,
} as const;

// ============================================================
// Lookup Maps — ใช้ใน dynamic rendering (key = package id)
// ============================================================

/** Package card image by package id */
export const packageImageMap: Record<string, string> = {
  puppy: PACKAGE_CARD.puppy,
  plus: PACKAGE_CARD.plus,
  promax: PACKAGE_CARD.promax,
};

/** Promotion badge image by package id */
export const promotionImageMap: Record<string, string> = {
  puppy: PROMOTION.puppy,
  plus: PROMOTION.plus,
  promax: PROMOTION.promax,
};
