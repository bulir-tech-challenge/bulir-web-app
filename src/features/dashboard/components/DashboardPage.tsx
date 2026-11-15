import { Banknote, Briefcase, CalendarCheck, Wallet } from 'lucide-react'
import { Spinner } from '../../../components/ui/Spinner'
import { useAuth } from '../../../hooks/useAuth'
import { formatKz } from '../../../lib/format'
import { useDashboard } from '../hooks/useDashboard'
import { DashboardHero } from './DashboardHero'
import { RecentBookings } from './RecentBookings'
import { StatCard } from './StatCard'
import type { UserResponse } from '../../../types'

function DashboardContent({ user }: { user: UserResponse }) {
  const { isLoading, confirmedCount, totalAmount, publishedCount, recent } =
    useDashboard(user)
  const isClient = user.role === 'CLIENT'

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <DashboardHero user={user} />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={Wallet}
          label={isClient ? 'Saldo disponível' : 'Saldo recebido'}
          value={formatKz(user.balance)}
        />
        <StatCard
          icon={CalendarCheck}
          label="Reservas confirmadas"
          value={String(confirmedCount)}
        />
        {isClient ? (
          <StatCard
            icon={Banknote}
            label="Total gasto"
            value={formatKz(totalAmount)}
          />
        ) : (
          <StatCard
            icon={Briefcase}
            label="Serviços publicados"
            value={String(publishedCount)}
          />
        )}
      </div>

      {isLoading ? <Spinner /> : <RecentBookings bookings={recent} />}
    </div>
  )
}

export function DashboardPage() {
  const { user } = useAuth()

  if (!user) return <Spinner />

  return <DashboardContent user={user} />
}
