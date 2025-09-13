import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Target, Eye, Heart } from "lucide-react"
import missionImage from "@/assets/mission-image.jpeg"

const MissionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Misión, Visión y Valores
          </h2>
          <div className="w-24 h-1 bg-MCBSecundary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <Card variant="elevated" className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                <div className="p-3 bg-MCBSecundary/10 rounded-lg">
                  <Target className="w-6 h-6 text-MCBSecundary" />
                </div>
                <CardTitle className="text-2xl">Misión</CardTitle>
              </CardHeader>
              <CardContent className="">
                <p className="text-muted-foreground text-lg">
                  Capacitar y asesorar estratégicamente a instituciones, emprendedores y profesionales 
                  en microfinanzas, análisis crediticio, gestión de negocios y cumplimiento tributario. 
                  Proporcionamos soluciones innovadoras basadas en conocimiento profundo para maximizar 
                  el potencial de nuestros clientes y asegurar su cumplimiento normativo.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated" className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                <div className="p-3 bg-MCBSecundary/10 rounded-lg">
                  <Eye className="w-6 h-6 text-MCBSecundary" />
                </div>
                <CardTitle className="text-2xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Ser la consultora líder y referente en América Latina y el Caribe en desarrollo 
                  de capacidades empresariales en microfinanzas, análisis crediticio, negocios e 
                  impuestos, impulsando la sostenibilidad y el crecimiento económico inclusivo.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img 
              src={missionImage} 
              alt="Mission and values concept" 
              className="w-full rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-primary-gradient opacity-20 rounded-lg"></div>
          </div>
        </div>

        <Card variant="glass" className="animate-fade-in">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-MCBSecundary/10 rounded-full">
                <Heart className="w-8 h-8 text-MCBSecundary" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Nuestros Valores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-MCBSecundary font-bold">E</span>
                </div>
                <h4 className="font-semibold mb-2 text-2xl">Excelencia</h4>
                <p className="text-lg text-muted-foreground">
                  Ofrecemos servicios de la más alta calidad, superando expectativas a través de 
                  la actualización constante y búsqueda de mejora continua.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-MCBSecundary font-bold">I</span>
                </div>
                <h4 className="font-semibold mb-2 text-2xl">Integridad</h4>
                <p className="text-lg text-muted-foreground">
                  Actuamos con transparencia, honestidad y ética profesional. Construimos 
                  relaciones de confianza basadas en confidencialidad y respeto.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-MCBSecundary font-bold">I</span>
                </div>
                <h4 className="font-semibold mb-2 text-2xl">Impacto Social</h4>
                <p className="text-lg text-muted-foreground">
                  Creemos en el poder transformador de la educación para generar impacto 
                  positivo y empoderar a nuestros clientes.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-MCBSecundary font-bold">I</span>
                </div>
                <h4 className="font-semibold mb-2 text-2xl">Innovación</h4>
                <p className="text-lg text-muted-foreground">
                  Buscamos constantemente nuevas metodologías y herramientas para abordar 
                  los desafíos de nuestros clientes.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-MCBSecundary font-bold">C</span>
                </div>
                <h4 className="font-semibold mb-2 text-2xl">Colaboración</h4>
                <p className="text-lg text-muted-foreground">
                  Valoramos el trabajo en equipo interno y con clientes. La sinergia 
                  conduce a los mejores resultados.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-MCBSecundary font-bold">O</span>
                </div>
                <h4 className="font-semibold mb-2 text-2xl">Orientación al Cliente</h4>
                <p className="text-lg text-muted-foreground">
                  La satisfacción del cliente es nuestra prioridad. Diseñamos soluciones 
                  personalizadas para alcanzar sus metas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default MissionSection