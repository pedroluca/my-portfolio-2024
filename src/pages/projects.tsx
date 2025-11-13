import { PageTitle } from '../components/page-title/page-title'
import { ProjectCard } from '../components/cards/project-card'
import { MoveRight } from 'lucide-react'
import { useState } from 'react'
import { ProjectDetailCard, ProjectDetailCardProps } from '@/components/cards/project-detail.card'

export function Projects({ theme }: { theme: string }) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [detailProject, setDetailProject] = useState<ProjectDetailCardProps>()
  
  const handleCloseModal = () => {
    setIsDetailModalOpen(false)
  }

  return (
    <section className='relative py-4 px-6 lg:px-[25%] w-full flex flex-col gap-3 text-justify pt-24 mb-16' id='projects-section'>
      <PageTitle>Projetos</PageTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <ProjectCard
          theme={theme}
          title='App TrainLog'
          description='Webapp para acompanhamento de treinos e exercícios, com temporizador de intervalos incluso e compartilhamento de treinos.' 
          url='https://app.trainlog.site/'
          imageUrl='app-trainlog.jpg'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
        <ProjectCard
          theme={theme}
          title='Site TrainLog'
          description='Landing page para divulgação e venda do sistema TrainLog.' 
          url='https://trainlog.site/'
          imageUrl='site-trainlog.jpg'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
        <ProjectCard
          theme={theme}
          title='Finances'
          description='Sistema de Gerenciamento de Faturas e Compras no Cartão de Crédito.' 
          url='https://finances.pedroluca.dev.br/'
          imageUrl='finances.jpg'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
        <ProjectCard
          theme={theme}
          title='I Olimpíadas Científicas do Território Sertão Produtivo'
          description='Site para divulgação de datas, inscrições, e contato dos participantes das I Olimpíadas Científicas do Território Sertão Produtivo.' 
          url='https://olimpiadas-cientificas.vercel.app/'
          imageUrl='olimpiadas.jpg'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
        <ProjectCard
          theme={theme}
          title='Painel de Produção - Estância A' 
          description='Um painel de produção e gerenciamento de pedidos no setor de produção de buquês e arranjos da Floricultura Estância A.' 
          url='https://pedroluca.dev.br/' 
          imageUrl='painel-estanciaa.jpg'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
        <ProjectCard
          theme={theme}
          title='Site Fazenda Cedro' 
          description='Site Institucional para a Fazenda Cedro. Servindo como Landing Page e fonte de informações para visitantes e pessoas interessadas.' 
          url='https://fazendacedro.vercel.app/' 
          imageUrl='fazenda-cedro.jpg'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
        <ProjectCard
          theme={theme}
          title='Blog Criança Alerta' 
          description='Blog educativo com o intuito de ensinar para as crianças e adolescentes sobre seus direitos. Cards interativos e joguinho Scratch integrado.' 
          url='https://tan-ant-672552.hostingersite.com/' 
          imageUrl='crianca.jpg'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
        <ProjectCard
          theme={theme}
          title='Site do IFBAIANO - Guanambi' 
          description='Atividade acadêmica cujo intuito era desenvolver ou repaginar um site.' 
          url='https://repage-if-baiano.vercel.app/' 
          imageUrl='ifbaiano.jpg'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
      </div>
      <p 
        className={`mt-6 ${
          theme === 'dark' ? 
          'text-gray-400 hover:text-white' : 
          'text-gray-600 hover:text-black'
          } flex gap-2 items-center hover:cursor-pointer transition-colors`} 
        onClick={() => window.open('https://github.com/pedroluca', '_blank')}
      >
        Veja mais projetos
        <MoveRight />
      </p>
      
      {isDetailModalOpen && detailProject && (
        <ProjectDetailCard {...detailProject} onClose={handleCloseModal} />
      )}
    </section>
  )
}