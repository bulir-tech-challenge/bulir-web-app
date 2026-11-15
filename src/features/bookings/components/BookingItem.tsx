import type { ReactNode } from 'react'
import { Avatar } from '../../../components/ui/Avatar'
import { Card } from '../../../components/ui/Card'
import { formatDate, formatKz } from '../../../lib/format'
import { BookingStatusBadge } from './BookingStatusBadge'
import type { Booking } from '../../../types'

interface BookingItemProps {
  booking: Booking
  /** Nome da outra parte: prestador (para o cliente) ou cliente (para o prestador). */
  counterpartName: string
  counterpartLabel: string
  action?: ReactNode
}

export function BookingItem({
  booking,
  counterpartName,
  counterpartLabel,
  action,
}: BookingItemProps) {
  return (
    <Card className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Avatar name={counterpartName} className="h-11 w-11 shrink-0" />

      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-bulir-navy">
          {booking.service?.name ?? 'Serviço removido'}
        </p>
        <p className="truncate text-sm text-bulir-navy/60">
          {counterpartLabel}: {counterpartName} ·{' '}
          {formatDate(booking.createdAt)}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div className="flex flex-col items-start gap-1 sm:items-end">
          <p className="font-display font-bold text-bulir-navy">
            {formatKz(booking.amount)}
          </p>
          <BookingStatusBadge status={booking.status} />
        </div>
        {action}
      </div>
    </Card>
  )
}
