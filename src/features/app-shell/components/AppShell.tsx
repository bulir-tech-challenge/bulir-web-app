import { Outlet, useNavigate } from '@tanstack/react-router'
import { Spinner } from '../../../components/ui/Spinner'
import { useAuth } from '../../../hooks/useAuth'
import { MobileTabBar } from './MobileTabBar'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell() {
  const navigate = useNavigate()
  const { user, isLoadingUser, logout } = useAuth()

  const handleLogout = async () => {
    logout()
    await navigate({ to: '/' })
  }

  if (isLoadingUser || !user) {
    return <Spinner />
  }

  return (
    <div className="flex min-h-dvh bg-slate-50">
      <Sidebar user={user} onLogout={handleLogout} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar user={user} onLogout={handleLogout} />
        <main className="flex-1 px-4 py-6 pb-24 sm:px-8 lg:pb-8">
          <Outlet />
        </main>
      </div>

      <MobileTabBar role={user.role} />
    </div>
  )
}
