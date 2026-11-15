import type { ReactNode } from 'react'

interface EmptyStateProps {
  image?: string
  title: string
  description?: string
  action?: ReactNode
}

export function EmptyState({ image, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 py-12 text-center">
      {image && <img src={image} alt="" className="h-40 w-40" draggable={false} />}
      <h3 className="font-display text-lg font-semibold text-bulir-navy">{title}</h3>
      {description && <p className="max-w-sm text-sm text-bulir-navy/60">{description}</p>}
      {action}
    </div>
  )
}
