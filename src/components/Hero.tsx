import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-students-europe.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students exploring European architecture and universities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Gateway
            <br />
            <span className="text-secondary">to Studying</span>
            <br />
            in Europe.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Expert support from choosing the right university to making 
            a smooth move abroad. Transform your dream of European education into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href="#services" className="flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <div className="flex gap-3">
              <Button
    size="lg"
    className="bg-white text-blue-600 font-semibold px-6 py-4 border border-blue-600 hover:bg-green-600 hover:text-white transition"
    asChild
  >
    <a href="https://wa.me/34663173823" className="flex items-center space-x-2">
      <MessageCircle className="w-5 h-5" />
      <span>WhatsApp Us</span>
    </a>
  </Button>
              
              <Button
    size="lg"
    className="bg-white text-blue-600 font-semibold px-6 py-4 border border-blue-600 hover:bg-black hover:text-white transition"
    asChild
  >
    <a href="tel:+34663173823" className="flex items-center space-x-2">
      <Phone className="w-5 h-5" />
      <span>Call Now</span>
    </a>
  </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-white/80">Students Placed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-white/80">Partner Universities</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">2</div>
              <div className="text-sm text-white/80">Office Locations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">95%</div>
              <div className="text-sm text-white/80">Visa Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;