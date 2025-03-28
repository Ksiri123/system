
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CaseStudiesSection = () => {
  // Mock client logos - in a real implementation, these would be imported images
  const clients = [
    { name: "Tesla", industry: "Automotive" },
    { name: "Airbnb", industry: "Hospitality" },
    { name: "Shopify", industry: "E-commerce" },
    { name: "Slack", industry: "Communication" },
    { name: "Uber", industry: "Transportation" },
    { name: "Spotify", industry: "Entertainment" },
    { name: "Dropbox", industry: "Storage" },
    { name: "Microsoft", industry: "Technology" },
  ];

  return (
    <section
      id="case-studies"
      className="py-20 md:py-32 bg-dark-gray/50 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-neon/10 text-neon px-4 py-1 rounded-full font-medium text-sm mb-4 inline-block">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="text-neon">Innovators</span> Worldwide
          </h2>
          <p className="text-gray-300 text-lg">
            We've helped businesses of all sizes transform their ideas into 
            powerful no-code applications that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-dark-gray hover:bg-dark-gray/80 border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-neon/50 group"
            >
              <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-neon">{client.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-medium text-white group-hover:text-neon transition-colors">
                {client.name}
              </h3>
              <p className="text-sm text-gray-400">{client.industry}</p>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="bg-black/30 border border-gray-800 rounded-xl p-8 md:p-10 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="bg-neon/10 text-neon px-3 py-1 text-xs rounded-full mb-4 inline-block">
                Featured Case Study
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How We Helped XYZ Launch Their Platform in 4 Weeks
              </h3>
              <p className="text-gray-300 mb-6">
                XYZ needed to quickly validate their marketplace idea without 
                investing in expensive custom development. We built a fully
                functional MVP using no-code tools that allowed them to launch,
                iterate, and secure seed funding.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon rounded-full mr-3"></span>
                  <span className="text-gray-300">90% faster time to market</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon rounded-full mr-3"></span>
                  <span className="text-gray-300">$150K saved in development costs</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neon rounded-full mr-3"></span>
                  <span className="text-gray-300">Secured $2M in seed funding</span>
                </li>
              </ul>
              <Button className="bg-neon text-dark hover:bg-neon/90">
                Read Full Case Study
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-dark-gray to-black rounded-xl border border-gray-800 h-80 flex items-center justify-center">
              <span className="text-neon text-4xl font-bold">XYZ</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-dark-gray hover:bg-dark-gray/80 border border-gray-800 text-white px-8 py-6"
          >
            See Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
