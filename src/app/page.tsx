import CallToAction from "@/components/call-to-action";
import ContactSection from "@/components/contact";
import Features from "@/components/features";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats";
import TestimonialsSection from "@/components/testimonials";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <CallToAction />
      <FooterSection />
    </div>
  );
};

export default HomePage;
