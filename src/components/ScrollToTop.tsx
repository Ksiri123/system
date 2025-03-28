
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.div
            animate={{ 
              boxShadow: ["0 0 10px rgba(197, 250, 0, 0.3)", "0 0 15px rgba(197, 250, 0, 0.5)", "0 0 10px rgba(197, 250, 0, 0.3)"] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="rounded-full p-0.5 bg-gradient-to-r from-[#c5fa00] to-[#c5fa00]/80"
          >
            <Button
              onClick={scrollToTop}
              className="h-12 w-12 rounded-full bg-dark text-[#c5fa00] hover:text-[#c5fa00] hover:bg-dark/80 p-0"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
