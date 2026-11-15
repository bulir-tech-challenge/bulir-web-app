import { useMemo } from 'react'
import { useBookings } from '../../../hooks/useBookings'
import { useServices } from '../../../hooks/useServices'
import type { UserResponse } from '../../../types'

/** Indicadores e reservas recentes, calculados a partir dos dados já em cache. */
export function useDashboard(user: UserResponse) {
  const { bookings, isLoadingBookings } = useBookings()
  const { services, isLoadingServices } = useServices()

  return useMemo(() => {
    const confirmed = bookings.filter(
      (booking) => booking.status === 'CONFIRMED',
    )
    const recent = [...bookings]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 3)

    return {
      isLoading: isLoadingBookings || isLoadingServices,
      confirmedCount: confirmed.length,
      totalAmount: confirmed.reduce((sum, booking) => sum + booking.amount, 0),
      publishedCount: services.filter(
        (service) => service.providerId === user.id,
      ).length,
      recent,
    }
  }, [bookings, services, user.id, isLoadingBookings, isLoadingServices])
}
