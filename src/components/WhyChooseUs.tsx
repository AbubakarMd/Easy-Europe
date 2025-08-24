import { DollarSign, Award, Shield, Clock, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import consultancyImage from "@/assets/consultancy-office.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Transparent pricing with no hidden fees. Quality service at competitive rates."
    },
    {
      icon: Award,
      title: "Experienced",
      description: "Years of experience in guiding students successfully to European universities."
    },
    {
      icon: Shield,
      title: "Trustworthy",
      description: "Genuine support and proven success stories. Your success is our reputation."
    },
    {
      icon: Clock,
      title: "Timely Support",
      description: "Quick response times and deadline-focused approach to applications."
    },
    {
      icon: Heart,
      title: "Personal Care",
      description: "Individual attention and customized solutions for each student's needs."
    },
    {
      icon: TrendingUp,
      title: "High Success Rate",
      description: "95% visa approval rate with comprehensive preparation and guidance."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose Easy Europe?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We stand apart with our commitment to transparency, expertise, and genuine care for each student's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
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
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={consultancyImage}
                alt="Professional consultancy office with advisors helping students"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-gradient-card p-6 rounded-xl border shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
              <div className="text-center bg-gradient-card p-6 rounded-xl border shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Visa Success Rate</div>
              </div>
              <div className="text-center bg-gradient-card p-6 rounded-xl border shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Partner Universities</div>
              </div>
              <div className="text-center bg-gradient-card p-6 rounded-xl border shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="space-y-4">
                <p className="text-foreground italic">
                  "Easy Europe made my dream of studying in Germany a reality. Their transparent process 
                  and expert guidance helped me secure admission and visa without any hassle."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">PR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Priya Sharma</div>
                    <div className="text-sm text-muted-foreground">MS in Computer Science, Germany</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;