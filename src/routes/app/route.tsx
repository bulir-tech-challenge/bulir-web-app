import { createFileRoute } from '@tanstack/react-router'
import { AppShell } from '../../features/app-shell/components/AppShell'
import { requireAuth } from '../../lib/auth-guard'

export const Route = createFileRoute('/app')({
  beforeLoad: requireAuth,
  component: AppShell,
})
