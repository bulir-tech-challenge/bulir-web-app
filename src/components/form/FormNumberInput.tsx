import { Controller } from 'react-hook-form'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import { NumberInput } from '../ui/NumberInput'
import type { InputProps } from '../ui/Input'

interface FormNumberInputProps<T extends FieldValues>
  extends Omit<InputProps, 'name' | 'error' | 'value' | 'onChange' | 'type'> {
  control: Control<T>
  name: FieldPath<T>
}

export function FormNumberInput<T extends FieldValues>({ control, name, ...rest }: FormNumberInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <NumberInput
          {...rest}
          name={field.name}
          ref={field.ref}
          onBlur={field.onBlur}
          value={field.value as number | undefined}
          onChange={field.onChange}
          error={fieldState.error?.message}
        />
      )}
    />
  )
}
