import { Wallet } from 'lucide-react'
import { formatKz } from '../../../lib/format'

interface BalanceCardProps {
  balance: number
  holder: string
  caption: string
}

export function BalanceCard({ balance, holder, caption }: BalanceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-deep p-6 text-bulir-navy shadow-lg shadow-brand/30">
      <div aria-hidden className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20" />
      <div className="relative flex items-center justify-between">
        <Wallet size={22} strokeWidth={1.5} />
        <span className="font-display text-sm font-semibold">Bulir</span>
      </div>
      <p className="relative mt-8 text-xs opacity-70">{caption}</p>
      <p className="relative font-display text-3xl font-bold">{formatKz(balance)}</p>
      <p className="relative mt-4 text-xs font-medium uppercase opacity-70">{holder}</p>
    </div>
  )
}
