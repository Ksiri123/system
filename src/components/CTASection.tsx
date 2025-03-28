
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Form submitted!",
      description: "We'll get back to you shortly.",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-dark-gray/50 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon opacity-10 rounded-full filter blur-[100px] z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-dark rounded-2xl border border-gray-800 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-black/30">
              <h2 className="text-3xl font-bold mb-6">
                Ready to build your{" "}
                <span className="text-neon">dream project?</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how we can help you launch your project 10x faster
                with no-code solutions. Fill out the form and we'll get back to
                you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center">
                    <span className="text-neon font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Tell us about your project</h3>
                    <p className="text-gray-400 text-sm">
                      We'll help you identify the best no-code solution
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center">
                    <span className="text-neon font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Get a free consultation</h3>
                    <p className="text-gray-400 text-sm">
                      Our experts will review your requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center">
                    <span className="text-neon font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Launch faster than ever</h3>
                    <p className="text-gray-400 text-sm">
                      Start building and see results in weeks, not months
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-dark-gray border-gray-700 focus:border-neon"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-dark-gray border-gray-700 focus:border-neon"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="project"
                    placeholder="Tell us about your project..."
                    className="bg-dark-gray border-gray-700 focus:border-neon min-h-[150px]"
                    required
                  />
                </div>

                <Button className="w-full bg-neon text-dark hover:bg-neon/90 py-6 text-lg">
                  Let's Talk
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-neon hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-neon hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
