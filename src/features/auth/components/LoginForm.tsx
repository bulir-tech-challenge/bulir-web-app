import { ArrowRight, Mail } from 'lucide-react'
import { Alert } from '../../../components/ui/Alert'
import { Button } from '../../../components/ui/Button'
import { FormInput } from '../../../components/form/FormInput'
import { FormPasswordInput } from '../../../components/form/FormPasswordInput'
import { useLoginForm } from '../hooks/useLoginForm'

interface LoginFormProps {
  onSuccess: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { control, onSubmit, isSubmitting, errorMessage } =
    useLoginForm(onSuccess)

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {errorMessage && <Alert message={errorMessage} />}

      <FormInput
        control={control}
        name="email"
        label="E-mail ou NIF"
        placeholder="exemplo@email.com"
        autoComplete="username"
        leftIcon={<Mail size={18} strokeWidth={1.5} />}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="A tua senha"
        autoComplete="current-password"
      />

      <Button
        type="submit"
        fullWidth
        isLoading={isSubmitting}
        rightIcon={<ArrowRight size={18} strokeWidth={1.5} />}
      >
        Entrar
      </Button>
    </form>
  )
}
