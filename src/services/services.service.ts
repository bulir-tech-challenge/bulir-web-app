import { api } from './api'
import type { ApiSuccessResponse, Service } from '../types'
import type { ServiceFormData } from '../types/schemas'

export const servicesService = {
  async getServices(): Promise<Service[]> {
    const res = await api.get<ApiSuccessResponse<Service[]>>('/services')
    return res.data.data
  },

  async getServiceById(id: string): Promise<Service> {
    const res = await api.get<ApiSuccessResponse<Service>>(`/services/${id}`)
    return res.data.data
  },

  async createService(data: ServiceFormData): Promise<Service> {
    const res = await api.post<ApiSuccessResponse<Service>>('/services', data)
    return res.data.data
  },

  async updateService(id: string, data: Partial<ServiceFormData>): Promise<Service> {
    const res = await api.patch<ApiSuccessResponse<Service>>(`/services/${id}`, data)
    return res.data.data
  },

  async deleteService(id: string): Promise<void> {
    await api.delete(`/services/${id}`)
  },
}
