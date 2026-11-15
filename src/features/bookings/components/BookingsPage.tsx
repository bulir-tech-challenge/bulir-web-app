import { Link } from '@tanstack/react-router'
import cleaning from '../../../assets/images/Obsessive compulsive disorder-pana.svg'
import { Alert } from '../../../components/ui/Alert'
import { Button } from '../../../components/ui/Button'
import { ConfirmDialog } from '../../../components/ui/ConfirmDialog'
import { EmptyState } from '../../../components/ui/EmptyState'
import { PageHeader } from '../../../components/ui/PageHeader'
import { Spinner } from '../../../components/ui/Spinner'
import { useAuth } from '../../../hooks/useAuth'
import { formatKz } from '../../../lib/format'
import { useBookingList } from '../hooks/useBookingList'
import { useCancelBookingAction } from '../hooks/useCancelBookingAction'
import { BookingItem } from './BookingItem'

function cancelDescription(
  isClient: boolean,
  amount: number | undefined,
): string {
  const value = amount === undefined ? '' : formatKz(amount)
  return isClient
    ? `Vais receber ${value} de volta na tua carteira.`
    : `${value} serão devolvidos ao cliente e debitados do teu saldo.`
}

export function BookingsPage() {
  const { user } = useAuth()
  const { bookings, isLoading, errorMessage } = useBookingList()
  const cancel = useCancelBookingAction()

  if (!user) return <Spinner />

  const isClient = user.role === 'CLIENT'

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <PageHeader
        title="Reservas"
        description={
          isClient
            ? 'O histórico dos serviços que reservaste.'
            : 'Os clientes que reservaram os teus serviços.'
        }
      />

      {errorMessage && <Alert message={errorMessage} />}

      {isLoading ? (
        <Spinner />
      ) : bookings.length === 0 ? (
        <EmptyState
          image={cleaning}
          title="Ainda sem reservas"
          description={
            isClient
              ? 'Escolhe um serviço e faz a tua primeira reserva em poucos toques.'
              : 'Quando um cliente reservar um dos teus serviços, aparece aqui.'
          }
          action={
            isClient ? (
              <Link
                to="/app/services"
                className="inline-flex h-12 items-center rounded-full bg-brand px-6 text-sm font-semibold text-bulir-navy transition-colors hover:bg-brand-hover"
              >
                Explorar serviços
              </Link>
            ) : undefined
          }
        />
      ) : (
        <div className="flex flex-col gap-3">
          {bookings.map((booking) => (
            <BookingItem
              key={booking.id}
              booking={booking}
              counterpartName={
                (isClient
                  ? booking.service?.provider?.name
                  : booking.client?.name) ?? 'Utilizador'
              }
              action={
                booking.status === 'CONFIRMED' ? (
                  <Button
                    variant="ghost"
                    className="h-10 px-4 text-red-600 hover:bg-red-50"
                    onClick={() => cancel.request(booking)}
                  >
                    Cancelar
                  </Button>
                ) : undefined
              }
            />
          ))}
        </div>
      )}

      <ConfirmDialog
        open={cancel.target !== null}
        danger
        title="Cancelar reserva?"
        description={cancelDescription(isClient, cancel.target?.amount)}
        confirmLabel="Cancelar reserva"
        isLoading={cancel.isCancelling}
        onClose={cancel.dismiss}
        onConfirm={() => void cancel.confirm()}
      />
    </div>
  )
}
