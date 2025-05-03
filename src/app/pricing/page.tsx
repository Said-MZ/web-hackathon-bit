import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/hero-header";
import Pricing from "@/components/pricing";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroHeader />
      <Pricing />
      <FooterSection />
    </div>
  );
};

export default page;
