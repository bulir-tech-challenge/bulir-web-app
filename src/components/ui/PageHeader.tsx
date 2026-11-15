import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  action?: ReactNode
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-bold text-bulir-navy">{title}</h1>
        {description && <p className="text-sm text-bulir-navy/60">{description}</p>}
      </div>
      {action}
    </div>
  )
}
