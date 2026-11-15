import { createFileRoute } from '@tanstack/react-router'
import { OverviewPage } from '../../features/overview/components/OverviewPage'

export const Route = createFileRoute('/app/')({
  component: OverviewPage,
})
