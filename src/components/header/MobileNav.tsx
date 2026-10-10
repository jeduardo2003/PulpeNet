import { X, Menu } from 'lucide-react'
import { HeaderBrand } from './HeaderBrand'
import { NavigationList } from './NavigationList'
import type { MobileNavProps } from './types'
import { Button } from '@/components/ui/button'

const CURRENT_YEAR = new Date().getFullYear()

/**
 * Single Responsibility Principle (SRP):
 * Administra únicamente la interacción, accesibilidad y visualización del menú móvil.
 */
export function MobileNav({
  items,
  brand,
  isOpen,
  onToggle,
  onClose,
}: MobileNavProps) {
  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        className="relative z-50 text-foreground hover:bg-accent"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md animate-in fade-in-0 duration-200"
          onClick={onClose}
          aria-hidden="true"
        >
          <div
            className="fixed inset-x-0 top-0 z-50 flex flex-col gap-6 border-b border-border bg-background p-6 shadow-xl animate-in slide-in-from-top duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <HeaderBrand {...brand} />
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <NavigationList
              items={items}
              orientation="vertical"
              onItemClick={onClose}
            />

            <div className="pt-2 border-t border-border/60">
              <p className="text-xs text-muted-foreground text-center">
                pulpeNet © {CURRENT_YEAR} — Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
