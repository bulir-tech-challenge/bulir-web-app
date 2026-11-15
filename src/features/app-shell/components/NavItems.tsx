import { Link } from '@tanstack/react-router'
import { labelFor, navigation } from '../data/navigation'
import type { Role } from '../../../types'

interface NavItemsProps {
  role: Role | undefined
  variant: 'sidebar' | 'tabbar'
}

const base = {
  sidebar: 'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
  tabbar: 'flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-medium transition-colors',
}

// O Link do TanStack marca a rota ativa com data-status="active".
const colors = {
  sidebar:
    'text-bulir-navy/60 hover:bg-bulir-navy/5 hover:text-bulir-navy data-[status=active]:bg-brand/15 data-[status=active]:text-bulir-navy',
  tabbar: 'text-bulir-navy/40 data-[status=active]:text-bulir-navy',
}

export function NavItems({ role, variant }: NavItemsProps) {
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          activeOptions={{ exact: item.exact }}
          className={`${base[variant]} ${colors[variant]}`}
        >
          <item.icon size={variant === 'sidebar' ? 18 : 22} strokeWidth={1.5} />
          {labelFor(item, role)}
        </Link>
      ))}
    </>
  )
}
