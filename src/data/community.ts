// Community Timeline Post Type Definition
export interface TimelinePost {
  id: number;
  author: string;
  avatar: string;
  content: string;
  images?: string[];
  isOfficial?: boolean;
  rating?: number;
}

// Community timeline posts data
export const timelinePosts: TimelinePost[] = [
  {
    id: 1,
    author: "คุณมินต์",
    avatar: "/assets/community/mint-avatar.png",
    content:
      "ให้เลยค่ะร้านนี้ ลองออมดาวน์ครั้งแรก พี่แอดมินน่ารักมากตอบไวสุด ๆ ให้คำปรึกแนะนำดีมาก ตอบกันจนดึกเลย ㅜㅜ คอยดูแลให้คำแนะนำชวนคุยสนุกมาก ร้านสวยเดินทางสะดวก ของแถมให้เยอะมากอีก คือคุ้มสุด",
    images: ["/assets/community/mint-img1.jpg"],
    rating: 5,
  },
  {
    id: 2,
    author: "คุณเจมส์",
    avatar: "/assets/community/james-avatar.png",
    content:
      "ทีแรกก็ชั่งใจอยู่ว่าจะผ่อนออนไลน์ดีไหม ดูรีวิวของร้านมานานพอสมควรก่อนจะตัดสินใจ ทางร้านก็ให้เราผ่อนเท่าที่ผ่อนไหว จึงตัดสินใจ ผ่อนมาตามจำนวนกำหนด ทางร้านนัดทำสัญญาและส่งของให้ ของแถมคืออลังการมากกกก ขอบคุณครับ",
    images: [
      "/assets/community/james-img1.jpg",
      "/assets/community/james-img2.jpg",
    ],
    rating: 5,
  },
  {
    id: 3,
    author: "คุณแพร",
    avatar: "/assets/community/prae-avatar.png",
    content:
      "บัตรประชาชนใบเดี่ยวเครดิตรผ่านเลยงับ พี่ๆแอดมินน่ารักมากๆค่ะ 😘❤️❤️",
    images: [
      "/assets/community/prae-img1.jpg",
      "/assets/community/prae-img2.jpg",
      "/assets/community/prae-img3.jpg",
    ],
    rating: 5,
  },
];
