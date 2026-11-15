import { useDeferredValue, useMemo, useState } from 'react'
import type { Service } from '../../../types'

const normalize = (text: string) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

/** Filtra serviços por nome, descrição ou prestador (sem acentos, sem distinguir maiúsculas). */
export function useServiceSearch(services: Service[]) {
  const [query, setQuery] = useState('')
  const deferred = useDeferredValue(query)

  const results = useMemo(() => {
    const term = normalize(deferred.trim())
    if (!term) return services
    return services.filter((service) =>
      normalize(
        `${service.name} ${service.description} ${service.provider?.name ?? ''}`,
      ).includes(term),
    )
  }, [services, deferred])

  return { query, setQuery, results }
}
