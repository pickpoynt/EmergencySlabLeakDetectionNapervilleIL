import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-plumbing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional slab leak detection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-medium mb-6">
              Serving Naperville & DuPage County
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Emergency Slab Leak Detection in Naperville, IL
            <span className="block text-gradient-copper mt-2">Precision & Speed.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-delay-1">
            Don't let a hidden leak damage your foundation. We use advanced electronic detection to find leaks deep under concrete without destruction. Available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 px-8" asChild>
              <a href="tel:+18777921410" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: (877) 792-1410
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-delay-3">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-copper-light" />
              </div>
              <div>
                <span className="font-heading font-semibold block">Licensed & Insured</span>
                <span className="text-sm text-primary-foreground/70">100% Guaranteed</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-copper-light" />
              </div>
              <div>
                <span className="font-heading font-semibold block">24/7 Emergency</span>
                <span className="text-sm text-primary-foreground/70">Rapid Response</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-copper-light" />
              </div>
              <div>
                <span className="font-heading font-semibold block">Top Rated</span>
                <span className="text-sm text-primary-foreground/70">Naperville Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
