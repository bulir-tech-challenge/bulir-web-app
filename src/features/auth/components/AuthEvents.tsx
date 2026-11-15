import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

/** Reage à sessão expirada (401): limpa cache e devolve o utilizador à home. */
export function AuthEvents() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  useEffect(() => {
    const onUnauthorized = () => {
      queryClient.clear()
      toast.error('A tua sessão expirou. Entra novamente.')
      void navigate({ to: '/' })
    }

    window.addEventListener('bulir:auth:unauthorized', onUnauthorized)
    return () =>
      window.removeEventListener('bulir:auth:unauthorized', onUnauthorized)
  }, [navigate, queryClient])

  return null
}
