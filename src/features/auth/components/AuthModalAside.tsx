import cleaning from '../../../assets/images/Obsessive compulsive disorder-pana.svg'
import cleaningAlt from '../../../assets/images/Obsessive compulsive disorder-rafiki.svg'
import { Illustration } from '../../../components/illustrations/Illustration'
import type { AuthMode } from '../hooks/useAuthModal'

const content: Record<
  AuthMode,
  { image: string; title: string; text: string }
> = {
  login: {
    image: cleaning,
    title: 'Bom ver-te de volta',
    text: 'Entra e continua a trabalhar ou a contratar com segurança.',
  },
  register: {
    image: cleaningAlt,
    title: 'Começa em minutos',
    text: 'Cria a tua conta e junta-te à comunidade de Bulidores.',
  },
}

export function AuthModalAside({ mode }: { mode: AuthMode }) {
  const { image, title, text } = content[mode]

  return (
    <aside className="hidden flex-col items-center justify-center gap-4 bg-brand/10 p-8 text-center md:flex">
      <Illustration src={image} className="h-56 w-56" />
      <h3 className="font-display text-xl font-semibold text-bulir-navy">
        {title}
      </h3>
      <p className="max-w-xs text-sm text-bulir-navy/60">{text}</p>
    </aside>
  )
}
