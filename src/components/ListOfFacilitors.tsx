import { Award, Badge, BookOpen, Users } from "lucide-react";
import React from "react";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/enhanced-card";
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Globe, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Licdo. Engels Fortuna",
    title: "CEO & Economista",
    description:
      "Economista con pos-grados en Finanzas y maestría en Banca y Mercados de valores. Profesor universitario, conferencista internacional y consultor empresarial.",
    image: "/professional-businessman-economist-with-suit.jpg",
    social: {
      linkedin: "#",
      website: "#",
      email: "#",
    },
  },
  {
    name: "Licdo. Eddy Santana",
    title: "Director Comercial",
    description:
      "Contador experto en Microfinanzas con más de 20 años en posiciones gerenciales. Ex-director comercial de Banco Adopem con equipo de 800+ personas.",
    image: "/professional-accountant-manager-with-business-atti.jpg",
    social: {
      linkedin: "#",
      website: "#",
      email: "#",
    },
  },
  {
    name: "Licdo. Kerbin D. Encarnación",
    title: "Experto Tributario",
    description:
      "Contador y profesor universitario con maestría en Relaciones Económicas Internacionales. 15 años de experiencia en la DGII.",
    image: "/professional-tax-expert-accountant-with-glasses.jpg",
    social: {
      linkedin: "#",
      website: "#",
      email: "#",
    },
  },
  {
    name: "Ing. José Miguel Méndez",
    title: "Consultor Internacional",
    description:
      "Ingeniero Agrónomo con maestría en Economía. Consultor de organismos internacionales como CODESPA, BID, FEDA e Instituto Nacional del Café.",
    image: "/professional-agricultural-engineer-consultant-with.jpg",
    social: {
      linkedin: "#",
      website: "#",
      email: "#",
    },
  },
  {
    name: "Licda. Enercida Castillo",
    title: "Directora de Formación",
    description:
      "Psicóloga con amplia experiencia en formación de personal comercial. Actualmente Directora de Formación y Capacitación de Visión Found.",
    image: "/professional-female-psychologist-training-director.jpg",
    social: {
      linkedin: "#",
      website: "#",
      email: "#",
    },
  },
  {
    name: "Licdo. Miguel Ángel Abreu",
    title: "Especialista en Microfinanzas",
    description:
      "Contador experto en microfinanzas con más de 15 años implementando metodologías de crédito para micro y pequeñas empresas.",
    image: "/professional-microfinance-specialist-accountant.jpg",
    social: {
      linkedin: "#",
      website: "#",
      email: "#",
    },
  },
]


export default function ListOfFacilitors() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ color: "#4a5952" }}>
          Así somos
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Especialistas en crear contenidos. Investigadores de los lugares más recónditos de Google. Amantes de la gente
          que escribe guion sin tilde. Rápidos hasta donde la calidad no se deteriora. Eficaces en llevar a cabo un
          plan, tu plan. Y más allá de todo eso, tu equipo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-opacity-50"
            style={{ borderColor: "#a18700" }}
          >
            <CardContent className="p-6 text-center">
              <div className="relative mb-6">
                <div
                  className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 group-hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: "#a18700" }}
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2" style={{ color: "#4a5952" }}>
                {member.name}
              </h3>

              <p className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: "#a18700" }}>
                {member.title}
              </p>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.description}</p>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="p-2 rounded-full transition-colors duration-200 hover:bg-opacity-10"
                  style={{
                    color: "#4a5952",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#a18700"
                    e.currentTarget.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "#4a5952"
                  }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={member.social.website}
                  className="p-2 rounded-full transition-colors duration-200"
                  style={{
                    color: "#4a5952",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#a18700"
                    e.currentTarget.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "#4a5952"
                  }}
                >
                  <Globe size={18} />
                </a>
                <a
                  href={member.social.email}
                  className="p-2 rounded-full transition-colors duration-200"
                  style={{
                    color: "#4a5952",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#a18700"
                    e.currentTarget.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "#4a5952"
                  }}
                >
                  <Mail size={18} />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
