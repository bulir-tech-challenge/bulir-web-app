import { Check } from 'lucide-react'
import { Avatar } from '../../../components/ui/Avatar'
import type { ServiceHighlight } from '../data/home.content'

interface ServiceCardProps {
  service: ServiceHighlight
  className?: string
}

export function ServiceCard({ service, className = '' }: ServiceCardProps) {
  return (
    <div className={`absolute flex flex-col items-center ${className}`}>
      <Avatar
        src={service.avatar}
        name={service.name}
        badge={<Check size={9} strokeWidth={3} />}
        className="relative z-10 -mb-5"
      />
      <div className="flex w-36 flex-col items-center gap-2 rounded-xl bg-white px-3 pt-8 pb-3 text-center shadow-lg shadow-bulir-navy/5 ring-1 ring-bulir-navy/5">
        <span className="rounded bg-brand/15 px-2 py-0.5 text-[9px] font-medium text-brand-deep">
          {service.category}
        </span>
        <p className="text-xs leading-snug font-medium text-bulir-navy">
          {service.title}
        </p>
        <p className="text-xs font-bold text-bulir-navy">{service.price}</p>
      </div>
      {/* Haste + ponto que liga o cartão às linhas */}
      <span className="h-6 w-px bg-bulir-navy/15" />
      <span className="h-1.5 w-1.5 rounded-full bg-bulir-navy/20" />
    </div>
  )
}
