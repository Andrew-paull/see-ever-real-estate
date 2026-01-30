import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import WhyInvest from "@/components/WhyInvest";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Properties />
      <WhyInvest />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
