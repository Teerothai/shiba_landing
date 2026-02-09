// Product Type Definitions
export interface ProductSpecs {
  storage: string;
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
  category: "iPhone" | "iPad";
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

// iPhone Products
export const iPhones: Product[] = [
  {
    id: "iphone-13-128gb",
    name: "iPhone 13 128GB",
    price: 22900,
    down: 2900,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: "128GB",
      processor: "A15 Bionic",
      display: '6.1"',
      camera: "12MP Dual",
    },
    description: "iPhone 13 รุ่นยอดนิยม ชิป A15 Bionic ประสิทธิภาพสูง กล้องคู่ 12MP ระบบ Cinematic Mode ถ่ายวิดีโอเหมือนมืออาชีพ แบตทนทั้งวัน",
    rating: 4.6,
    reviewCount: 89,
    features: ["5G", "Face ID", "Wireless Charging", "Water Resistant IP68", "Cinematic Mode"],
  },
  {
    id: "iphone-15-128gb",
    name: "iPhone 15 128GB",
    price: 31200,
    down: 7900,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: "128GB",
      processor: "A16 Bionic",
      display: '6.1"',
      camera: "48MP Main",
    },
    description: "iPhone 15 กล้องหลัก 48MP Dynamic Island สุดล้ำ USB-C ชาร์จเร็ว ดีไซน์ขอบโค้ง มีหลากสีสันให้เลือก",
    rating: 4.7,
    reviewCount: 124,
    features: ["5G", "Face ID", "USB-C", "Dynamic Island", "48MP Camera", "Wireless Charging"],
  },
  {
    id: "iphone-16-128gb",
    name: "iPhone 16 128GB",
    price: 37900,
    down: 10300,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: "128GB",
      processor: "A18",
      display: '6.1"',
      camera: "48MP Fusion",
    },
    description: "iPhone 16 ชิป A18 รุ่นใหม่ล่าสุด กล้อง Fusion 48MP Camera Control ถ่ายภาพมือโปร Action Button ปรับแต่งได้ตามใจ",
    rating: 4.8,
    reviewCount: 156,
    features: ["5G", "Face ID", "USB-C", "Camera Control", "Action Button", "A18 Chip", "Wireless Charging"],
  },
  {
    id: "iphone-16-pro-256gb",
    name: "iPhone 16 Pro 256GB",
    price: 52300,
    down: 18900,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: "256GB",
      processor: "A18 Pro",
      display: '6.3"',
      camera: "48MP Pro",
    },
    description: "iPhone 16 Pro ชิป A18 Pro ทรงพลังที่สุด จอ Super Retina XDR 6.3 นิ้ว กล้อง Pro 48MP ถ่ายวิดีโอ 4K Dolby Vision ตัวเครื่อง Titanium",
    rating: 4.9,
    reviewCount: 203,
    features: ["5G", "Face ID", "USB-C", "ProMotion 120Hz", "Titanium Design", "Camera Control", "Action Button", "4K Dolby Vision"],
  },
  {
    id: "iphone-16-pro-max-256gb",
    name: "iPhone 16 Pro Max 256GB",
    price: 55900,
    down: 19500,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: "256GB",
      processor: "A18 Pro",
      display: '6.9"',
      camera: "48MP Pro",
    },
    description: "iPhone 16 Pro Max จอใหญ่ 6.9 นิ้ว แบตอึดที่สุดในตระกูล iPhone ชิป A18 Pro ถ่ายวิดีโอ 4K 120fps Spatial Video",
    rating: 4.9,
    reviewCount: 178,
    features: ["5G", "Face ID", "USB-C", "ProMotion 120Hz", "Titanium Design", "Spatial Video", "Action Button", "แบตอึดที่สุด"],
  },
  {
    id: "iphone-17-128gb",
    name: "iPhone 17 128GB",
    price: 40900,
    down: 16400,
    new: true,
    image:
      "https://images.unsplash.com/photo-1727008607959-7b3fce7f7bd8?w=400&h=300&fit=crop",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: "128GB",
      processor: "A19",
      display: '6.1"',
      camera: "48MP Advanced",
    },
    description: "iPhone 17 รุ่นใหม่ล่าสุด ชิป A19 ดีไซน์ใหม่หมด กล้อง 48MP Advanced ดีขึ้นทุกด้าน Dynamic Island ใหม่ สมาร์ทกว่าเดิม",
    rating: 4.8,
    reviewCount: 67,
    features: ["5G", "Face ID", "USB-C", "A19 Chip", "Dynamic Island", "48MP Advanced", "Wireless Charging"],
  },
  {
    id: "iphone-17-pro-max-256gb",
    name: "iPhone 17 Pro Max 256GB",
    price: 67900,
    down: 27200,
    new: true,
    image:
      "https://images.unsplash.com/photo-1727008729556-8d6ca3e0d154?w=400&h=300&fit=crop",
    category: "iPhone",
    brand: "Apple",
    specs: {
      storage: "256GB",
      processor: "A19 Pro",
      display: '6.9"',
      camera: "48MP Pro Max",
    },
    description: "iPhone 17 Pro Max เรือธงสุดท้อปของ Apple ชิป A19 Pro จอ 6.9 นิ้ว กล้องระดับโปร ดีไซน์ใหม่ Titanium Premium",
    rating: 5.0,
    reviewCount: 42,
    features: ["5G", "Face ID", "USB-C", "A19 Pro", "ProMotion 120Hz", "Titanium Premium", "Spatial Video", "Action Button"],
  },
];

// iPad Products
export const iPads: Product[] = [
  {
    id: "ipad-gen11-wifi-128gb",
    name: "iPad Gen 11 (A16) Wifi 128GB",
    price: 19200,
    down: 6000,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: "iPad",
    brand: "Apple",
    specs: {
      storage: "128GB",
      processor: "A16 Bionic",
      display: '10.9"',
      connectivity: "Wi-Fi",
    },
    description: "iPad Gen 11 ชิป A16 Bionic จอ 10.9 นิ้ว Liquid Retina รองรับ Apple Pencil เหมาะสำหรับเรียนและทำงาน",
    rating: 4.5,
    reviewCount: 95,
    features: ["Wi-Fi 6", "USB-C", "Apple Pencil", "Liquid Retina", "Center Stage"],
  },
  {
    id: "ipad-air-11-m3-wifi-256gb",
    name: "iPad Air 11 M3 Wifi 256GB",
    price: 35900,
    down: 12900,
    hot: true,
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
    category: "iPad",
    brand: "Apple",
    specs: {
      storage: "256GB",
      processor: "M3",
      display: '11"',
      connectivity: "Wi-Fi",
    },
    description: "iPad Air ชิป M3 จอ 11 นิ้ว Liquid Retina ประสิทธิภาพระดับ Pro น้ำหนักเบา รองรับ Apple Pencil Pro และ Magic Keyboard",
    rating: 4.8,
    reviewCount: 112,
    features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "M3 Chip", "Magic Keyboard", "Center Stage"],
  },
  {
    id: "ipad-mini-a17-wifi-256gb",
    name: "iPad Mini A17 Pro Wifi 256GB",
    price: 29900,
    down: 12000,
    image:
      "https://images.unsplash.com/photo-1609902726285-00668009f004?w=400&h=300&fit=crop",
    category: "iPad",
    brand: "Apple",
    specs: {
      storage: "256GB",
      processor: "A17 Pro",
      display: '8.3"',
      connectivity: "Wi-Fi",
    },
    description: "iPad Mini จอ 8.3 นิ้ว ชิป A17 Pro พกพาง่ายที่สุด รองรับ Apple Pencil Pro เหมาะสำหรับจดบันทึกและอ่านหนังสือ",
    rating: 4.6,
    reviewCount: 78,
    features: ["Wi-Fi 6E", "USB-C", "Apple Pencil Pro", "A17 Pro", "พกพาง่าย", "Liquid Retina"],
  },
];

// Packages — ordered: Puppy → Plus → Pro Max (promoted)
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

// Combined products
export const allProducts: Product[] = [...iPhones, ...iPads];

// Helper functions
export function getProductsByCategory(category: "iPhone" | "iPad"): Product[] {
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
