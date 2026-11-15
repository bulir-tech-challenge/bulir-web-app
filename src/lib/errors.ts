import { extractErrorMessage } from '../services/api'

/** Mensagem de erro pronta para a UI, ou null quando não há erro. */
export function toErrorMessage(error: unknown, fallback?: string): string | null {
  return error ? extractErrorMessage(error, fallback) : null
}
