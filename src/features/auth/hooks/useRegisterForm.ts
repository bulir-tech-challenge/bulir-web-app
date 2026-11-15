import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../../hooks/useAuth'
import { extractErrorMessage } from '../../../services/api'
import { registerSchema } from '../../../types/schemas'
import type { RegisterFormData } from '../../../types/schemas'

export function useRegisterForm(onSuccess: () => void) {
  const { register, login, isRegistering, isLoggingIn, registerError } =
    useAuth()

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      nif: '',
      email: '',
      password: '',
      role: 'CLIENT',
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    await register(values)
    await login({ email: values.email, password: values.password })
    onSuccess()
  })

  return {
    control: form.control,
    onSubmit,
    isSubmitting: isRegistering || isLoggingIn,
    errorMessage: registerError
      ? extractErrorMessage(registerError, 'Não foi possível criar a conta')
      : null,
  }
}
