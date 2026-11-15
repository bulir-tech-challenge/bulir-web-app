import { useState } from 'react'

export type AuthMode = 'login' | 'register'

export function useAuthModal() {
  const [mode, setMode] = useState<AuthMode | null>(null)

  return {
    mode,
    isOpen: mode !== null,
    open: (next: AuthMode) => setMode(next),
    close: () => setMode(null),
  }
}
