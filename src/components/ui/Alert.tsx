import { AlertCircle } from 'lucide-react'

interface AlertProps {
  message: string
}

export function Alert({ message }: AlertProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
    >
      <AlertCircle size={18} strokeWidth={1.5} className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </div>
  )
}
