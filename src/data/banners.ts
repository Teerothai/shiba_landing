import { BANNER } from "@/data/images";

// Banner Slide Type Definition
export interface BannerSlide {
  id: number;
  src: string;
  alt: string;
}

// Banner slides data
export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    src: BANNER.slide1,
    alt: "ชิบะโฟน โปรโมชั่นพิเศษ - ผ่อนง่าย สบายใจ",
  },
  {
    id: 2,
    src: BANNER.slide2,
    alt: "iPhone รุ่นใหม่ล่าสุด - ผ่อน 0% นาน 10 เดือน",
  },
  {
    id: 3,
    src: BANNER.slide3,
    alt: "iPad Pro - สำหรับทุกการสร้างสรรค์",
  },
];
