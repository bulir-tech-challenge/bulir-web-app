import { Briefcase, CalendarCheck, LayoutDashboard, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Role } from '../../../types'

export interface NavigationItem {
  to: '/app' | '/app/services' | '/app/bookings' | '/app/wallet'
  exact?: boolean
  icon: LucideIcon
  /** Texto por perfil; usa `default` quando não há variação. */
  label: Partial<Record<Role, string>> & { default: string }
}

export const navigation: NavigationItem[] = [
  { to: '/app', exact: true, icon: LayoutDashboard, label: { default: 'Visão geral' } },
  {
    to: '/app/services',
    icon: Briefcase,
    label: { CLIENT: 'Explorar serviços', PROVIDER: 'Meus serviços', default: 'Serviços' },
  },
  { to: '/app/bookings', icon: CalendarCheck, label: { default: 'Reservas' } },
  { to: '/app/wallet', icon: Wallet, label: { default: 'Carteira' } },
]

export function labelFor(item: NavigationItem, role: Role | undefined): string {
  return (role && item.label[role]) || item.label.default
}
