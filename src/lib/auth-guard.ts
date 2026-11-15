import { redirect } from '@tanstack/react-router'
import { authService } from '../services/auth.service'

/** Bloqueia rotas privadas: sem token volta à home. */
export function requireAuth() {
  if (!authService.isAuthenticated()) {
    throw redirect({ to: '/' })
  }
}

/** Evita mostrar a home a quem já tem sessão iniciada. */
export function isLoggedIn(): boolean {
  return authService.isAuthenticated()
}
