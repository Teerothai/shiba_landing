"use client";

import Image from "next/image";
import { Heart, MessageCircle, Star } from "lucide-react";
import { Button } from "@/lib/ui/button";
import { Card, CardContent } from "@/lib/ui/card";

interface CommunityViewProps {
  onOpenLINE: () => void;
}

// Timeline posts data
const timelinePosts = [
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

/**
 * TimelinePost - Individual community post
 */
function TimelinePost({
  post,
  index,
}: {
  post: (typeof timelinePosts)[0];
  index: number;
}) {
  return (
    <Card
      className="animate-slide-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-4 sm:p-6">
        {/* Author Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <Image
              src={post.avatar}
              alt={post.author}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            {post.isOfficial && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--kawaii-pink)] rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--kawaii-brown)]">
                {post.author}
              </span>
              {post.isOfficial && (
                <span className="text-xs bg-[var(--kawaii-pink)]/10 text-[var(--kawaii-pink)] px-2 py-0.5 rounded-full">
                  Official
                </span>
              )}
            </div>
            <span className="text-xs text-[var(--kawaii-brown)]/60">
              {post.time}
            </span>
          </div>
        </div>

        {/* Content */}
        <p className="text-[var(--kawaii-brown)] mb-4 leading-relaxed">
          {post.content}
        </p>

        {/* Image (if exists) */}
        {post.image && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
            <Image
              src={post.image}
              alt="Post image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        )}

        {/* Rating (if exists) */}
        {post.rating && (
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < post.rating
                    ? "text-[var(--kawaii-gold)] fill-current"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
          <button className="flex items-center gap-1 text-sm text-[var(--kawaii-brown)]/60 hover:text-[var(--kawaii-pink)] transition-colors">
            <Heart className="w-4 h-4" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-[var(--kawaii-brown)]/60 hover:text-[var(--kawaii-pink)] transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>ตอบกลับ</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * CommunityView - Community and reviews section
 * Stateless presentation component
 */
export function CommunityView({ onOpenLINE }: CommunityViewProps) {
  return (
    <section
      id="community"
      className="min-h-screen py-20"
      style={{ backgroundColor: "var(--kawaii-light-pink)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Image
                src="/assets/toro-with-phone.png"
                alt="Toro with phone"
                width={64}
                height={64}
                className="w-16 h-16 object-contain animate-float"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--kawaii-brown)] mb-3">
            Community Board
          </h2>
          <p className="text-lg text-[var(--kawaii-brown)]/80">
            รีวิวจากสมาชิก ข่าวสาร และโปรโมชั่นใหม่ๆ
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          {timelinePosts.map((post, index) => (
            <TimelinePost key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={onOpenLINE}
            variant="mint"
            size="lg"
            rounded="full"
            className="border-2 border-[var(--kawaii-brown)]"
          >
            <MessageCircle className="w-5 h-5" />
            เข้าร่วม Community
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CommunityView;
