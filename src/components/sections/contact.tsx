"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, MessageSquare, Share2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const phoneNumber = "+358401851127";
const whatsappUrl = "https://wa.me/358401851127";
const facebookUrl = "https://www.facebook.com/lifeharmonyrk";
const mapsUrl = "https://www.google.com/maps?q=Isolinnankatu+22+B+Pori+Finland";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
      action: mapsUrl,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: phoneNumber,
      action: `tel:${phoneNumber}`,
    },
    {
      icon: MessageSquare,
      label: t.contact.whatsapp,
      value: t.contact.whatsappValue,
      action: whatsappUrl,
    },
    {
      icon: Share2,
      label: t.contact.facebook,
      value: t.contact.facebookValue,
      action: facebookUrl,
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-forest mb-4">
            {t.contact.title}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.action}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 border border-border card-hover hover:border-forest group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-champagne/30 flex items-center justify-center group-hover:bg-forest group-hover:text-text-inverse transition-colors duration-300">
                  <info.icon size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-forest">{info.label}</h3>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappUrl}
            className="flex-1 max-w-sm flex items-center justify-center gap-2 px-8 py-4 bg-forest text-text-inverse text-base tracking-wider rounded-full hover:bg-forest-dark transition-colors duration-300 btn-press"
          >
            <MessageSquare size={20} />
            {t.contact.bookCta}
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="flex-1 max-w-sm flex items-center justify-center gap-2 px-8 py-4 bg-gold text-forest text-base tracking-wider rounded-full hover:bg-gold-light transition-colors duration-300 btn-press"
          >
            <Phone size={20} />
            {t.contact.callCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}