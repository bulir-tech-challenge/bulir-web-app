import { api, getAuthToken, setAuthToken } from './api'
import type {
  ApiSuccessResponse,
  LoginResponse,
  UserResponse,
} from '../types'
import type { LoginFormData, RegisterFormData } from '../types/schemas'

export const authService = {
  async login(credentials: LoginFormData): Promise<LoginResponse> {
    const res = await api.post<ApiSuccessResponse<LoginResponse>>('/auth/login', credentials)
    const data = res.data.data
    if (data?.accessToken) {
      setAuthToken(data.accessToken)
    }
    return data
  },

  async register(payload: RegisterFormData): Promise<UserResponse> {
    const res = await api.post<ApiSuccessResponse<UserResponse>>('/auth/register', payload)
    return res.data.data
  },

  logout(): void {
    setAuthToken(null)
  },

  getToken(): string | null {
    return getAuthToken()
  },

  isAuthenticated(): boolean {
    return !!getAuthToken()
  },
}
