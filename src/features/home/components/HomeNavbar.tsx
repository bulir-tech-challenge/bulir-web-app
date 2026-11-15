import { LogIn } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Logo } from '../../../components/ui/Logo'
import { navItems } from '../data/home.content'

interface HomeNavbarProps {
  onLogin: () => void
  onRegister: () => void
}

export function HomeNavbar({ onLogin, onRegister }: HomeNavbarProps) {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-5 lg:px-12">
      <Logo />

      <nav
        aria-label="Principal"
        className="hidden items-center gap-1 rounded-full bg-white/70 p-1 shadow-sm ring-1 ring-bulir-navy/5 backdrop-blur md:flex"
      >
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={[
              'rounded-full px-4 py-1.5 text-xs font-medium transition-colors',
              index === 0
                ? 'bg-white text-bulir-navy shadow'
                : 'text-bulir-navy/50 hover:text-bulir-navy',
            ].join(' ')}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onLogin}
          className="flex items-center gap-1.5 text-xs font-medium text-bulir-navy hover:text-brand-deep"
        >
          <LogIn size={16} strokeWidth={1.5} />
          Entrar
        </button>
        <Button variant="secondary" className="h-9 px-4 text-xs" onClick={onRegister}>
          Criar conta
        </Button>
      </div>
    </header>
  )
}
