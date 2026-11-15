import { useMemo } from 'react'

const CELL = 56
const COLS = 36
const ROWS = 20
const VISIBLE_CELLS = 28

interface Cell {
  x: number
  y: number
  peak: number
  duration: number
  delay: number
}

/** Escolhe posições aleatórias distintas, sem repetir quadrados. */
function pickCells(): Cell[] {
  const taken = new Set<string>()
  const cells: Cell[] = []

  while (cells.length < VISIBLE_CELLS) {
    const col = Math.floor(Math.random() * COLS)
    const row = Math.floor(Math.random() * ROWS)
    const key = `${col}-${row}`
    if (taken.has(key)) continue
    taken.add(key)

    cells.push({
      x: col * CELL,
      y: row * CELL,
      peak: 0.06 + Math.random() * 0.08,
      duration: 5 + Math.random() * 6,
      delay: -Math.random() * 10,
    })
  }

  return cells
}

/** Fundo limpo: poucos quadrados cinza suaves que surgem e somem de forma aleatória. */
export function PixelGridBackground() {
  const cells = useMemo(pickCells, [])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-48 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />

      <svg
        viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 95%)',
        }}
      >
        {cells.map((c) => (
          <rect
            key={`${c.x}-${c.y}`}
            className="pixel-cell"
            x={c.x}
            y={c.y}
            width={CELL}
            height={CELL}
            rx={6}
            fill="#94a3b8"
            style={
              {
                opacity: 0,
                '--pixel-peak': c.peak,
                animation: `pixel-fade ${c.duration}s ease-in-out ${c.delay}s infinite`,
              } as React.CSSProperties
            }
          />
        ))}
      </svg>
    </div>
  )
}
