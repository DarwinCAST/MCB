import { cursos } from "@/Data";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/enhanced-card";
import { Badge, ChevronRight, Clock, Star, Users } from "lucide-react";
import { CardContent } from "./ui/card";
import { Button } from "./ui/enhanced-button";

export default function ListOfCourses() {
  return (
    <section id="cursos" className="pt-10 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras capacitaciones{" "}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada curso está cuidadosamente diseñado para brindarte las
            habilidades más demandadas en el mercado actual.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {cursos.map((curso) => (
            <Card
              key={curso.id}
              className="group bg-MCBThird hover:shadow-md transition-all duration-300 border-border"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="bg-yellow-400 px-5 rounded-sm font-bold py-1 text-accent-foreground text-xs">
                        {curso.categoria}
                      </p>
                     
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {curso.duracion}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-MCBFourth transition-colors mb-2 text-balance">
                      {curso.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {curso.descripcion}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button
                      size="sm"
                      className="bg-MCBFourth group-hover:bg-MCB group-hover:text-primary-foreground transition-colors"
                    >
                      Inscribete
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
