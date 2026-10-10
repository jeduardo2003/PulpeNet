import { Check, Layers, Monitor, Rocket, Shield, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ServicesPage() {
  const services = [
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: 'Desarrollo Web Frontend',
      desc: 'Aplicaciones web modernas con React 19, TypeScript, diseño responsivo y optimización de rendimiento.',
      features: ['Componentes Shadcn', 'Server-Ready & Client-Side', 'Accesibilidad WCAG'],
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: 'Arquitectura de Software',
      desc: 'Diseño e implementación de sistemas basados en SOLID, patrones de diseño y código mantenible.',
      features: ['Clean Architecture', 'Refactorizaciones complejas', 'Desacoplamiento modular'],
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: 'Optimización y Escalabilidad',
      desc: 'Auditorías de rendimiento, bundles eficientes en Vite y flujos de trabajo con CI/CD.',
      features: ['Code Splitting', 'Caché & Web Vitals', 'Type-Safety estricto'],
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Seguridad y Buenas Prácticas',
      desc: 'Estandarización de código con Oxlint, ESLint, TypeScript estricto y auditorías de dependencias.',
      features: ['Cero vulnerabilidades', 'Validación de esquema', 'Testing unitario'],
    },
  ]

  return (
    <div className="flex flex-col gap-12 py-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Nuestros Servicios
        </h1>
        <p className="text-muted-foreground text-lg">
          Soluciones de ingeniería frontend diseñadas para perdurar en el tiempo y soportar alto tráfico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-xs hover:border-primary/50 transition-all hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                {s.icon}
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{s.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <ul className="space-y-2 pt-2">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-foreground">
                    <Check className="h-4 w-4 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-border">
              <Link
                to="/contactenos"
                className={cn(buttonVariants({ variant: 'outline' }), 'w-full justify-between')}
              >
                Cotizar Servicio
                <Wrench className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
