import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif italic text-primary-foreground">
              SeeEver
            </span>
            <span className="text-xs text-gold uppercase tracking-widest hidden sm:block">
              Realestate
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#properties"
              className="text-primary-foreground/80 hover:text-gold transition-colors"
            >
              Properties
            </a>
            <a
              href="#about"
              className="text-primary-foreground/80 hover:text-gold transition-colors"
            >
              Why Invest
            </a>
            <a
              href="#contact"
              className="text-primary-foreground/80 hover:text-gold transition-colors"
            >
              Contact
            </a>
            <Button
              variant="secondary"
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Schedule Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/10">
            <div className="flex flex-col gap-4">
              <a
                href="#properties"
                className="text-primary-foreground/80 hover:text-gold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Properties
              </a>
              <a
                href="#about"
                className="text-primary-foreground/80 hover:text-gold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Why Invest
              </a>
              <a
                href="#contact"
                className="text-primary-foreground/80 hover:text-gold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button
                variant="secondary"
                className="gap-2 w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                Schedule Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
