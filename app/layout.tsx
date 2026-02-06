import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "ชิบะโฟน | ผ่อนมือถือง่าย สบายใจ มีชิบะคอยดูแล",
  description:
    "ผ่อนมือถือ iPhone iPad ราคาถูก เริ่มต้นวันละ 50 บาท ไม่ต้องใช้บัตรเครดิต อนุมัติไว โปร่งใส ตรวจสอบสถานะได้ 24 ชม. พร้อมของแถมสูงสุด 30 ชิ้น",
  keywords: [
    "ผ่อนมือถือ",
    "ผ่อน iPhone",
    "ผ่อน iPad",
    "ชิบะโฟน",
    "Shiba Phone",
    "ผ่อน 0%",
    "ผ่อนไม่ใช้บัตรเครดิต",
    "ผ่อนมือถือราคาถูก",
  ],
  authors: [{ name: "SHiBA Phone" }],
  openGraph: {
    title: "ชิบะโฟน | ผ่อนมือถือง่าย สบายใจ มีชิบะคอยดูแล",
    description:
      "เริ่มต้นวันละ 50 บาท โปร่งใส เข้าใจง่าย ตรวจเช็คสถานะได้ 24 ชม.",
    type: "website",
    locale: "th_TH",
    siteName: "ชิบะโฟน",
  },
  twitter: {
    card: "summary_large_image",
    title: "ชิบะโฟน | ผ่อนมือถือง่าย",
    description: "เริ่มต้นวันละ 50 บาท โปร่งใส เข้าใจง่าย",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased">{children}</body>
    </html>
  );
}
