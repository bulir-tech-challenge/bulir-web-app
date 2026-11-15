import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import enthusiastic from '../../../assets/images/Enthusiastic-pana.svg'
import cashPayment from '../../../assets/images/Cash Payment-bro.svg'
import { Illustration } from '../../../components/illustrations/Illustration'
import type { UserResponse } from '../../../types'

export function DashboardHero({ user }: { user: UserResponse }) {
  const isClient = user.role === 'CLIENT'
  const firstName = user.name.split(' ')[0]

  return (
    <section className="relative flex items-center justify-between gap-6 overflow-hidden rounded-3xl bg-brand/10 p-6 sm:p-8">
      <div className="flex max-w-md flex-col items-start gap-3">
        <h1 className="font-display text-2xl font-bold text-bulir-navy sm:text-3xl">
          Olá, {firstName} 👋
        </h1>
        <p className="text-sm text-bulir-navy/60">
          {isClient
            ? 'Encontra um prestador de confiança e reserva em poucos toques.'
            : 'Publica os teus serviços e recebe diretamente na tua carteira.'}
        </p>
        <Link
          to="/app/services"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-bulir-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-bulir-navy/90"
        >
          {isClient ? 'Explorar serviços' : 'Gerir os meus serviços'}
          <ArrowRight size={16} strokeWidth={1.5} />
        </Link>
      </div>
      <Illustration
        src={isClient ? cashPayment : enthusiastic}
        className="hidden h-44 w-44 shrink-0 sm:block"
      />
    </section>
  )
}
