import type { LucideIcon } from 'lucide-react'
import { Card } from '../../../components/ui/Card'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string
}

export function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <Card className="flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand-deep">
        <Icon size={22} strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-xs text-bulir-navy/50">{label}</p>
        <p className="font-display text-xl font-bold text-bulir-navy">
          {value}
        </p>
      </div>
    </Card>
  )
}
