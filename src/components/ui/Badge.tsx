import type { ReactNode } from 'react'

type BadgeTone = 'success' | 'danger' | 'neutral'

const tones: Record<BadgeTone, string> = {
  success: 'bg-brand/15 text-brand-deep',
  danger: 'bg-red-50 text-red-600',
  neutral: 'bg-bulir-navy/5 text-bulir-navy/60',
}

export function Badge({ tone = 'neutral', children }: { tone?: BadgeTone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}
