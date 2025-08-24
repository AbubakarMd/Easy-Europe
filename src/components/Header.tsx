import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/MAIN-LOGO-WB.png"; // ✅ Import your logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ✅ Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Easy Europe Logo"
              className="h-10 w-auto" // Adjust size as needed
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About Us
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#why-choose-us" className="text-foreground hover:text-primary transition-smooth">
              Why Choose Us
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-smooth">
              Blog
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-blue-600 border border-blue-600 hover:bg-black hover:text-white transition"
              asChild
            >
              <a href="tel:+34663173823" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </Button>

            <Button
              size="sm"
              className="bg-white text-blue-600 border border-blue-600 hover:bg-green-600 hover:text-white transition"
              asChild
            >
              <a href="https://wa.me/34663173823" className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-smooth px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-smooth px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#why-choose-us"
                className="text-foreground hover:text-primary transition-smooth px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a
                href="#blog"
                className="text-foreground hover:text-primary transition-smooth px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-smooth px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-3 px-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white text-blue-600 border border-blue-600 hover:bg-black hover:text-white transition"
                  asChild
                >
                  <a href="tel:+34663173823" className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-white text-blue-600 border border-blue-600 hover:bg-green-600 hover:text-white transition"
                  asChild
                >
                  <a
                    href="https://wa.me/34663173823"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
