import { createFileRoute } from '@tanstack/react-router'
import { BookingsPage } from '../../features/bookings/components/BookingsPage'

export const Route = createFileRoute('/app/bookings')({
  component: BookingsPage,
})
