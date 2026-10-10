import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import type { HeaderBrandProps } from './types'
import { cn } from '@/lib/utils'

/**
 * Single Responsibility Principle (SRP):
 * Este componente es únicamente responsable de la identidad de marca (logo y título).
 */
export function HeaderBrand({
  title,
  subtitle,
  href = '/',
  logo,
  className,
}: HeaderBrandProps) {
  return (
    <Link
      to={href}
      className={cn(
        'group flex items-center gap-2.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1',
        className,
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-200 group-hover:scale-105">
        {logo ?? <Sparkles className="h-5 w-5" />}
      </div>
      <div className="flex flex-col text-left">
        <span className="font-heading text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {title}
        </span>
        {subtitle && (
          <span className="text-[11px] font-medium text-muted-foreground leading-none">
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  )
}
