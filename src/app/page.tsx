import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { GiftCards } from "@/components/sections/giftcards";
import { FirstVisitOffer } from "@/components/sections/first-visit";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { MapSection } from "@/components/sections/map";
import { PaymentMethods } from "@/components/sections/payment";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <GiftCards />
      <FirstVisitOffer />
      <Experience />
      <Testimonials />
      <Contact />
      <MapSection />
      <PaymentMethods />
      <Footer />
    </>
  );
}