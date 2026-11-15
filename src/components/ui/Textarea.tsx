import { useId } from 'react'
import type { Ref, TextareaHTMLAttributes } from 'react'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  ref?: Ref<HTMLTextAreaElement>
}

export function Textarea({ label, error, id, ref, className = '', ...rest }: TextareaProps) {
  const generatedId = useId()
  const fieldId = id ?? generatedId

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={fieldId} className="text-sm font-medium text-bulir-navy">
          {label}
        </label>
      )}
      <textarea
        id={fieldId}
        ref={ref}
        rows={4}
        aria-invalid={!!error}
        className={[
          'w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-bulir-navy outline-none transition-colors',
          'placeholder:text-bulir-navy/40 focus:ring-2 focus:ring-brand/40',
          error ? 'border-red-400' : 'border-bulir-navy/15 focus:border-brand',
          className,
        ].join(' ')}
        {...rest}
      />
      {error && (
        <p role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
