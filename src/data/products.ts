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
  category: "iPhone" | "iPad" | "android" | "Combo set Apple Pencil";
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
// iPhone Products — iPhone 13 to iPhone 17 (all models)
// ============================================================

export const iPhones: Product[] = [
  // ────────────────────────────────────────────
  // Hot: iPhone 13
  // ────────────────────────────────────────────
  {
    id: "iphone-13",
    name: "iPhone 13",
    price: 22900,
    down: 2000,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1632661674596-df8be59a8670?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB"],
      processor: "A15 Bionic",
      display: '6.1"',
      camera: "12MP Dual",
    },
    description:
      "iPhone 13 ชิป A15 Bionic กล้องคู่ 12MP Cinematic Mode เริ่มต้นเพียง 22,900 บาท คุ้มค่าที่สุดในตระกูล iPhone",
    colors: [
      { name: "Midnight", hex: "#1C1C1E", image: "https://images.unsplash.com/photo-1632661674596-df8be59a8670?w=400&h=300&fit=crop&q=1" },
      { name: "Starlight", hex: "#F5F0E8", image: "https://images.unsplash.com/photo-1632661674596-df8be59a8670?w=400&h=300&fit=crop&q=1" },
      { name: "Blue", hex: "#3C6997", image: "https://images.unsplash.com/photo-1632661674596-df8be59a8670?w=400&h=300&fit=crop&q=1" },
      { name: "Pink", hex: "#FADDD1", image: "https://images.unsplash.com/photo-1632661674596-df8be59a8670?w=400&h=300&fit=crop&q=1" },
      { name: "Green", hex: "#394C38", image: "https://images.unsplash.com/photo-1632661674596-df8be59a8670?w=400&h=300&fit=crop&q=1" },
      { name: "(PRODUCT)RED", hex: "#E42535", image: "https://images.unsplash.com/photo-1632661674596-df8be59a8670?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "Cinematic Mode",
      "Ceramic Shield",
      "Wireless Charging",
      "Water Resistant IP68",
    ],
  },
  // ────────────────────────────────────────────
  // Hot + New: iPhone 17 Pro Max
  // ────────────────────────────────────────────
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    price: 58900,
    down: 20900,
    new: true,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB"],
      processor: "A19 Pro",
      display: '6.9"',
      camera: "48MP Pro Fusion",
    },
    description:
      "iPhone 17 Pro Max เรือธงสุดท้อปของ Apple ชิป A19 Pro จอ 6.9 นิ้ว กล้อง 8x Zoom Ceramic Shield 2 หน้า-หลัง",
    colors: [
      { name: "Deep Blue", hex: "#1E3A5F", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
      { name: "Cosmic Orange", hex: "#D47A3E", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
      { name: "Silver", hex: "#E3E4E5", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "A19 Pro",
      "ProMotion 120Hz",
      "Titanium Premium",
      "8x Optical Zoom",
      "Spatial Video",
      "Ceramic Shield 2",
      "แบตอึดที่สุด",
    ],
  },
  // ────────────────────────────────────────────
  // Hot + New: iPhone 17
  // ────────────────────────────────────────────
  {
    id: "iphone-17",
    name: "iPhone 17",
    price: 40900,
    down: 9900,
    new: true,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB"],
      processor: "A19",
      display: '6.3"',
      camera: "48MP Dual Fusion",
    },
    description:
      "iPhone 17 ชิป A19 ดีไซน์ใหม่หมด กล้อง 48MP Dual Fusion พร้อม Ultra Wide 48MP Ceramic Shield 2 ทนทานขึ้น 3 เท่า กล้องหน้า 18MP",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Lavender", hex: "#CFC4E8", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Mist Blue", hex: "#B5CAD7", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Sage", hex: "#C4CEB0", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "White", hex: "#F5F5F7", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "A19 Chip",
      "Dynamic Island",
      "48MP Dual Fusion",
      "Ceramic Shield 2",
      "Wireless Charging",
    ],
  },
  // ────────────────────────────────────────────
  // iPhone 14 Series
  // ────────────────────────────────────────────
  {
    id: "iphone-14",
    name: "iPhone 14",
    price: 25900,
    down: 3500,
    image:
      "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB"],
      processor: "A15 Bionic",
      display: '6.1"',
      camera: "12MP Dual",
    },
    description:
      "iPhone 14 ชิป A15 Bionic กล้องคู่ 12MP พร้อม Cinematic Mode ถ่ายวิดีโอเหมือนมืออาชีพ Crash Detection ฟีเจอร์ใหม่เพื่อความปลอดภัย",
    colors: [
      { name: "Midnight", hex: "#1C1C1E", image: "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1" },
      { name: "Starlight", hex: "#F5F0E8", image: "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1" },
      { name: "Blue", hex: "#A1C6EA", image: "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1" },
      { name: "Purple", hex: "#C5B9DB", image: "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1" },
      { name: "Yellow", hex: "#F9E472", image: "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1" },
      { name: "(PRODUCT)RED", hex: "#E42535", image: "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "Cinematic Mode",
      "Crash Detection",
      "Wireless Charging",
      "Water Resistant IP68",
    ],
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    price: 29000,
    down: 4800,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB"],
      processor: "A16 Bionic",
      display: '6.1"',
      camera: "48MP Main",
    },
    description:
      "iPhone 15 กล้องหลัก 48MP Dynamic Island สุดล้ำ USB-C ชาร์จเร็ว ดีไซน์ขอบโค้ง มีหลากสีสันให้เลือก",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1" },
      { name: "Blue", hex: "#A1C6EA", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1" },
      { name: "Green", hex: "#D1E8D0", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1" },
      { name: "Yellow", hex: "#F9E472", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1" },
      { name: "Pink", hex: "#F9C5D1", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "Dynamic Island",
      "48MP Camera",
      "Wireless Charging",
    ],
  },
  // ────────────────────────────────────────────
  // iPhone 16 Series
  // ────────────────────────────────────────────
  {
    id: "iphone-16",
    name: "iPhone 16",
    price: 34500,
    down: 7500,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "A18",
      display: '6.1"',
      camera: "48MP Fusion",
    },
    description:
      "iPhone 16 ชิป A18 รุ่นใหม่ กล้อง Fusion 48MP Camera Control ถ่ายภาพมือโปร Action Button ปรับแต่งได้ สีสันสดใสสุดๆ",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "White", hex: "#F5F5F7", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Pink", hex: "#F9C5D1", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Teal", hex: "#5DBFB0", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Ultramarine", hex: "#5663F7", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "Camera Control",
      "Action Button",
      "A18 Chip",
      "Wireless Charging",
    ],
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    price: 42500,
    down: 12900,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "A18",
      display: '6.7"',
      camera: "48MP Fusion",
    },
    description:
      "iPhone 16 Plus จอใหญ่ 6.7 นิ้ว ชิป A18 กล้อง Fusion 48MP Camera Control แบตอึดพิเศษ Action Button สีสันจัดจ้าน",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "White", hex: "#F5F5F7", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Pink", hex: "#F9C5D1", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Teal", hex: "#5DBFB0", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Ultramarine", hex: "#5663F7", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "Camera Control",
      "Action Button",
      "A18 Chip",
      "Wireless Charging",
      "แบตอึดพิเศษ",
    ],
  },
  {
    id: "iphone-16e",
    name: "iPhone 16e",
    price: 30900,
    down: 5900,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "A18",
      display: '6.1"',
      camera: "48MP",
    },
    description:
      "iPhone 16e ชิป A18 กล้อง 48MP USB-C ราคาคุ้มค่า ดีไซน์ทันสมัย รองรับ 5G Apple Intelligence",
    colors: [
      { name: "Black", hex: "#1C1C1E", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "White", hex: "#F5F5F7", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Pink", hex: "#F9C5D1", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "A18 Chip",
      "48MP Camera",
      "Apple Intelligence",
    ],
  },
  {
    id: "iphone-16-pro-max-512",
    name: "iPhone 16 Pro Max 512GB",
    price: 64900,
    down: 19900,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["512GB"],
      processor: "A18 Pro",
      display: '6.9"',
      camera: "48MP Pro",
    },
    description:
      "iPhone 16 Pro Max 512GB จอใหญ่ 6.9 นิ้ว ชิป A18 Pro กล้อง Pro 48MP ถ่ายวิดีโอ 4K 120fps Spatial Video Titanium Design",
    colors: [
      { name: "Desert Titanium", hex: "#C4A882", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
      { name: "Natural Titanium", hex: "#C2BCB0", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
      { name: "White Titanium", hex: "#E3E2DD", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
      { name: "Black Titanium", hex: "#4A4845", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "ProMotion 120Hz",
      "Titanium Design",
      "Spatial Video",
      "Action Button",
      "แบตอึดที่สุด",
    ],
  },

  // ────────────────────────────────────────────
  // iPhone 17 Series
  // ────────────────────────────────────────────
  {
    id: "iphone-17-air",
    name: "iPhone 17 Air",
    price: 47000,
    down: 18900,
    new: true,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB"],
      processor: "A19",
      display: '6.6"',
      camera: "48MP",
    },
    description:
      "iPhone 17 Air บางที่สุดเพียง 5.5mm! ชิป A19 จอ 6.6 นิ้ว ProMotion 120Hz ตัวเครื่อง Titanium เกรด 5 น้ำหนักเบาสุดเพียง 165 กรัม",
    colors: [
      { name: "Space Black", hex: "#3A3A3C", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Cloud White", hex: "#EDEDEA", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Light Gold", hex: "#E6D5B8", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
      { name: "Sky Blue", hex: "#A3C4E0", image: "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "A19 Chip",
      "ProMotion 120Hz",
      "บางเพียง 5.5mm",
      "Titanium Grade 5",
      "Ceramic Shield 2",
      "น้ำหนักเบา 165g",
    ],
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    price: 52900,
    down: 17900,
    new: true,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB"],
      processor: "A19 Pro",
      display: '6.3"',
      camera: "48MP Pro Fusion",
    },
    description:
      "iPhone 17 Pro ชิป A19 Pro กล้อง 48MP Pro Fusion 3 ตัว ซูม 8x Optical จอ 6.3 นิ้ว Ceramic Shield 2 หน้า-หลัง ProRes RAW",
    colors: [
      { name: "Deep Blue", hex: "#1E3A5F", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
      { name: "Cosmic Orange", hex: "#D47A3E", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
      { name: "Silver", hex: "#E3E4E5", image: "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "A19 Pro",
      "ProMotion 120Hz",
      "Titanium Design",
      "8x Optical Zoom",
      "Ceramic Shield 2",
      "ProRes RAW",
    ],
  },
];

// ============================================================
// Android Products — Samsung Galaxy A Series
// ============================================================

export const androids: Product[] = [
  {
    id: "galaxy-a07-5g",
    name: "Galaxy A07 5G",
    price: 5900,
    down: 1300,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1",
    category: "android",
    brand: "Samsung",
    specs: {
      storage: ["128GB"],
      processor: "MediaTek Dimensity 6300",
      display: '6.7"',
      camera: "50MP",
    },
    description:
      "Galaxy A07 5G รุ่นเริ่มต้น 5G ราคาประหยัด จอ 6.7 นิ้ว กล้อง 50MP แบต 5000mAh เหมาะสำหรับการใช้งานทั่วไป",
    colors: [
      { name: "Black", hex: "#2A2A2A", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Light Blue", hex: "#A1C6EA", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "HD+ Display",
      "แบต 5000mAh",
      "กล้อง 50MP",
      "One UI Core",
    ],
  },
  {
    id: "galaxy-a17-5g",
    name: "Galaxy A17 5G",
    price: 9700,
    down: 1500,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1",
    category: "android",
    brand: "Samsung",
    specs: {
      storage: ["128GB"],
      processor: "MediaTek Dimensity 6300",
      display: '6.7"',
      camera: "50MP Triple",
    },
    description:
      "Galaxy A17 5G จอ Super AMOLED 90Hz กล้อง 50MP แบต 5000mAh ชาร์จเร็ว 25W คุ้มค่าสำหรับการใช้งานทุกวัน",
    colors: [
      { name: "Black", hex: "#2A2A2A", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Light Blue", hex: "#A1C6EA", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Gold", hex: "#E6D5B8", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Super AMOLED 90Hz",
      "ชาร์จเร็ว 25W",
      "กล้อง 50MP",
      "One UI",
      "แบต 5000mAh",
    ],
  },
  {
    id: "galaxy-a36-5g",
    name: "Galaxy A36 5G",
    price: 16100,
    down: 2500,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1",
    category: "android",
    brand: "Samsung",
    specs: {
      storage: ["128GB"],
      processor: "Snapdragon 6 Gen 3",
      display: '6.7"',
      camera: "50MP Triple",
    },
    description:
      "Galaxy A36 5G จอ Super AMOLED 120Hz ชิป Snapdragon 6 Gen 3 กล้อง 50MP OIS กันน้ำ IP67 ชาร์จเร็ว 45W แบต 5000mAh ใช้ได้ทั้งวัน",
    colors: [
      { name: "Awesome Lavender", hex: "#C9B8D9", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Awesome White", hex: "#F0EFEA", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Awesome Black", hex: "#2A2A2A", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Awesome Lime", hex: "#C3D94E", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Super AMOLED 120Hz",
      "IP67 กันน้ำ",
      "ชาร์จเร็ว 45W",
      "OIS",
      "Gorilla Glass Victus+",
      "One UI 7",
      "Circle to Search",
    ],
  },
  {
    id: "galaxy-a56-5g",
    name: "Galaxy A56 5G",
    price: 17900,
    down: 3100,
    hot: true,
    new: true,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1",
    category: "android",
    brand: "Samsung",
    specs: {
      storage: ["128GB"],
      processor: "Exynos 1580",
      display: '6.7"',
      camera: "50MP Triple",
    },
    description:
      "Galaxy A56 5G จอ Super AMOLED 120Hz HDR10+ ชิป Exynos 1580 ตัวเครื่องอลูมิเนียม กล้อง 50MP OIS กันน้ำ IP67 อัปเดต Android 6 รุ่น",
    colors: [
      { name: "Awesome Graphite", hex: "#575757", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Awesome Light Gray", hex: "#D4D4D4", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Awesome Olive", hex: "#808C4A", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
      { name: "Awesome Pink", hex: "#F2B8C6", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1" },
    ],
    features: [
      "5G",
      "Super AMOLED 120Hz",
      "HDR10+",
      "IP67 กันน้ำ",
      "อลูมิเนียมเฟรม",
      "Gorilla Glass Victus+",
      "One UI 7",
      "Dolby Atmos",
      "6 Android Upgrades",
    ],
  },
];

// ============================================================
// iPad Products
// ============================================================

const ipadImg = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&q=1";
const ipadAirImg = "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop&q=1";
const ipadColors = [
  { name: "Silver", hex: "#E3E4E5", image: ipadImg },
  { name: "Blue", hex: "#A1C6EA", image: ipadImg },
  { name: "Pink", hex: "#F9C5D1", image: ipadImg },
  { name: "Yellow", hex: "#F9E472", image: ipadImg },
];
const ipadAirColors = [
  { name: "Space Gray", hex: "#6E6E73", image: ipadAirImg },
  { name: "Starlight", hex: "#F5F0E8", image: ipadAirImg },
  { name: "Purple", hex: "#C5B9DB", image: ipadAirImg },
  { name: "Blue", hex: "#A1C6EA", image: ipadAirImg },
];

export const iPads: Product[] = [
  // iPad Gen 11 (A16)
  { id: "ipad-gen11-wifi", name: "iPad Gen 11 (A16) Wifi", price: 18800, down: 1800, hot: true, image: ipadImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB", "512GB"], processor: "A16 Bionic", display: '10.9"', connectivity: "Wi-Fi" }, description: "iPad Gen 11 ชิป A16 Bionic จอ 10.9 นิ้ว Liquid Retina รองรับ Apple Pencil เหมาะสำหรับเรียนและทำงาน", colors: ipadColors, features: ["Wi-Fi 6", "USB-C", "Apple Pencil", "Liquid Retina", "Center Stage"] },
  { id: "ipad-gen11-cellular", name: "iPad Gen 11 (A16) Wifi+Cellular", price: 24900, down: 4900, image: ipadImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "A16 Bionic", display: '10.9"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Gen 11 ชิป A16 Bionic จอ 10.9 นิ้ว Wifi+Cellular ใช้ซิมได้ พกพาไปได้ทุกที่", colors: ipadColors, features: ["Wi-Fi 6", "USB-C", "Cellular", "Apple Pencil", "Liquid Retina", "Center Stage"] },
  // iPad Air 11" (M3)
  { id: "ipad-air-11-m3-wifi", name: 'iPad Air 11" (M3) Wifi', price: 25800, down: 5800, image: ipadAirImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M3", display: '11"', connectivity: "Wi-Fi" }, description: "iPad Air ชิป M3 จอ 11 นิ้ว Liquid Retina ประสิทธิภาพระดับ Pro รองรับ Apple Pencil Pro และ Magic Keyboard", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard", "Center Stage"] },
  { id: "ipad-air-11-m3-cellular", name: 'iPad Air 11" (M3) Wifi+Cellular', price: 36900, down: 8900, image: ipadAirImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M3", display: '11"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Air ชิป M3 จอ 11 นิ้ว Wifi+Cellular ใช้ซิมได้ ประสิทธิภาพระดับ Pro", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard"] },
  // iPad Air 13" (M3)
  { id: "ipad-air-13-m3-wifi", name: 'iPad Air 13" (M3) Wifi', price: 33800, down: 9800, image: ipadAirImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M3", display: '13"', connectivity: "Wi-Fi" }, description: "iPad Air ชิป M3 จอ 13 นิ้ว Liquid Retina จอใหญ่เต็มตา เหมาะกับงานครีเอทีฟ", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard", "Center Stage"] },
  { id: "ipad-air-13-m3-cellular", name: 'iPad Air 13" (M3) Wifi+Cellular', price: 43900, down: 14900, image: ipadAirImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M3", display: '13"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Air ชิป M3 จอ 13 นิ้ว Wifi+Cellular จอใหญ่พร้อมซิม", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard"] },
  // iPad Gen 12 (A19) — NEW
  { id: "ipad-gen12-wifi", name: "iPad Gen 12 (A19) Wifi", price: 21900, down: 5900, new: true, image: ipadImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "A19", display: '10.9"', connectivity: "Wi-Fi" }, description: "iPad Gen 12 ชิป A19 รุ่นใหม่ จอ 10.9 นิ้ว ประสิทธิภาพสูงขึ้น รองรับ Apple Intelligence", colors: ipadColors, features: ["Wi-Fi 6E", "USB-C", "Apple Pencil", "Apple Intelligence", "Liquid Retina"] },
  { id: "ipad-gen12-cellular", name: "iPad Gen 12 (A19) Wifi+Cellular", price: 29900, down: 10900, new: true, image: ipadImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "A19", display: '10.9"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Gen 12 ชิป A19 Wifi+Cellular ใช้ซิมได้ รองรับ Apple Intelligence", colors: ipadColors, features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil", "Apple Intelligence", "Liquid Retina"] },
  // iPad Air 11" (M4) — NEW
  { id: "ipad-air-11-m4-wifi", name: 'iPad Air 11" (M4) Wifi', price: 31900, down: 9900, new: true, image: ipadAirImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M4", display: '11"', connectivity: "Wi-Fi" }, description: "iPad Air ชิป M4 รุ่นใหม่ จอ 11 นิ้ว ประสิทธิภาพสูงสุด รองรับ Apple Pencil Pro", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M4 Chip", "Magic Keyboard", "Apple Intelligence"] },
  { id: "ipad-air-11-m4-cellular", name: 'iPad Air 11" (M4) Wifi+Cellular', price: 40900, down: 14900, new: true, image: ipadAirImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M4", display: '11"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Air ชิป M4 จอ 11 นิ้ว Wifi+Cellular ใช้ซิมได้ ประสิทธิภาพระดับ Pro", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil Pro", "M4 Chip", "Magic Keyboard"] },
  // iPad Air 13" (M4) — NEW
  { id: "ipad-air-13-m4-wifi", name: 'iPad Air 13" (M4) Wifi', price: 40900, down: 13900, new: true, image: ipadAirImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M4", display: '13"', connectivity: "Wi-Fi" }, description: "iPad Air ชิป M4 จอ 13 นิ้ว Liquid Retina จอใหญ่เต็มตา ประสิทธิภาพสูงสุด", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M4 Chip", "Magic Keyboard", "Apple Intelligence"] },
  { id: "ipad-air-13-m4-cellular", name: 'iPad Air 13" (M4) Wifi+Cellular', price: 49900, down: 16900, new: true, image: ipadAirImg, category: "iPad", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M4", display: '13"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Air ชิป M4 จอ 13 นิ้ว Wifi+Cellular จอใหญ่พร้อมซิม ประสิทธิภาพสูงสุด", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil Pro", "M4 Chip", "Magic Keyboard"] },
];

// ============================================================
// Combo set Apple Pencil
// ============================================================

export const comboApplePencil: Product[] = [
  { id: "combo-ipad-gen11-wifi-pencil", name: "iPad Gen 11 (A16) Wifi + Pencil (USB-C)", price: 22000, down: 3000, image: ipadImg, category: "Combo set Apple Pencil", brand: "Apple", specs: { storage: ["128GB", "256GB", "512GB"], processor: "A16 Bionic", display: '10.9"', connectivity: "Wi-Fi" }, description: "iPad Gen 11 + Apple Pencil (USB-C) ชุดพร้อมใช้ ราคาคุ้มกว่าซื้อแยก", colors: ipadColors, features: ["Wi-Fi 6", "USB-C", "Apple Pencil (USB-C)", "Liquid Retina"] },
  { id: "combo-ipad-gen11-cellular-pencil", name: "iPad Gen 11 (A16) Wifi+Cellular + Pencil (USB-C)", price: 30400, down: 6000, image: ipadImg, category: "Combo set Apple Pencil", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "A16 Bionic", display: '10.9"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Gen 11 Wifi+Cellular + Apple Pencil (USB-C) ชุดพร้อมใช้ ใส่ซิมได้", colors: ipadColors, features: ["Wi-Fi 6", "USB-C", "Cellular", "Apple Pencil (USB-C)", "Liquid Retina"] },
  { id: "combo-ipad-air-11-m3-wifi-pencil", name: 'iPad Air 11" (M3) Wifi + Pencil (USB-C)', price: 32000, down: 8500, image: ipadAirImg, category: "Combo set Apple Pencil", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M3", display: '11"', connectivity: "Wi-Fi" }, description: "iPad Air M3 + Apple Pencil (USB-C) ชุดพร้อมใช้ ประสิทธิภาพระดับ Pro", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Apple Pencil (USB-C)", "M3 Chip", "Magic Keyboard"] },
  { id: "combo-ipad-air-11-m3-cellular-pencil", name: 'iPad Air 11" (M3) Wifi+Cellular + Pencil (USB-C)', price: 40400, down: 13500, image: ipadAirImg, category: "Combo set Apple Pencil", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M3", display: '11"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Air M3 Wifi+Cellular + Apple Pencil (USB-C) ชุดพร้อมใช้ ใส่ซิมได้", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil (USB-C)", "M3 Chip"] },
  { id: "combo-ipad-air-13-m3-wifi-pencil", name: 'iPad Air 13" (M3) Wifi + Pencil (USB-C)', price: 40400, down: 12500, image: ipadAirImg, category: "Combo set Apple Pencil", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M3", display: '13"', connectivity: "Wi-Fi" }, description: "iPad Air M3 จอ 13 นิ้ว + Apple Pencil (USB-C) ชุดพร้อมใช้", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Apple Pencil (USB-C)", "M3 Chip", "Magic Keyboard"] },
  { id: "combo-ipad-air-13-m3-cellular-pencil", name: 'iPad Air 13" (M3) Wifi+Cellular + Pencil (USB-C)', price: 48400, down: 16500, image: ipadAirImg, category: "Combo set Apple Pencil", brand: "Apple", specs: { storage: ["128GB", "256GB"], processor: "M3", display: '13"', connectivity: "Wi-Fi + Cellular" }, description: "iPad Air M3 จอ 13 นิ้ว Wifi+Cellular + Apple Pencil (USB-C) ชุดพร้อมใช้", colors: ipadAirColors, features: ["Wi-Fi 6E", "USB-C", "Cellular", "Apple Pencil (USB-C)", "M3 Chip"] },
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

export const allProducts: Product[] = [...iPhones, ...iPads, ...androids, ...comboApplePencil];

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

  // iPhone — group by series (newest first)
  const iphoneSeries = [17, 16, 15, 14, 13] as const;
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
  category: "iPhone" | "iPad" | "android" | "Combo set Apple Pencil"
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
