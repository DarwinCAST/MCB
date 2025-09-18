import { cursos } from "@/Data";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Card,
  CardContent,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/enhanced-button";
import { ChevronRight, Clock } from "lucide-react";

export default function ListOfCourses() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    razonInteres: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [open, setOpen] = useState(false); // <-- controla la visibilidad del Dialog

  const handleInscripcion = (cursoTitulo: string) => {
    setSelectedCourse(cursoTitulo);
    setFormData({
      nombre: "",
      apellido: "",
      correo: "",
      razonInteres: "",
    });
    setOpen(true); // abre el modal
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    emailjs
      .send(
        "service_c63s08i",
        "template_wnqud5k",
        {
          nombre: `Nombre: ${formData.nombre}`,
          apellido: `Apellido ${formData.apellido}`,
          correo: `Correo: ${formData.correo}`,
          razon: `Razon: ${formData.razonInteres}`,
          curso: `Curso: ${selectedCourse}`,
        },
        "k63CQCw1B0sKH3VX9"
      )
      .then(() => {
        alert("¡Inscripción enviada exitosamente!");
        setFormData({ nombre: "", apellido: "", correo: "", razonInteres: "" });
        setSelectedCourse("");
        setOpen(false); // <-- cierra el modal después de confirmar el alert
      })
      .catch((err) => {
        console.error("Error al enviar el correo:", err);
        alert("Hubo un error al enviar la inscripción. Intenta de nuevo.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="cursos" className="pt-10 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras capacitaciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-MCBFourth transition-colors mb-2">
                      {curso.titulo}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {curso.descripcion}
                    </p>
                  </div>

                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="group-hover:bg-MCB bg-MCBSecundary group-hover:text-primary-foreground transition-colors"
                        onClick={() => handleInscripcion(curso.titulo)}
                      >
                        Inscribirse
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Inscripción al Curso</DialogTitle>
                      </DialogHeader>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombre">Nombre</Label>
                          <Input
                            name="nombre"
                            id="nombre"
                            value={formData.nombre}
                            onChange={(e) =>
                              setFormData({ ...formData, nombre: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="apellido">Apellido</Label>
                          <Input
                            name="apellido"
                            id="apellido"
                            value={formData.apellido}
                            onChange={(e) =>
                              setFormData({ ...formData, apellido: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="correo">Correo Electrónico</Label>
                          <Input
                            name="correo"
                            id="correo"
                            type="email"
                            value={formData.correo}
                            onChange={(e) =>
                              setFormData({ ...formData, correo: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="curso">Curso de Interés</Label>
                          <Input name="curso" id="curso" value={selectedCourse} readOnly className="bg-muted" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="razon">¿Por qué tienes interés en este curso?</Label>
                          <Textarea
                            name="razon"
                            id="razon"
                            value={formData.razonInteres}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                razonInteres: e.target.value,
                              })
                            }
                            placeholder="Cuéntanos qué te motiva a tomar este curso..."
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSending}
                          className="w-full bg-MCBSecundary hover:bg-MCB"
                        >
                          {isSending ? "Enviando..." : "Enviar Inscripción"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
