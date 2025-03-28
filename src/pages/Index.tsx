
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome toast when the page loads
    setTimeout(() => {
      toast({
        title: "Welcome to Symbiotes.ai",
        description: "Explore the future of digital marketing with us.",
      });
    }, 2000);
  }, [toast]);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
