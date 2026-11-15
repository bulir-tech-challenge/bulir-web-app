import { Logo } from '../../../components/ui/Logo'
import { Modal } from '../../../components/ui/Modal'
import type { AuthMode } from '../hooks/useAuthModal'
import { AuthModalAside } from './AuthModalAside'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

interface AuthModalProps {
  mode: AuthMode | null
  onModeChange: (mode: AuthMode) => void
  onClose: () => void
}

const copy = {
  login: {
    title: 'Entrar',
    subtitle: 'Usa o teu e-mail ou NIF para aceder à conta.',
    switchText: 'Ainda não tens conta?',
    switchAction: 'Criar conta',
    switchTo: 'register' as const,
  },
  register: {
    title: 'Criar conta',
    subtitle: 'Preenche os dados abaixo para começares.',
    switchText: 'Já tens conta?',
    switchAction: 'Entrar',
    switchTo: 'login' as const,
  },
}

export function AuthModal({ mode, onModeChange, onClose }: AuthModalProps) {
  const current = mode ? copy[mode] : copy.login

  return (
    <Modal open={mode !== null} onClose={onClose} label={current.title}>
      {mode && (
        <div className="grid md:grid-cols-[2fr_3fr]">
          <AuthModalAside mode={mode} />

          <div className="flex max-h-[90dvh] flex-col gap-6 overflow-y-auto p-6 sm:p-10">
            <Logo />

            <div className="flex flex-col gap-1">
              <h2 className="font-display text-2xl font-bold text-bulir-navy">{current.title}</h2>
              <p className="text-sm text-bulir-navy/60">{current.subtitle}</p>
            </div>

            {mode === 'login' ? <LoginForm onSuccess={onClose} /> : <RegisterForm onSuccess={onClose} />}

            <p className="text-center text-sm text-bulir-navy/60">
              {current.switchText}{' '}
              <button
                type="button"
                onClick={() => onModeChange(current.switchTo)}
                className="font-semibold text-brand-deep hover:underline"
              >
                {current.switchAction}
              </button>
            </p>
          </div>
        </div>
      )}
    </Modal>
  )
}
