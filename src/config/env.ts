/**
 * Typed environment variables for Vite application.
 */
export const env = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  appName: import.meta.env.VITE_APP_NAME || 'Bulir - Plataforma de Serviços',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const
