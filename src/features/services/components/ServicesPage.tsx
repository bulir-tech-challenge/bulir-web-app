import { Spinner } from '../../../components/ui/Spinner'
import { useAuth } from '../../../hooks/useAuth'
import { ProviderServicesPage } from './ProviderServicesPage'
import { ServicesCatalogPage } from './ServicesCatalogPage'

/** Mesma rota, duas visões: catálogo para clientes, gestão para prestadores. */
export function ServicesPage() {
  const { user } = useAuth()

  if (!user) return <Spinner />

  return user.role === 'PROVIDER' ? (
    <ProviderServicesPage />
  ) : (
    <ServicesCatalogPage />
  )
}
