interface Option<V extends string> {
  value: V
  label: string
}

interface SegmentedControlProps<V extends string> {
  label?: string
  options: Option<V>[]
  value: V | undefined
  onChange: (value: V) => void
  error?: string
}

export function SegmentedControl<V extends string>({
  label,
  options,
  value,
  onChange,
  error,
}: SegmentedControlProps<V>) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <span className="text-sm font-medium text-bulir-navy">{label}</span>}
      <div role="radiogroup" aria-label={label} className="grid grid-cols-2 gap-1 rounded-xl bg-bulir-navy/5 p-1">
        {options.map((option) => {
          const active = option.value === value
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(option.value)}
              className={[
                'h-10 rounded-lg text-sm font-medium transition-all',
                active ? 'bg-white text-bulir-navy shadow' : 'text-bulir-navy/50 hover:text-bulir-navy',
              ].join(' ')}
            >
              {option.label}
            </button>
          )
        })}
      </div>
      {error && (
        <p role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
