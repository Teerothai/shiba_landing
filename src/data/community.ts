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
    avatar:
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771324140/unnamed_ufncjr.png",
    content:
      "ให้เลยค่ะร้านนี้ ลองออมดาวน์ครั้งแรก พี่แอดมินน่ารักมากตอบไวสุด ๆ ให้คำปรึกแนะนำดีมาก ตอบกันจนดึกเลย ㅜㅜ คอยดูแลให้คำแนะนำชวนคุยสนุกมาก ร้านสวยเดินทางสะดวก ของแถมให้เยอะมากอีก คือคุ้มสุด",
    images: [
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771324130/unnamed_3_sgpx9d.jpg",
    ],
    rating: 5,
  },
  {
    id: 2,
    author: "คุณเจมส์",
    avatar:
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771141946/unnamed_ydn9ge.png",
    content:
      "ทีแรกก็ชั่งใจอยู่ว่าจะผ่อนออนไลน์ดีไหม ดูรีวิวของร้านมานานพอสมควรก่อนจะตัดสินใจ ทางร้านก็ให้เราผ่อนเท่าที่ผ่อนไหว จึงตัดสินใจ ผ่อนมาตามจำนวนกำหนด ทางร้านนัดทำสัญญาและส่งของให้ ของแถมคืออลังการมากกกก ขอบคุณครับ",
    images: [
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771142056/unnamed_4_yjppqj.jpg",
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771142006/unnamed_4_cnvwcf.jpg",
    ],
    rating: 5,
  },
  {
    id: 3,
    author: "คุณแพร",
    avatar:
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771322244/unnamed_u3kbgf.png",
    content:
      "บัตรประชาชนใบเดี่ยวเครดิตรผ่านเลยงับ พี่ๆแอดมินน่ารักมากๆค่ะ 😘❤️❤️",
    images: [
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771324091/unnamed_3_xehdzf.jpg",
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771322244/unnamed_ar5qet.jpg",
      "https://res.cloudinary.com/db7aaytcs/image/upload/f_auto,q_auto:low/v1771323148/unnamed_3_tk3axq.jpg",
    ],
    rating: 5,
  },
];
