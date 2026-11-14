import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { env } from '../config/env'
import type { ApiErrorResponse, ApiSuccessResponse } from '../types'

const TOKEN_KEY = 'bulir_auth_token'

export const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

export const setAuthToken = (token: string | null): void => {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token)
    } else {
      localStorage.removeItem(TOKEN_KEY)
    }
  } catch {
    // LocalStorage indisponível ou em modo privado restrito
  }
}

export const api = axios.create({
  baseURL: env.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAuthToken()
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

api.interceptors.response.use(
  (response) => {
    // Normaliza resposta desembrulhando se tiver formato { success: true, data: T }
    const body = response.data as ApiSuccessResponse<unknown> | unknown
    if (body && typeof body === 'object' && 'data' in body && 'success' in body) {
      return response
    }
    return response
  },
  (error: AxiosError<ApiErrorResponse>) => {
    if (error.response?.status === 401) {
      // Se a rota falhar por token inválido ou expirado, limpa credenciais locais
      if (getAuthToken()) {
        setAuthToken(null)
        window.dispatchEvent(new Event('bulir:auth:unauthorized'))
      }
    }
    return Promise.reject(error)
  },
)

export const extractErrorMessage = (error: unknown, defaultMessage = 'Ocorreu um erro inesperado'): string => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiErrorResponse | undefined
    if (data?.message) {
      if (Array.isArray(data.errors) && data.errors.length > 0) {
        return `${data.message}: ${data.errors.join(', ')}`
      }
      return data.message
    }
  }
  if (error instanceof Error) {
    return error.message
  }
  return defaultMessage
}
