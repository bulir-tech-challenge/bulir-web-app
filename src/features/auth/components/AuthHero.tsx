import { BadgeCheck, Users, Wallet } from 'lucide-react'
import { Logo } from '../../../components/ui/Logo'

const highlights = [
  { icon: Users, label: '4.400+ utilizadores ativos' },
  { icon: BadgeCheck, label: '3.000+ serviços concluídos' },
  { icon: Wallet, label: 'Pagamentos seguros' },
]

export function AuthHero() {
  return (
    <aside className="relative hidden flex-col justify-between overflow-hidden bg-bulir-navy p-12 text-white lg:flex">
      <div
        aria-hidden
        className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <Logo tone="light" />

      <div className="relative flex flex-col gap-6">
        <h2 className="font-display text-5xl leading-tight font-bold">
          Habilidade encontra <span className="text-brand">Oportunidade</span>
        </h2>
        <p className="max-w-md text-white/70">
          Mostra a tua competência e cobra o que realmente mereces. Junta-te à comunidade de
          Bulidores que está a colocar Angola a trabalhar.
        </p>

        <ul className="flex flex-col gap-3">
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-white/90">
              <Icon size={20} strokeWidth={1.5} className="text-brand" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <p className="relative text-xs text-white/50">© 2026 Bulir. Todos os direitos reservados.</p>
    </aside>
  )
}
