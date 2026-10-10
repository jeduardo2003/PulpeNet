import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center space-y-6">
      <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-destructive/10 text-destructive text-4xl font-extrabold">
        404
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Página no encontrada</h1>
        <p className="text-muted-foreground text-sm max-w-sm">
          La ruta a la que intentas acceder no existe o fue reubicada en la arquitectura del sistema.
        </p>
      </div>
      <Link to="/" className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl font-semibold')}>
        <Home className="mr-2 h-4 w-4" />
        Volver al Inicio
      </Link>
    </div>
  )
}
