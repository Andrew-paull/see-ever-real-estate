import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Ruler, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  arv: string;
  beds: number;
  baths: number;
  sqft: string;
  tag?: string;
  delay?: number;
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  arv,
  beds,
  baths,
  sqft,
  tag,
  delay = 0,
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {tag && (
          <Badge className="absolute top-4 left-4 bg-success text-white">
            {tag}
          </Badge>
        )}
        <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-primary-foreground font-semibold">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <MapPin className="w-4 h-4 text-gold" />
          <span>{location}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="w-4 h-4" />
            <span>{sqft}</span>
          </div>
        </div>

        {/* ARV */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-muted-foreground">ARV</span>
          </div>
          <span className="text-lg font-bold text-success">{arv}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
