import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { bookingsService } from '../services/bookings.service'
import { queryKeys } from '../lib/query-client'
import type { Booking } from '../types'
import type { CreateBookingFormData } from '../types/schemas'

export function useBookings() {
  const queryClient = useQueryClient()

  const bookingsQuery = useQuery<Booking[]>({
    queryKey: queryKeys.bookings.all,
    queryFn: bookingsService.getBookings,
  })

  const createBookingMutation = useMutation({
    mutationFn: (data: CreateBookingFormData) => bookingsService.createBooking(data),
    onSuccess: () => {
      // Invalida histórico de reservas e o perfil (saldo atualizado atomicamente!)
      queryClient.invalidateQueries({ queryKey: queryKeys.bookings.all })
      queryClient.invalidateQueries({ queryKey: queryKeys.profile })
    },
  })

  const cancelBookingMutation = useMutation({
    mutationFn: (id: string) => bookingsService.cancelBooking(id),
    onSuccess: () => {
      // Invalida histórico e restaura saldo estornado no perfil
      queryClient.invalidateQueries({ queryKey: queryKeys.bookings.all })
      queryClient.invalidateQueries({ queryKey: queryKeys.profile })
    },
  })

  return {
    bookings: bookingsQuery.data ?? [],
    isLoadingBookings: bookingsQuery.isLoading,
    isErrorBookings: bookingsQuery.isError,
    bookingsError: bookingsQuery.error,
    refetchBookings: bookingsQuery.refetch,
    createBooking: createBookingMutation.mutateAsync,
    isCreatingBooking: createBookingMutation.isPending,
    createBookingError: createBookingMutation.error,
    cancelBooking: cancelBookingMutation.mutateAsync,
    isCancellingBooking: cancelBookingMutation.isPending,
    cancelBookingError: cancelBookingMutation.error,
  }
}
