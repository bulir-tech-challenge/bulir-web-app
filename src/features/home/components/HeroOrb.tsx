import logo from '../../../assets/images/bulir.svg'

export function HeroOrb() {
  return (
    <div aria-hidden className="relative flex items-center justify-center">
      <div className="absolute h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
      <div
        className="relative flex h-44 w-44 items-center justify-center rounded-full shadow-2xl shadow-brand/40 xl:h-52 xl:w-52"
        style={{
          background:
            'radial-gradient(circle at 30% 25%, #c8fbf1 0%, #31ECC6 45%, #0b9c83 100%)',
        }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl shadow-bulir-navy/20 xl:h-28 xl:w-28">
          <img src={logo} alt="" className="h-12 w-12 xl:h-14 xl:w-14" />
        </div>
      </div>
    </div>
  )
}
