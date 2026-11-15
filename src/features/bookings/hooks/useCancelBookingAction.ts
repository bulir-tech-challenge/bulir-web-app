import { useState } from 'react'
import { toast } from 'sonner'
import { useCancelBooking } from '../../../hooks/useBookings'
import { toErrorMessage } from '../../../lib/errors'
import type { Booking } from '../../../types'

/** Fluxo "pedir confirmação → cancelar → avisar" para uma reserva. */
export function useCancelBookingAction() {
  const { cancelBooking, isCancellingBooking } = useCancelBooking()
  const [target, setTarget] = useState<Booking | null>(null)

  const confirm = async () => {
    if (!target) return
    try {
      await cancelBooking(target.id)
      toast.success('Reserva cancelada e valor devolvido à tua carteira')
    } catch (error) {
      toast.error(
        toErrorMessage(error, 'Não foi possível cancelar a reserva') ?? '',
      )
    } finally {
      setTarget(null)
    }
  }

  return {
    target,
    request: setTarget,
    dismiss: () => setTarget(null),
    confirm,
    isCancelling: isCancellingBooking,
  }
}
