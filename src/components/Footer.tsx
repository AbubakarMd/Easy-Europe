import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/MAIN-LOGO-yellow.png"; // ✅ Import logo


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
             <a href="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Easy Europe Logo"
              className="h-10 w-auto"
            />
          </a>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for pursuing higher education in Europe. 
              Transparent, affordable, and personalized support for Indian students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">University Selection</li>
              <li className="text-primary-foreground/80">Application Guidance</li>
              <li className="text-primary-foreground/80">Visa Assistance</li>
              <li className="text-primary-foreground/80">Test Preparation</li>
              <li className="text-primary-foreground/80">Accommodation Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">+34 663 173 823</p>
                  <p className="text-sm text-primary-foreground/60">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">WhatsApp</p>
                  <p className="text-sm text-primary-foreground/60">Quick Response</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">info@easyeurope.com</p>
                  <p className="text-sm text-primary-foreground/60">Email Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">Barcelona & New Delhi</p>
                  <p className="text-sm text-primary-foreground/60">Office Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Easy Europe. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;