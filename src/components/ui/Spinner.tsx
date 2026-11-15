import { Loader2 } from 'lucide-react'

export function Spinner({ label = 'A carregar...' }: { label?: string }) {
  return (
    <div role="status" className="flex items-center justify-center gap-2 py-16 text-sm text-bulir-navy/50">
      <Loader2 size={18} className="animate-spin" />
      {label}
    </div>
  )
}
