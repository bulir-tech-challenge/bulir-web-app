import { Link } from '@tanstack/react-router'
import { Alert } from '../../../components/ui/Alert'
import { Button } from '../../../components/ui/Button'
import { Modal } from '../../../components/ui/Modal'
import { formatKz } from '../../../lib/format'
import { useBookService } from '../hooks/useBookService'
import type { Service } from '../../../types'

interface BookServiceDialogProps {
  service: Service | null
  balance: number
  onClose: () => void
}

function Row({
  label,
  value,
  strong,
}: {
  label: string
  value: string
  strong?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-bulir-navy/60">{label}</span>
      <span
        className={strong ? 'font-semibold text-bulir-navy' : 'text-bulir-navy'}
      >
        {value}
      </span>
    </div>
  )
}

export function BookServiceDialog({
  service,
  balance,
  onClose,
}: BookServiceDialogProps) {
  const { book, isBooking, errorMessage, resetError } = useBookService(onClose)

  const handleClose = () => {
    resetError()
    onClose()
  }

  const insufficient = service ? balance < service.price : false

  return (
    <Modal
      open={service !== null}
      onClose={handleClose}
      label="Confirmar reserva"
      size="md"
    >
      {service && (
        <div className="flex flex-col gap-5 p-6 sm:p-8">
          <div className="flex flex-col gap-1 pr-8">
            <h2 className="font-display text-xl font-bold text-bulir-navy">
              Confirmar reserva
            </h2>
            <p className="text-sm text-bulir-navy/60">{service.name}</p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-bulir-navy/[0.03] p-4">
            {service.provider && (
              <Row label="Prestador" value={service.provider.name} />
            )}
            <Row
              label="Valor do serviço"
              value={formatKz(service.price)}
              strong
            />
            <Row label="O teu saldo" value={formatKz(balance)} />
            {!insufficient && (
              <Row
                label="Saldo após a reserva"
                value={formatKz(balance - service.price)}
              />
            )}
          </div>

          {insufficient && (
            <Alert message="Saldo insuficiente para esta reserva. Carrega a tua carteira para continuar." />
          )}
          {errorMessage && <Alert message={errorMessage} />}

          <div className="flex flex-col-reverse justify-end gap-2 sm:flex-row">
            <Button variant="ghost" onClick={handleClose}>
              Voltar
            </Button>
            {insufficient ? (
              <Link
                to="/app/wallet"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-bulir-navy transition-colors hover:bg-brand-hover"
              >
                Carregar saldo
              </Link>
            ) : (
              <Button isLoading={isBooking} onClick={() => void book(service)}>
                Confirmar reserva
              </Button>
            )}
          </div>
        </div>
      )}
    </Modal>
  )
}
