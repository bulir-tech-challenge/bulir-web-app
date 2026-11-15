import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { bookingsService } from '../services/bookings.service'
import { queryKeys } from '../lib/query-client'
import type { Booking } from '../types'
import type { CreateBookingFormData } from '../types/schemas'

/** Reservas e saldo mudam juntos (o back-end ajusta ambos atomicamente). */
function useInvalidateBookingData() {
  const queryClient = useQueryClient()
  return () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: queryKeys.bookings.all }),
      queryClient.invalidateQueries({ queryKey: queryKeys.profile }),
    ])
}

export function useCreateBooking() {
  const invalidate = useInvalidateBookingData()

  const mutation = useMutation({
    mutationFn: (data: CreateBookingFormData) => bookingsService.createBooking(data),
    onSuccess: invalidate,
  })

  return {
    createBooking: mutation.mutateAsync,
    isCreatingBooking: mutation.isPending,
    createBookingError: mutation.error,
    resetCreateBooking: mutation.reset,
  }
}

export function useCancelBooking() {
  const invalidate = useInvalidateBookingData()

  const mutation = useMutation({
    mutationFn: (id: string) => bookingsService.cancelBooking(id),
    onSuccess: invalidate,
  })

  return {
    cancelBooking: mutation.mutateAsync,
    isCancellingBooking: mutation.isPending,
    cancelBookingError: mutation.error,
    resetCancelBooking: mutation.reset,
  }
}

export function useBookings() {
  const query = useQuery<Booking[]>({
    queryKey: queryKeys.bookings.all,
    queryFn: bookingsService.getBookings,
  })

  return {
    bookings: query.data ?? [],
    isLoadingBookings: query.isLoading,
    isErrorBookings: query.isError,
    bookingsError: query.error,
    refetchBookings: query.refetch,
  }
}
