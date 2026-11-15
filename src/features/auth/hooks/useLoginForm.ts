import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../../hooks/useAuth'
import { extractErrorMessage } from '../../../services/api'
import { loginSchema } from '../../../types/schemas'
import type { LoginFormData } from '../../../types/schemas'

export function useLoginForm(onSuccess: () => void) {
  const { login, isLoggingIn, loginError } = useAuth()

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    await login(values)
    onSuccess()
  })

  return {
    control: form.control,
    onSubmit,
    isSubmitting: isLoggingIn,
    errorMessage: loginError
      ? extractErrorMessage(loginError, 'Credenciais inválidas')
      : null,
  }
}
