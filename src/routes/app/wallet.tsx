import { createFileRoute } from '@tanstack/react-router'
import { WalletPage } from '../../features/wallet/components/WalletPage'

export const Route = createFileRoute('/app/wallet')({
  component: WalletPage,
})
