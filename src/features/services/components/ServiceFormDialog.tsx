import { Banknote } from 'lucide-react'
import { Alert } from '../../../components/ui/Alert'
import { Button } from '../../../components/ui/Button'
import { Modal } from '../../../components/ui/Modal'
import { FormInput } from '../../../components/form/FormInput'
import { FormNumberInput } from '../../../components/form/FormNumberInput'
import { FormTextarea } from '../../../components/form/FormTextarea'
import { useServiceForm } from '../hooks/useServiceForm'
import type { Service } from '../../../types'

/** `undefined` = fechado · `null` = novo serviço · `Service` = edição. */
export type ServiceDialogTarget = Service | null | undefined

interface ServiceFormDialogProps {
  target: ServiceDialogTarget
  onClose: () => void
}

function ServiceForm({
  service,
  onClose,
}: {
  service: Service | null
  onClose: () => void
}) {
  const { control, onSubmit, isEditing, isSubmitting, errorMessage } =
    useServiceForm(service, onClose)

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5 p-6 sm:p-8"
    >
      <h2 className="pr-8 font-display text-xl font-bold text-bulir-navy">
        {isEditing ? 'Editar serviço' : 'Novo serviço'}
      </h2>

      {errorMessage && <Alert message={errorMessage} />}

      <FormInput
        control={control}
        name="name"
        label="Título"
        placeholder="Ex.: Reparação de ar condicionado"
      />
      <FormTextarea
        control={control}
        name="description"
        label="Descrição"
        placeholder="Explica o que está incluído no serviço"
      />
      <FormNumberInput
        control={control}
        name="price"
        label="Preço (Kz)"
        placeholder="0,00"
        leftIcon={<Banknote size={18} strokeWidth={1.5} />}
      />

      <div className="flex flex-col-reverse justify-end gap-2 sm:flex-row">
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit" isLoading={isSubmitting}>
          {isEditing ? 'Guardar alterações' : 'Publicar serviço'}
        </Button>
      </div>
    </form>
  )
}

export function ServiceFormDialog({ target, onClose }: ServiceFormDialogProps) {
  return (
    <Modal
      open={target !== undefined}
      onClose={onClose}
      label="Formulário de serviço"
      size="md"
    >
      {target !== undefined && (
        <ServiceForm service={target} onClose={onClose} />
      )}
    </Modal>
  )
}
