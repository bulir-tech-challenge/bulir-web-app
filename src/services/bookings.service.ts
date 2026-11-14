import { api } from './api'
import type { ApiSuccessResponse, Booking } from '../types'
import type { CreateBookingFormData } from '../types/schemas'

export const bookingsService = {
  async getBookings(): Promise<Booking[]> {
    const res = await api.get<ApiSuccessResponse<Booking[]>>('/bookings')
    return res.data.data
  },

  async createBooking(data: CreateBookingFormData): Promise<Booking> {
    const res = await api.post<ApiSuccessResponse<Booking>>('/bookings', data)
    return res.data.data
  },

  async cancelBooking(id: string): Promise<Booking> {
    const res = await api.patch<ApiSuccessResponse<Booking>>(`/bookings/${id}/cancel`)
    return res.data.data
  },
}
