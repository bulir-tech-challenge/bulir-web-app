import { Link } from '@tanstack/react-router'
import { ArrowRight, Briefcase, CalendarCheck, Wallet } from 'lucide-react'
import enthusiastic from '../../../assets/images/Enthusiastic-pana.svg'
import { Card } from '../../../components/ui/Card'
import { PageHeader } from '../../../components/ui/PageHeader'
import { Spinner } from '../../../components/ui/Spinner'
import { formatKz } from '../../../lib/format'
import { useOverviewStats } from '../hooks/useOverviewStats'
import { RecentBookings } from './RecentBookings'
import { StatCard } from './StatCard'

export function OverviewPage() {
  const stats = useOverviewStats()

  if (!stats.user) return <Spinner />

  const { user } = stats
  const isClient = user.role === 'CLIENT'
  const firstName = user.name.split(' ')[0]

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        title={`Olá, ${firstName}`}
        description={
          isClient
            ? 'Resumo da tua atividade na Bulir.'
            : 'Resumo do teu negócio na Bulir.'
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={Wallet}
          label={isClient ? 'Saldo disponível' : 'Saldo recebido'}
          value={formatKz(user.balance)}
        />
        <StatCard
          icon={CalendarCheck}
          label="Reservas confirmadas"
          value={String(stats.confirmedCount)}
        />
        {isClient ? (
          <StatCard
            icon={Briefcase}
            label="Serviços disponíveis"
            value={String(stats.availableServices)}
          />
        ) : (
          <StatCard
            icon={Briefcase}
            label="Serviços publicados"
            value={String(stats.publishedServices)}
          />
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        {stats.isLoading ? (
          <Spinner />
        ) : (
          <RecentBookings bookings={stats.recent} />
        )}

        <Card className="flex flex-col items-center gap-3 bg-brand/10 text-center ring-0">
          <img
            src={enthusiastic}
            alt=""
            className="h-36 w-36"
            draggable={false}
          />
          <h2 className="font-display text-lg font-semibold text-bulir-navy">
            {isClient
              ? 'Precisas de ajuda hoje?'
              : 'Mais serviços, mais clientes'}
          </h2>
          <Link
            to="/app/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:underline"
          >
            {isClient ? 'Explorar serviços' : 'Gerir os meus serviços'}
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </Card>
      </div>
    </div>
  )
}
