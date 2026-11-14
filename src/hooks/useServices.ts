import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { servicesService } from '../services/services.service'
import { queryKeys } from '../lib/query-client'
import type { Service } from '../types'
import type { ServiceFormData } from '../types/schemas'

export function useServices() {
  const queryClient = useQueryClient()

  const servicesQuery = useQuery<Service[]>({
    queryKey: queryKeys.services.all,
    queryFn: servicesService.getServices,
  })

  const createServiceMutation = useMutation({
    mutationFn: (data: ServiceFormData) => servicesService.createService(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.services.all })
    },
  })

  const updateServiceMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<ServiceFormData> }) =>
      servicesService.updateService(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.services.all })
      queryClient.invalidateQueries({ queryKey: queryKeys.services.detail(variables.id) })
    },
  })

  const deleteServiceMutation = useMutation({
    mutationFn: (id: string) => servicesService.deleteService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.services.all })
    },
  })

  return {
    services: servicesQuery.data ?? [],
    isLoadingServices: servicesQuery.isLoading,
    isErrorServices: servicesQuery.isError,
    servicesError: servicesQuery.error,
    refetchServices: servicesQuery.refetch,
    createService: createServiceMutation.mutateAsync,
    isCreatingService: createServiceMutation.isPending,
    createServiceError: createServiceMutation.error,
    updateService: updateServiceMutation.mutateAsync,
    isUpdatingService: updateServiceMutation.isPending,
    updateServiceError: updateServiceMutation.error,
    deleteService: deleteServiceMutation.mutateAsync,
    isDeletingService: deleteServiceMutation.isPending,
    deleteServiceError: deleteServiceMutation.error,
  }
}

export function useService(id: string) {
  return useQuery<Service>({
    queryKey: queryKeys.services.detail(id),
    queryFn: () => servicesService.getServiceById(id),
    enabled: !!id,
  })
}
