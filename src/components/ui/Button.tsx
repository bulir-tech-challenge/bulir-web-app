import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isLoading?: boolean
  fullWidth?: boolean
  rightIcon?: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-bulir-navy hover:bg-brand-hover',
  secondary: 'bg-bulir-navy text-white hover:bg-bulir-navy/90',
  ghost: 'bg-transparent text-bulir-navy hover:bg-bulir-navy/5',
  danger: 'bg-red-500 text-white hover:bg-red-600',
}

export function Button({
  variant = 'primary',
  isLoading = false,
  fullWidth = false,
  rightIcon,
  disabled,
  className = '',
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={[
        'inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold',
        'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
      {...rest}
    >
      {isLoading ? <Loader2 size={18} className="animate-spin" /> : null}
      {children}
      {!isLoading && rightIcon}
    </button>
  )
}
