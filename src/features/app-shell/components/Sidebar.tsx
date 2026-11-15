import { Logo } from '../../../components/ui/Logo'
import { NavItems } from './NavItems'
import { SidebarUser } from './SidebarUser'
import type { UserResponse } from '../../../types'

export function Sidebar({ user, onLogout }: { user: UserResponse; onLogout: () => void }) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col justify-between border-r border-bulir-navy/5 bg-white p-5 lg:flex">
      <div className="flex flex-col gap-8">
        <Logo />
        <nav aria-label="Principal" className="flex flex-col gap-1">
          <NavItems role={user.role} variant="sidebar" />
        </nav>
      </div>
      <SidebarUser user={user} onLogout={onLogout} />
    </aside>
  )
}
