import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Shlumzi built our entire customer portal in just 3 weeks. What would have taken months with traditional development was done in record time with no compromises on quality.",
      author: "Sarah Johnson",
      title: "CEO, TechStart",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      quote:
        "Working with the Shlumzi team was eye-opening. They took our complex workflow and automated it completely without writing a single line of code. The ROI has been incredible.",
      author: "Mark Thompson",
      title: "COO, LogisticsPlus",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 3,
      quote:
        "I was skeptical about no-code at first, but Shlumzi delivered a solution that exceeded our expectations. It's flexible, scalable, and we can maintain it ourselves.",
      author: "Jessica Chen",
      title: "Product Director, HealthTech",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-dark-gray/50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-light-orange/10 text-light-orange px-4 py-1 rounded-full font-medium text-sm mb-4 inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="text-light-orange">Clients</span> Say
          </h2>
          <p className="text-gray-300 text-lg">
            Don't just take our word for it. Hear from the businesses that have
            transformed their operations with our no-code solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-dark-gray border border-gray-800 rounded-2xl p-8 md:p-10">
            <div className="absolute -top-6 -left-6 bg-black p-4 rounded-xl border border-gray-800">
              <Quote className="h-8 w-8 text-orange" />
            </div>

            <div key={testimonials[currentIndex].id} className="animate-fade-in">
              <blockquote className="text-xl md:text-2xl mb-8 text-gray-200 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-orange"
                />
                <div>
                  <p className="font-semibold text-white">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-10 flex space-x-3">
              <Button
                onClick={prevTestimonial}
                size="icon"
                variant="outline"
                className="h-10 w-10 rounded-full border-gray-700 hover:border-orange bg-dark text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={nextTestimonial}
                size="icon"
                variant="outline"
                className="h-10 w-10 rounded-full border-gray-700 hover:border-orange bg-dark text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange w-10" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
