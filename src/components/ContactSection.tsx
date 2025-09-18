import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/enhanced-card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/enhanced-button";
import { BookOpen, Clock, Mail, MapPin, Phone, Send, Users } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    cargo: "",
    institucion: "",
    email: "",
    telefono: "",
    interes: "",
    mensaje: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    emailjs
      .send(
        "service_c63s08i",          // ← tu Service ID
        "template_1dbgkv5",         // ← tu Template ID
        {
          nombre: `Nombre: ${formData.nombre}`,
          cargo: `Cargo: ${formData.cargo}`,
          institucion: `Institucion: ${formData.institucion}`,
          email: `Email: ${formData.email}`,
          telefono: `Telefono: ${formData.telefono}`,
          interes: `Interes: ${formData.interes}`,
          mensaje: `Mensaje: ${formData.mensaje}`,
        },
        "k63CQCw1B0sKH3VX9"         // ← tu Public Key
      )
      .then(() => {
        alert("¡Solicitud enviada exitosamente!");
        setFormData({
          nombre: "",
          cargo: "",
          institucion: "",
          email: "",
          telefono: "",
          interes: "",
          mensaje: "",
        });
      })
      .catch((err) => {
        console.error("Error al enviar el correo:", err);
        alert("Hubo un error al enviar la solicitud. Intenta de nuevo.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Contáctanos
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Conecta con <span className="text-MCBSecundary">MIFCOB</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para apoyar el crecimiento de tu institución
            microfinanciera. Contáctanos para conocer nuestros programas de
            capacitación especializados.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario con EmailJS */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Solicita Información
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input
                        id="nombre"
                        name= "nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input
                        id="cargo"
                        name= "cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        placeholder="Tu posición"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institucion">Institución</Label>
                    <Input
                      id="institucion"
                      name="institucion"
                      value={formData.institucion}
                      onChange={handleChange}
                      placeholder="Nombre de tu institución"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interes">Área de interés</Label>
                    <Input
                      id="interes"
                      name="interes"
                      value={formData.interes}
                      onChange={handleChange}
                      placeholder="Ej: Gestión de riesgos, Cobranzas..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tus necesidades..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-MCBSecundary hover:bg-MCBVariant"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSending ? "Enviando..." : "Enviar Solicitud"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Información de Contacto
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Múltiples formas de conectar con nuestro equipo de expertos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-MCBSecundary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-MCBSecundary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Correo Electrónico
                      </h3>
                      <p className="text-muted-foreground">mifcob@gmail.com</p>
                      
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-MCBSecundary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-MCBSecundary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Teléfono
                      </h3>
                      <p className="text-muted-foreground">+1 (809) 000-0000</p>
                      <p className="text-muted-foreground">
                        WhatsApp: +1 (809) 000-0001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-MCBSecundary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-MCBSecundary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Ubicación
                      </h3>
                      <p className="text-muted-foreground">
                        República Dominicana
                      </p>
                      <p className="text-muted-foreground">
                        Capacitaciones virtuales disponibles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-MCBSecundary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-MCBSecundary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Horario de Atención
                      </h3>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Sábados: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-0 shadow-lg bg-MCBSecundary/5">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-MCBSecundary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-MCBSecundary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        15+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Años de experiencia
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-MCBSecundary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-6 h-6 text-MCBSecundary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Profesionales capacitados
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nuestras Áreas de Especialización
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Programas de capacitación diseñados específicamente para el sector
            microfinanciero
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Gestión de Riesgos",
              "Técnicas de Cobranza",
              "Liderazgo Empresarial",
              "Servicio al Cliente",
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-MCBSecundary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-MCBSecundary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
}
