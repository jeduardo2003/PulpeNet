import type { ReactNode } from 'react'

/**
 * Interface Segregation Principle (ISP):
 * Interfaces pequeñas y específicas para cada responsabilidad de la navegación.
 */

export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: ReactNode
  isExternal?: boolean
  badge?: string
}

export interface HeaderBrandProps {
  title: string
  subtitle?: string
  href?: string
  logo?: ReactNode
  className?: string
}

export interface NavigationLinkProps {
  item: NavigationItem
  onClick?: () => void
  className?: string
}

export interface NavigationListProps {
  items: NavigationItem[]
  orientation?: 'horizontal' | 'vertical'
  onItemClick?: () => void
  className?: string
}

export interface MobileNavProps {
  items: NavigationItem[]
  brand: HeaderBrandProps
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export interface HeaderProps {
  brand?: HeaderBrandProps
  items?: NavigationItem[]
  actions?: ReactNode
  className?: string
  sticky?: boolean
}
