import { useMemo } from 'react'
import { useBookings } from '../../../hooks/useBookings'
import { toErrorMessage } from '../../../lib/errors'

/** Reservas ordenadas da mais recente para a mais antiga. */
export function useBookingList() {
  const { bookings, isLoadingBookings, bookingsError } = useBookings()

  const sorted = useMemo(
    () =>
      [...bookings].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    [bookings],
  )

  return {
    bookings: sorted,
    isLoading: isLoadingBookings,
    errorMessage: toErrorMessage(
      bookingsError,
      'Não foi possível carregar as reservas',
    ),
  }
}
