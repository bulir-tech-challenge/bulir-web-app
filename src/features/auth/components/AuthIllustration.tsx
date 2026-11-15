import { CalendarCheck, CheckCircle2, Wallet } from 'lucide-react'
import { FloatingCard } from '../../../components/illustrations/FloatingCard'
import { PhoneFrame } from '../../../components/illustrations/PhoneFrame'

const weekDays = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']

export function AuthIllustration() {
  return (
    <div aria-hidden className="relative mx-auto h-[26rem] w-full max-w-sm">
      {/* Halo atrás do telemóvel */}
      <div className="absolute inset-x-8 top-4 bottom-0 rounded-[3rem] bg-white/5 ring-1 ring-white/10" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />

      <PhoneFrame className="absolute top-0 left-1/2 h-[24rem] w-52 -translate-x-1/2">
        <div className="flex flex-col gap-3 px-3">
          <p className="text-[10px] font-semibold text-bulir-navy">Pagamentos</p>

          {/* Cartão da carteira */}
          <div className="rounded-xl bg-brand p-3 text-bulir-navy">
            <div className="flex items-center justify-between">
              <Wallet size={16} strokeWidth={1.5} />
              <span className="text-[9px] font-semibold">Bulir</span>
            </div>
            <p className="mt-4 text-[8px] opacity-70">Saldo disponível</p>
            <p className="font-display text-base font-bold">400.000,00 Kz</p>
          </div>

          {/* Linhas de histórico */}
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-brand/30" />
              <div className="flex flex-1 flex-col gap-1">
                <div className="h-1.5 w-3/4 rounded bg-bulir-navy/15" />
                <div className="h-1.5 w-1/2 rounded bg-bulir-navy/10" />
              </div>
            </div>
          ))}
        </div>
      </PhoneFrame>

      {/* Agenda */}
      <FloatingCard className="top-6 -right-2 w-40">
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-bulir-navy">
          <CalendarCheck size={14} strokeWidth={1.5} className="text-brand-hover" />
          Agenda de trabalho
        </div>
        <div className="flex justify-between">
          {weekDays.map((d, i) => (
            <span
              key={i}
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] ${
                i >= 1 && i <= 3 ? 'bg-brand font-bold text-bulir-navy' : 'text-bulir-navy/40'
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </FloatingCard>

      {/* Pagamento confirmado */}
      <FloatingCard className="bottom-10 -left-2 flex w-44 items-center gap-2">
        <CheckCircle2 size={22} strokeWidth={1.5} className="shrink-0 text-brand-hover" />
        <div>
          <p className="text-[10px] font-semibold text-bulir-navy">Pagamento recebido</p>
          <p className="text-[9px] text-bulir-navy/50">45.000,00 Kz</p>
        </div>
      </FloatingCard>
    </div>
  )
}
