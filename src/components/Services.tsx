import { 
  GraduationCap, 
  FileText, 
  BookOpen, 
  DollarSign, 
  FileCheck, 
  AlertTriangle,
  Home,
  Plane,
  MapPin
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Helping you choose the right university based on your goals, budget, and eligibility."
    },
    {
      icon: FileText,
      title: "Application Guidance", 
      description: "Step-by-step help to prepare and submit your applications accurately and on time."
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description: "IELTS, TOEFL, and other test prep to boost your chances of admission."
    },
    {
      icon: DollarSign,
      title: "Financial Planning",
      description: "Guidance on budgeting, scholarships, and education loans for your journey."
    },
    {
      icon: FileCheck,
      title: "Visa Assistance",
      description: "Complete visa support, from documentation to interview preparation."
    },
    {
      icon: AlertTriangle,
      title: "Visa Problem Solving",
      description: "Solutions for complex visa issues and reapplication guidance."
    },
    {
      icon: Home,
      title: "Accommodation Support",
      description: "Finding safe, affordable housing before you arrive in Europe."
    },
    {
      icon: Plane,
      title: "Pre-departure Briefings",
      description: "Travel checklists, packing tips, and cultural advice for your move."
    },
    {
      icon: MapPin,
      title: "Settling in Europe",
      description: "Help with bank accounts, transportation, and adapting to life abroad."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From university selection to settling in Europe, we provide end-to-end support 
            for your educational journey. Our expert team is with you every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-smooth border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl border shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your European Education Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let our experts guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/34663173823"
                className="inline-flex items-center justify-center px-6 py-3 bg-success text-success-foreground rounded-lg font-medium hover:bg-success/90 transition-smooth"
              >
                Get Free Consultation
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-smooth"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;