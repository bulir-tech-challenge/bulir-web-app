import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useServices } from '../../../hooks/useServices'
import { toErrorMessage } from '../../../lib/errors'
import { serviceSchema } from '../../../types/schemas'
import type { Service } from '../../../types'
import type { ServiceFormData } from '../../../types/schemas'

const emptyValues = { name: '', description: '', price: undefined }

/** Formulário de serviço: cria quando `service` é null, edita caso contrário. */
export function useServiceForm(service: Service | null, onDone: () => void) {
  const {
    createService,
    updateService,
    isCreatingService,
    isUpdatingService,
    createServiceError,
    updateServiceError,
  } = useServices()

  const form = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: emptyValues,
  })

  useEffect(() => {
    form.reset(
      service
        ? {
            name: service.name,
            description: service.description,
            price: service.price,
          }
        : emptyValues,
    )
  }, [service]) // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = form.handleSubmit(async (values) => {
    if (service) {
      await updateService({ id: service.id, data: values })
      toast.success('Serviço atualizado')
    } else {
      await createService(values)
      toast.success('Serviço publicado')
    }
    onDone()
  })

  return {
    control: form.control,
    onSubmit,
    isEditing: service !== null,
    isSubmitting: isCreatingService || isUpdatingService,
    errorMessage: toErrorMessage(
      service ? updateServiceError : createServiceError,
      'Não foi possível guardar o serviço',
    ),
  }
}
