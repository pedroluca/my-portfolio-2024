import { CareerCard } from './career-card'

export function AcademicCareerList({ theme }: { theme: string }) {
  return (
    <section className='flex flex-col gap-3'>
      <h2 className='text-3xl mt-6'>Carreira Acadêmica</h2>
      <CareerCard
        theme={theme}
        title='II Tenda da Ciência - Sistema para 1ª Olimpíadas Científicas'
        place='IF Baiano - Campus Guanambi • Guanambi, Bahia, Brasil'
        period='Abr. 2024'
      />
      <CareerCard
        theme={theme}
        title='Ensino Superior de Tecnologia em Análise e Desenvolvimento de Sistemas'
        place='IF Baiano - Campus Guanambi • Guanambi, Bahia, Brasil'
        period='Ago. 2022 -- Mar. 2025'
      />
      <CareerCard
        theme={theme}
        title='I Vila da Ciência - Sistema de alarme com Arduino UNO'
        place='IF Baiano - Campus Guanambi • Guanambi, Bahia, Brasil'
        period='Nov. 2018'
      />
      <CareerCard
        theme={theme}
        title='Ensino Médio Integrado ao Curso Técnico em Informática para Internet'
        place='IF Baiano - Campus Guanambi • Guanambi, Bahia, Brasil'
        period='Jan. 2018 -- Ago. 2021'
      />
      <CareerCard
        theme={theme}
        title='CNA Master in English Course'
        place='CNA • Guanambi, Bahia, Brasil'
        period='2016 -- Dez. 2022'
      />
    </section>
  )
}
