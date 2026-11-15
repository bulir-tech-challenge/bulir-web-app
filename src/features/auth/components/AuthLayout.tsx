import type { ReactNode } from 'react'
import { Logo } from '../../../components/ui/Logo'
import { AuthHero } from './AuthHero'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <AuthHero />

      <main className="flex items-center justify-center px-6 py-12">
        <div className="flex w-full max-w-md flex-col gap-8">
          <Logo className="lg:hidden" />
          {children}
        </div>
      </main>
    </div>
  )
}
