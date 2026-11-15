import enthusiastic from '../../../assets/images/Enthusiastic-pana.svg'
import cashPayment from '../../../assets/images/Cash Payment-bro.svg'
import { Illustration } from '../../../components/illustrations/Illustration'
import { PixelGridBackground } from '../../../components/illustrations/PixelGridBackground'
import { FloatingServices } from './FloatingServices'
import { HeroOrb } from './HeroOrb'
import { HomeHero } from './HomeHero'
import { HomeNavbar } from './HomeNavbar'
import { HomeStats } from './HomeStats'

export function HomePage() {
  return (
    <div
      id="inicio"
      className="relative flex min-h-dvh flex-col overflow-x-hidden bg-white lg:h-dvh lg:overflow-hidden"
    >
      <PixelGridBackground />
      <HomeNavbar />

      <main className="relative flex flex-1 flex-col items-center justify-between">
        <div className="relative flex min-h-64 w-full flex-1 justify-center pt-2">
          <HeroOrb />
          <FloatingServices />
        </div>
        <HomeHero />

        <Illustration
          src={enthusiastic}
          className="absolute bottom-0 left-[3%] hidden h-56 w-56 xl:block 2xl:h-72 2xl:w-72"
        />
        <Illustration
          src={cashPayment}
          className="absolute right-[3%] bottom-0 hidden h-56 w-56 xl:block 2xl:h-72 2xl:w-72"
        />
      </main>

      <HomeStats />
    </div>
  )
}
