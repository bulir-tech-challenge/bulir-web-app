import { api } from './api'
import type { ApiSuccessResponse, UserResponse } from '../types'
import type { DepositFormData } from '../types/schemas'

export const usersService = {
  async getProfile(): Promise<UserResponse> {
    const res = await api.get<ApiSuccessResponse<UserResponse>>('/users/me')
    return res.data.data
  },

  async deposit(data: DepositFormData): Promise<UserResponse> {
    const res = await api.post<ApiSuccessResponse<UserResponse>>('/users/deposit', data)
    return res.data.data
  },
}
