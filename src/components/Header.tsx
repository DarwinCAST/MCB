import logo from "@/assets/SmallLogo.png";
import { Button } from "./ui/enhanced-button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b  border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/Home">
              <img src={logo} alt="MCB Logo" className="h-24 w-40" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/Courses"
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-xl"
            >
              Capacitaciones
            </Link>
          
            <a
              href="#nosotros"
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-xl"
            >
              Nosotros
            </a>
            <Link
              to="/Facilitors"
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-xl"
            >
              Facilitadores
            </Link>
            <a
              href="#contacto"
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-xl"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
