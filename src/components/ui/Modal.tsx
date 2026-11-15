import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  /** Rótulo acessível do diálogo. */
  label: string
  /** `sm` para confirmações, `lg` para diálogos com ilustração. */
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

/** Modal baseado no <dialog> nativo: foco preso, ESC e backdrop já tratados pelo browser. */
const sizes = { sm: 'max-w-md', md: 'max-w-xl', lg: 'max-w-4xl' }

export function Modal({ open, onClose, label, size = 'lg', children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
      className={`m-auto w-[calc(100%-2rem)] ${sizes[size]} overflow-hidden rounded-3xl bg-white p-0 shadow-2xl backdrop:bg-bulir-navy/40 backdrop:backdrop-blur-sm`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-bulir-navy/60 shadow ring-1 ring-bulir-navy/10 transition-colors hover:text-bulir-navy"
      >
        <X size={18} strokeWidth={1.5} />
      </button>
      {open && children}
    </dialog>
  )
}
