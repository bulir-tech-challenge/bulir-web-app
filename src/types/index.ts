export type Role = 'CLIENT' | 'PROVIDER'

export type BookingStatus = 'CONFIRMED' | 'CANCELLED'

export interface UserResponse {
  id: string
  name: string
  nif: string
  email: string
  role: Role
  balance: number
  createdAt: string
}

export interface LoginResponse {
  accessToken: string
  user: UserResponse
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  providerId: string
  provider?: {
    id: string
    name: string
    email: string
    nif: string
  }
  createdAt: string
  updatedAt: string
}

export interface Booking {
  id: string
  clientId: string
  client?: {
    id: string
    name: string
    email: string
    nif: string
  }
  serviceId: string
  service?: Service
  amount: number
  status: BookingStatus
  createdAt: string
  updatedAt: string
}

export interface ApiSuccessResponse<T> {
  success: true
  data: T
}

export interface ApiErrorResponse {
  success: false
  statusCode: number
  message: string
  errors?: string[]
  path: string
  timestamp: string
}
