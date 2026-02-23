interface CareerCardProps {
  title: string
  place: string
  period: string
  theme: string
  side?: 'left' | 'right'
}

export function CareerCard({ title, place, period, theme, side }: CareerCardProps) {
  return (
    <div className='relative'>
      {side === 'left' && (
        <div className='hidden sm:block absolute top-[0.45rem] -right-[1.45rem] w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 z-10' />
      )}
      {side === 'right' && (
        <div className='hidden sm:block absolute top-[0.45rem] -left-[1.45rem] w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20 z-10' />
      )}
      <h4 className={`text-base font-semibold leading-snug ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{title}</h4>
      <p className='text-sm text-blue-400 mt-0.5'>{place}</p>
      <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>{period}</p>
    </div>
  )
}
