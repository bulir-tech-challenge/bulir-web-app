import type { HTMLAttributes } from 'react'

export function Card({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ring-bulir-navy/5 ${className}`}
      {...rest}
    />
  )
}
