import { NavLink } from 'react-router-dom'
import type { NavigationLinkProps } from './types'
import { cn } from '@/lib/utils'

/**
 * Single Responsibility (SRP) & Liskov Substitution Principle (LSP):
 * Representa un único enlace de navegación. Si el ítem es externo o interno,
 * se comporta e intercambia consistentemente sin alterar a sus componentes padres.
 */
export function NavigationLink({
  item,
  onClick,
  className,
}: NavigationLinkProps) {
  const baseClasses =
    'relative flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring'

  if (item.isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(
          baseClasses,
          'text-muted-foreground hover:text-foreground hover:bg-accent/60',
          className,
        )}
      >
        {item.icon}
        <span>{item.label}</span>
      </a>
    )
  }

  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          baseClasses,
          isActive
            ? 'text-foreground font-semibold bg-accent/80 shadow-xs'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
          className,
        )
      }
    >
      {({ isActive }) => (
        <>
          {item.icon}
          <span>{item.label}</span>
          {isActive && (
            <span
              className="absolute -bottom-1.5 left-3.5 right-3.5 h-0.5 rounded-full bg-primary transition-all md:block hidden"
              aria-hidden="true"
            />
          )}
          {item.badge && (
            <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              {item.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}
