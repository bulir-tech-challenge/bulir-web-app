import { AuthLayout } from './AuthLayout'
import { LoginHeader } from './LoginHeader'
import { LoginForm } from './LoginForm'

export function LoginPage() {
  return (
    <AuthLayout>
      <LoginHeader />
      <LoginForm />
    </AuthLayout>
  )
}
