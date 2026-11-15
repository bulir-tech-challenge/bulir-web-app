# Bulir Web App

Aplicação web da plataforma de reservas de serviços (Desafio 2). Consome a [Bulir Core API](../bulir-core-api).

**Stack:** React 19 · TypeScript · Vite · TanStack Router (rotas por ficheiro) · TanStack Query (estado do servidor) · React Hook Form + Zod (formulários) · Tailwind CSS 4 · Axios · Sonner

## Como correr

```bash
cp .env.example .env     # VITE_API_URL aponta para a API (ex.: http://localhost:3000)
npm install
npm run dev              # http://localhost:3000 (ajuste a porta se a API usar a mesma)
npm run build            # build de produção
```

## Funcionalidades

| Requisito | Onde |
|---|---|
| Login com **e-mail ou NIF** + senha, JWT no `localStorage` | `features/auth`, `services/api.ts` |
| Cadastro de cliente ou prestador | `features/auth/components/RegisterForm` |
| Prestador: criar, listar (só os seus), editar e excluir serviços | `features/services/components/ProviderServicesPage` |
| Cliente: ver todos os serviços, pesquisar e contratar | `features/services/components/ServicesCatalogPage` |
| Verificação de saldo antes de contratar | `BookServiceDialog` (UI) + API (`400`, atómico) |
| Histórico: serviço, prestador, cliente, valor e estado | `features/bookings` |
| Cancelamento com reembolso (cliente **ou** prestador) | `features/bookings` |
| Carregar saldo (cliente) e ver saldo | `features/wallet` |

## Validações e permissões

- Formulários com Zod (`types/schemas.ts`): preço > 0, NIF alfanumérico de 9 a 14 caracteres, senha de 8 a 72 caracteres, etc.
- Rotas privadas protegidas por `requireAuth` (redirecionam para a home sem sessão).
- A mesma rota `/app/services` mostra o catálogo ao cliente e a gestão ao prestador; ações restritas só aparecem ao perfil certo. A API aplica as mesmas regras (`403`), por isso a UI nunca é a única barreira.
- `401` em qualquer pedido limpa a sessão e leva à home.

## Estrutura

```
src/
  components/ui|form|illustrations   componentes reutilizáveis (Button, Input, Modal, Form*...)
  features/<area>/components|hooks   auth, home, app-shell, overview, services, bookings, wallet
  hooks/                             TanStack Query: useAuth, useServices, useBookings, useWallet
  services/                          cliente Axios por recurso
  routes/                            rotas por ficheiro (TanStack Router)
  lib/                               formatação, erros, guarda de rota
```

Os componentes só desenham; a lógica fica em hooks por feature.
