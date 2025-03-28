
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/public/lovable-uploads/2924bd80-2f92-4df6-ae6c-fb14d4a08265.png"
                alt="Symbiotes.ai Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">symbiotes.ai</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building the future with no-code solutions. We help businesses
              launch faster, iterate quicker, and scale better.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  MVP Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  Internal Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon transition-colors"
                >
                  No-Code Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block text-white">Email</span>
                hello@symbiotes.ai
              </li>
              <li className="text-gray-400">
                <span className="block text-white">Phone</span>
                +1 (555) 123-4567
              </li>
              <li className="text-gray-400">
                <span className="block text-white">Address</span>
                123 Tech Street, Suite 100
                <br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Symbiotes.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-neon transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-neon transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-neon transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
