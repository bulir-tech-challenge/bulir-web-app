
export interface NavItem {
  label: string
  href: string
}

export interface ServiceHighlight {
  id: string
  name: string
  avatar: string
  category: string
  title: string
  price: string
}

export interface Stat {
  value: string
  label: string
}

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'FAQ', href: '#faq' },
]

export const services: ServiceHighlight[] = [
  {
    id: 'ac',
    name: 'Cynthia Marcelino',
    avatar: 'https://avatars.githubusercontent.com/u/147757794?s=130&v=4',
    category: 'Talatona',
    title: 'Reparação de ar condicionado',
    price: '45.000,00 Kz',
  },
  {
    id: 'eletricidade',
    name: 'Rosário Miguel',
    avatar: 'https://avatars.githubusercontent.com/u/102255428?s=130&v=4',
    category: 'Miramar',
    title: 'Instalação eléctrica',
    price: '35.000,00 Kz',
  },
  {
    id: 'limpeza',
    name: 'Mário Thiago',
    avatar: 'https://avatars.githubusercontent.com/u/108186371?s=130&v=4',
    category: 'Viana',
    title: 'Limpeza doméstica',
    price: '20.000,00 Kz',
  },
  {
    id: 'canalizacao',
    name: 'António Neto',
    avatar: 'https://avatars.githubusercontent.com/u/150904501?s=130&v=4',
    category: 'Maianga',
    title: 'Canalização geral',
    price: '28.500,00 Kz',
  },
]

export const stats: Stat[] = [
  { value: '4.400+', label: 'Utilizadores ativos' },
  { value: '3.000+', label: 'Serviços concluídos' },
  { value: '100%', label: 'Avaliações positivas' },
]
