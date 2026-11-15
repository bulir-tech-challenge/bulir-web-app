import { LogOut } from 'lucide-react'
import { Logo } from '../../../components/ui/Logo'
import { formatKz } from '../../../lib/format'
import type { UserResponse } from '../../../types'

export function Topbar({ user, onLogout }: { user: UserResponse; onLogout: () => void }) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-bulir-navy/5 bg-white px-4 py-3 sm:px-8">
      <Logo className="lg:hidden" />

      <div className="ml-auto flex items-center gap-3">
        <div className="rounded-full bg-brand/15 px-4 py-1.5 text-sm font-semibold text-bulir-navy">
          <span className="mr-1.5 hidden text-xs font-medium text-bulir-navy/60 sm:inline">Saldo</span>
          {formatKz(user.balance)}
        </div>
        <button
          type="button"
          onClick={onLogout}
          aria-label="Terminar sessão"
          className="rounded-lg p-2 text-bulir-navy/50 transition-colors hover:bg-bulir-navy/5 hover:text-bulir-navy lg:hidden"
        >
          <LogOut size={18} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  )
}
