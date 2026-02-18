import { BANNER } from "@/data/images";

// Banner Slide Type Definition
export interface BannerSlide {
  id: number;
  src: string;
  mobileSrc: string;
  alt: string;
}

// Banner slides data
export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    src: BANNER.slide1,
    mobileSrc: BANNER.slide1Mobile,
    alt: "Shiba website promotion banner 1",
  },
  {
    id: 2,
    src: BANNER.slide2,
    mobileSrc: BANNER.slide2Mobile,
    alt: "Shiba website promotion banner 2",
  },
];
