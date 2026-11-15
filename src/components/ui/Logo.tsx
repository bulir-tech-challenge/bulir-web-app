import logo from '../../assets/images/bulir.svg'

interface LogoProps {
  className?: string
  /** Cor do texto da marca. */
  tone?: 'light' | 'dark'
}

export function Logo({ className = '', tone = 'dark' }: LogoProps) {
  const textColor = tone === 'light' ? 'text-white' : 'text-bulir-navy'

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="" className="h-8 w-8" />
      <span className={`font-display text-xl font-semibold ${textColor}`}>Bulir</span>
    </div>
  )
}
