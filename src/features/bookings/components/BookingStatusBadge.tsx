import { Badge } from '../../../components/ui/Badge'
import type { BookingStatus } from '../../../types'

const config: Record<
  BookingStatus,
  { label: string; tone: 'success' | 'danger' }
> = {
  CONFIRMED: { label: 'Confirmada', tone: 'success' },
  CANCELLED: { label: 'Cancelada', tone: 'danger' },
}

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  const { label, tone } = config[status]
  return <Badge tone={tone}>{label}</Badge>
}
