import { stats } from '../data/home.content'

export function HomeStats() {
  return (
    <footer className="relative z-10 flex items-center justify-between gap-6 px-6 py-5 lg:px-12">
      <div className="hidden sm:block">
        <p className="text-xs font-semibold text-bulir-navy">
          A nossa comunidade
        </p>
        <p className="text-[10px] text-bulir-navy/50">
          Quem já usa a Bulir no dia a dia
        </p>
      </div>

      <dl className="flex flex-1 items-center justify-around gap-4 sm:max-w-2xl">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <dt className="font-display text-lg font-semibold text-bulir-navy/70">
              {value}
            </dt>
            <dd className="text-[10px] text-bulir-navy/40">{label}</dd>
          </div>
        ))}
      </dl>
    </footer>
  )
}
