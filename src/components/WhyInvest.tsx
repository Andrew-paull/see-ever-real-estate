import { motion } from "framer-motion";
import { 
  Target, 
  Shield, 
  TrendingUp, 
  Users, 
  MapPin, 
  Lightbulb 
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Off-Market Deals",
    description: "Access to exclusive properties before they hit the market.",
  },
  {
    icon: Shield,
    title: "Vetted Investments",
    description: "Every property is thoroughly analyzed for maximum ROI potential.",
  },
  {
    icon: TrendingUp,
    title: "High Returns",
    description: "Average 50%+ ROI on fix & flip projects across our portfolio.",
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Connections to contractors, lenders, and title companies.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep knowledge of Orlando and Central Florida markets.",
  },
  {
    icon: Lightbulb,
    title: "Full Transparency",
    description: "Complete property details, comps, and renovation estimates.",
  },
];

const WhyInvest = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-navy">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium uppercase tracking-widest text-sm"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4"
          >
            Your Partner in Real Estate Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg"
          >
            We bring you the best investment opportunities with full transparency
            and expert guidance every step of the way.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-navy-dark" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
