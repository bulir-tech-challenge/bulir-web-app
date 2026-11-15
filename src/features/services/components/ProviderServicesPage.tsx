import { useState } from 'react'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import enthusiastic from '../../../assets/images/Enthusiastic-pana.svg'
import { Alert } from '../../../components/ui/Alert'
import { Button } from '../../../components/ui/Button'
import { ConfirmDialog } from '../../../components/ui/ConfirmDialog'
import { EmptyState } from '../../../components/ui/EmptyState'
import { PageHeader } from '../../../components/ui/PageHeader'
import { Spinner } from '../../../components/ui/Spinner'
import { useProviderServices } from '../hooks/useProviderServices'
import { ServiceCard } from './ServiceCard'
import { ServiceFormDialog } from './ServiceFormDialog'
import { ServicesGrid } from './ServicesGrid'
import type { ServiceDialogTarget } from './ServiceFormDialog'
import type { Service } from '../../../types'

export function ProviderServicesPage() {
  const { services, isLoading, errorMessage, remove, isRemoving } =
    useProviderServices()
  const [formTarget, setFormTarget] = useState<ServiceDialogTarget>(undefined)
  const [toDelete, setToDelete] = useState<Service | null>(null)

  const newServiceButton = (
    <Button
      onClick={() => setFormTarget(null)}
      rightIcon={<Plus size={18} strokeWidth={1.5} />}
    >
      Novo serviço
    </Button>
  )

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <PageHeader
        title="Meus serviços"
        description="Publica o que sabes fazer e define o teu preço."
        action={services.length > 0 ? newServiceButton : undefined}
      />

      {errorMessage && <Alert message={errorMessage} />}

      {isLoading ? (
        <Spinner />
      ) : services.length === 0 ? (
        <EmptyState
          image={enthusiastic}
          title="Publica o teu primeiro serviço"
          description="Os clientes encontram-te pelo que ofereces. Começa em menos de um minuto."
          action={newServiceButton}
        />
      ) : (
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              showProvider={false}
              action={
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setFormTarget(service)}
                    aria-label={`Editar ${service.name}`}
                    className="rounded-lg p-2 text-bulir-navy/60 transition-colors hover:bg-bulir-navy/5 hover:text-bulir-navy"
                  >
                    <Pencil size={18} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setToDelete(service)}
                    aria-label={`Remover ${service.name}`}
                    className="rounded-lg p-2 text-bulir-navy/60 transition-colors hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={18} strokeWidth={1.5} />
                  </button>
                </div>
              }
            />
          ))}
        </ServicesGrid>
      )}

      <ServiceFormDialog
        target={formTarget}
        onClose={() => setFormTarget(undefined)}
      />

      <ConfirmDialog
        open={toDelete !== null}
        danger
        title="Remover serviço?"
        description={`"${toDelete?.name ?? ''}" deixará de aparecer para os clientes.`}
        confirmLabel="Remover"
        isLoading={isRemoving}
        onClose={() => setToDelete(null)}
        onConfirm={async () => {
          if (toDelete) await remove(toDelete)
          setToDelete(null)
        }}
      />
    </div>
  )
}
