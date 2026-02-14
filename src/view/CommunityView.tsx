"use client";

import Image from "next/image";
import { Heart, MessageCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/lib/ui/card";
import { timelinePosts, type TimelinePost } from "@/data/community";
import { MASCOT } from "@/data/images";

interface CommunityViewProps {
  onOpenLINE: () => void;
}

/**
 * TimelinePost - Individual community post
 */
function TimelinePostCard({
  post,
}: {
  post: TimelinePost;
  index: number;
}) {
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
            <span className="text-xs text-(--kawaii-brown)/60">
              {post.time}
            </span>
          </div>
        </div>

        {/* Content */}
        <p className="text-kawaii-brown mb-4 leading-relaxed">
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
                  i < (post.rating ?? 0)
                    ? "text-kawaii-gold fill-current"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
          <button className="flex items-center gap-1 text-sm text-(--kawaii-brown)/60 hover:text-kawaii-pink transition-colors">
            <Heart className="w-4 h-4" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-(--kawaii-brown)/60 hover:text-kawaii-pink transition-colors">
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
export function CommunityView({ }: CommunityViewProps) {
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
    </section>
  );
}

export default CommunityView;
