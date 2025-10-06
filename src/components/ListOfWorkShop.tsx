import { talleres } from "@/Data";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/enhanced-button";
import { ChevronRight } from "lucide-react";

export default function ListOfWorkshops() {
  const [selectedTaller, setSelectedTaller] = useState<any>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    razon: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleOpenInfo = (taller: any) => {
    setSelectedTaller(taller);
    setOpenInfo(true);
  };

  const handleOpenForm = () => {
    setFormData({
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      razon: "",
    });
    setOpenInfo(false);
    setOpenForm(true);
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
          apellido: `Apellido: ${formData.apellido}`,
          correo: `Correo: ${formData.correo}`,
          telefono: `Teléfono: ${formData.telefono}`,
          razon: `Razón: ${formData.razon}`,
          curso: `Taller: ${selectedTaller?.titulo}`,
        },
        "k63CQCw1B0sKH3VX9"
      )
      .then(() => {
        alert("¡Solicitud enviada exitosamente!");
        setFormData({ nombre: "", apellido: "", correo: "", telefono: "", razon: "" });
        setSelectedTaller(null);
        setOpenForm(false);
      })
      .catch((err) => {
        console.error("Error al enviar el correo:", err);
        alert("Hubo un error al enviar la solicitud. Intenta de nuevo.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="talleres" className="pt-10 pb-20 px-4 bg-gradient-to-b from-white to-MCBThird/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Talleres
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada taller está cuidadosamente diseñado para ofrecerte experiencias prácticas y enfocadas, desarrollando las habilidades más relevantes y aplicables en el entorno actual.
          </p>
        </div>

        <div className="space-y-6">
          {talleres.map((taller) => (
            <Card
              key={taller.id}
              className="group bg-MCBThird hover:shadow-md transition-all duration-300 border-border"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-MCB transition-colors mb-3">
                    {taller.titulo}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4 line-clamp-3">
                    {taller.descripcionCorta}
                  </p>
                </div>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-border">
                  <Button
                    size="sm"
                    className="bg-MCBSecundary hover:bg-MCB text-white transition-colors"
                    onClick={() => handleOpenInfo(taller)}
                  >
                    Solicitar información
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Dialog de Información del Taller */}
      <Dialog open={openInfo} onOpenChange={setOpenInfo}>
        <DialogContent className="sm:max-w-[550px]">
          {selectedTaller && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-MCB">
                  {selectedTaller.titulo}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <p className="text-muted-foreground whitespace-pre-line">
                  {selectedTaller.descripcion}
                </p>
                {selectedTaller.areas && (
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Áreas de dominio:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {selectedTaller.areas.map((a: string, i: number) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  className="bg-MCBSecundary hover:bg-MCB text-white"
                  onClick={handleOpenForm}
                >
                  Contáctanos
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog de Formulario */}
      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Formulario de contacto</DialogTitle>
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
              <Label htmlFor="telefono">Número de Teléfono</Label>
              <Input
                name="telefono"
                id="telefono"
                type="tel"
                placeholder="Ej: +1 809 555 5555"
                value={formData.telefono}
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="razon">Motivo de interés</Label>
              <Textarea
                name="razon"
                id="razon"
                value={formData.razon}
                onChange={(e) =>
                  setFormData({ ...formData, razon: e.target.value })
                }
                placeholder="Cuéntanos qué te motiva a tomar este taller..."
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="taller">Taller de Interés</Label>
              <Input
                name="taller"
                id="taller"
                value={selectedTaller?.titulo || ""}
                readOnly
                className="bg-muted"
              />
            </div>
            <Button
              type="submit"
              disabled={isSending}
              className="w-full bg-MCBSecundary hover:bg-MCB text-white"
            >
              {isSending ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
