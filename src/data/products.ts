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
  },
];

// Packages
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
    subtitle: "สมดุลดี ฮิตที่สุด",
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
    popular: true,
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
