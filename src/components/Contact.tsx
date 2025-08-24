import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      country: form.country.value,
      message: form.message.value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwFIHVm_o7ePW3sXVJ38uoyRwxnCdx7TRqI426_LRswooeaJNS44TJ0sog6UwbWkrAp/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Error: " + error.message);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to start your European education journey? Reach out to our
            expert team for personalized guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side (Info) - unchanged */}
          {/* ... your existing contact info + offices code ... */}

          {/* Contact Form */}
          <div>
            <Card className="border-border/50 shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input name="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input name="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input type="email" name="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input type="tel" name="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Interested Country
                    </label>
                    <Input name="country" placeholder="e.g., Germany, Netherlands, Spain" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your study abroad goals and how we can help..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full" size="lg" type="submit">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  {status && <p className="text-sm mt-2">{status}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
