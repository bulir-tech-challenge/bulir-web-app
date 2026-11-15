import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../components/ui/PageHeader'

export const Route = createFileRoute('/app/')({
  component: () => <PageHeader title="Visão geral" />,
})
