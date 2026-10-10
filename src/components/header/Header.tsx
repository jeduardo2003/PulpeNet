import { useState } from 'react'
import { HeaderBrand } from './HeaderBrand'
import { NavigationList } from './NavigationList'
import { MobileNav } from './MobileNav'
import type { HeaderProps } from './types'
import { DEFAULT_BRAND, MAIN_NAVIGATION_ITEMS } from '@/config/navigation.config'
import { cn } from '@/lib/utils'

/**
 * Solid Principles Implementation:
 * - Single Responsibility (SRP): Orquesta la composición general del encabezado.
 * - Open/Closed (OCP): Abierto a extensión mediante props (brand, items, actions) sin modificar el componente.
 * - Liskov Substitution (LSP): Acepta cualquier implementación válida del contrato NavigationItem.
 * - Interface Segregation (ISP): Usa interfaces compactas y desacopladas.
 * - Dependency Inversion (DIP): Depende de abstracciones (tipos y configuraciones inyectables), no de URLs estáticas.
 */
export function Header({
  brand = DEFAULT_BRAND,
  items = MAIN_NAVIGATION_ITEMS,
  actions,
  className,
  sticky = true,
}: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header
      className={cn(
        'w-full border-b border-border bg-background/80 backdrop-blur-md transition-all z-30',
        sticky && 'sticky top-0',
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Identidad de marca (SRP: HeaderBrand) */}
        <div className="flex items-center gap-6">
          <HeaderBrand {...brand} />
        </div>

        {/* Navegación de escritorio (SRP: NavigationList) */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <NavigationList items={items} orientation="horizontal" />
        </div>

        {/* Acciones y menú móvil */}
        <div className="flex items-center gap-3">
          {actions && <div className="hidden sm:flex items-center gap-2">{actions}</div>}

          {/* Navegación móvil (SRP: MobileNav) */}
          <MobileNav
            items={items}
            brand={brand}
            isOpen={isMobileOpen}
            onToggle={() => setIsMobileOpen((prev) => !prev)}
            onClose={() => setIsMobileOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}
