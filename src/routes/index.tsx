import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import bulirLogo from '../assets/images/bulir.svg'

export const Route = createFileRoute('/')({ component: Home })

function diagonalBridgeBackslash(vx: number, vy: number, r: number): string {
  return [
    `M ${vx - r} ${vy - r}`,
    `L ${vx} ${vy - r}`,
    `A ${r} ${r} 0 0 0 ${vx + r} ${vy}`,
    `L ${vx + r} ${vy + r}`,
    `L ${vx} ${vy + r}`,
    `A ${r} ${r} 0 0 0 ${vx - r} ${vy}`,
    'Z',
  ].join(' ')
}

function diagonalBridgeSlash(vx: number, vy: number, r: number): string {
  return [
    `M ${vx} ${vy - r}`,
    `L ${vx + r} ${vy - r}`,
    `L ${vx + r} ${vy}`,
    `A ${r} ${r} 0 0 0 ${vx} ${vy + r}`,
    `L ${vx - r} ${vy + r}`,
    `L ${vx - r} ${vy}`,
    `A ${r} ${r} 0 0 0 ${vx} ${vy - r}`,
    'Z',
  ].join(' ')
}

function innerFillet(
  vx: number,
  vy: number,
  r: number,
  quadrant: 'tl' | 'tr' | 'bl' | 'br',
): string {
  switch (quadrant) {
    case 'br':
      return `M ${vx} ${vy} L ${vx + r} ${vy} A ${r} ${r} 0 0 0 ${vx} ${vy + r} Z`
    case 'bl':
      return `M ${vx} ${vy} L ${vx} ${vy + r} A ${r} ${r} 0 0 0 ${vx - r} ${vy} Z`
    case 'tr':
      return `M ${vx} ${vy} L ${vx} ${vy - r} A ${r} ${r} 0 0 0 ${vx + r} ${vy} Z`
    case 'tl':
      return `M ${vx} ${vy} L ${vx - r} ${vy} A ${r} ${r} 0 0 0 ${vx} ${vy - r} Z`
  }
}

const Inline3DClusterIcon: React.FC = () => (
  <span className="inline-flex items-center align-middle ml-2.5 -mt-1.5 select-none">
    <svg
      width="48"
      height="44"
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-9 sm:w-12 sm:h-11 drop-shadow-[0_4px_8px_rgba(12,35,64,0.14)]"
    >
      <g transform="rotate(-12 27 24)">
        <rect x="24" y="6" width="15" height="15" rx="4.5" fill="#0C2340" />
        <rect x="11" y="19" width="28" height="15" rx="4.5" fill="#0C2340" />
        <rect x="24" y="29" width="15" height="14" rx="4.5" fill="#0C2340" />

        <rect
          x="21"
          y="3"
          width="15"
          height="15"
          rx="4.5"
          fill="#31ECC6"
          stroke="#0C2340"
          strokeWidth="1.4"
        />
        <rect
          x="8"
          y="16"
          width="28"
          height="15"
          rx="4.5"
          fill="#31ECC6"
          stroke="#0C2340"
          strokeWidth="1.4"
        />
        <rect
          x="21"
          y="26"
          width="15"
          height="14"
          rx="4.5"
          fill="#31ECC6"
          stroke="#0C2340"
          strokeWidth="1.4"
        />
        <rect x="21.7" y="14" width="13.6" height="16" fill="#31ECC6" />
        <rect
          x="24.5"
          y="20"
          width="6"
          height="6"
          rx="1.8"
          fill="#0C2340"
        />
      </g>
    </svg>
  </span>
)

const ModularMetaballArtwork: React.FC = () => {
  const S = 58
  const R = 15
  const OX = 28
  const OY = 16

  const gx = (col: number) => OX + col * S
  const gy = (row: number) => OY + row * S

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 520 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[520px] max-h-[62vh] h-auto select-none"
      >
        <g stroke="#E2E8F0" strokeWidth="1">
          <rect
            x={gx(0.5)}
            y={gy(0.5)}
            width={S * 2.5}
            height={S * 2}
            rx={R}
          />
          <line x1={gx(1.5)} y1={gy(0.5)} x2={gx(1.5)} y2={gy(2.5)} />
          <line x1={gx(0.5)} y1={gy(1.5)} x2={gx(3)} y2={gy(1.5)} />

          <rect
            x={gx(3)}
            y={gy(4.2)}
            width={S * 2.6}
            height={S * 2.5}
            rx={R}
          />
          <line x1={gx(4)} y1={gy(4.2)} x2={gx(4)} y2={gy(6.7)} />
          <line x1={gx(5)} y1={gy(4.2)} x2={gx(5)} y2={gy(6.7)} />
          <line x1={gx(3)} y1={gy(5.5)} x2={gx(5.6)} y2={gy(5.5)} />
        </g>

        <g fill="#F1F4F8">
          <rect x={gx(4)} y={gy(0)} width={S * 2} height={S * 2} rx={R} />
          <rect x={gx(1)} y={gy(1)} width={S * 6} height={S} rx={R} />
          <rect x={gx(0.5)} y={gy(2)} width={S * 2.5} height={S} rx={R} />
          <rect x={gx(5)} y={gy(1)} width={S * 2.2} height={S * 2} rx={R} />
          <rect x={gx(0)} y={gy(3)} width={S * 3} height={S * 1.8} rx={R} />
          <rect x={gx(1)} y={gy(2)} width={S * 2} height={S * 2.8} rx={R} />
          <rect x={gx(2)} y={gy(3.8)} width={S * 4} height={S * 1.2} rx={R} />
          <rect x={gx(3.5)} y={gy(4)} width={S * 1.8} height={S * 2.2} rx={R} />
          <rect x={gx(4)} y={gy(5)} width={S} height={S * 1.7} rx={R} />

          <path d={innerFillet(gx(1), gy(2), R, 'tl')} />
          <path d={innerFillet(gx(3), gy(2), R, 'tr')} />
          <path d={innerFillet(gx(3), gy(3.8), R, 'br')} />
          <path d={innerFillet(gx(5), gy(3), R, 'bl')} />
        </g>

        <rect
          x={gx(3.15)}
          y={gy(2.1)}
          width={S * 1.75}
          height={S * 1.55}
          rx={R}
          fill="#FFFFFF"
        />

        <g fill="#31ECC6">
          <rect x={gx(2)} y={gy(0)} width={S} height={S} rx={R} />
          <rect x={gx(1)} y={gy(1)} width={S} height={S} rx={R} />
          <rect x={gx(2)} y={gy(2)} width={S} height={S} rx={R} />
          <rect x={gx(2.55)} y={gy(1)} width={S * 1.45} height={S} rx={R} />
          <rect x={gx(4)} y={gy(0)} width={S} height={S} rx={R} />

          <path d={diagonalBridgeSlash(gx(2), gy(1), R)} />
          <path d={diagonalBridgeBackslash(gx(2), gy(2), R)} />
          <path d={diagonalBridgeSlash(gx(4), gy(1), R)} />
        </g>

        <g fill="#31ECC6">
          <rect x={gx(2.7)} y={gy(3.8)} width={S} height={S} rx={R} />
          <rect x={gx(3.7)} y={gy(4.8)} width={S} height={S} rx={R} />
          <path d={diagonalBridgeBackslash(gx(3.7), gy(4.8), R)} />
        </g>

        <g fill="#0C2340">
          <rect x={gx(6)} y={gy(2)} width={S} height={S} rx={R} />
          <rect x={gx(5)} y={gy(3)} width={S} height={S * 1.55} rx={R} />
          <rect x={gx(5)} y={gy(3)} width={S * 1.45} height={S} rx={R} />
          <rect x={gx(5.8)} y={gy(4.55)} width={S * 0.9} height={S * 1.15} rx={R} />

          <path d={diagonalBridgeSlash(gx(6), gy(3), R)} />
          <path d={diagonalBridgeBackslash(gx(5.8), gy(4.55), R * 0.85)} />
          <path d={innerFillet(gx(6), gy(4), R * 0.7, 'tl')} />
        </g>

        <g stroke="#FFFFFF" strokeWidth="1.2" opacity="0.85">
          <line x1={gx(5)} y1={gy(4.15)} x2={gx(6.7)} y2={gy(4.15)} />
          <line x1={gx(5.45)} y1={gy(3.8)} x2={gx(5.45)} y2={gy(5.7)} />
          <line x1={gx(6.15)} y1={gy(4.3)} x2={gx(6.15)} y2={gy(5.75)} />
          <rect
            x={gx(5.15)}
            y={gy(4.15)}
            width={S * 1.4}
            height={S * 1.35}
            rx={R * 0.75}
          />
        </g>

        <g fill="#CBD5E1">
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 9 }).map((__, col) => (
              <circle
                key={`${row}-${col}`}
                cx={OX + col * S}
                cy={OY + row * S}
                r="1.45"
              />
            )),
          )}
        </g>
      </svg>
    </div>
  )
}

const TechIconServices: React.FC = () => (
  <div className="w-10 h-10 rounded-lg border border-slate-200/90 bg-white flex items-center justify-center shrink-0 shadow-[0_1px_2px_rgba(12,35,64,0.04)]">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      <line x1="12" y1="3" x2="12" y2="21" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="7" y="9" width="5" height="5" rx="1.5" fill="#0C2340" />
      <rect x="12" y="7" width="4.5" height="4.5" rx="1.5" fill="#31ECC6" />
      <circle cx="15" cy="15" r="2" fill="#0C2340" />
    </svg>
  </div>
)

const TechIconAtomic: React.FC = () => (
  <div className="w-10 h-10 rounded-lg border border-slate-200/90 bg-white flex items-center justify-center shrink-0 shadow-[0_1px_2px_rgba(12,35,64,0.04)]">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      <line x1="4" y1="4" x2="20" y2="20" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="20" y1="4" x2="4" y2="20" stroke="#CBD5E1" strokeWidth="1" />
      <rect
        x="8"
        y="8"
        width="8"
        height="8"
        rx="2"
        fill="#31ECC6"
        stroke="#0C2340"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="1.8" fill="#0C2340" />
    </svg>
  </div>
)

const TechIconFastBookings: React.FC = () => (
  <div className="w-10 h-10 rounded-lg border border-slate-200/90 bg-white flex items-center justify-center shrink-0 shadow-[0_1px_2px_rgba(12,35,64,0.04)]">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="#CBD5E1"
        strokeWidth="1"
      />
      <line x1="12" y1="3" x2="12" y2="21" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="9.5" cy="13.5" r="2.3" fill="#0C2340" />
      <circle cx="14.5" cy="9.5" r="2.3" fill="#31ECC6" />
      <path
        d="M9.5 13.5L14.5 9.5M14.5 14.5L12 12"
        stroke="#0C2340"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  </div>
)

function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-between bg-white text-[#0C2340] font-sans select-none">
      <header className="w-full shrink-0 px-6 sm:px-10 lg:px-14 pt-5 pb-3 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <img
            src={bulirLogo}
            alt="Bulir Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200 group-hover:scale-105"
          />
          <span
            className="font-bold text-base sm:text-[17px] tracking-[0.08em] uppercase text-[#0C2340]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            BULIR
          </span>
        </a>

        <div className="flex items-center gap-3 lg:gap-6">
          <nav className="hidden md:flex items-center gap-2.5">
            <a
              href="#inicio"
              className="px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-slate-50/60 text-[12px] font-medium text-[#0C2340] flex items-center gap-2 transition-colors hover:border-[#0C2340]/30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0C2340]" />
              Início
            </a>
            <a
              href="#como-funciona"
              className="px-3.5 py-1.5 rounded-full border border-slate-200/70 bg-white hover:bg-slate-50/70 text-[12px] font-normal text-slate-600 hover:text-[#0C2340] flex items-center gap-1.5 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              Como funciona
            </a>
            <a
              href="#servicos"
              className="px-3.5 py-1.5 rounded-full border border-slate-200/70 bg-white hover:bg-slate-50/70 text-[12px] font-normal text-slate-600 hover:text-[#0C2340] flex items-center gap-1.5 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              Catálogo de Serviços
            </a>
            <a
              href="#historico"
              className="px-3.5 py-1.5 rounded-full border border-slate-200/70 bg-white hover:bg-slate-50/70 text-[12px] font-normal text-slate-600 hover:text-[#0C2340] flex items-center gap-1.5 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              Histórico &amp; Saldo
            </a>
          </nav>

          <button
            type="button"
            className="px-5 py-2 rounded-full bg-[#0C2340] hover:bg-[#13325B] text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] uppercase transition-all duration-200 shadow-[0_2px_8px_rgba(12,35,64,0.18)] cursor-pointer active:scale-[0.98]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ENTRAR NA CONTA
          </button>
        </div>
      </header>

      <main className="flex-1 min-h-0 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4">
        <div className="lg:col-span-6 flex flex-col justify-center z-10">
          <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[52px] font-normal tracking-[-0.03em] leading-[1.22] text-[#0C2340]">
            <span className="block">
              Descubra a facilidade de
              <Inline3DClusterIcon />
            </span>

            <span className="block mt-1">
              <span className="inline-block bg-[#31ECC6]/30 text-[#0C2340] px-3.5 py-0.5 rounded-[14px] font-medium mr-2.5">
                contratar
              </span>
              <span>serviços locais</span>
            </span>

            <span className="block mt-1.5">
              <span className="mr-3">sob demanda</span>
              <span className="inline-block bg-[#31ECC6]/30 text-[#0C2340] px-3.5 py-0.5 rounded-[14px] font-medium">
                com a Bulir.
              </span>
            </span>
          </h1>

          <p className="mt-6 text-xs sm:text-[13.5px] text-slate-500 font-normal leading-[1.65] max-w-[440px]">
            A plataforma de reservas da Bulir já está disponível e pronta para
            revolucionar a forma como clientes e prestadores gerenciam serviços,
            saldos e contratações.
          </p>
        </div>

        <div className="hidden lg:flex lg:col-span-6 h-full items-center justify-center min-h-0">
          <ModularMetaballArtwork />
        </div>
      </main>

      <footer className="w-full shrink-0 border-t border-slate-200/80 bg-white">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3 px-6 sm:px-8 py-5 lg:py-6 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-200/80">
            <button
              type="button"
              className="px-8 py-3.5 rounded-full bg-[#0C2340] hover:bg-[#13325B] text-white text-[11px] font-semibold tracking-[0.08em] uppercase transition-all duration-200 shadow-[0_4px_14px_rgba(12,35,64,0.2)] hover:shadow-[0_6px_20px_rgba(49,236,198,0.3)] cursor-pointer active:scale-[0.98]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              COMEÇAR AGORA
            </button>
          </div>

          <a
            href="#servicos"
            className="lg:col-span-3 px-6 sm:px-7 py-5 lg:py-6 flex items-start gap-3.5 border-b sm:border-b-0 lg:border-r border-slate-200/80 hover:bg-slate-50/60 transition-colors group"
          >
            <TechIconServices />
            <div className="min-w-0">
              <div
                className="text-[11px] font-bold tracking-[0.04em] uppercase text-[#0C2340] flex items-center gap-1 group-hover:text-[#0C2340]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>UM MUNDO DE SERVIÇOS</span>
                <ChevronRight
                  size={13}
                  strokeWidth={2.4}
                  className="text-[#0C2340] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>
              <p className="mt-1 text-[11px] text-slate-500 leading-[1.45] line-clamp-2">
                Explore o catálogo completo de serviços criados por prestadores
                verificados.
              </p>
            </div>
          </a>

          <a
            href="#transacoes"
            className="lg:col-span-3 px-6 sm:px-7 py-5 lg:py-6 flex items-start gap-3.5 border-b sm:border-b-0 sm:border-r border-slate-200/80 hover:bg-slate-50/60 transition-colors group"
          >
            <TechIconAtomic />
            <div className="min-w-0">
              <div
                className="text-[11px] font-bold tracking-[0.04em] uppercase text-[#0C2340] flex items-center gap-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>SALDO EM QUE PODE CONFIAR</span>
                <ChevronRight
                  size={13}
                  strokeWidth={2.4}
                  className="text-[#0C2340] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>
              <p className="mt-1 text-[11px] text-slate-500 leading-[1.45] line-clamp-2">
                Operações de saldo 100% atómicas com verificação prévia e
                estorno garantido.
              </p>
            </div>
          </a>

          <a
            href="#reservas"
            className="lg:col-span-3 px-6 sm:px-7 py-5 lg:py-6 flex items-start gap-3.5 hover:bg-slate-50/60 transition-colors group"
          >
            <TechIconFastBookings />
            <div className="min-w-0">
              <div
                className="text-[11px] font-bold tracking-[0.04em] uppercase text-[#0C2340] flex items-center gap-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span>RESERVE COM MAIS RAPIDEZ</span>
                <ChevronRight
                  size={13}
                  strokeWidth={2.4}
                  className="text-[#0C2340] transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>
              <p className="mt-1 text-[11px] text-slate-500 leading-[1.45] line-clamp-2">
                Contratação imediata e histórico em tempo real para clientes e
                prestadores.
              </p>
            </div>
          </a>
        </div>
      </footer>
    </div>
  )
}
