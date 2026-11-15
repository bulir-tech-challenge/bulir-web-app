import { ArrowRight, IdCard, Mail, User } from 'lucide-react'
import { Alert } from '../../../components/ui/Alert'
import { Button } from '../../../components/ui/Button'
import { FormInput } from '../../../components/form/FormInput'
import { FormPasswordInput } from '../../../components/form/FormPasswordInput'
import { FormSegmentedControl } from '../../../components/form/FormSegmentedControl'
import { roleOptions } from '../data/roles'
import { useRegisterForm } from '../hooks/useRegisterForm'

interface RegisterFormProps {
  onSuccess: () => void
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { control, onSubmit, isSubmitting, errorMessage } = useRegisterForm(onSuccess)

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      {errorMessage && <Alert message={errorMessage} />}

      <FormSegmentedControl control={control} name="role" label="Quero entrar como" options={roleOptions} />

      <FormInput
        control={control}
        name="name"
        label="Nome completo"
        placeholder="O teu nome"
        autoComplete="name"
        leftIcon={<User size={18} strokeWidth={1.5} />}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput
          control={control}
          name="nif"
          label="NIF"
          placeholder="000000000"
          leftIcon={<IdCard size={18} strokeWidth={1.5} />}
        />
        <FormInput
          control={control}
          name="email"
          label="E-mail"
          type="email"
          placeholder="exemplo@email.com"
          autoComplete="email"
          leftIcon={<Mail size={18} strokeWidth={1.5} />}
        />
      </div>

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Mínimo 8 caracteres"
        autoComplete="new-password"
      />

      <Button type="submit" fullWidth isLoading={isSubmitting} rightIcon={<ArrowRight size={18} strokeWidth={1.5} />}>
        Criar conta
      </Button>
    </form>
  )
}
