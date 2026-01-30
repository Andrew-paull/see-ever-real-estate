import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium uppercase tracking-widest text-sm">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Ready to Start Investing?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a free consultation call and discover how we can help you 
              build wealth through Florida real estate investments.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="text-foreground font-medium">Contact for Number</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="text-foreground font-medium">info@seeeverrealestate.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Orlando, Florida</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Schedule a Call
            </h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-background"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-background"
                />
              </div>
              
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-background"
              />
              
              <Input
                type="tel"
                placeholder="Phone Number"
                className="bg-background"
              />
              
              <Textarea
                placeholder="Tell us about your investment goals..."
                className="bg-background min-h-[120px]"
              />
              
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 bg-gradient-gold text-navy-dark hover:opacity-90"
              >
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
