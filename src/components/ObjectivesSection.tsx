import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { TrendingUp, Users, Globe, Lightbulb } from "lucide-react"
import objectivesImage from "@/assets/general-objetives.jpeg"

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: TrendingUp,
      title: "Liderazgo Efectivo",
      description: "Crear un ambiente idóneo que potencie las competencias profesionales y permita expresar los talentos de cada miembro del equipo para alcanzar el rendimiento pretendido."
    },
    {
      icon: Users,
      title: "Gestión de Cobranzas",
      description: "Capacitar en el proceso de cobranza como el círculo de la venta, considerado el pulmón de la empresa para recuperar la inversión realizada."
    },
    {
      icon: Globe,
      title: "Administración Comercial",
      description: "Dotar de mecanismos, herramientas y estrategias para administrar sucursales comerciales y lograr crecimiento sostenido."
    },
    {
      icon: Lightbulb,
      title: "Desarrollo Emprendedor",
      description: "Contribuir a la formación de empleados y personas de escasos recursos en la creación de una cultura emprendedora para nuevos negocios."
    }
  ]

  return (
    <section className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Objetivos Generales de las Capacitaciones
          </h2>
          <div className="w-24 h-1 bg-MCBSecundary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Nuestros objetivos de capacitación están diseñados para mejorar habilidades, 
            destrezas y competencias profesionales que permitan el crecimiento sostenible 
            de instituciones y profesionales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative order-2 lg:order-1">
            <img 
              src={objectivesImage} 
              alt="Strategic objectives and planning" 
              className="w-full rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-MCBSecundary-gradient opacity-10 rounded-lg"></div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            {objectives.map((objective, index) => (
              <Card 
                key={index} 
                variant="glass" 
                className="group hover:shadow-elegant transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="flex flex-row items-start space-y-0 space-x-4 pb-4">
                  <div className="p-3 bg-MCBSecundary/10 rounded-lg group-hover:bg-MCBSecundary/20 transition-colors">
                    <objective.icon className="w-6 h-6 text-MCBSecundary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{objective.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-lg">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
       
      </div>
    </section>
  )
}

export default ObjectivesSection