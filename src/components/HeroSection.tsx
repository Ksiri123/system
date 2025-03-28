import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center bg-yellow-500/10 text-yellow-500 px-4 py-1 rounded-full"
          >
            <span className="mr-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 8L12 12L20 8L12 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 16L12 20L20 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L12 16L20 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Revolutionizing AI Blockchain
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mb-6"
          >
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
  <span className="block text-white">Revolutionizing the</span>
  <span className="block my-2 text-[#c5fa00]">
    {" { "}Future of Digital Finance{" } "}
  </span>
</h1>

          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl"
          >
            Explore real-time insights, groundbreaking innovations, and the latest trends in blockchain, DeFi, and crypto markets—all in one powerful platform
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Button className="text-[#c5fa00] py-6 px-8 rounded-full bg-dark hover:bg-dark/90 border border-[#c5fa00] text-lg">
              GET STARTED
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
