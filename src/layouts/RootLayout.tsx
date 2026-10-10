import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* SOLID-compliant Header */}
      <Header
        actions={
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: 'sm' }), 'rounded-lg shadow-xs font-medium')}
          >
            GitHub
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </a>
        }
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {CURRENT_YEAR} pulpeNet. Desarrollado con principios SOLID & React 19.</p>
          <div className="flex items-center gap-6 font-medium">
            <span>TypeScript</span>
            <span>•</span>
            <span>shadcn/ui</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
