interface CareerCardProps {
  title: string
  place: string
  period: string
  theme: string
}

export function CareerCard({ title, place, period, theme }: CareerCardProps) {
  return (
    <div>
      <h4 className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{title}</h4>
      <p>{place}</p>
      <p>{period}</p>
    </div>
  )
}
