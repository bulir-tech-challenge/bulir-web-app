import { useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { Input } from './Input'
import type { InputProps } from './Input'

export function PasswordInput(props: Omit<InputProps, 'type' | 'rightElement' | 'leftIcon'>) {
  const [visible, setVisible] = useState(false)

  return (
    <Input
      {...props}
      type={visible ? 'text' : 'password'}
      leftIcon={<Lock size={18} strokeWidth={1.5} />}
      rightElement={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
          className="text-bulir-navy/50 transition-colors hover:text-bulir-navy"
        >
          {visible ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
        </button>
      }
    />
  )
}
