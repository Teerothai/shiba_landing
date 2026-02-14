// Community Timeline Post Type Definition
export interface TimelinePost {
  id: number;
  author: string;
  avatar: string;
  content: string;
  image?: string;
  isOfficial?: boolean;
  rating?: number;
  likes: number;
  time: string;
}

// Community timeline posts data
export const timelinePosts: TimelinePost[] = [
  {
    id: 1,
    author: "คุณมินต์",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b2e09b88?w=100&h=100&fit=crop&crop=face",
    content:
      "ได้ iPhone 15 Pro Max แล้ว! ผ่อน 0% ง่ายมากจริงๆ ขอบคุณทีมชิบะโฟนค่ะ",
    image:
      "https://images.unsplash.com/photo-1634320498239-497d37b8f1fd?w=400&h=300&fit=crop",
    rating: 5,
    likes: 23,
    time: "2 ชั่วโมงที่แล้ว",
  },
  {
    id: 2,
    author: "SHiBA Phone Official",
    avatar:
      "https://images.unsplash.com/photo-1586836605934-c8fe00a0de4e?w=100&h=100&fit=crop",
    content:
      "iPhone 16 Series ลดพิเศษ 25% สำหรับสมาชิก Gold ขึ้นไป! เหลือเพียง 3 วันเท่านั้น",
    isOfficial: true,
    likes: 80,
    time: "5 ชั่วโมงที่แล้ว",
  },
  {
    id: 3,
    author: "คุณปีเตอร์",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "iPad Air M3 ใช้งานดีมาก บางเบา แบตอยู่ทน ขอบคุณพี่ๆ ที่แนะนำครับ",
    rating: 5,
    likes: 15,
    time: "1 วันที่แล้ว",
  },
];
