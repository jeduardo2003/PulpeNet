import { NavigationLink } from './NavigationLink'
import type { NavigationListProps } from './types'
import { cn } from '@/lib/utils'

/**
 * Single Responsibility Principle (SRP):
 * Se encarga exclusivamente de renderizar la lista o colección de elementos de navegación.
 */
export function NavigationList({
  items,
  orientation = 'horizontal',
  onItemClick,
  className,
}: NavigationListProps) {
  const isVertical = orientation === 'vertical'

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        'flex items-center',
        isVertical ? 'flex-col items-stretch space-y-1 w-full' : 'flex-row space-x-1',
        className,
      )}
    >
      {items.map((item) => (
        <NavigationLink
          key={item.id}
          item={item}
          onClick={onItemClick}
          className={isVertical ? 'w-full py-2.5 px-4 justify-start text-base' : undefined}
        />
      ))}
    </nav>
  )
}
