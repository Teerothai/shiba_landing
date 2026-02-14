import { packageImageMap, promotionImageMap } from "@/data/images";

// Re-export image maps so existing imports don't break
export { packageImageMap, promotionImageMap };

// Roadmap Step Type Definition
export interface RoadmapStep {
  id: number;
  text: string;
}

// Roadmap steps data
export const roadmapSteps: RoadmapStep[] = [
  { id: 1, text: "เพิ่มเพื่อน Line : @shibaphone\nหรือ คลิกที่นี่!" },
  { id: 2, text: "กดเข้าเมนูสินค้า เลือกสินค้าที่สนใจ\nรุ่น สี ความจุ รูปแบบการผ่อน" },
  { id: 3, text: "กรอกข้อมูล พร้อมเซ็นสัญญาออมดาวน์\nเพียง 2นาที" },
  { id: 4, text: 'กดเมนู "ส่งยอด" ชำระยอดเปิดบิลเพื่อจองเครื่อง ขั้นต่ำเพียง 50บาท' },
  { id: 5, text: 'กดเมนู "ส่งยอด" อัพสลิปของคุณได้เลย' },
];
