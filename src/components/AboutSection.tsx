
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Import tool icons
import { Code, Workflow, Zap } from "lucide-react";

const AboutSection = () => {
  const isMobile = useIsMobile();

  const tools = [
    {
      name: "Bubble.io",
      icon: <Code className="w-6 h-6 text-[#c5fa00]" />,
      description: "Build fully functional web apps without code",
    },
    {
      name: "Webflow",
      icon: <Workflow className="w-6 h-6 text-[#c5fa00]" />,
      description: "Create stunning responsive websites visually",
    },
    {
      name: "Zapier",
      icon: <Zap className="w-6 h-6 text-[#c5fa00]" />,
      description: "Automate workflows between your favorite apps",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-dark-gray/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-[#c5fa00]/10 text-[#c5fa00] px-4 py-1 rounded-full font-medium text-sm mb-4 inline-block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              We Are Experts in{" "}
              <span className="text-[#c5fa00]">No-Code Development</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              At Symbiotes.ai, we believe in the power of no-code tools to
              democratize software development. Our team of experts specializes
              in building scalable, maintainable applications without writing a
              single line of code.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We've helped startups, enterprises, and everything in between
              launch MVPs, automate workflows, and create internal tools that
              drive real business results - all in a fraction of the time and
              cost of traditional development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-dark-gray p-4 rounded-lg">
                <p className="text-[#c5fa00] text-3xl font-bold">100+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-dark-gray p-4 rounded-lg">
                <p className="text-[#c5fa00] text-3xl font-bold">85%</p>
                <p className="text-gray-400">Time Saved</p>
              </div>
              <div className="bg-dark-gray p-4 rounded-lg">
                <p className="text-[#c5fa00] text-3xl font-bold">50+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-gray rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold mb-6">Our No-Code Toolbox</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-black/30 rounded-lg"
                >
                  <div className="bg-black/50 p-3 rounded-lg">{tool.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{tool.name}</h4>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Placeholder */}
            <div className="mt-8 bg-black/30 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Recent Projects</h3>
              <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-none">
                {[1, 2, 3].map((item) => (
                  <div 
                    key={item} 
                    className="min-w-[250px] h-[150px] bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center border border-gray-700"
                  >
                    <p className="text-[#c5fa00]">Project {item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
