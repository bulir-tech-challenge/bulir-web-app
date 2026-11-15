import { z } from 'zod'

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, 'O e-mail ou NIF é obrigatório')
    .transform((val) => val.trim()),
  password: z
    .string()
    .min(1, 'A senha é obrigatória'),
})

export type LoginFormData = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, 'O nome deve ter no mínimo 2 caracteres')
    .max(120, 'O nome não pode exceder 120 caracteres')
    .transform((val) => val.trim()),
  nif: z
    .string()
    .regex(/^[0-9A-Za-z]{9,14}$/, 'O NIF deve conter entre 9 e 14 caracteres alfanuméricos')
    .transform((val) => val.trim().toUpperCase()),
  email: z
    .string()
    .email('Insira um e-mail válido')
    .transform((val) => val.trim().toLowerCase()),
  password: z
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(72, 'A senha não pode exceder 72 caracteres'),
  role: z.enum(['CLIENT', 'PROVIDER'], {
    error: 'Selecione o perfil de utilizador',
  }),
})

export type RegisterFormData = z.infer<typeof registerSchema>

export const depositSchema = z.object({
  amount: z
    .number({ error: 'Insira um valor numérico válido' })
    .positive('O valor do depósito deve ser maior que zero')
    .max(1_000_000, 'O valor máximo por recarga é de 1.000.000 Kz'),
})

export type DepositFormData = z.infer<typeof depositSchema>

export const serviceSchema = z.object({
  name: z
    .string()
    .min(3, 'O título do serviço deve ter no mínimo 3 caracteres')
    .max(120, 'O título não pode exceder 120 caracteres')
    .transform((val) => val.trim()),
  description: z
    .string()
    .min(5, 'A descrição deve ter no mínimo 5 caracteres')
    .max(500, 'A descrição não pode exceder 500 caracteres')
    .transform((val) => val.trim()),
  price: z
    .number({ error: 'Insira um preço válido' })
    .positive('O preço deve ser superior a 0 Kz')
    .max(10_000_000, 'Preço máximo excedido'),
})

export type ServiceFormData = z.infer<typeof serviceSchema>

export const createBookingSchema = z.object({
  serviceId: z.string().min(1, 'Selecione um serviço válido'),
})

export type CreateBookingFormData = z.infer<typeof createBookingSchema>
