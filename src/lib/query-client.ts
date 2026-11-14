import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // 2 minutos
      gcTime: 1000 * 60 * 10, // 10 minutos
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

export const queryKeys = {
  profile: ['users', 'profile'] as const,
  services: {
    all: ['services'] as const,
    detail: (id: string) => ['services', id] as const,
  },
  bookings: {
    all: ['bookings'] as const,
  },
} as const
