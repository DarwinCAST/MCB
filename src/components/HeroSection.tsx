import { Button } from "@/components/ui/enhanced-button";
import heroImage from "@/assets/hero-image.jpeg";
import logo from "@/assets/SmallLogo.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section
        id="contacto"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-MCB"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Microfinance consulting environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0  opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src={logo}
              alt="MCB - Microfinance Consulting & Business"
              className="h-32 mx-auto mb-4"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-slide-in">
            MICROFINANCE CONSULTING & BUSINESS
            <span className="block text-2xl md:text-3xl text-accent-light mt-4 font-normal">
              Su Experto en Microfinanzas
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 animate-scale-in">
            Líder en América Latina y el Caribe en desarrollo de capacidades
            empresariales, microfinanzas, análisis crediticio y gestión
            tributaria.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Link to="/Courses">
              <Button variant="glass" size="xl">
                Capacitaciones
              </Button>
            </Link>
            <Link to="/AboutUs">
              <Button variant="hero" size="xl">
                Conoce Más
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
