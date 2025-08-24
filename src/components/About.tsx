import { CheckCircle, MapPin, Users, Award } from "lucide-react";
import aboutImage from "@/assets/university-campus.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About Easy Europe
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Easy Europe is a student-focused consultancy helping Indian students pursue higher education in Europe. 
                With offices in Barcelona and New Delhi, we provide transparent, affordable, and personalized support 
                at every stage—from university selection to settling abroad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our experienced team simplifies complex visa processes, assists with test prep, accommodation, 
                and pre-departure planning. We pride ourselves on genuine guidance, cultural understanding, 
                and a strong track record of successful student placements.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Transparent Process</h3>
                  <p className="text-sm text-muted-foreground">No hidden fees, clear communication</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Two Office Locations</h3>
                  <p className="text-sm text-muted-foreground">Barcelona & New Delhi</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Years of experience in education</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Proven Success</h3>
                  <p className="text-sm text-muted-foreground">95% visa success rate</p>
                </div>
              </div>
            </div>

            {/* Trust Statement */}
            <div className="bg-gradient-card p-6 rounded-xl border shadow-soft">
              <p className="text-foreground font-medium italic">
                "Your dream of studying in Europe starts with the right partner—and that's us."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={aboutImage}
                alt="Modern European university campus with students"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-strong border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;