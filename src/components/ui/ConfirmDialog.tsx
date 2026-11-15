import { Button } from './Button'
import { Modal } from './Modal'

interface ConfirmDialogProps {
  open: boolean
  title: string
  description: string
  confirmLabel: string
  isLoading?: boolean
  danger?: boolean
  onConfirm: () => void
  onClose: () => void
}

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  isLoading,
  danger,
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  return (
    <Modal open={open} onClose={onClose} label={title} size="sm">
      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div className="flex flex-col gap-2 pr-8">
          <h2 className="font-display text-xl font-bold text-bulir-navy">{title}</h2>
          <p className="text-sm text-bulir-navy/60">{description}</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            Voltar
          </Button>
          <Button
            variant={danger ? 'danger' : 'primary'}
            isLoading={isLoading}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
