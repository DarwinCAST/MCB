import { Button } from "@/components/ui/enhanced-button"
import { MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid gap-8 mb-12
            md:grid-cols-2 lg:grid-cols-4
            text-center md:text-left          /* centra texto solo en móviles */
          "
        >
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold">MIFCOB</h3>
            <p className="text-background/80">
              Su experto en microfinanzas. Líder en América Latina y el Caribe
              en desarrollo de capacidades empresariales y consultoría especializada.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/AboutUs" className="hover:text-primary transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/Home" className="hover:text-primary transition-colors">MicroFinance</Link></li>
              <li><Link to="/Courses" className="hover:text-primary transition-colors">Cursos</Link></li>
              <li><Link to="/Facilitors" className="hover:text-primary transition-colors">Facilitadores</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Capacitación Online</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Microfinanzas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Análisis Crediticio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gestión Empresarial</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold">Información</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-primary font-bold">🏢</span>
                <span>MIFCOB S.R.L</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-primary font-bold">📄</span>
                <span>RNC: 131-45250-7</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>América Latina y el Caribe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            border-t border-background/20 pt-8
            flex flex-col md:flex-row
            items-center md:items-start
            justify-center md:justify-between
            text-center md:text-left
          "
        >
          <p className="text-background/60 text-sm">
            © 2024 Microfinance Consulting & Business (MIFCOB) S.R.L. Todos los derechos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
