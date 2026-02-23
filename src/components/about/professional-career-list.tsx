import { CareerCard } from './career-card'

export function ProfessionalCareerList({ theme }: { theme: string }) {
  return (
    <section className='flex flex-col gap-3'>
      <h2 className='text-3xl mt-6'>Carreira Profissional</h2>
      <CareerCard
        theme={theme}
        title='Desenvolvedor Fullstack'
        place='PROCEDE • Salvador, Bahia, Brasil'
        period='Jun. 2025 -- Presente'
      />
      <CareerCard
        theme={theme}
        title='Desenvolvedor Web Fullstack'
        place='Freelancer • Brasil'
        period='Ago. 2021 -- Presente'
      />
      <CareerCard
        theme={theme}
        title='Estágio como Desenvolvedor Fullstack'
        place='VISDOM • Guanambi, Bahia, Brasil'
        period='Dez. 2024 -- Fev. 2025'
      />
      <CareerCard
        theme={theme}
        title='Estágio como Desenvolvedor Web'
        place='VISDOM • Guanambi, Bahia, Brasil'
        period='Abr. 2024 -- Jun. 2024'
      />
      <CareerCard
        theme={theme}
        title='Técnico de Suporte em TI'
        place='Hospital Geral de Guanambi • Guanambi, Bahia, Brasil'
        period='Dez. 2021 -- Ago. 2022'
      />
      <CareerCard
        theme={theme}
        title='Estágio como Técnico de Suporte em TI'
        place='VISDOM • Guanambi, Bahia, Brasil'
        period='Jun. 2019 -- Fev. 2020'
      />
    </section>
  )
}
