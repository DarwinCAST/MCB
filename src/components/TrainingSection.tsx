import { Award, BookOpen, CheckCircle, DollarSign, MessageCircle, Users } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/enhanced-card'
import { Badge } from './ui/badge'
import { Button } from './ui/enhanced-button'

export default function TrainingSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Cuerpo Docente Section */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4" style={{ color: "#a18700" }}>
              <Users className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Cuerpo Docente</h2>
            </div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto text-pretty">
              Contamos con instructores capacitados en diferentes campos profesionales, de acuerdo a la acción a
              impartir que cuentan con las competencias técnicas y conductuales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#a18700" }}
                >
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Competencias Técnicas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg">
                  Instructores especializados en sus campos profesionales con amplia experiencia práctica
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#4a5952" }}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Herramientas Metodológicas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg">
                  Metodologías modernas y herramientas pedagógicas actualizadas para optimizar el aprendizaje
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#a18700" }}
                >
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Habilidades Conductuales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-lg">
                  Capacidades para desarrollar guías pedagógicas que facilitan el proceso de enseñanza-aprendizaje
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Metodología Section */}
        <section className="py-16 px-8 rounded-2xl" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4" style={{ color: "#4a5952" }}>
              <BookOpen className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Aspectos Metodológicos</h2>
            </div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto text-pretty">
              Metodología participativa y dialógica que motiva la reflexión y análisis según necesidades específicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: "#a18700" }}>
                  <MessageCircle className="w-5 h-5" />
                  Rompiendo el Hielo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-lg">Dinámica de la Pelota (10 min)</h4>
                  <p className="text-base text-slate-600">
                    Presentación bajo esquema: Nombre, comunidad, puesto, expectativas y motivación
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-lg">Dinámica Grupal</h4>
                  <p className="text-base text-slate-600">
                    Participantes escriben en tarjetas individuales sobre liderazgo, mejores prácticas y herramientas
                    administrativas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: "#4a5952" }}>
                  <BookOpen className="w-5 h-5 text-xl" />
                  Exposición Interactiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="text-lg">
                    Requiere Proyector
                  </Badge>
                  <p className="text-slate-600 text-base">
                    El facilitador expone conceptos en PowerPoint con visualización en pantalla
                  </p>
                  <p className="text-slate-600 text-base">
                    Los participantes pueden realizar comentarios y preguntas en todo momento para mantener el diálogo
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Evaluación Section */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4" style={{ color: "#a18700" }}>
              <CheckCircle className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Sistema de Evaluación</h2>
            </div>
          </div>

          <Card className="border-2 max-w-7xl mx-auto">
            <CardHeader className="text-center" style={{ backgroundColor: "#4a5952" }}>
              <CardTitle className="text-white text-xl">Evaluación Continua</CardTitle>
              <CardDescription className="text-slate-200 text-lg">Al finalizar cada sesión</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg" style={{ color: "#a18700" }}>
                    Métodos de Evaluación
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className=" text-lg w-4 h-4 text-green-600" />
                      <span>Fichas de evaluación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-lg w-4 h-4 text-green-600" />
                      <span>Cuestionarios estructurados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Calificación del desarrollo del taller</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg" style={{ color: "#4a5952" }}>
                    Retroalimentación
                  </h4>
                  <p className="text-slate-600">
                    Se tomarán en consideración todas las recomendaciones de los participantes para mejorar
                    continuamente nuestros programas de capacitación.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cierre Section */}
        <section className="py-16 px-8 rounded-2xl" style={{ backgroundColor: "#4a5952" }}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Cierre de Talleres</h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: "#a18700" }}
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Despedida</h3>
                    <p className="text-slate-600">
                      Cierre formal del taller con síntesis de aprendizajes y próximos pasos
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: "#4a5952" }}
                    >
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Preguntas y Respuestas</h3>
                    <p className="text-slate-600">
                      Sección dedicada para resolver dudas y profundizar en temas específicos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Costos Section */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4" style={{ color: "#a18700" }}>
              <DollarSign className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Inversión y Beneficios</h2>
            </div>
          </div>

          <Card className="border-2 max-w-7xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl" style={{ color: "#4a5952" }}>
                Cotización Personalizada
              </CardTitle>
              <CardDescription className="text-lg">
                Cada curso o taller es cotizado según las necesidades específicas
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4" style={{ color: "#a18700" }}>
                    Incluye:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Materiales de capacitación para la empresa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Guía metodológica de capacitación</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>Formación de equipos especializados</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button
                    size="lg"
                    className="text-white font-semibold px-8 py-3"
                    style={{ backgroundColor: "#a18700" }}
                  >
                    Solicitar Cotización
                  </Button>
                  <p className="text-sm text-slate-500 mt-3">
                    Contacta con nuestros especialistas para una propuesta personalizada
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card variant="elevated" className="text-center p-8 animate-fade-in">
            <div className="text-4xl font-bold text-MCBSecundary mb-2">19+</div>
            <div className="text-lg font-semibold mb-2">Talleres Disponibles</div>
            <div className="text-sm text-muted-foreground">
              Desde liderazgo hasta finanzas personales y gestión empresarial
            </div>
          </Card>

          <Card variant="elevated" className="text-center p-8 animate-fade-in">
            <div className="text-4xl font-bold text-MCBSecundary mb-2">8-60</div>
            <div className="text-lg font-semibold mb-2">Horas de Capacitación</div>
            <div className="text-sm text-muted-foreground">
              Duración flexible según el taller y las horas prácticas requeridas
            </div>
          </Card>

          <Card variant="elevated" className="text-center p-8 animate-fade-in">
            <div className="text-4xl font-bold text-MCBSecundary mb-2">100%</div>
            <div className="text-lg font-semibold mb-2">Modalidad Online</div>
            <div className="text-sm text-muted-foreground">
              Capacitación especializada dirigida a ejecutivos, gerentes y profesionales
            </div>
          </Card>
        </div>
        </section>
        
      </div>

  )
}
