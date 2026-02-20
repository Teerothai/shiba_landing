"use client";

import Image from "next/image";
import { Card, CardContent } from "@/lib/ui/card";
import { timelinePosts, type TimelinePost } from "@/data/community";
import { MASCOT } from "@/data/images";

interface CommunityViewProps {
  onOpenLINE: () => void;
}

/**
 * TimelinePost - Individual community post
 */
function TimelinePostCard({ post }: { post: TimelinePost; index: number }) {
  return (
    <Card className="gsap-community-post">
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
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-kawaii-pink rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-kawaii-brown">
                {post.author}
              </span>
              {post.isOfficial && (
                <span className="text-xs bg-(--kawaii-pink)/10 text-kawaii-pink px-2 py-0.5 rounded-full">
                  Official
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <p className="text-kawaii-brown mb-4 leading-relaxed">{post.content}</p>

        {/* Images (if exists) */}
        {post.images && post.images.length > 0 && (
          <div
            className={`grid gap-2 mb-4 ${
              post.images.length === 1
                ? "grid-cols-1"
                : post.images.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-2"
            }`}
          >
            {post.images.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${
                  post.images!.length === 3 && i === 0
                    ? "col-span-2 aspect-video"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={img}
                  alt={`Post image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * CommunityView - Community and reviews section
 * Stateless presentation component
 */
export function CommunityView({}: CommunityViewProps) {
  return (
    <section
      id="community"
      className="min-h-screen py-20"
      style={{ backgroundColor: "var(--kawaii-light-pink)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 gsap-section-header">
          <div className="flex justify-center mb-4">
            <div className="relative gsap-section-mascot gsap-parallax-mascot">
              <Image
                src={MASCOT.toroWithPhone}
                alt="Toro with phone"
                width={168}
                height={168}
                className="w-42 h-42 object-contain animate-float"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-kawaii-brown mb-3">
            รีวิวลูกค้าชิบะโฟน
          </h2>
          <p className="text-lg text-(--kawaii-brown)/80">
            มาฟังเสียงรีวิวจากลูกค้าชิบะโฟนกัน
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto space-y-6">
          {timelinePosts.map((post, index) => (
            <TimelinePostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="https://maps.app.goo.gl/75DFAPuW1dWSSF6Q9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-kawaii-brown px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-110 hover:shadow-lg active:scale-95"
        >
          ดูรีวิวเพิ่มเติม คลิกเลยงับ
        </a>
      </div>
    </section>
  );
}

export default CommunityView;
