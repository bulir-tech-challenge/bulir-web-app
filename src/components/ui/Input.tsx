import { useId } from 'react'
import type { InputHTMLAttributes, ReactNode, Ref } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  leftIcon?: ReactNode
  rightElement?: ReactNode
  ref?: Ref<HTMLInputElement>
}

export function Input({
  label,
  error,
  leftIcon,
  rightElement,
  className = '',
  id,
  ref,
  ...rest
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-bulir-navy">
          {label}
        </label>
      )}

      <div
        className={[
          'flex h-12 items-center gap-2 rounded-xl border bg-white px-4 transition-colors',
          'focus-within:ring-2 focus-within:ring-brand/40',
          error ? 'border-red-400' : 'border-bulir-navy/15 focus-within:border-brand',
        ].join(' ')}
      >
        {leftIcon && <span className="text-bulir-navy/50">{leftIcon}</span>}
        <input
          id={inputId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`h-full w-full bg-transparent text-sm text-bulir-navy outline-none placeholder:text-bulir-navy/40 ${className}`}
          {...rest}
        />
        {rightElement}
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
