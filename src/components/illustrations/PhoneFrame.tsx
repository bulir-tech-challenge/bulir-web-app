import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  className?: string
}

/** Moldura de telemóvel reutilizável para ilustrações. */
export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div
      className={`relative rounded-[2.5rem] border-[6px] border-slate-300/80 bg-white shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="absolute top-2 left-1/2 h-4 w-16 -translate-x-1/2 rounded-full bg-bulir-navy" />
      <div className="h-full overflow-hidden rounded-[2rem] pt-8">{children}</div>
    </div>
  )
}
