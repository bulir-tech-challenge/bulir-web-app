// pt-BR dá o separador "45.000,00" usado no design (pt-AO varia por browser).
const amount = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const date = new Intl.DateTimeFormat('pt-AO', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

/** Formata um valor em Kwanzas, ex.: "45.000,00 Kz". */
export function formatKz(value: number): string {
  return `${amount.format(value)} Kz`
}

export function formatDate(iso: string): string {
  return date.format(new Date(iso))
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
