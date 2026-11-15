import { LayoutDashboard } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Role } from '../../../types'

export interface NavigationItem {
  to: '/app'
  exact?: boolean
  icon: LucideIcon
  /** Texto por perfil; usa `default` quando não há variação. */
  label: Partial<Record<Role, string>> & { default: string }
}

export const navigation: NavigationItem[] = [
  { to: '/app', exact: true, icon: LayoutDashboard, label: { default: 'Visão geral' } },
]

export function labelFor(item: NavigationItem, role: Role | undefined): string {
  return (role && item.label[role]) || item.label.default
}
