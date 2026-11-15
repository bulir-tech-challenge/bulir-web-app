import { services } from '../data/home.content'
import { ServiceCard } from './ServiceCard'

const positions = [
  'left-[10%] top-[8%]',
  'left-[26%] top-[26%]',
  'right-[26%] top-[18%]',
  'right-[10%] top-[30%]',
]

export function FloatingServices() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} className={positions[index]} />
      ))}
    </div>
  )
}
