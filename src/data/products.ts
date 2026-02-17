// Product Type Definitions
export interface ProductSpecs {
  storage: string[];
  processor: string;
  display: string;
  camera?: string;
  connectivity?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  down: number;
  hot?: boolean;
  new?: boolean;
  image: string;
  category: "iPhone" | "iPad" | "android";
  brand: string;
  specs: ProductSpecs;
  description?: string;
  rating?: number;
  reviewCount?: number;
  colors?: string[];
  features?: string[];
}

export interface Package {
  id: string;
  name: string;
  subtitle: string;
  pay: number;
  discount: number;
  color: string;
  steps: number;
  price: number;
  monthlyStart: number;
  bgGradient: string;
  icon: string;
  benefits: string[];
  popular?: boolean;
}

// ============================================================
// iPhone Products — iPhone 14 to iPhone 17 (all models)
// ============================================================

export const iPhones: Product[] = [
  // ────────────────────────────────────────────
  // iPhone 14 Series (2022)
  // ────────────────────────────────────────────
  {
    id: "iphone-14",
    name: "iPhone 14",
    price: 24900,
    down: 3900,
    image:
      "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB"],
      processor: "A15 Bionic",
      display: '6.1"',
      camera: "12MP Dual",
    },
    description:
      "iPhone 14 ชิป A15 Bionic กล้องคู่ 12MP พร้อม Cinematic Mode ถ่ายวิดีโอเหมือนมืออาชีพ Crash Detection ฟีเจอร์ใหม่เพื่อความปลอดภัย",
    rating: 4.5,
    reviewCount: 312,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
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
    id: "iphone-14-plus",
    name: "iPhone 14 Plus",
    price: 27900,
    down: 4900,
    image:
      "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB"],
      processor: "A15 Bionic",
      display: '6.7"',
      camera: "12MP Dual",
    },
    description:
      "iPhone 14 Plus จอใหญ่ 6.7 นิ้ว แบตอึดที่สุดในตระกูล iPhone 14 ชิป A15 Bionic กล้องคู่ 12MP Cinematic Mode พร้อม Crash Detection",
    rating: 4.5,
    reviewCount: 198,
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Yellow", "(PRODUCT)RED"],
    features: [
      "5G",
      "Face ID",
      "Cinematic Mode",
      "Crash Detection",
      "Wireless Charging",
      "Water Resistant IP68",
      "แบตอึดพิเศษ",
    ],
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    price: 39900,
    down: 7900,
    image:
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      processor: "A16 Bionic",
      display: '6.1"',
      camera: "48MP Pro",
    },
    description:
      "iPhone 14 Pro ชิป A16 Bionic กล้องหลัก 48MP Dynamic Island สุดล้ำ Always-On Display จอ ProMotion 120Hz ดีไซน์สวยระดับ Pro",
    rating: 4.7,
    reviewCount: 276,
    colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
    features: [
      "5G",
      "Face ID",
      "Dynamic Island",
      "Always-On Display",
      "ProMotion 120Hz",
      "48MP Camera",
      "Crash Detection",
      "Wireless Charging",
    ],
  },
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    price: 44900,
    down: 9900,
    image:
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      processor: "A16 Bionic",
      display: '6.7"',
      camera: "48MP Pro",
    },
    description:
      "iPhone 14 Pro Max จอใหญ่ 6.7 นิ้ว แบตอึดสุด ชิป A16 Bionic กล้อง 48MP Pro Dynamic Island Always-On Display ProMotion 120Hz",
    rating: 4.8,
    reviewCount: 341,
    colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
    features: [
      "5G",
      "Face ID",
      "Dynamic Island",
      "Always-On Display",
      "ProMotion 120Hz",
      "48MP Camera",
      "Crash Detection",
      "Wireless Charging",
      "แบตอึดที่สุด",
    ],
  },

  // ────────────────────────────────────────────
  // iPhone 15 Series (2023)
  // ────────────────────────────────────────────
  {
    id: "iphone-15",
    name: "iPhone 15",
    price: 29900,
    down: 5900,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB"],
      processor: "A16 Bionic",
      display: '6.1"',
      camera: "48MP Main",
    },
    description:
      "iPhone 15 กล้องหลัก 48MP Dynamic Island สุดล้ำ USB-C ชาร์จเร็ว ดีไซน์ขอบโค้ง มีหลากสีสันให้เลือก",
    rating: 4.7,
    reviewCount: 287,
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "Dynamic Island",
      "48MP Camera",
      "Wireless Charging",
    ],
  },
  {
    id: "iphone-15-plus",
    name: "iPhone 15 Plus",
    price: 33900,
    down: 6900,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB"],
      processor: "A16 Bionic",
      display: '6.7"',
      camera: "48MP Main",
    },
    description:
      "iPhone 15 Plus จอใหญ่ 6.7 นิ้ว กล้อง 48MP Dynamic Island USB-C แบตอึดพิเศษ ใช้งานได้ทั้งวัน สีสันสดใส",
    rating: 4.7,
    reviewCount: 203,
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "Dynamic Island",
      "48MP Camera",
      "Wireless Charging",
      "แบตอึดพิเศษ",
    ],
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: 42900,
    down: 9900,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      processor: "A17 Pro",
      display: '6.1"',
      camera: "48MP Pro",
    },
    description:
      "iPhone 15 Pro ชิป A17 Pro ตัวเครื่อง Titanium น้ำหนักเบา Action Button ปรับแต่งได้ กล้อง 48MP Pro ถ่ายวิดีโอ ProRes",
    rating: 4.8,
    reviewCount: 324,
    colors: ["Natural Titanium", "Black Titanium", "White Titanium", "Blue Titanium"],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "Action Button",
      "ProMotion 120Hz",
      "Titanium Design",
      "48MP Pro Camera",
      "ProRes Video",
    ],
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    price: 48900,
    down: 12900,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB", "1TB"],
      processor: "A17 Pro",
      display: '6.7"',
      camera: "48MP Pro",
    },
    description:
      "iPhone 15 Pro Max จอ 6.7 นิ้ว ชิป A17 Pro Titanium กล้อง 5x Optical Zoom ถ่ายวิดีโอ Spatial Video แบตอึดที่สุด",
    rating: 4.9,
    reviewCount: 289,
    colors: ["Natural Titanium", "Black Titanium", "White Titanium", "Blue Titanium"],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "Action Button",
      "ProMotion 120Hz",
      "Titanium Design",
      "5x Optical Zoom",
      "Spatial Video",
      "แบตอึดที่สุด",
    ],
  },

  // ────────────────────────────────────────────
  // iPhone 16 Series (2024)
  // ────────────────────────────────────────────
  {
    id: "iphone-16",
    name: "iPhone 16",
    price: 32900,
    down: 7900,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB"],
      processor: "A18",
      display: '6.1"',
      camera: "48MP Fusion",
    },
    description:
      "iPhone 16 ชิป A18 รุ่นใหม่ กล้อง Fusion 48MP Camera Control ถ่ายภาพมือโปร Action Button ปรับแต่งได้ สีสันสดใสสุดๆ",
    rating: 4.8,
    reviewCount: 412,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
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
    price: 36900,
    down: 8900,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB"],
      processor: "A18",
      display: '6.7"',
      camera: "48MP Fusion",
    },
    description:
      "iPhone 16 Plus จอใหญ่ 6.7 นิ้ว ชิป A18 กล้อง Fusion 48MP Camera Control แบตอึดพิเศษ Action Button สีสันจัดจ้าน",
    rating: 4.8,
    reviewCount: 287,
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
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
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    price: 44900,
    down: 12900,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      processor: "A18 Pro",
      display: '6.3"',
      camera: "48MP Pro",
    },
    description:
      "iPhone 16 Pro ชิป A18 Pro ทรงพลังที่สุด จอ Super Retina XDR 6.3 นิ้ว กล้อง Pro 48MP ถ่ายวิดีโอ 4K Dolby Vision ตัวเครื่อง Titanium",
    rating: 4.9,
    reviewCount: 356,
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
    features: [
      "5G",
      "Face ID",
      "USB-C",
      "ProMotion 120Hz",
      "Titanium Design",
      "Camera Control",
      "Action Button",
      "4K Dolby Vision",
    ],
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    price: 48900,
    down: 14900,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB", "1TB"],
      processor: "A18 Pro",
      display: '6.9"',
      camera: "48MP Pro",
    },
    description:
      "iPhone 16 Pro Max จอใหญ่ 6.9 นิ้ว แบตอึดที่สุดในตระกูล iPhone ชิป A18 Pro ถ่ายวิดีโอ 4K 120fps Spatial Video Titanium Design",
    rating: 4.9,
    reviewCount: 298,
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
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
  // iPhone 17 Series (2025)
  // ────────────────────────────────────────────
  {
    id: "iphone-17",
    name: "iPhone 17",
    price: 34900,
    down: 8900,
    new: true,
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
    rating: 4.8,
    reviewCount: 156,
    colors: ["Black", "Lavender", "Mist Blue", "Sage", "White"],
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
  {
    id: "iphone-17-air",
    name: "iPhone 17 Air",
    price: 37900,
    down: 10900,
    new: true,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB", "1TB"],
      processor: "A19",
      display: '6.6"',
      camera: "48MP",
    },
    description:
      "iPhone 17 Air บางที่สุดเพียง 5.5mm! ชิป A19 จอ 6.6 นิ้ว ProMotion 120Hz ตัวเครื่อง Titanium เกรด 5 น้ำหนักเบาสุดเพียง 165 กรัม",
    rating: 4.7,
    reviewCount: 98,
    colors: ["Space Black", "Cloud White", "Light Gold", "Sky Blue"],
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
    price: 48900,
    down: 14900,
    new: true,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB", "1TB"],
      processor: "A19 Pro",
      display: '6.3"',
      camera: "48MP Pro Fusion",
    },
    description:
      "iPhone 17 Pro ชิป A19 Pro กล้อง 48MP Pro Fusion 3 ตัว ซูม 8x Optical จอ 6.3 นิ้ว Ceramic Shield 2 หน้า-หลัง ProRes RAW",
    rating: 4.9,
    reviewCount: 134,
    colors: ["Deep Blue", "Cosmic Orange", "Silver"],
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
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    price: 55900,
    down: 18900,
    new: true,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop&q=1",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: ["256GB", "512GB", "1TB", "2TB"],
      processor: "A19 Pro",
      display: '6.9"',
      camera: "48MP Pro Fusion",
    },
    description:
      "iPhone 17 Pro Max เรือธงสุดท้อปของ Apple ชิป A19 Pro จอ 6.9 นิ้ว กล้อง 8x Zoom Ceramic Shield 2 หน้า-หลัง รองรับ 2TB แรกของ iPhone",
    rating: 5.0,
    reviewCount: 89,
    colors: ["Deep Blue", "Cosmic Orange", "Silver"],
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
      "2TB Storage",
      "แบตอึดที่สุด",
    ],
  },
];

// ============================================================
// Android Products — Samsung Galaxy A Series
// ============================================================

export const androids: Product[] = [
  {
    id: "galaxy-a36-5g",
    name: "Galaxy A36 5G",
    price: 12990,
    down: 1990,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1",
    category: "android",
    brand: "Samsung",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "Snapdragon 6 Gen 3",
      display: '6.7"',
      camera: "50MP Triple",
    },
    description:
      "Galaxy A36 5G จอ Super AMOLED 120Hz ชิป Snapdragon 6 Gen 3 กล้อง 50MP OIS กันน้ำ IP67 ชาร์จเร็ว 45W แบต 5000mAh ใช้ได้ทั้งวัน",
    rating: 4.4,
    reviewCount: 189,
    colors: ["Awesome Lavender", "Awesome White", "Awesome Black", "Awesome Lime"],
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
    price: 15990,
    down: 2490,
    hot: true,
    new: true,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&q=1",
    category: "android",
    brand: "Samsung",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "Exynos 1580",
      display: '6.7"',
      camera: "50MP Triple",
    },
    description:
      "Galaxy A56 5G จอ Super AMOLED 120Hz HDR10+ ชิป Exynos 1580 ตัวเครื่องอลูมิเนียม กล้อง 50MP OIS กันน้ำ IP67 อัปเดต Android 6 รุ่น",
    rating: 4.5,
    reviewCount: 142,
    colors: ["Awesome Graphite", "Awesome Light Gray", "Awesome Olive", "Awesome Pink"],
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

export const iPads: Product[] = [
  {
    id: "ipad-gen11-wifi",
    name: "iPad Gen 11 (A16) Wifi",
    price: 19200,
    down: 6000,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&q=1",
    category: "iPad",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB"],
      processor: "A16 Bionic",
      display: '10.9"',
      connectivity: "Wi-Fi",
    },
    description:
      "iPad Gen 11 ชิป A16 Bionic จอ 10.9 นิ้ว Liquid Retina รองรับ Apple Pencil เหมาะสำหรับเรียนและทำงาน",
    rating: 4.5,
    reviewCount: 95,
    colors: ["Silver", "Blue", "Pink", "Yellow"],
    features: ["Wi-Fi 6", "USB-C", "Apple Pencil", "Liquid Retina", "Center Stage"],
  },
  {
    id: "ipad-air-11-m3-wifi",
    name: "iPad Air 11 M3 Wifi",
    price: 35900,
    down: 12900,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop&q=1",
    category: "iPad",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB", "1TB"],
      processor: "M3",
      display: '11"',
      connectivity: "Wi-Fi",
    },
    description:
      "iPad Air ชิป M3 จอ 11 นิ้ว Liquid Retina ประสิทธิภาพระดับ Pro น้ำหนักเบา รองรับ Apple Pencil Pro และ Magic Keyboard",
    rating: 4.8,
    reviewCount: 112,
    colors: ["Space Gray", "Starlight", "Purple", "Blue"],
    features: [
      "Wi-Fi 6E",
      "USB-C",
      "Apple Pencil Pro",
      "M3 Chip",
      "Magic Keyboard",
      "Center Stage",
    ],
  },
  {
    id: "ipad-mini-a17-wifi",
    name: "iPad Mini A17 Pro Wifi",
    price: 29900,
    down: 12000,
    image:
      "https://images.unsplash.com/photo-1609902726285-00668009f004?w=400&h=300&fit=crop&q=1",
    category: "iPad",
    brand: "Apple",
    specs: {
      storage: ["128GB", "256GB", "512GB"],
      processor: "A17 Pro",
      display: '8.3"',
      connectivity: "Wi-Fi",
    },
    description:
      "iPad Mini จอ 8.3 นิ้ว ชิป A17 Pro พกพาง่ายที่สุด รองรับ Apple Pencil Pro เหมาะสำหรับจดบันทึกและอ่านหนังสือ",
    rating: 4.6,
    reviewCount: 78,
    colors: ["Space Gray", "Blue", "Purple", "Starlight"],
    features: [
      "Wi-Fi 6E",
      "USB-C",
      "Apple Pencil Pro",
      "A17 Pro",
      "พกพาง่าย",
      "Liquid Retina",
    ],
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
      "ส่วนลด 5%",
      "รับประกัน 1 ปี",
      "เก็บเงินได้ 3 วัน",
      "อนุมัติภายใน 24 ชม.",
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
      "ส่วนลด 10%",
      "รับประกัน 2 ปี",
      "เก็บเงินได้ 5 วัน",
      "ฟรีเคส + ฟิล์ม",
      "อนุมัติด่วน 12 ชม.",
    ],
  },
  {
    id: "promax",
    name: "Shiba Pro Max",
    subtitle: "ครบครัน พรีเมียมสุด",
    pay: 350,
    discount: 1000,
    color: "#b2a5f2",
    steps: 30,
    price: 45000,
    monthlyStart: 1299,
    bgGradient: "from-violet-100 to-purple-50",
    icon: "",
    benefits: [
      "ส่วนลด 20%",
      "รับประกัน 3 ปี",
      "เก็บเงินได้ 10 วัน",
      "ของแถมครบชุด",
      "VIP Support",
      "อนุมัติทันที 6 ชม.",
    ],
    popular: true,
  },
];

// ============================================================
// Combined products
// ============================================================

export const allProducts: Product[] = [...iPhones, ...iPads, ...androids];

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
  const iphoneSeries = [17, 16, 15, 14] as const;
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

  return groups;
}

// ============================================================
// Helper functions
// ============================================================

export function getProductsByCategory(
  category: "iPhone" | "iPad" | "android"
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
