
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Update hover color to lime green */}
            <a
              href="#home"
              className="text-white hover:text-[#c5fa00] transition-colors"
            >
              Home
            </a>
            <a
              href="#invest"
              className="text-white hover:text-[#c5fa00] transition-colors"
            >
              Invest
            </a>
            <a
              href="#community"
              className="text-white hover:text-[#c5fa00] transition-colors"
            >
              Community
            </a>
            <a
              href="#blog"
              className="text-white hover:text-[#c5fa00] transition-colors"
            >
              Blog
            </a>
            <a
              href="#for-investors"
              className="text-white hover:text-[#c5fa00] transition-colors"
            >
              For Investors
            </a>
            <a
              href="#membership"
              className="text-white hover:text-[#c5fa00] transition-colors"
            >
              Membership
            </a>
          </div>

          {/* Open App Button */}
          <div className="hidden md:block">
            <Button className="bg-black/60 border border-gray-700 hover:bg-black/80 text-white rounded-full">
              <span className="mr-2">
                <svg className="w-4 h-4 text-[#c5fa00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              Open App
              
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/80 backdrop-blur-lg rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-white hover:text-[#c5fa00] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#invest"
                className="text-white hover:text-[#c5fa00] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Invest
              </a>
              <a
                href="#community"
                className="text-white hover:text-[#c5fa00] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a>
              <a
                href="#blog"
                className="text-white hover:text-[#c5fa00] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#for-investors"
                className="text-white hover:text-[#c5fa00] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Investors
              </a>
              <a
                href="#membership"
                className="text-white hover:text-[#c5fa00] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Membership
              </a>
              <Button className="bg-black/60 border border-gray-700 hover:bg-black/80 text-white rounded-full">
                <span className="mr-2">
                  <svg className="w-4 h-4 text-[#c5fa00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                Open App
                <span className="text-xs ml-1 opacity-70">Enter Blockchain</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
