// Product Type Definitions
export interface ProductSpecs {
  storage: string[];
  processor: string;
  display: string;
  camera?: string;
  connectivity?: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  down: number;
  hot?: boolean;
  new?: boolean;
  image: string;
  category: "iPhone" | "iPad" | "android" | "MacBook" | "Combo set Apple Pencil";
  brand: string;
  specs: ProductSpecs;
  description?: string;
  colors?: ProductColor[];
  features?: string[];
}

export interface PackageBenefit {
  text: string;
  sub?: string;
  included?: boolean;
  highlight?: boolean;
}

export interface Package {
  id: string;
  name: string;
  subtitle: string;
  pay: number;
  discount: number;
  originalPay?: number;
  color: string;
  steps: number;
  price: number;
  monthlyStart: number;
  bgGradient: string;
  icon: string;
  benefits: PackageBenefit[];
  popular?: boolean;
}

// ============================================================
// iPhone Products
// ============================================================

export const iPhones: Product[] = [
  // ────────────────────────────────────────────
  // iPhone 14
  // ────────────────────────────────────────────
  {
    id: "iphone-14",
    name: "iPhone 14",
    price: 25900,
    down: 3500,
    image: "/assets/product/iPhone/iPhone14/14/iPhone14.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB"],
      processor: "A15 Bionic",
      display: '6.1"',
      camera: "12MP Dual",
    },
    description: "iPhone 14 ชิป A15 Bionic จอ 6.1 นิ้ว Super Retina XDR กล้อง 12MP Dual กันน้ำ IP68",
    colors: [
      { name: "Midnight", hex: "#2E3642", image: "/assets/product/iPhone/iPhone14/14/iPhone14-Midnight.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPhone/iPhone14/14/iPhone14-Starlight.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A15 Bionic", "IP68 กันน้ำ", "MagSafe"],
  },
  // ────────────────────────────────────────────
  // iPhone 15
  // ────────────────────────────────────────────
  {
    id: "iphone-15",
    name: "iPhone 15",
    price: 29000,
    down: 4800,
    image: "/assets/product/iPhone/iPhone15/15/iPhone15.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB"],
      processor: "A16 Bionic",
      display: '6.1"',
      camera: "48MP",
    },
    description: "iPhone 15 ชิป A16 Bionic จอ 6.1 นิ้ว Super Retina XDR กล้อง 48MP Dynamic Island USB-C",
    colors: [
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPhone/iPhone15/15/iPhone15-Blue.webp" },
      { name: "Pink", hex: "#F9C5D1", image: "/assets/product/iPhone/iPhone15/15/iPhone15-Pink.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A16 Bionic", "Dynamic Island", "48MP", "IP68 กันน้ำ"],
  },
  // ────────────────────────────────────────────
  // iPhone 16
  // ────────────────────────────────────────────
  {
    id: "iphone-16",
    name: "iPhone 16",
    price: 34500,
    down: 7500,
    image: "/assets/product/iPhone/iPhone16/16/iPhone16.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "A18",
      display: '6.1"',
      camera: "48MP Fusion",
    },
    description: "iPhone 16 ชิป A18 จอ 6.1 นิ้ว กล้อง 48MP Fusion Dynamic Island Camera Control Apple Intelligence",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPhone/iPhone16/16/iPhone16-Black.webp" },
      { name: "Pink", hex: "#F9C5D1", image: "/assets/product/iPhone/iPhone16/16/iPhone16-Pink.webp" },
      { name: "Teal", hex: "#5BA4A4", image: "/assets/product/iPhone/iPhone16/16/iPhone16-Teal.webp" },
      { name: "Ultramarine", hex: "#4B5FA6", image: "/assets/product/iPhone/iPhone16/16/iPhone16-Ultramarine.webp" },
      { name: "White", hex: "#F5F5F7", image: "/assets/product/iPhone/iPhone16/16/iPhone16-White.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A18 Chip", "Dynamic Island", "Camera Control", "Apple Intelligence", "IP68"],
  },
  // ────────────────────────────────────────────
  // iPhone 16e
  // ────────────────────────────────────────────
  {
    id: "iphone-16e",
    name: "iPhone 16e",
    price: 30900,
    down: 5900,
    image: "/assets/product/iPhone/iPhone16/e/iPhone16e.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "A16 Bionic",
      display: '6.1"',
      camera: "48MP",
    },
    description: "iPhone 16e ชิป A16 Bionic จอ 6.1 นิ้ว กล้อง 48MP Apple Intelligence ราคาเข้าถึงง่าย",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPhone/iPhone16/e/iPhone16e-Black.webp" },
      { name: "White", hex: "#F5F5F7", image: "/assets/product/iPhone/iPhone16/e/iPhone16e-White.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A16 Bionic", "Apple Intelligence", "48MP", "IP68"],
  },
  // ────────────────────────────────────────────
  // iPhone 16 Plus
  // ────────────────────────────────────────────
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    price: 42500,
    down: 12900,
    image: "/assets/product/iPhone/iPhone16/Plus/iPhone16 Plus.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "A18",
      display: '6.7"',
      camera: "48MP Fusion",
    },
    description: "iPhone 16 Plus ชิป A18 จอ 6.7 นิ้ว กล้อง 48MP Fusion Dynamic Island Camera Control แบตอึดสุด",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPhone/iPhone16/Plus/iPhone16 Plus-Black.webp" },
      { name: "Pink", hex: "#F9C5D1", image: "/assets/product/iPhone/iPhone16/Plus/iPhone16 Plus-Pink.webp" },
      { name: "Teal", hex: "#5BA4A4", image: "/assets/product/iPhone/iPhone16/Plus/iPhone16 Plus-Teal.webp" },
      { name: "Ultramarine", hex: "#4B5FA6", image: "/assets/product/iPhone/iPhone16/Plus/iPhone16 Plus-Ultramarine.webp" },
      { name: "White", hex: "#F5F5F7", image: "/assets/product/iPhone/iPhone16/Plus/iPhone16 Plus-White.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A18 Chip", "Dynamic Island", "Camera Control", "Apple Intelligence", "IP68"],
  },
  // ────────────────────────────────────────────
  // iPhone 17
  // ────────────────────────────────────────────
  {
    id: "iphone-17",
    name: "iPhone 17",
    price: 40900,
    down: 9900,
    new: true,
    hot: true,
    image: "/assets/product/iPhone/iPhone17/17/ปก-iPhone17.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB"],
      processor: "A19",
      display: '6.3"',
      camera: "48MP Dual Fusion",
    },
    description: "iPhone 17 ชิป A19 ดีไซน์ใหม่หมด กล้อง 48MP Dual Fusion พร้อม Ultra Wide 48MP Ceramic Shield 2 ทนทานขึ้น 3 เท่า กล้องหน้า 18MP",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPhone/iPhone17/17/iPhone17-Black.webp" },
      { name: "Lavender", hex: "#CFC4E8", image: "/assets/product/iPhone/iPhone17/17/iPhone17-Lavender.webp" },
      { name: "Mist Blue", hex: "#B5CAD7", image: "/assets/product/iPhone/iPhone17/17/iPhone17-Mist Blue.webp" },
      { name: "Sage", hex: "#C4CEB0", image: "/assets/product/iPhone/iPhone17/17/iPhone17-Sage.webp" },
      { name: "White", hex: "#F5F5F7", image: "/assets/product/iPhone/iPhone17/17/iPhone17-White.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A19 Chip", "Dynamic Island", "48MP Dual Fusion", "Ceramic Shield 2", "Wireless Charging"],
  },
  // ────────────────────────────────────────────
  // iPhone 17 Air
  // ────────────────────────────────────────────
  {
    id: "iphone-17-air",
    name: "iPhone 17 Air",
    price: 47000,
    down: 18900,
    new: true,
    image: "/assets/product/iPhone/iPhone17/Air/ปก-iPhone-Air.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB"],
      processor: "A19",
      display: '6.6"',
      camera: "48MP",
    },
    description: "iPhone 17 Air บางที่สุดเพียง 5.5mm! ชิป A19 จอ 6.6 นิ้ว ProMotion 120Hz ตัวเครื่อง Titanium เกรด 5 น้ำหนักเบาสุดเพียง 165 กรัม",
    colors: [
      { name: "Space Black", hex: "#3A3A3C", image: "/assets/product/iPhone/iPhone17/Air/iPhone air-Space Black.webp" },
      { name: "Cloud White", hex: "#EDEDEA", image: "/assets/product/iPhone/iPhone17/Air/iPhone air-Cloud White.webp" },
      { name: "Light Gold", hex: "#E6D5B8", image: "/assets/product/iPhone/iPhone17/Air/iPhone air-Light Gold.webp" },
      { name: "Sky Blue", hex: "#A3C4E0", image: "/assets/product/iPhone/iPhone17/Air/iPhone air-Sky Blue.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A19 Chip", "ProMotion 120Hz", "บางเพียง 5.5mm", "Titanium Grade 5", "Ceramic Shield 2", "น้ำหนักเบา 165g"],
  },
  // ────────────────────────────────────────────
  // iPhone 17 Pro
  // ────────────────────────────────────────────
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    price: 52900,
    down: 17900,
    new: true,
    image: "/assets/product/iPhone/iPhone17/Pro/ปก-iPhone17-Pro.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB"],
      processor: "A19 Pro",
      display: '6.3"',
      camera: "48MP Pro Fusion",
    },
    description: "iPhone 17 Pro ชิป A19 Pro กล้อง 48MP Pro Fusion 3 ตัว ซูม 8x Optical จอ 6.3 นิ้ว Ceramic Shield 2 หน้า-หลัง ProRes RAW",
    colors: [
      { name: "Cosmic Orange", hex: "#D47A3E", image: "/assets/product/iPhone/iPhone17/Pro/iPhone17 pro-Cosmic Orange.webp" },
      { name: "Deep Blue", hex: "#1E3A5F", image: "/assets/product/iPhone/iPhone17/Pro/iPhone17 pro-Deep Blue.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/iPhone/iPhone17/Pro/iPhone17 pro-Silver.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A19 Pro", "ProMotion 120Hz", "Titanium Design", "8x Optical Zoom", "Ceramic Shield 2", "ProRes RAW"],
  },
  // ────────────────────────────────────────────
  // iPhone 17 Pro Max
  // ────────────────────────────────────────────
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    price: 58900,
    down: 20900,
    new: true,
    hot: true,
    image: "/assets/product/iPhone/iPhone17/Pro Max/ปก-iPhone17-Pro Max.webp",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB"],
      processor: "A19 Pro",
      display: '6.9"',
      camera: "48MP Pro Fusion",
    },
    description: "iPhone 17 Pro Max เรือธงสุดท้อปของ Apple ชิป A19 Pro จอ 6.9 นิ้ว กล้อง 8x Zoom Ceramic Shield 2 หน้า-หลัง",
    colors: [
      { name: "Cosmic Orange", hex: "#D47A3E", image: "/assets/product/iPhone/iPhone17/Pro Max/iPhone17 pro max-Cosmic Orange.webp" },
      { name: "Deep Blue", hex: "#1E3A5F", image: "/assets/product/iPhone/iPhone17/Pro Max/iPhone17 pro max-Deep Blue.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/iPhone/iPhone17/Pro Max/iPhone17 pro max-Silver.webp" },
    ],
    features: ["5G", "Face ID", "USB-C", "A19 Pro", "ProMotion 120Hz", "Titanium Premium", "8x Optical Zoom", "Spatial Video", "Ceramic Shield 2", "แบตอึดที่สุด"],
  },
];

// ============================================================
// Android Products — Samsung Galaxy A & S Series
// ============================================================

export const androids: Product[] = [
  {
    id: "galaxy-a07-5g",
    name: "Galaxy A07 5G",
    price: 7000,
    down: 1000,
    image: "/assets/product/Samsung/A07/Samsung-A07.webp",
    category: "android",
    brand: "Samsung",
    specs: { storage: ["128GB"], processor: "MediaTek Dimensity 6300", display: '6.7"', camera: "50MP" },
    description: "Galaxy A07 5G รุ่นเริ่มต้น 5G ราคาประหยัด จอ 6.7 นิ้ว กล้อง 50MP แบต 5000mAh เหมาะสำหรับการใช้งานทั่วไป",
    colors: [
      { name: "Black", hex: "#2A2A2A", image: "/assets/product/Samsung/A07/Samsung-A07-balck.webp" },
      { name: "Light Violet", hex: "#C5B9DB", image: "/assets/product/Samsung/A07/Samsung-A07-light violet.webp" },
    ],
    features: ["5G", "HD+ Display", "แบต 5000mAh", "กล้อง 50MP", "One UI Core"],
  },
  {
    id: "galaxy-a17-5g",
    name: "Galaxy A17 5G",
    price: 11400,
    down: 1800,
    image: "/assets/product/Samsung/A17/Samsung-A17.webp",
    category: "android",
    brand: "Samsung",
    specs: { storage: ["128GB"], processor: "MediaTek Dimensity 6300", display: '6.7"', camera: "50MP Triple" },
    description: "Galaxy A17 5G จอ Super AMOLED 90Hz กล้อง 50MP แบต 5000mAh ชาร์จเร็ว 25W คุ้มค่าสำหรับการใช้งานทุกวัน",
    colors: [
      { name: "Black", hex: "#2A2A2A", image: "/assets/product/Samsung/A17/Samsung-A17-black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/Samsung/A17/Samsung-A17-blue.webp" },
    ],
    features: ["5G", "Super AMOLED 90Hz", "ชาร์จเร็ว 25W", "กล้อง 50MP", "One UI", "แบต 5000mAh"],
  },
  {
    id: "galaxy-a36-5g",
    name: "Galaxy A36 5G",
    price: 16300,
    down: 2500,
    hot: true,
    image: "/assets/product/Samsung/A36/A36-Logo.webp",
    category: "android",
    brand: "Samsung",
    specs: { storage: ["128GB"], processor: "Snapdragon 6 Gen 3", display: '6.7"', camera: "50MP Triple" },
    description: "Galaxy A36 5G จอ Super AMOLED 120Hz ชิป Snapdragon 6 Gen 3 กล้อง 50MP OIS กันน้ำ IP67 ชาร์จเร็ว 45W แบต 5000mAh",
    colors: [
      { name: "Awesome Black", hex: "#2A2A2A", image: "/assets/product/Samsung/A36/A36-Awesome Black.webp" },
      { name: "Awesome Lavender", hex: "#C9B8D9", image: "/assets/product/Samsung/A36/A36-Awesome Lavender.webp" },
      { name: "Awesome Lime", hex: "#C3D94E", image: "/assets/product/Samsung/A36/A36-Awesome Lime.webp" },
    ],
    features: ["5G", "Super AMOLED 120Hz", "IP67 กันน้ำ", "ชาร์จเร็ว 45W", "OIS", "Gorilla Glass Victus+", "One UI 7", "Circle to Search"],
  },
  {
    id: "galaxy-a56-5g",
    name: "Galaxy A56 5G",
    price: 19900,
    down: 3100,
    hot: true,
    new: true,
    image: "/assets/product/Samsung/A56/A56-Logo.webp",
    category: "android",
    brand: "Samsung",
    specs: { storage: ["128GB"], processor: "Exynos 1580", display: '6.7"', camera: "50MP Triple" },
    description: "Galaxy A56 5G จอ Super AMOLED 120Hz HDR10+ ชิป Exynos 1580 ตัวเครื่องอลูมิเนียม กล้อง 50MP OIS กันน้ำ IP67",
    colors: [
      { name: "Awesome Graphite", hex: "#575757", image: "/assets/product/Samsung/A56/A56-Awesome Graphite.webp" },
      { name: "Awesome Olive", hex: "#808C4A", image: "/assets/product/Samsung/A56/A56-Awesome Olive.webp" },
      { name: "Awesome Pink", hex: "#F2B8C6", image: "/assets/product/Samsung/A56/A56-Awesome Pink.webp" },
    ],
    features: ["5G", "Super AMOLED 120Hz", "HDR10+", "IP67 กันน้ำ", "อลูมิเนียมเฟรม", "Gorilla Glass Victus+", "One UI 7", "6 Android Upgrades"],
  },
  {
    id: "galaxy-s26-5g",
    name: "Galaxy S26 5G",
    price: 44900,
    down: 18900,
    hot: true,
    new: true,
    image: "/assets/product/Samsung/S26/Samsung-S26.webp",
    category: "android",
    brand: "Samsung",
    specs: { storage: ["256GB"], processor: "Snapdragon 8 Elite", display: '6.2"', camera: "50MP Triple" },
    description: "Galaxy S26 5G เรือธงรุ่นใหม่ ชิป Snapdragon 8 Elite จอ Dynamic AMOLED 2X 120Hz กล้อง 50MP กันน้ำ IP68 รองรับ Galaxy AI",
    colors: [
      { name: "Black Shadow", hex: "#2A2A2A", image: "/assets/product/Samsung/S26/Samsung-S26-Black Shadow.webp" },
      { name: "Cobalt Violet", hex: "#6B5B95", image: "/assets/product/Samsung/S26/Samsung-S26-Cobalt Violet.webp" },
      { name: "Sky Blue", hex: "#A3C4E0", image: "/assets/product/Samsung/S26/Samsung-S26-Sky Blue.webp" },
      { name: "White Shadow", hex: "#F5F5F7", image: "/assets/product/Samsung/S26/Samsung-S26-White Shadow.webp" },
    ],
    features: ["5G", "Dynamic AMOLED 2X", "120Hz", "IP68 กันน้ำ", "Galaxy AI", "Snapdragon 8 Elite", "Wireless Charging"],
  },
  {
    id: "galaxy-s26-ultra-5g",
    name: "Galaxy S26 Ultra 5G",
    price: 61900,
    down: 22900,
    hot: true,
    new: true,
    image: "/assets/product/Samsung/S26 Ultra/Samsung-S26 ultra.webp",
    category: "android",
    brand: "Samsung",
    specs: { storage: ["256GB"], processor: "Snapdragon 8 Elite", display: '6.9"', camera: "200MP Quad" },
    description: "Galaxy S26 Ultra 5G เรือธงสุดท้อป ชิป Snapdragon 8 Elite กล้อง 200MP จอ 6.9 นิ้ว QHD+ S Pen ในตัว Galaxy AI สุดล้ำ",
    colors: [
      { name: "Black Shadow", hex: "#2A2A2A", image: "/assets/product/Samsung/S26 Ultra/Samsung-S26 ultra-Black Shadow.webp" },
      { name: "Cobalt Violet", hex: "#6B5B95", image: "/assets/product/Samsung/S26 Ultra/Samsung-S26 ultra-Cobalt Violet.webp" },
      { name: "Pink Gold", hex: "#E8C4B8", image: "/assets/product/Samsung/S26 Ultra/Samsung-S26 ultra-Pink Gold.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/Samsung/S26 Ultra/Samsung-S26 ultra-Silver.webp" },
      { name: "Sky Blue", hex: "#A3C4E0", image: "/assets/product/Samsung/S26 Ultra/Samsung-S26 ultra-Sky Blue.webp" },
      { name: "White Shadow", hex: "#F5F5F7", image: "/assets/product/Samsung/S26 Ultra/Samsung-S26 ultra-White Shadow.webp" },
    ],
    features: ["5G", "Dynamic AMOLED 2X", "QHD+ 120Hz", "IP68 กันน้ำ", "Galaxy AI", "S Pen ในตัว", "200MP Camera", "Titanium Frame", "45W Fast Charging"],
  },
];

// ============================================================
// MacBook Products
// ============================================================

export const macBooks: Product[] = [
  {
    id: "macbook-air-13-m2",
    name: 'MacBook Air 13" (M2)',
    price: 39900,
    down: 8900,
    image: "/assets/product/MacBook/macbook air m2/MacBook Air (M2) 13_.webp",
    category: "MacBook",
    brand: "Apple",
    specs: { storage: ["256GB", "512GB"], processor: "Apple M2", display: '13.6" Liquid Retina' },
    description: "MacBook Air ชิป M2 จอ 13.6 นิ้ว Liquid Retina บางเบา น้ำหนักเพียง 1.24 กก. แบตใช้ได้ยาวนานถึง 18 ชม. MagSafe ชาร์จเร็ว",
    colors: [
      { name: "Midnight", hex: "#2E3642", image: "/assets/product/MacBook/macbook air m2/MacBook Air (M2) 13_-MN.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/MacBook/macbook air m2/MacBook Air (M2) 13_-S.webp" },
      { name: "Space Gray", hex: "#6E6E73", image: "/assets/product/MacBook/macbook air m2/MacBook Air (M2) 13_-SG.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/MacBook/macbook air m2/MacBook Air (M2) 13_-SL.webp" },
    ],
    features: ["Apple M2 Chip", "8-core CPU", "10-core GPU", "Liquid Retina Display", "MagSafe Charging", "แบต 18 ชม.", "น้ำหนัก 1.24 กก.", "1080p FaceTime HD"],
  },
  {
    id: "macbook-air-13-m4",
    name: 'MacBook Air 13" (M4)',
    price: 44900,
    down: 12700,
    new: true,
    hot: true,
    image: "/assets/product/MacBook/macbook air m4/MacBook Air (M4) 13_.webp",
    category: "MacBook",
    brand: "Apple",
    specs: { storage: ["256GB", "512GB"], processor: "Apple M4", display: '13.6" Liquid Retina' },
    description: "MacBook Air ชิป M4 รุ่นใหม่ จอ 13.6 นิ้ว Liquid Retina ประสิทธิภาพสูงสุด รองรับ Apple Intelligence แบตใช้ได้ถึง 18 ชม.",
    colors: [
      { name: "Midnight", hex: "#2E3642", image: "/assets/product/MacBook/macbook air m4/MacBook Air (M4) 13_-MN.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/MacBook/macbook air m4/MacBook Air (M4) 13_-S.webp" },
      { name: "Sky Blue", hex: "#A3C4E0", image: "/assets/product/MacBook/macbook air m4/MacBook Air (M4) 13_-SB.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/MacBook/macbook air m4/MacBook Air (M4) 13_-SL.webp" },
    ],
    features: ["Apple M4 Chip", "10-core CPU", "10-core GPU", "Apple Intelligence", "Liquid Retina Display", "MagSafe Charging", "แบต 18 ชม.", "12MP Center Stage"],
  },
  {
    id: "macbook-pro-14-m5",
    name: 'MacBook Pro 14" (M5)',
    price: 66900,
    down: 19100,
    new: true,
    hot: true,
    image: "/assets/product/MacBook/mac pro m5/MacBook Pro (M5) 14_.webp",
    category: "MacBook",
    brand: "Apple",
    specs: { storage: ["512GB", "1TB", "2TB"], processor: "Apple M5 Pro", display: '14.2" Liquid Retina XDR' },
    description: "MacBook Pro ชิป M5 Pro จอ 14.2 นิ้ว Liquid Retina XDR ProMotion 120Hz ประสิทธิภาพระดับมืออาชีพ Apple Intelligence แบต 17 ชม.",
    colors: [
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/MacBook/mac pro m5/MacBook Air (M5) 14_-S.webp" },
      { name: "Space Black", hex: "#1D1D1F", image: "/assets/product/MacBook/mac pro m5/MacBook Air (M5) 14_-SB.webp" },
    ],
    features: ["Apple M5 Pro", "12-core CPU", "18-core GPU", "Apple Intelligence", "Liquid Retina XDR", "ProMotion 120Hz", "MagSafe 3", "แบต 17 ชม.", "HDMI + SD Card"],
  },
];

// ============================================================
// iPad Products
// ============================================================

export const iPads: Product[] = [
  // ────────────────────────────────────────────
  // iPad Gen 11 (A16)
  // ────────────────────────────────────────────
  {
    id: "ipad-gen11-a16-wifi",
    name: "iPad Gen 11 (A16) Wifi",
    price: 18800,
    down: 1800,
    hot: true,
    image: "/assets/product/iPad/ipad gen 11/ปก-ipad Gen11 wifi.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB", "512GB"], processor: "A16 Bionic", display: '10.9"', connectivity: "Wi-Fi" },
    description: "iPad Gen 11 ชิป A16 Bionic จอ 10.9 นิ้ว Liquid Retina รองรับ Apple Pencil (USB-C) และ Magic Keyboard Folio",
    colors: [
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/ipad gen 11/Blue-ipad Gen11 wifi.webp" },
      { name: "Pink", hex: "#F9C5D1", image: "/assets/product/iPad/ipad gen 11/Pink-ipad Gen11 wifi.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/iPad/ipad gen 11/Silver-ipad Gen11 wifi.webp" },
      { name: "Yellow", hex: "#F9E472", image: "/assets/product/iPad/ipad gen 11/Yellow-ipad Gen11 wifi.webp" },
    ],
    features: ["Wi-Fi 6", "USB-C", "Apple Pencil (USB-C)", "Liquid Retina", "A16 Bionic", "Center Stage"],
  },
  {
    id: "ipad-gen11-a16-cellular",
    name: "iPad Gen 11 (A16) Wifi+Cellular",
    price: 24900,
    down: 4900,
    hot: true,
    image: "/assets/product/iPad/ipad gen 11/ปก-ipad Gen11 wifi cellular.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "A16 Bionic", display: '10.9"', connectivity: "Wi-Fi + Cellular" },
    description: "iPad Gen 11 ชิป A16 Bionic จอ 10.9 นิ้ว Wifi+Cellular ใส่ซิมได้ รองรับ Apple Pencil (USB-C)",
    colors: [
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/ipad gen 11/Blue-ipad Gen11 wifi cellular.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/iPad/ipad gen 11/silver-ipad Gen11 wifi cellular.webp" },
      { name: "Yellow", hex: "#F9E472", image: "/assets/product/iPad/ipad gen 11/Yellow-ipad Gen11 wifi cellular.webp" },
    ],
    features: ["Wi-Fi 6", "USB-C", "Cellular", "Apple Pencil (USB-C)", "Liquid Retina", "A16 Bionic"],
  },
  // ────────────────────────────────────────────
  // iPad Air 11" (M3)
  // ────────────────────────────────────────────
  {
    id: "ipad-air-11-m3-wifi",
    name: 'iPad Air 11" (M3) Wifi',
    price: 25800,
    down: 5800,
    image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/ปกSKU-ipad m3 11_ wifi.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M3", display: '11"', connectivity: "Wi-Fi" },
    description: "iPad Air ชิป M3 จอ 11 นิ้ว Liquid Retina ประสิทธิภาพระดับ Pro รองรับ Apple Pencil Pro และ Magic Keyboard",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/Air11_M3_WiFi_Black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/Air11_M3_WiFi_Blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/Air11_M3_WiFi_Purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/Air11-M3-WiFi-Starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard", "Center Stage"],
  },
  {
    id: "ipad-air-11-m3-cellular",
    name: 'iPad Air 11" (M3) Wifi+Cellular',
    price: 36900,
    down: 8900,
    image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/ปกSKU-ipad m3 11_ wifi cellular.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M3", display: '11"', connectivity: "Wi-Fi + Cellular" },
    description: "iPad Air ชิป M3 จอ 11 นิ้ว Wifi+Cellular ใช้ซิมได้ ประสิทธิภาพระดับ Pro",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/Air11_M3_WiFi Cellular_Black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/Air11_M3_WiFi Cellular_Blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/Air11_M3_WiFi Cellular_Purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad/iPad Air M3/ipad air m3 11_/Air11-M3-WiFi Cellular-Starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard"],
  },
  // ────────────────────────────────────────────
  // iPad Air 13" (M3)
  // ────────────────────────────────────────────
  {
    id: "ipad-air-13-m3-wifi",
    name: 'iPad Air 13" (M3) Wifi',
    price: 33800,
    down: 9800,
    image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/ปกSKU-ipad m3 13_ wifi.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M3", display: '13"', connectivity: "Wi-Fi" },
    description: "iPad Air ชิป M3 จอ 13 นิ้ว Liquid Retina จอใหญ่เต็มตา เหมาะกับงานครีเอทีฟ",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/Air13_M3_WiFi_Black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/Air13_M3_WiFi_Blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/Air13_M3_WiFi_Purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/Air13-M3-WiFi-Starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard", "Center Stage"],
  },
  {
    id: "ipad-air-13-m3-cellular",
    name: 'iPad Air 13" (M3) Wifi+Cellular',
    price: 43900,
    down: 14900,
    image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/ปกSKU-ipad m3 13_ wifi cellular.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M3", display: '13"', connectivity: "Wi-Fi + Cellular" },
    description: "iPad Air ชิป M3 จอ 13 นิ้ว Wifi+Cellular จอใหญ่พร้อมซิม",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/Air13_M3_WiFi Cellular_Black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/Air13_M3_WiFi Cellular_Blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/Air13_M3_WiFi Cellular_Purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad/iPad Air M3/ipad air m3 13_/Air13-M3-WiFi Cellular-Starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard"],
  },
  // ────────────────────────────────────────────
  // iPad Air 11" (M4)
  // ────────────────────────────────────────────
  {
    id: "ipad-air-11-m4-wifi",
    name: 'iPad Air 11" (M4) Wifi',
    price: 31900,
    down: 9900,
    new: true,
    image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/ปกSKU-ipad m4 11_ wifi.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M4", display: '11"', connectivity: "Wi-Fi" },
    description: "iPad Air ชิป M4 รุ่นใหม่ จอ 11 นิ้ว ประสิทธิภาพสูงสุด รองรับ Apple Pencil Pro",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/Air11_M4_WiFi_Black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/Air11_M4_WiFi_Blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/Air11_M4_WiFi_Purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/Air11-M4-WiFi-Starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M4 Chip", "Magic Keyboard", "Apple Intelligence"],
  },
  {
    id: "ipad-air-11-m4-cellular",
    name: 'iPad Air 11" (M4) Wifi+Cellular',
    price: 40900,
    down: 14900,
    new: true,
    image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/ปกSKU-ipad m4 11_ wifi cellular.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M4", display: '11"', connectivity: "Wi-Fi + Cellular" },
    description: "iPad Air ชิป M4 จอ 11 นิ้ว Wifi+Cellular ใช้ซิมได้ ประสิทธิภาพระดับ Pro",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/Air11_M4_WiFi Cellular_Black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/Air11_M4_WiFi Cellular_Blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/Air11_M4_WiFi Cellular_Purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad/iPad Air M4/ipad air m4 11_/Air11-M4-WiFi Cellular-Starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil Pro", "M4 Chip", "Magic Keyboard"],
  },
  // ────────────────────────────────────────────
  // iPad Air 13" (M4)
  // ────────────────────────────────────────────
  {
    id: "ipad-air-13-m4-wifi",
    name: 'iPad Air 13" (M4) Wifi',
    price: 40900,
    down: 13900,
    new: true,
    image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/ปกSKU-ipad m4 13_ wifi.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M4", display: '13"', connectivity: "Wi-Fi" },
    description: "iPad Air ชิป M4 จอ 13 นิ้ว Liquid Retina จอใหญ่เต็มตา ประสิทธิภาพสูงสุด",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/Air13_M4_WiFi_Black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/Air13_M4_WiFi_Blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/Air13_M4_WiFi_Purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/Air13-M4-WiFi-Starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M4 Chip", "Magic Keyboard", "Apple Intelligence"],
  },
  {
    id: "ipad-air-13-m4-cellular",
    name: 'iPad Air 13" (M4) Wifi+Cellular',
    price: 49900,
    down: 16900,
    new: true,
    image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/ปกSKU-ipad m4 13_ wifi cellular.webp",
    category: "iPad",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M4", display: '13"', connectivity: "Wi-Fi + Cellular" },
    description: "iPad Air ชิป M4 จอ 13 นิ้ว Wifi+Cellular จอใหญ่พร้อมซิม ประสิทธิภาพสูงสุด",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/Air13_M4_WiFi Cellular_Black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/Air13_M4_WiFi Cellular_Blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/Air13_M4_WiFi Cellular_Purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad/iPad Air M4/ipad air m4 13_/Air13-M4-WiFi Cellular-Starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil Pro", "M4 Chip", "Magic Keyboard"],
  },
];

// ============================================================
// Combo set Apple Pencil
// ============================================================

export const comboApplePencil: Product[] = [
  // ────────────────────────────────────────────
  // iPad Gen 11 (A16) + Pencil Bundle
  // ────────────────────────────────────────────
  {
    id: "combo-ipad-gen11-wifi-pencil",
    name: "iPad Gen 11 (A16) Wifi + Pencil (USB-C)",
    price: 22000,
    down: 3000,
    image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi.webp",
    category: "Combo set Apple Pencil",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB", "512GB"], processor: "A16 Bionic", display: '10.9"', connectivity: "Wi-Fi" },
    description: "iPad Gen 11 + Apple Pencil (USB-C) ชุดพร้อมใช้ ราคาคุ้มกว่าซื้อแยก",
    colors: [
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi-blue.webp" },
      { name: "Pink", hex: "#F9C5D1", image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi-pink.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi-silver.webp" },
      { name: "Yellow", hex: "#F9E472", image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi-yellow.webp" },
    ],
    features: ["Wi-Fi 6", "USB-C", "Apple Pencil (USB-C)", "Liquid Retina"],
  },
  {
    id: "combo-ipad-gen11-cellular-pencil",
    name: "iPad Gen 11 (A16) Wifi+Cellular + Pencil (USB-C)",
    price: 30400,
    down: 6000,
    image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi+cellular.webp",
    category: "Combo set Apple Pencil",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "A16 Bionic", display: '10.9"', connectivity: "Wi-Fi + Cellular" },
    description: "iPad Gen 11 Wifi+Cellular + Apple Pencil (USB-C) ชุดพร้อมใช้ ใส่ซิมได้",
    colors: [
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi+cellular-blue.webp" },
      { name: "Pink", hex: "#F9C5D1", image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi+cellular-pink.webp" },
      { name: "Silver", hex: "#E3E4E5", image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi+cellular-silver.webp" },
      { name: "Yellow", hex: "#F9E472", image: "/assets/product/iPad Bundle/Gen11 A16/Set-iPad A16-wifi+cellular-yellow.webp" },
    ],
    features: ["Wi-Fi 6", "USB-C", "Cellular", "Apple Pencil (USB-C)", "Liquid Retina"],
  },
  // ────────────────────────────────────────────
  // iPad Air 11" (M3) + Pencil Bundle
  // ────────────────────────────────────────────
  {
    id: "combo-ipad-air-11-m3-wifi-pencil",
    name: 'iPad Air 11" (M3) Wifi + Pencil (USB-C)',
    price: 32000,
    down: 8500,
    image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi.webp",
    category: "Combo set Apple Pencil",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M3", display: '11"', connectivity: "Wi-Fi" },
    description: "iPad Air M3 + Apple Pencil (USB-C) ชุดพร้อมใช้ ประสิทธิภาพระดับ Pro",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi-black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi-blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi-purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi-starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Apple Pencil (USB-C)", "M3 Chip", "Magic Keyboard"],
  },
  {
    id: "combo-ipad-air-11-m3-cellular-pencil",
    name: 'iPad Air 11" (M3) Wifi+Cellular + Pencil (USB-C)',
    price: 40400,
    down: 13500,
    image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi+cellular.webp",
    category: "Combo set Apple Pencil",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M3", display: '11"', connectivity: "Wi-Fi + Cellular" },
    description: "iPad Air M3 Wifi+Cellular + Apple Pencil (USB-C) ชุดพร้อมใช้ ใส่ซิมได้",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi+cellular-black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi+cellular-blue .webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi+cellular-purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad Bundle/Air M3 11_/Set-iPad Air 11-wifi+cellular-starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil (USB-C)", "M3 Chip"],
  },
  // ────────────────────────────────────────────
  // iPad Air 13" (M3) + Pencil Bundle
  // ────────────────────────────────────────────
  {
    id: "combo-ipad-air-13-m3-wifi-pencil",
    name: 'iPad Air 13" (M3) Wifi + Pencil (USB-C)',
    price: 40400,
    down: 12500,
    image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi.webp",
    category: "Combo set Apple Pencil",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M3", display: '13"', connectivity: "Wi-Fi" },
    description: "iPad Air M3 จอ 13 นิ้ว + Apple Pencil (USB-C) ชุดพร้อมใช้",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi-black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi-blue.webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi-purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi-starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Apple Pencil (USB-C)", "M3 Chip", "Magic Keyboard"],
  },
  {
    id: "combo-ipad-air-13-m3-cellular-pencil",
    name: 'iPad Air 13" (M3) Wifi+Cellular + Pencil (USB-C)',
    price: 48400,
    down: 16500,
    image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi+cellular.webp",
    category: "Combo set Apple Pencil",
    brand: "Apple",
    specs: { storage: ["128GB", "256GB"], processor: "M3", display: '13"', connectivity: "Wi-Fi + Cellular" },
    description: "iPad Air M3 จอ 13 นิ้ว Wifi+Cellular + Apple Pencil (USB-C) ชุดพร้อมใช้",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi+cellular-black.webp" },
      { name: "Blue", hex: "#A1C6EA", image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi+cellular-blue .webp" },
      { name: "Purple", hex: "#C5B9DB", image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi+cellular-purple.webp" },
      { name: "Starlight", hex: "#F5F0E8", image: "/assets/product/iPad Bundle/Air M3 13_/Set-iPad Air 13-wifi+cellular-starlight.webp" },
    ],
    features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil (USB-C)", "M3 Chip"],
  },
];

// ============================================================
// Packages — ordered: Puppy → Plus → Pro Max (promoted)
// ============================================================

export const packages: Package[] = [
  {
    id: "puppy",
    name: "Shiba Puppy",
    subtitle: "เริ่มต้นง่าย พื้นฐานดี",
    pay: 50,
    discount: 0,
    color: "#ff8ab7",
    steps: 10,
    price: 15000,
    monthlyStart: 699,
    bgGradient: "from-pink-100 to-rose-50",
    icon: "",
    benefits: [
      { text: "ไม่มีส่วนลด", included: false },
      { text: "ของแถม 10+ชิ้น", highlight: true },
      { text: "ของแถม Exclusive", sub: "(สามารถเลือกสีขาว สีดำได้)" },
      { text: "เช็คยอดผ่านระบบได้", sub: "ด้วยตนเอง 24ชม." },
      { text: "ระบบคืนเงิน" },
    ],
  },
  {
    id: "plus",
    name: "Shiba Plus",
    subtitle: "สมดุลดี คุ้มค่า",
    pay: 100,
    discount: 200,
    color: "#5ddbba",
    steps: 15,
    price: 25000,
    monthlyStart: 899,
    bgGradient: "from-teal-100 to-emerald-50",
    icon: "",
    benefits: [
      { text: "ส่วนลด 200", highlight: true },
      { text: "ของแถม 15+ชิ้น", highlight: true },
      { text: "ของแถม Exclusive", sub: "(สามารถเลือกสีขาว สีดำได้)" },
      { text: "เช็คยอดผ่านระบบได้", sub: "ด้วยตนเอง 24ชม." },
      { text: "ระบบคืนเงิน" },
    ],
  },
  {
    id: "promax",
    name: "Shiba Pro Max",
    subtitle: "ครบครัน พรีเมียมสุด",
    pay: 350,
    originalPay: 500,
    discount: 1000,
    color: "#b2a5f2",
    steps: 30,
    price: 45000,
    monthlyStart: 1299,
    bgGradient: "from-violet-100 to-purple-50",
    icon: "",
    benefits: [
      { text: "ส่วนลด 1,000", highlight: true },
      { text: "ของแถม 30+ชิ้น", highlight: true },
      { text: "ของแถม Exclusive", sub: "(สามารถเลือกสีขาว สีดำได้)", highlight: true },
      { text: "เช็คยอดผ่านระบบได้", sub: "ด้วยตนเอง 24ชม." },
      { text: "ระบบคืนเงิน" },
      { text: "พิจารณารับเครื่องเร็วขึ้น", highlight: true },
    ],
    popular: true,
  },
];

// ============================================================
// Combined products
// ============================================================

export const allProducts: Product[] = [...iPhones, ...iPads, ...androids, ...macBooks, ...comboApplePencil];

// ============================================================
// Product Grouping (for categorized dropdowns)
// ============================================================

export interface ProductGroup {
  label: string;
  products: Product[];
}

/** Group products by series/brand for categorized dropdowns */
export function getGroupedProducts(): ProductGroup[] {
  const groups: ProductGroup[] = [];

  // iPhone — group by series
  const iphoneSeries = [13, 14, 15, 16, 17] as const;
  for (const series of iphoneSeries) {
    const prefix = `iPhone ${series}`;
    const matched = iPhones.filter((p) => p.name.startsWith(prefix));
    if (matched.length) {
      groups.push({ label: prefix, products: matched });
    }
  }

  // Android — group by brand
  const brandMap = new Map<string, Product[]>();
  for (const p of androids) {
    const list = brandMap.get(p.brand) ?? [];
    list.push(p);
    brandMap.set(p.brand, list);
  }
  for (const [brand, products] of brandMap) {
    groups.push({ label: brand, products });
  }

  // iPad — single group
  if (iPads.length) {
    groups.push({ label: "iPad", products: iPads });
  }

  // MacBook — single group
  if (macBooks.length) {
    groups.push({ label: "MacBook", products: macBooks });
  }

  // Combo set Apple Pencil
  if (comboApplePencil.length) {
    groups.push({ label: "Combo set Apple Pencil", products: comboApplePencil });
  }

  return groups;
}

// ============================================================
// Helper functions
// ============================================================

export function getProductsByCategory(
  category: "iPhone" | "iPad" | "android" | "MacBook" | "Combo set Apple Pencil"
): Product[] {
  return allProducts.filter((product) => product.category === category);
}

export function getHotProducts(): Product[] {
  return allProducts.filter((product) => product.hot);
}

export function getNewProducts(): Product[] {
  return allProducts.filter((product) => product.new);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((product) => product.id === id);
}
