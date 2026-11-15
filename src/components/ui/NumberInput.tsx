import { useEffect, useState } from 'react'
import { Input } from './Input'
import type { InputProps } from './Input'

interface NumberInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value: number | undefined
  onChange: (value: number | undefined) => void
}

function parse(text: string): number | undefined {
  const normalized = text.replace(',', '.').trim()
  if (normalized === '') return undefined
  const parsed = Number(normalized)
  return Number.isNaN(parsed) ? undefined : parsed
}

/**
 * Input numérico que mantém o texto digitado (ex.: "12.") enquanto
 * expõe ao formulário um `number` já convertido.
 */
export function NumberInput({ value, onChange, ...rest }: NumberInputProps) {
  const [text, setText] = useState(value === undefined ? '' : String(value))

  // Sincroniza quando o valor é alterado de fora (reset, atalhos de valor).
  useEffect(() => {
    if (parse(text) !== value) setText(value === undefined ? '' : String(value))
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Input
      {...rest}
      type="text"
      inputMode="decimal"
      value={text}
      onChange={(e) => {
        setText(e.target.value)
        onChange(parse(e.target.value))
      }}
    />
  )
}
