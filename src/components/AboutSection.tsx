import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-MCBSecundary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Microfinance Consulting & Business nace en el 2008, constituida por un equipo de 
            profesionales de diferentes áreas como el sector financiero, bancario, tributario, 
            agropecuario y empresarial para contribuir con el desarrollo y fortalecimiento del 
            personal de las instituciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card variant="glass" className="animate-slide-in">
              <CardHeader>
                <CardTitle className=" font-bold">Nuestra Actividad Principal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Actualmente la mayor actividad de MIFCOB se desarrolla en línea, implementando 
                  programas, proyectos y actividades de capacitación, desarrollo empresarial del 
                  sector de Micro y Pequeñas Empresas, instituciones microfinancieras, bancos de 
                  desarrollo y cooperativas.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="animate-slide-in">
              <CardHeader>
                <CardTitle className=" font-bold">Nuestro Enfoque</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nos especializamos en microfinanzas, análisis crediticio, gestión de negocios 
                  y cumplimiento tributario, dotando a nuestros clientes de las técnicas y 
                  herramientas necesarias para su crecimiento laboral y profesional.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-soft animate-fade-in">
              <div className="text-3xl font-bold text-MCBSecundary mb-2">2008</div>
              <div className="text-sm text-muted-foreground">Año de Fundación</div>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-soft animate-fade-in">
              <div className="text-3xl font-bold text-MCBSecundary mb-2">19+</div>
              <div className="text-sm text-muted-foreground">Talleres Especializados</div>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-soft animate-fade-in">
              <div className="text-3xl font-bold text-MCBSecundary mb-2">LATAM</div>
              <div className="text-sm text-muted-foreground">Alcance Regional</div>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20 shadow-soft animate-fade-in">
              <div className="text-3xl font-bold text-MCBSecundary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Modalidad Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection