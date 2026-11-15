import { Controller } from 'react-hook-form'
import type { Control, FieldPath, FieldValues, PathValue } from 'react-hook-form'
import { SegmentedControl } from '../ui/SegmentedControl'

interface FormSegmentedControlProps<T extends FieldValues, V extends string> {
  control: Control<T>
  name: FieldPath<T>
  label?: string
  options: { value: V; label: string }[]
}

export function FormSegmentedControl<T extends FieldValues, V extends string>({
  control,
  name,
  label,
  options,
}: FormSegmentedControlProps<T, V>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <SegmentedControl
          label={label}
          options={options}
          value={field.value as V | undefined}
          onChange={(v) => field.onChange(v as PathValue<T, FieldPath<T>>)}
          error={fieldState.error?.message}
        />
      )}
    />
  )
}
