import { ArrowRight, CheckCircle2, Code2, Cpu, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HomePage() {
  const highlights = [
    {
      icon: <Code2 className="h-5 w-5 text-primary" />,
      title: 'Arquitectura Limpia',
      desc: 'Implementación estricta de principios SOLID y TypeScript con tipado fuerte.',
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: 'Alto Rendimiento',
      desc: 'Desarrollado con Vite, React 19 y Tailwind CSS para una carga instantánea.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: 'Componentes shadcn/ui',
      desc: 'Sistema de diseño accesible, flexible y altamente personalizable.',
    },
  ]

  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-muted/40 p-8 sm:p-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-xs mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          React 19 + TypeScript + shadcn/ui
        </div>

        <h1 className="mx-auto max-w-3xl font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
          Construye software escalable con{' '}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            pulpeNet
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Bienvenido al punto de inicio. Un proyecto configurado con las mejores prácticas de la industria,
          arquitectura modular basada en SOLID y navegación fluida con React Router.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/servicios"
            className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-6 font-semibold shadow-md')}
          >
            Ver Servicios
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/contactenos"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl px-6 font-semibold')}
          >
            Contáctenos
          </Link>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              {h.icon}
            </div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">{h.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </section>

      {/* SOLID Overview Banner */}
      <section className="rounded-2xl border border-border bg-card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-left">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Principios SOLID Aplicados en el Header
          </h3>
          <p className="text-sm text-muted-foreground">
            Cada pieza del encabezado cumple una única responsabilidad, permitiendo extender rutas sin modificar componentes.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['SRP', 'OCP', 'LSP', 'ISP', 'DIP'].map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-muted px-3 py-1 text-xs font-semibold"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              {p}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
