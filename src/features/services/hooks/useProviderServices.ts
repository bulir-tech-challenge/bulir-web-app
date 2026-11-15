import { toast } from 'sonner'
import { useAuth } from '../../../hooks/useAuth'
import { useServices } from '../../../hooks/useServices'
import { toErrorMessage } from '../../../lib/errors'
import type { Service } from '../../../types'

/** Serviços do prestador autenticado + remoção com feedback. */
export function useProviderServices() {
  const { user } = useAuth()
  const {
    services,
    isLoadingServices,
    servicesError,
    deleteService,
    isDeletingService,
  } = useServices()

  const own = services.filter((service) => service.providerId === user?.id)

  const remove = async (service: Service) => {
    try {
      await deleteService(service.id)
      toast.success(`"${service.name}" foi removido`)
    } catch (error) {
      toast.error(
        toErrorMessage(error, 'Não foi possível remover o serviço') ?? '',
      )
    }
  }

  return {
    services: own,
    isLoading: isLoadingServices,
    errorMessage: toErrorMessage(
      servicesError,
      'Não foi possível carregar os serviços',
    ),
    remove,
    isRemoving: isDeletingService,
  }
}
