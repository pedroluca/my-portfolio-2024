import { timelineItems } from './career-timeline-data'
import { ProfessionalCareerList } from './professional-career-list'
import { AcademicCareerList } from './academic-career-list'

const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

export function CareerTimeline({ theme }: { theme: string }) {
  const dark = theme === 'dark'

  // Anos únicos com itens, ordenados do mais recente pro mais antigo
  const years = [...new Set(timelineItems.map(i => i.start[0]))].sort((a, b) => b - a)

  return (
    <div className='mt-8'>

      {/* Mobile: listas empilhadas */}
      <div className='sm:hidden flex flex-col gap-10'>
        <ProfessionalCareerList theme={theme} />
        <AcademicCareerList theme={theme} />
      </div>

      {/* Desktop: timeline agrupada por ano */}
      <div className='hidden sm:flex flex-col'>

        <div className={`w-full text-lg mb-4 text-center font-semibold uppercase tracking-wide ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>Experiência</div>

        {/* Cabeçalho das colunas */}
        <div className='flex items-center mb-2'>
          <div className='flex-1 text-right pr-8'>
            <span className={`text-sm font-semibold uppercase tracking-wide ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Profissional
            </span>
          </div>
          <div className='w-20 shrink-0' />
          <div className='flex-1 pl-8'>
            <span className={`text-sm font-semibold uppercase tracking-wide ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Acadêmica
            </span>
          </div>
        </div>

        {/* Seções por ano */}
        {years.map((year, yi) => {
          const isLast = yi === years.length - 1

          // Itens do ano, ordenados por mês desc dentro do ano
          const leftItems  = timelineItems.filter(i => i.side === 'left'  && i.start[0] === year).sort((a, b) => b.start[1] - a.start[1])
          const rightItems = timelineItems.filter(i => i.side === 'right' && i.start[0] === year).sort((a, b) => b.start[1] - a.start[1])

          return (
            <div key={year} className='flex items-stretch'>

              {/* Esquerda — Profissional */}
              <div className='flex-1 flex flex-col items-end gap-3 text-right pr-8 py-5'>
                {leftItems.map(item => (
                  <div key={item.id}>
                    <h4 className={`text-base font-semibold leading-snug ${dark ? 'text-white' : 'text-black'}`}>
                      {item.title}
                    </h4>
                    <p className='text-xs text-blue-400'>{item.place}</p>
                    <p className={`text-xs mt-0.5 ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {MONTHS[item.start[1]]}. {item.start[0]}{item.end ? ` — ${MONTHS[item.end[1]]}. ${item.end[0]}` : item.isEvent ? '' : ' — Presente'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Centro — Ano + linha */}
              <div className='flex flex-col items-center shrink-0 w-20'>
                {/* Linha de cima */}
                {yi > 0 && (
                  <div className={`w-px flex-1 min-h-3 ${dark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
                )}
                {/* Pill do ano */}
                <div className={`px-3 py-1 rounded-full text-sm font-semibold z-10 ${dark ? 'bg-zinc-800 text-zinc-200 ring-1 ring-zinc-700' : 'bg-white text-zinc-600 ring-1 ring-zinc-200 shadow-sm'}`}>
                  {year}
                </div>
                {/* Linha de baixo */}
                {!isLast && (
                  <div className={`w-px flex-1 min-h-3 ${dark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
                )}
              </div>

              {/* Direita — Acadêmico */}
              <div className='flex-1 flex flex-col gap-3 pl-8 py-5'>
                {rightItems.map(item => (
                  <div key={item.id}>
                    <h4 className={`text-base font-semibold leading-snug ${dark ? 'text-white' : 'text-black'}`}>
                      {item.title}
                    </h4>
                    <p className='text-xs text-violet-400'>{item.place}</p>
                    <p className={`text-xs mt-0.5 ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {MONTHS[item.start[1]]}. {item.start[0]}{item.end ? ` — ${MONTHS[item.end[1]]}. ${item.end[0]}` : item.isEvent ? '' : ' — Presente'}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}
