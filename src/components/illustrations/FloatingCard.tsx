import type { ReactNode } from 'react'

interface FloatingCardProps {
  children: ReactNode
  className?: string
}

/** Cartão branco flutuante usado sobre as ilustrações. */
export function FloatingCard({ children, className = '' }: FloatingCardProps) {
  return (
    <div className={`absolute rounded-2xl bg-white p-3 shadow-xl shadow-black/30 ${className}`}>
      {children}
    </div>
  )
}
