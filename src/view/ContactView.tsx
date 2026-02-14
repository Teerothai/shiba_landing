"use client";

import Image from "next/image";
import { Phone, Clock, MapPin } from "lucide-react";
import { LineButton } from "@/lib/ui/line-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { MASCOT } from "@/data/images";

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
        <div className="text-center mb-12 gsap-section-header">
          <div className="flex justify-center mb-4">
            <div className="relative gsap-section-mascot gsap-parallax-mascot">
              <Image
                src={MASCOT.toroHandlePhone}
                alt="Toro handling phone"
                width={168}
                height={168}
                className="w-42 h-42 object-contain animate-wave"
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
        <div className="text-center mb-12 gsap-contact-cta">
          <LineButton
            onClick={onOpenLINE}
            size="xl"
            className="border-2 border-[#05a045] shadow-xl text-xl px-12 py-8"
          />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <Card className="gsap-contact-card">
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
                    064-771-2246
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
                    09:00 - 18:00 น. (ทุกวัน)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--kawaii-pink)] mt-0.5" />
                <div>
                  <p className="font-medium text-[var(--kawaii-brown)]">
                    บริษัท ชิบะ โฟน จำกัด
                  </p>
                  <p className="text-sm text-[var(--kawaii-brown)]/70">
                    แขวงคลองต้นไทร คลองสาน กรุงเทพมหานคร 10600
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Card */}
          <a
            href="https://maps.app.goo.gl/LkvGvmDfNRNhW6979"
            target="_blank"
            rel="noopener noreferrer"
            className="block group gsap-contact-card"
          >
            <Card className="overflow-hidden transition-all group-hover:shadow-kawaii-md group-hover:-translate-y-1">
              <div className="relative h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8!2d100.505!3d13.727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzM3LjIiTiAxMDDCsDMwJzE4LjAiRQ!5e0!3m2!1sth!2sth!4v1700000000000"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="แผนที่ บริษัท ชิบะ โฟน จำกัด"
                />
                {/* Overlay to make the whole card clickable */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-[var(--kawaii-pink)]/10 transition-colors" />
              </div>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[var(--kawaii-brown)]">
                    หาเราได้ที่นี่
                  </p>
                  <p className="text-sm text-[var(--kawaii-brown)]/70">
                    คลิกดูแผนที่และเส้นทาง
                  </p>
                </div>
                <div className="bg-[var(--kawaii-pink)]/10 rounded-full p-2 group-hover:bg-[var(--kawaii-pink)]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[var(--kawaii-pink)]" />
                </div>
              </CardContent>
            </Card>
          </a>
        </div>

        {/* Final CTA Section */}
        <Card className="gsap-final-cta max-w-3xl mx-auto text-center p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <Image
              src={MASCOT.toroHandlePhone}
              alt="Toro handling phone"
              width={96}
              height={96}
              className="gsap-cta-mascot w-24 h-24 object-contain animate-bounce-soft"
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
