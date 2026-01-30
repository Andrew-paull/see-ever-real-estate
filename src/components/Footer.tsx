const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-serif italic text-primary-foreground">
              SeeEver
            </span>
            <span className="text-xs text-gold uppercase tracking-widest ml-2">
              Realestate
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a href="#properties" className="hover:text-gold transition-colors">
              Properties
            </a>
            <a href="#about" className="hover:text-gold transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
          </div>
          
          <p className="text-sm text-primary-foreground/40">
            © 2025 SeeEver Realestate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
