import { Button } from "@/components/ui/enhanced-button"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">MIFCOB</h3>
            <p className="text-background/80">
              Su experto en microfinanzas. Líder en América Latina y el Caribe 
              en desarrollo de capacidades empresariales y consultoría especializada.
            </p>
            <div className="flex space-x-4">
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
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Quiénes Somos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Misión y Visión</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Objetivos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facilitadores</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Capacitación Online</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Microfinanzas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Análisis Crediticio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gestión Empresarial</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Información</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold">🏢</span>
                <span>MIFCOB S.R.L</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-bold">📄</span>
                <span>RNC: 131-45250-7</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>América Latina y el Caribe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Microfinance Consulting & Business (MIFCOB) S.R.L. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-background/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer