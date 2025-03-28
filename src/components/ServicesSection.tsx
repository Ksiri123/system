
import React from "react";
import { Button } from "@/components/ui/button";
import { Code, Server, Zap, Paintbrush, ChevronRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "MVP Development",
      icon: <Code className="h-10 w-10 text-[#c5fa00]" />,
      description:
        "Launch your product idea in weeks, not months. Test market fit fast with a fully functional MVP.",
    },
    {
      title: "Enterprise Solutions",
      icon: <Server className="h-10 w-10 text-[#c5fa00]" />,
      description:
        "Scalable no-code applications that integrate with your existing systems and handle enterprise-level loads.",
    },
    {
      title: "Internal Tool Automation",
      icon: <Zap className="h-10 w-10 text-[#c5fa00]" />,
      description:
        "Streamline your operations with custom internal tools built in a fraction of the time and cost.",
    },
    {
      title: "UI/UX Design",
      icon: <Paintbrush className="h-10 w-10 text-[#c5fa00]" />,
      description:
        "Beautiful, intuitive interfaces designed for your users. We make complex systems feel simple.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c5fa00] opacity-10 rounded-full filter blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#c5fa00]/10 text-[#c5fa00] px-4 py-1 rounded-full font-medium text-sm mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building Your Vision with No-Code Solutions
          </h2>
          <p className="text-gray-300 text-lg">
            We specialize in creating powerful software solutions without writing
            code, saving you time and money while delivering exceptional results in digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-dark-gray border border-gray-800 rounded-xl p-6 h-full flex flex-col"
            >
              <div className="bg-black/50 p-4 rounded-lg w-fit mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              <Button variant="ghost" className="justify-start p-0 hover:text-[#c5fa00] group">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-dark-gray hover:bg-dark-gray/80 border border-gray-800 text-white px-8 py-6">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
