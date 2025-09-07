import { Award, Badge, BookOpen, Users } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/enhanced-card";

export default function Facilitors() {
  return (
    <section
      id="facilitadores"
      className="max-w-7xl mx-auto mb-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20">
            Nuestro Equipo
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Facilitadores <span className="text-MCBSecundary">Expertos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Contamos con un equipo de profesionales altamente capacitados con
            amplia experiencia en diferentes sectores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-MCBSecundary" />
              </div>
              <CardTitle>Licdo. Engels Fortuna</CardTitle>
              <CardDescription>Economista</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Posgrado en Finanzas, Maestría en Banca y Mercados de Valores.
                Profesor universitario y consultor internacional.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-MCBSecundary" />
              </div>
              <CardTitle>Licdo. Eddy Santana</CardTitle>
              <CardDescription>
                Contador • Experto en Microfinanzas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Más de 20 años en posiciones gerenciales. Certificado
                internacional por el Banco Mundial de la Mujer.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-MCBSecundary" />
              </div>
              <CardTitle>Licdo. Kerbin D. Encarnación</CardTitle>
              <CardDescription>Contador • Experto Tributario</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Maestría en Relaciones Económicas Internacionales. 15 años de
                experiencia en DGII.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-MCBSecundary" />
              </div>
              <CardTitle>Ing. José Miguel Méndez</CardTitle>
              <CardDescription>Ingeniero agrónomo</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Maestria en Economía y consultor internacional para organismos
                como CODESPA y el BID. A nivel local, ha asesorado instituciones
                como FEDA y el Instituto del Café.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-MCBSecundary" />
              </div>
              <CardTitle>Licda. Enercida Castillo</CardTitle>
              <CardDescription>Psicologa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Psicóloga con amplia experiencia en la formación
                del personal comercial, actualmente directora de formación y
                capacitación de Visión Found.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-MCBSecundary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-MCBSecundary" />
              </div>
              <CardTitle>Licdo. Miguel Ángel Abreu </CardTitle>
              <CardDescription>
                Contador • Experto en microfinanzas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Experto en microfinanzas en la implementación de metodologías de
                créditos de Micro y pequeñas empresas con más de 15 años de
                experiencia en instituciones crediticias.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
