import React from "react";
import { Badge } from "./ui/badge";
import presentation1 from "@/assets/presentation-1.jpeg";
import speakerPresentation from "@/assets/speaker-presentation.jpeg";
import audienceSession from "@/assets/audience-session.jpeg";
import conferenceRoom from "@/assets/conference-room.jpeg";
import trainingSession from "@/assets/training-session.jpeg";
import meetingRoom from "@/assets/meeting-room.jpeg";
import professionalSession from "@/assets/professional-session.jpeg";
import seminarHall from "@/assets/seminar-hall.jpeg";
import presentation2 from "@/assets/presentation-2.jpeg";

import {
  BookOpen,
  Building2,
  Calendar,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/enhanced-card";
import { Button } from "./ui/enhanced-button";
import { Link } from "react-router-dom";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              Microfinance Consulting & Business
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Fortalecemos Instituciones,{" "}
              <span className="text-MCBSecundary">Desarrollamos Talento</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Desde 2008, somos un equipo multidisciplinario de profesionales
              especializados en el sector financiero, bancario, tributario,
              agropecuario y empresarial, comprometidos con el desarrollo del
              capital humano.
            </p>
          </div>

          {/* Hero img Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={presentation1}
                alt="Sesión de capacitación MIFCOB"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={speakerPresentation}
                alt="Capacitador MIFCOB en presentación"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <img
                src={audienceSession}
                alt="Participantes en capacitación MIFCOB"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About MIFCOB Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                ¿Quiénes Somos?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Microfinance Consulting & Business nace en 2008, constituida por
                un equipo de profesionales de diferentes áreas del saber para
                contribuir con el desarrollo y fortalecimiento del personal de
                las instituciones, dotándolo de las técnicas y herramientas
                necesarias para su crecimiento laboral.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Actualmente nuestra mayor actividad se desarrolla en línea,
                implementando programas, proyectos y actividades de capacitación
                para el sector de Micro y Pequeñas Empresas, instituciones
                microfinancieras, bancos de desarrollo, cooperativas y jóvenes
                en condiciones vulnerables.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-MCBSecundary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Sector Microfinanciero
                    </h3>
                    <p className="text-muted-foreground">
                      Especialistas en instituciones microfinancieras y
                      cooperativas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-MCBSecundary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Desarrollo Empresarial
                    </h3>
                    <p className="text-muted-foreground">
                      Fortalecimiento de micro y pequeñas empresas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-MCBSecundary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Capacitación Integral
                    </h3>
                    <p className="text-muted-foreground">
                      Programas especializados en modalidad virtual
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={conferenceRoom}
                alt="Capacitación MIFCOB"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Nuestro Impacto
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Más de 15 años fortaleciendo el sector microfinanciero y
              empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 text-MCBSecundary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold">2008</CardTitle>
                <CardDescription>Año de Fundación</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-MCBSecundary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold">15+</CardTitle>
                <CardDescription>Programas Especializados</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-MCBSecundary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold">100%</CardTitle>
                <CardDescription>Modalidad Virtual</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-MCBSecundary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold">15+</CardTitle>
                <CardDescription>Años de Experiencia</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Áreas de Capacitación
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Programas especializados diseñados para fortalecer competencias
              específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={trainingSession}
                  alt="Capacitación en liderazgo"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Liderazgo y Habilidades Directivas</CardTitle>
                <CardDescription>
                  Desarrollo de capacidades humanas, conceptuales y técnicas
                  para líderes efectivos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={meetingRoom}
                  alt="Gestión empresarial"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Gestión Empresarial</CardTitle>
                <CardDescription>
                  Administración efectiva de sucursales y optimización de
                  recursos para el crecimiento sostenido
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={professionalSession}
                  alt="Finanzas y cobranzas"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Finanzas y Cobranzas</CardTitle>
                <CardDescription>
                  Técnicas especializadas en recuperación de cartera y
                  administración financiera
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={seminarHall}
                  alt="Desarrollo humano"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Desarrollo Humano</CardTitle>
                <CardDescription>
                  Fortalecimiento de habilidades personales basadas en valores y
                  acciones positivas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={presentation2}
                  alt="Servicio al cliente"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Excelencia en el Servicio</CardTitle>
                <CardDescription>
                  Estrategias para exceder expectativas y manejo de clientes
                  difíciles
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={audienceSession}
                  alt="Emprendimiento"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Emprendimiento y MiPymes</CardTitle>
                <CardDescription>
                  Desarrollo de cultura emprendedora y fortalecimiento de
                  microempresas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6  text-balance">
            ¿Listo para Fortalecer tu Institución?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Únete a las instituciones microfinancieras, cooperativas y empresas
            que han confiado en MIFCOB para desarrollar su capital humano.
            Descubre cómo nuestros programas especializados pueden impulsar el
            crecimiento de tu organización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Courses">
              <Button
                size="lg"
                className="text-lg px-8 bg-MCBSecundary hover:bg-MCBVariant"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Conoce Nuestros Programas
              </Button>
            </Link>
            <Link to="/Contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
