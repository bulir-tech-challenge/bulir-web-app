import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { usersService } from '../services/users.service'
import { authService } from '../services/auth.service'
import { queryKeys } from '../lib/query-client'
import type { DepositFormData } from '../types/schemas'
import type { UserResponse } from '../types'

export function useWallet() {
  const queryClient = useQueryClient()
  const isAuthenticated = authService.isAuthenticated()

  const profileQuery = useQuery<UserResponse>({
    queryKey: queryKeys.profile,
    queryFn: usersService.getProfile,
    enabled: isAuthenticated,
  })

  const depositMutation = useMutation({
    mutationFn: (data: DepositFormData) => usersService.deposit(data),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(queryKeys.profile, updatedUser)
      queryClient.invalidateQueries({ queryKey: queryKeys.profile })
    },
  })

  return {
    balance: profileQuery.data?.balance ?? 0,
    user: profileQuery.data,
    isLoading: profileQuery.isLoading,
    isError: profileQuery.isError,
    error: profileQuery.error,
    refetchWallet: profileQuery.refetch,
    deposit: depositMutation.mutateAsync,
    isDepositing: depositMutation.isPending,
    depositError: depositMutation.error,
  }
}
