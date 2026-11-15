import { LogOut } from 'lucide-react'
import { Avatar } from '../../../components/ui/Avatar'
import type { UserResponse } from '../../../types'

const roleLabel = { CLIENT: 'Cliente', PROVIDER: 'Bulidor' } as const

export function SidebarUser({ user, onLogout }: { user: UserResponse; onLogout: () => void }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-bulir-navy/[0.03] p-3">
      <Avatar name={user.name} className="h-10 w-10 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-bulir-navy">{user.name}</p>
        <p className="text-xs text-bulir-navy/50">{roleLabel[user.role]}</p>
      </div>
      <button
        type="button"
        onClick={onLogout}
        aria-label="Terminar sessão"
        className="rounded-lg p-2 text-bulir-navy/50 transition-colors hover:bg-white hover:text-bulir-navy"
      >
        <LogOut size={18} strokeWidth={1.5} />
      </button>
    </div>
  )
}
