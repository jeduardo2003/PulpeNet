import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col gap-12 py-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Contáctenos
        </h1>
        <p className="text-muted-foreground text-lg">
          ¿Tienes un proyecto en mente o requieres consultoría en React y TypeScript? Escríbenos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Información de contacto */}
        <div className="rounded-2xl border border-border bg-card p-8 space-y-8 shadow-xs">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Información</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Estamos disponibles para responder tus preguntas técnicas y comerciales.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase">Email</h4>
                <p className="text-sm font-medium text-foreground">soporte@pulpenet.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase">Teléfono</h4>
                <p className="text-sm font-medium text-foreground">+506 8000-0000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase">Ubicación</h4>
                <p className="text-sm font-medium text-foreground">San José, Costa Rica</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 shadow-xs">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Gracias por escribirnos, {formData.nombre}. Un miembro de nuestro equipo se comunicará contigo a la brevedad.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ nombre: '', email: '', mensaje: '' })
                }}
              >
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Nombre Completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@correo.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Mensaje o Consulta
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Describe tus requerimientos o dudas técnicas..."
                  className="w-full rounded-xl border border-border bg-background p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto px-8 font-semibold">
                Enviar Mensaje
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
