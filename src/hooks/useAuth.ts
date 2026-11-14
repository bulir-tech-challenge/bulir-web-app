import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authService } from '../services/auth.service'
import { usersService } from '../services/users.service'
import { queryKeys } from '../lib/query-client'
import type { LoginFormData, RegisterFormData } from '../types/schemas'
import type { UserResponse } from '../types'

export function useAuth() {
  const queryClient = useQueryClient()
  const isAuthenticated = authService.isAuthenticated()

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isUserError,
    refetch: refetchProfile,
  } = useQuery<UserResponse>({
    queryKey: queryKeys.profile,
    queryFn: usersService.getProfile,
    enabled: isAuthenticated,
    staleTime: 1000 * 60 * 5,
  })

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginFormData) => authService.login(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.profile, data.user)
      queryClient.invalidateQueries({ queryKey: queryKeys.profile })
    },
  })

  const registerMutation = useMutation({
    mutationFn: (payload: RegisterFormData) => authService.register(payload),
  })

  const logout = () => {
    authService.logout()
    queryClient.removeQueries({ queryKey: queryKeys.profile })
    queryClient.removeQueries({ queryKey: queryKeys.bookings.all })
  }

  return {
    user,
    isAuthenticated,
    isLoadingUser,
    isUserError,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    register: registerMutation.mutateAsync,
    isRegistering: registerMutation.isPending,
    registerError: registerMutation.error,
    logout,
    refetchProfile,
  }
}
