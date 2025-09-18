import { useState } from "react";
import logo from "@/assets/SmallLogo.png";
import { Button } from "./ui/enhanced-button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/Home">
              <img src={logo} alt="MCB Logo" className="h-20 w-32 sm:h-24 sm:w-40" />
            </Link>
          </div>

          {/* Botón Hamburguesa en móviles */}
          <button
            className="md:hidden p-2 text-foreground hover:text-lime-700 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menú desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/Courses"
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-xl"
            >
              Capacitaciones
            </Link>
            <Link
              to="/AboutUs"
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-xl"
            >
              Nosotros
            </Link>
            <Link
              to="/Facilitors"
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-xl"
            >
              Facilitadores
            </Link>
            <Link
              to="/Contact"
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-xl"
            >
              Contacto
            </Link>
          </nav>
        </div>

        {/* Menú móvil desplegable */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link
              to="/Courses"
              onClick={() => setOpen(false)}
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-lg"
            >
              Capacitaciones
            </Link>
            <Link
              to="/AboutUs"
              onClick={() => setOpen(false)}
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-lg"
            >
              Nosotros
            </Link>
            <Link
              to="/Facilitors"
              onClick={() => setOpen(false)}
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-lg"
            >
              Facilitadores
            </Link>
            <Link
              to="/Contact"
              onClick={() => setOpen(false)}
              className="text-foreground hover:text-lime-700 transition-colors font-bold text-lg"
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
