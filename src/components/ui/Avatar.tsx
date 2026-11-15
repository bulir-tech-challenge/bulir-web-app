import type { ReactNode } from 'react'

interface AvatarProps {
  src?: string
  name: string
  badge?: ReactNode
  className?: string
}

export function Avatar({ src, name, badge, className = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <div className={`relative h-12 w-12 ${className}`}>
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full rounded-xl object-cover shadow-md ring-2 ring-white"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-sm font-semibold text-bulir-navy shadow-md">
          {initials}
        </div>
      )}
      {badge && (
        <span className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-bulir-navy text-white ring-2 ring-white">
          {badge}
        </span>
      )}
    </div>
  )
}
