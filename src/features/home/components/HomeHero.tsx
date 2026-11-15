import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '../../../components/ui/Button'

interface HomeHeroProps {
  isAuthenticated: boolean
  onStart: () => void
}

export function HomeHero({ isAuthenticated, onStart }: HomeHeroProps) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
      <h1 className="font-display text-3xl leading-tight font-normal text-bulir-navy sm:text-4xl 2xl:text-5xl">
        Habilidade encontra{' '}
        <span className="text-brand-deep">oportunidade</span>
        <br />
        com um toque na <span className="text-brand-deep">Bulir</span>
      </h1>

      <p className="max-w-xl text-sm text-bulir-navy/60">
        Mostra a tua competência e cobra o que realmente mereces. Qualquer
        prestador ou cliente em Angola pode agora contratar e receber com
        segurança, sem intermediários.
      </p>

      <div className="mt-3 flex justify-center">
        {isAuthenticated ? (
          <Link
            to="/app"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-bulir-navy shadow-lg shadow-brand/50 transition-colors hover:bg-brand-hover"
          >
            Ir para o painel
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        ) : (
          <Button
            onClick={onStart}
            className="relative z-10 shadow-lg shadow-brand/50"
            rightIcon={<ArrowRight size={16} strokeWidth={1.5} />}
          >
            Começar agora
          </Button>
        )}
      </div>
    </div>
  )
}
