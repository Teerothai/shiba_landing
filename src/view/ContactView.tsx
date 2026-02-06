"use client";

import Image from "next/image";
import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/lib/ui/button";
import { LineButton } from "@/lib/ui/line-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";

interface ContactViewProps {
  onOpenLINE: () => void;
}

/**
 * ContactView - Contact information and final CTA
 * Stateless presentation component
 */
export function ContactView({ onOpenLINE }: ContactViewProps) {
  return (
    <section
      id="contact"
      className="min-h-screen py-20"
      style={{ backgroundColor: "var(--kawaii-soft-purple)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Image
                src="/assets/toro-handle-phone.png"
                alt="Toro handling phone"
                width={64}
                height={64}
                className="w-16 h-16 object-contain animate-wave"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--kawaii-brown)] mb-3">
            ติดต่อเรา
          </h2>
          <p className="text-lg text-[var(--kawaii-brown)]/80">
            พร้อมให้บริการสมาชิก 24/7
          </p>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12">
          <LineButton
            onClick={onOpenLINE}
            size="xl"
            className="border-2 border-[#05a045] shadow-xl text-xl px-12 py-8"
          />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[var(--kawaii-gold)]" />
                ข้อมูลการติดต่อ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--kawaii-gold)] mt-0.5" />
                <div>
                  <p className="font-medium text-[var(--kawaii-brown)]">
                    02-XXX-XXXX
                  </p>
                  <p className="font-medium text-[var(--kawaii-brown)]">
                    08X-XXX-XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--kawaii-mint-green)] mt-0.5" />
                <div>
                  <p className="font-medium text-[var(--kawaii-brown)]">
                    เปิดบริการ
                  </p>
                  <p className="text-sm text-[var(--kawaii-brown)]/70">
                    09:00 - 21:00 น. (ทุกวัน)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--kawaii-pink)] mt-0.5" />
                <div>
                  <p className="font-medium text-[var(--kawaii-brown)]">
                    สำนักงานใหญ่
                  </p>
                  <p className="text-sm text-[var(--kawaii-brown)]/70">
                    กรุงเทพมหานคร
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Card */}
          <Card className="overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-[var(--kawaii-light-pink)]/20 to-[var(--kawaii-gold)]/20">
              <Image
                src="https://images.unsplash.com/photo-1696452941955-0708c9ede972?w=600&h=400&fit=crop"
                alt="Store location"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-[var(--kawaii-pink)]/20 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-4 shadow-kawaii-md">
                  <MapPin className="w-8 h-8 text-[var(--kawaii-pink)]" />
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="font-semibold text-[var(--kawaii-brown)]">
                หาเราได้ที่นี่
              </p>
              <p className="text-sm text-[var(--kawaii-brown)]/70">
                คลิกดูแผนที่และเส้นทาง
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA Section */}
        <Card className="max-w-3xl mx-auto text-center p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/toro-handle-phone.png"
              alt="Toro handling phone"
              width={96}
              height={96}
              className="w-24 h-24 object-contain animate-bounce-soft"
            />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--kawaii-brown)] mb-4">
            พร้อมเริ่มต้นแล้วใช่มั้ย?
          </h3>

          <p className="text-[var(--kawaii-brown)]/80 mb-6 max-w-xl mx-auto leading-relaxed">
            ทำให้ทุกคนเข้าถึงมือถือและเทคโนโลยีได้ง่ายขึ้น
            ผ่านระบบผ่อนที่โปร่งใส เข้าใจง่าย และบริการอบอุ่นเป็นกันเองเหมือนมี
            &quot;ผู้ช่วยชิบะ&quot; คอยดูแล
          </p>

          <div className="bg-[var(--kawaii-light-pink)]/30 rounded-2xl p-4 mb-6 inline-block">
            <p className="text-[var(--kawaii-brown)] font-medium">
              <strong>&quot;ผ่อนง่าย สบายใจ มีชิบะคอยดูแล&quot;</strong>
            </p>
          </div>

          <div>
            <LineButton
              onClick={onOpenLINE}
              size="xl"
              className="border-2 border-[#05a045] shadow-lg"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default ContactView;
