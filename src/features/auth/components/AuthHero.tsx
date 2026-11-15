import { Logo } from '../../../components/ui/Logo'
import { AuthIllustration } from './AuthIllustration'

const stats = [
  { value: '4.400+', label: 'Utilizadores Ativos' },
  { value: '3.000+', label: 'Serviços Concluídos' },
  { value: '100%', label: 'Avaliações Positivas' },
]

export function AuthHero() {
  return (
    <aside className="relative hidden flex-col justify-between gap-10 overflow-hidden bg-bulir-navy p-12 text-white lg:flex">
      <div
        aria-hidden
        className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <Logo tone="light" />

      <div className="relative flex flex-col gap-4">
        <h2 className="font-display text-5xl leading-tight font-bold">
          Habilidade encontra <span className="text-brand">Oportunidade</span>
        </h2>
        <p className="max-w-md text-white/70">
          Mostra a tua competência e cobra o que realmente mereces. Junta-te à comunidade de
          Bulidores que está a colocar Angola a trabalhar.
        </p>
      </div>

      <div className="relative">
        <AuthIllustration />
      </div>

      <dl className="relative grid grid-cols-3 gap-4">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <dt className="font-display text-xl font-semibold text-brand">{value}</dt>
            <dd className="text-xs text-white/60">{label}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
