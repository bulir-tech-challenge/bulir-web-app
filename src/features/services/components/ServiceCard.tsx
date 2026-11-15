import type { ReactNode } from 'react'
import { Avatar } from '../../../components/ui/Avatar'
import { Card } from '../../../components/ui/Card'
import { formatKz } from '../../../lib/format'
import type { Service } from '../../../types'

interface ServiceCardProps {
  service: Service
  /** Mostra o prestador (útil no catálogo; redundante em "Meus serviços"). */
  showProvider?: boolean
  action: ReactNode
}

export function ServiceCard({
  service,
  showProvider = true,
  action,
}: ServiceCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      {showProvider && service.provider && (
        <div className="flex items-center gap-2">
          <Avatar name={service.provider.name} className="h-8 w-8 text-xs" />
          <span className="truncate text-xs font-medium text-bulir-navy/60">
            {service.provider.name}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-display text-base font-semibold text-bulir-navy">
          {service.name}
        </h3>
        <p className="line-clamp-3 text-sm text-bulir-navy/60">
          {service.description}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-lg font-bold text-bulir-navy">
          {formatKz(service.price)}
        </p>
        {action}
      </div>
    </Card>
  )
}
