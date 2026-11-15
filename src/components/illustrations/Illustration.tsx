interface IllustrationProps {
  src: string
  alt?: string
  className?: string
}

/** Imagem decorativa (SVG de ilustração) com alt vazio por omissão. */
export function Illustration({ src, alt = '', className = '' }: IllustrationProps) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`pointer-events-none select-none ${className}`}
    />
  )
}
