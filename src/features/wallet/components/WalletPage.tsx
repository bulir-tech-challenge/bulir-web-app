import cashPayment from '../../../assets/images/Cash Payment-bro.svg'
import { Card } from '../../../components/ui/Card'
import { EmptyState } from '../../../components/ui/EmptyState'
import { PageHeader } from '../../../components/ui/PageHeader'
import { Spinner } from '../../../components/ui/Spinner'
import { useWallet } from '../../../hooks/useWallet'
import { BalanceCard } from './BalanceCard'
import { DepositForm } from './DepositForm'

export function WalletPage() {
  const { user, balance, isLoading } = useWallet()

  if (isLoading || !user) return <Spinner />

  const isClient = user.role === 'CLIENT'

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        title="Carteira"
        description={isClient ? 'Gere o saldo que usas nas reservas.' : 'Acompanha o que recebes pelos teus serviços.'}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <BalanceCard
          balance={balance}
          holder={user.name}
          caption={isClient ? 'Saldo disponível' : 'Saldo recebido'}
        />

        {isClient ? (
          <DepositForm />
        ) : (
          <Card>
            <EmptyState
              image={cashPayment}
              title="Pagamento direto no teu bolso"
              description="Sempre que um cliente reservar um serviço teu, o valor é creditado aqui automaticamente."
            />
          </Card>
        )}
      </div>
    </div>
  )
}
