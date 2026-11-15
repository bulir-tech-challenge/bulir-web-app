import { toast } from 'sonner'
import { useCreateBooking } from '../../../hooks/useBookings'
import { toErrorMessage } from '../../../lib/errors'
import type { Service } from '../../../types'

export function useBookService(onBooked: () => void) {
  const {
    createBooking,
    isCreatingBooking,
    createBookingError,
    resetCreateBooking,
  } = useCreateBooking()

  const book = async (service: Service) => {
    await createBooking({ serviceId: service.id })
    toast.success(`Reserva de "${service.name}" confirmada`)
    onBooked()
  }

  return {
    book,
    isBooking: isCreatingBooking,
    errorMessage: toErrorMessage(
      createBookingError,
      'Não foi possível concluir a reserva',
    ),
    resetError: resetCreateBooking,
  }
}
