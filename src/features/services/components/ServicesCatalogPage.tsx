import { useState } from 'react'
import { Search } from 'lucide-react'
import dropshipping from '../../../assets/images/Dropshipping model-pana.svg'
import { Alert } from '../../../components/ui/Alert'
import { Button } from '../../../components/ui/Button'
import { EmptyState } from '../../../components/ui/EmptyState'
import { Input } from '../../../components/ui/Input'
import { PageHeader } from '../../../components/ui/PageHeader'
import { Spinner } from '../../../components/ui/Spinner'
import { useServices } from '../../../hooks/useServices'
import { useWallet } from '../../../hooks/useWallet'
import { toErrorMessage } from '../../../lib/errors'
import { useServiceSearch } from '../hooks/useServiceSearch'
import { BookServiceDialog } from './BookServiceDialog'
import { ServiceCard } from './ServiceCard'
import { ServicesGrid } from './ServicesGrid'
import type { Service } from '../../../types'

export function ServicesCatalogPage() {
  const { services, isLoadingServices, servicesError } = useServices()
  const { balance } = useWallet()
  const { query, setQuery, results } = useServiceSearch(services)
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <PageHeader
        title="Explorar serviços"
        description="Encontra o prestador certo e reserva com saldo da tua carteira."
      />

      <div className="max-w-md">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar por serviço ou prestador"
          aria-label="Pesquisar serviços"
          leftIcon={<Search size={18} strokeWidth={1.5} />}
        />
      </div>

      {servicesError && (
        <Alert
          message={
            toErrorMessage(
              servicesError,
              'Não foi possível carregar os serviços',
            ) ?? ''
          }
        />
      )}

      {isLoadingServices ? (
        <Spinner />
      ) : results.length === 0 ? (
        <EmptyState
          image={dropshipping}
          title={query ? 'Nenhum serviço encontrado' : 'Ainda não há serviços'}
          description={
            query
              ? 'Tenta outra palavra-chave.'
              : 'Volta mais tarde: os prestadores estão a publicar novos serviços.'
          }
        />
      ) : (
        <ServicesGrid>
          {results.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              action={
                <Button
                  className="h-10 px-5"
                  onClick={() => setSelected(service)}
                >
                  Reservar
                </Button>
              }
            />
          ))}
        </ServicesGrid>
      )}

      <BookServiceDialog
        service={selected}
        balance={balance}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}
