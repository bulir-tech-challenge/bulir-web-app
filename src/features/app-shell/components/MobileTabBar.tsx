import { NavItems } from './NavItems'
import type { Role } from '../../../types'

export function MobileTabBar({ role }: { role: Role }) {
  return (
    <nav
      aria-label="Principal"
      className="fixed inset-x-0 bottom-0 z-20 flex border-t border-bulir-navy/5 bg-white lg:hidden"
    >
      <NavItems role={role} variant="tabbar" />
    </nav>
  )
}
