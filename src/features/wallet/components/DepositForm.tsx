import { ArrowRight, Banknote } from 'lucide-react'
import { Alert } from '../../../components/ui/Alert'
import { Button } from '../../../components/ui/Button'
import { Card } from '../../../components/ui/Card'
import { FormNumberInput } from '../../../components/form/FormNumberInput'
import { formatKz } from '../../../lib/format'
import { useDepositForm } from '../hooks/useDepositForm'

const quickAmounts = [5_000, 10_000, 50_000, 100_000]

export function DepositForm() {
  const { control, setAmount, onSubmit, isSubmitting, errorMessage } = useDepositForm()

  return (
    <Card>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-lg font-semibold text-bulir-navy">Carregar saldo</h2>
          <p className="text-sm text-bulir-navy/60">Escolhe um valor e usa-o para reservar serviços.</p>
        </div>

        {errorMessage && <Alert message={errorMessage} />}

        <FormNumberInput
          control={control}
          name="amount"
          label="Valor (Kz)"
          placeholder="0,00"
          leftIcon={<Banknote size={18} strokeWidth={1.5} />}
        />

        <div className="flex flex-wrap gap-2">
          {quickAmounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(value)}
              className="rounded-full bg-bulir-navy/5 px-3 py-1.5 text-xs font-medium text-bulir-navy transition-colors hover:bg-brand/20"
            >
              {formatKz(value)}
            </button>
          ))}
        </div>

        <Button type="submit" isLoading={isSubmitting} rightIcon={<ArrowRight size={18} strokeWidth={1.5} />}>
          Carregar
        </Button>
      </form>
    </Card>
  )
}
