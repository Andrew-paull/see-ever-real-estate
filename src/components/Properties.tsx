import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Light Cosmetic Rehab Opportunity",
    location: "New Port Richey, FL 34653",
    price: "$399,990",
    arv: "$630,000",
    beds: 4,
    baths: 3,
    sqft: "2,400 SqFt",
    tag: "Hot Deal",
  },
  {
    image: property2,
    title: "Cash-Flowing Investment Property",
    location: "Orlando, FL 32808",
    price: "$205,000",
    arv: "$300,000",
    beds: 2,
    baths: 2,
    sqft: "979 SqFt",
    tag: "Tenant Occupied",
  },
  {
    image: property3,
    title: "Vacant Land - Development Ready",
    location: "Clearwater, FL 33760",
    price: "Contact for Price",
    arv: "High Upside",
    beds: 0,
    baths: 0,
    sqft: "0.28 Acres",
    tag: "Pre-Approved",
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium uppercase tracking-widest text-sm"
          >
            Featured Listings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4"
          >
            Investment Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Hand-picked opportunities across Central Florida with exceptional 
            profit potential for savvy investors.
          </motion.p>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              {...property}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
