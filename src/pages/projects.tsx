import { PageTitle } from '../components/page-title/page-title'
import { ProjectCard } from '../components/cards/project-card'
import { MoveRight } from 'lucide-react'

export function Projects({ theme }: { theme: string }) {
  return (
    <section className='py-4 px-6 lg:px-[25%] w-full flex flex-col gap-3 text-justify pt-24 mb-16' id='projects-section'>
      <PageTitle>Projetos</PageTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <ProjectCard
          theme={theme}
          title='TrainLog'
          description='Site para acompanhamento de treinos e exercícios, com temporizador de intervalos incluso e compartilhamento de treinos.' 
          url='https://trainlogapp.vercel.app/'
        />
        <ProjectCard
          theme={theme}
          title='I Olimpíadas Científicas do Território Sertão Produtivo'
          description='Site para divulgação de datas, inscrições, e contato dos participantes das I Olimpíadas Científicas do Território Sertão Produtivo.' 
          url='https://www.olimpiadasdosertaoprodutivo.com/'
        />
        <ProjectCard
          theme={theme}
          title='Blog Criança Alerta' 
          description='Blog educativo com o intuito de ensinar para as crianças e adolescentes sobre seus direitos.' 
          url='https://www.blogcriancaalerta.epizy.com/' 
        />
        <ProjectCard
          theme={theme}
          title='Gerenciador de faturas' 
          description='Um simples site para gerenciamento de fatores e compras no cartão de crédito.' 
          url='https://billing-manager.vercel.app/' 
        />
        <ProjectCard
          theme={theme}
          title='Site do IF Baiano campus Guanambi' 
          description='Atividade acadêmica cujo intuito era desenvolver ou repaginar um site' 
          url='https://repage-if-baiano.vercel.app/' 
        />
      </div>
      <p className={`mt-6 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} flex gap-2 items-center hover:cursor-pointer transition-colors`} onClick={() => window.open('https://github.com/pedroluca', '_blank')}>
        Veja mais projetos
        <MoveRight />
      </p>
    </section>
  )
}