import type { SimpleIcon } from 'simple-icons'

interface BrandIconProps {
  icon: SimpleIcon
  size?: number
  color?: string
  className?: string
}

export function BrandIcon({ icon, size = 24, color = 'currentColor', className }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color === 'brand' ? `#${icon.hex}` : color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}
