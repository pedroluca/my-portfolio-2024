export interface TimelineItem {
  id: string
  title: string
  place: string
  side: 'left' | 'right'
  start: [number, number] // [year, month 0-11]
  end?: [number, number]  // undefined = present
  isEvent?: true
}

// px por mês — aumentar para escalar a timeline
export const PX_PER_MONTH = 9

// Data inicial da timeline
const BASE_YEAR = 2016
const BASE_MONTH = 0

// Data atual ("presente")
export const PRESENT: [number, number] = [2026, 2]

export const PADDING_TOP = 48
export const PADDING_BOTTOM = 60

/** Converte [year, month] para posição em px (relativo ao topo da timeline) */
export function toPx(year: number, month: number): number {
  return ((year - BASE_YEAR) * 12 + (month - BASE_MONTH)) * PX_PER_MONTH
}

export const TOTAL_HEIGHT = toPx(...PRESENT) + PADDING_TOP + PADDING_BOTTOM

/** Anos a exibir como marcadores na linha */
export const YEAR_MARKS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]

export const timelineItems: TimelineItem[] = [
  // ─── Acadêmico (direita) ───────────────────────────────────────────────────
  {
    id: 'cna',
    side: 'right',
    title: 'CNA Master in English',
    place: 'CNA • Guanambi, BA',
    start: [2016, 0],
    end: [2022, 11],
  },
  {
    id: 'em-tecnico',
    side: 'right',
    title: 'Ensino Médio — Técnico em Informática',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2018, 0],
    end: [2021, 7],
  },
  {
    id: 'vila-ciencia',
    side: 'right',
    title: 'I Vila da Ciência',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2018, 10],
    isEvent: true,
  },
  {
    id: 'ads',
    side: 'right',
    title: 'Tecnologia em ADS',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2022, 7],
    end: [2025, 2],
  },
  {
    id: '2-tenda-ciencia',
    side: 'right',
    title: 'II Tenda da Ciência',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2024, 3],
    isEvent: true,
  },
  {
    id: '1-tenda-ciencia',
    side: 'right',
    title: 'I Tenda da Ciência',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2023, 3],
  },

  // ─── Profissional (esquerda) ───────────────────────────────────────────────
  {
    id: 'estagio-suporte',
    side: 'left',
    title: 'Estágio — Suporte em TI',
    place: 'VISDOM • Guanambi, BA',
    start: [2019, 5],
    end: [2020, 1],
  },
  {
    id: 'freelancer',
    side: 'left',
    title: 'Dev Web Fullstack',
    place: 'Freelancer • Brasil',
    start: [2021, 7],
  },
  {
    id: 'hospital',
    side: 'left',
    title: 'Técnico de Suporte em TI',
    place: 'Hosp. Geral de Guanambi',
    start: [2021, 11],
    end: [2022, 7],
  },
  {
    id: 'estagio-dev-web',
    side: 'left',
    title: 'Estágio — Dev Web',
    place: 'VISDOM • Guanambi, BA',
    start: [2024, 3],
    end: [2024, 5],
  },
  {
    id: 'estagio-dev-fullstack',
    side: 'left',
    title: 'Estágio — Dev Fullstack',
    place: 'VISDOM • Guanambi, BA',
    start: [2024, 11],
    end: [2025, 1],
  },
  {
    id: 'estagio-procede',
    side: 'left',
    title: 'Estágio — Dev Fullstack',
    place: 'PROCEDE • Salvador, BA',
    start: [2025, 5],
    end: [2025, 6],
  },
  {
    id: 'procede',
    side: 'left',
    title: 'Dev Fullstack',
    place: 'PROCEDE • Salvador, BA',
    start: [2025, 6],
  },
]
