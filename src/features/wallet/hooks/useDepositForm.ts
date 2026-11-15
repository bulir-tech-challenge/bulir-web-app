import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useWallet } from '../../../hooks/useWallet'
import { toErrorMessage } from '../../../lib/errors'
import { formatKz } from '../../../lib/format'
import { depositSchema } from '../../../types/schemas'
import type { DepositFormData } from '../../../types/schemas'

export function useDepositForm() {
  const { deposit, isDepositing, depositError } = useWallet()

  const form = useForm<DepositFormData>({
    resolver: zodResolver(depositSchema),
    defaultValues: { amount: undefined },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    await deposit(values)
    toast.success(`Saldo carregado com ${formatKz(values.amount)}`)
    form.reset({ amount: undefined })
  })

  return {
    control: form.control,
    setAmount: (amount: number) => form.setValue('amount', amount, { shouldValidate: true }),
    onSubmit,
    isSubmitting: isDepositing,
    errorMessage: toErrorMessage(depositError, 'Não foi possível carregar o saldo'),
  }
}
