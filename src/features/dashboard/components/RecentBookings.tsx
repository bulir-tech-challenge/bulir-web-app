import { Link } from '@tanstack/react-router'
import { Card } from '../../../components/ui/Card'
import { formatDate, formatKz } from '../../../lib/format'
import { BookingStatusBadge } from '../../bookings/components/BookingStatusBadge'
import type { Booking } from '../../../types'

export function RecentBookings({ bookings }: { bookings: Booking[] }) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-bulir-navy">
          Reservas recentes
        </h2>
        <Link
          to="/app/bookings"
          className="text-sm font-medium text-brand-deep hover:underline"
        >
          Ver todas
        </Link>
      </div>

      {bookings.length === 0 ? (
        <p className="py-6 text-center text-sm text-bulir-navy/50">
          Ainda não há reservas.
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-bulir-navy/5">
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="flex items-center justify-between gap-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-bulir-navy">
                  {booking.service?.name ?? 'Serviço removido'}
                </p>
                <p className="text-xs text-bulir-navy/50">
                  {formatDate(booking.createdAt)}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm font-semibold text-bulir-navy">
                  {formatKz(booking.amount)}
                </span>
                <BookingStatusBadge status={booking.status} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
