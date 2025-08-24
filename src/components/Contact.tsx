import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to start your European education journey? Reach out to our expert team 
            for personalized guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+34 663 173 823</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for urgent queries</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+34 663 173 823</p>
                    <p className="text-sm text-muted-foreground">Quick responses & document sharing</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@easyeurope.com</p>
                    <p className="text-sm text-muted-foreground">Detailed inquiries & documentation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Office Locations
              </h3>
              <div className="space-y-6">
                {/* Barcelona Office */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">Barcelona, Spain</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          European Operations Hub
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          Mon-Fri: 9:00 AM - 6:00 PM CET
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* New Delhi Office */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">New Delhi, India</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          Student Support Center
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          Mon-Sat: 10:00 AM - 8:00 PM IST
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border/50 shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Interested Country</label>
                    <Input placeholder="e.g., Germany, Netherlands, Spain" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your study abroad goals and how we can help..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card p-8 rounded-2xl border shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is ready to help you with your questions and provide expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-success hover:bg-success/90" 
                asChild
              >
                <a href="https://wa.me/34663173823" className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Now</span>
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary/5"
                asChild
              >
                <a href="tel:+34663173823" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;