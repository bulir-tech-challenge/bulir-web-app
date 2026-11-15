import { Controller } from 'react-hook-form'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Input } from '../ui/Input'
import type { InputProps } from '../ui/Input'

interface FormInputProps<T extends FieldValues> extends Omit<
  InputProps,
  'name' | 'error'
> {
  control: Control<T>
  name: FieldPath<T>
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  ...rest
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Input {...rest} {...field} error={fieldState.error?.message} />
      )}
    />
  )
}
