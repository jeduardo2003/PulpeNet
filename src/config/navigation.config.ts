import type { HeaderBrandProps, NavigationItem } from '@/components/header/types'

/**
 * Open/Closed Principle (OCP) & Dependency Inversion Principle (DIP):
 * La configuración de rutas está desacoplada de los componentes visuales.
 * Permite extender o modificar rutas sin alterar el código del Header.
 */

export const DEFAULT_BRAND: HeaderBrandProps = {
  title: 'pulpeNet',
  subtitle: 'Soluciones Digitales',
  href: '/',
}

export const MAIN_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'nav-home',
    label: 'Inicio',
    href: '/',
  },
  {
    id: 'nav-servicios',
    label: 'Servicios',
    href: '/servicios',
  },
  {
    id: 'nav-contactenos',
    label: 'Contáctenos',
    href: '/contactenos',
  },
]
