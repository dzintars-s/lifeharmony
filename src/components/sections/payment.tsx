"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CreditCard, Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const paymentMethods = [
  { name: "MobilePay", icon: Smartphone },
  { name: "ePassi", icon: CreditCard },
  { name: "Edenred", icon: CreditCard },
  { name: "Kortti", icon: CreditCard },
];

export function PaymentMethods() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative py-16 lg:py-20 bg-beige-light">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl lg:text-3xl text-forest mb-8">
            {t.payment.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-champagne/30 flex items-center justify-center">
                  <method.icon size={20} className="text-forest" />
                </div>
                <span className="text-sm text-text-muted">{method.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}