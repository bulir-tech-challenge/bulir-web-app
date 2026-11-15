import { useNavigate } from '@tanstack/react-router'
import { AuthLayout } from './AuthLayout'
import { LoginHeader } from './LoginHeader'
import { LoginForm } from './LoginForm'

export function LoginPage() {
  const navigate = useNavigate()

  return (
    <AuthLayout>
      <LoginHeader />
      <LoginForm onSuccess={() => navigate({ to: '/' })} />
    </AuthLayout>
  )
}
