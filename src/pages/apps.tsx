import { PageTitle } from '../components/page-title/page-title'
import { useState } from 'react'
import { ProjectDetailCard, ProjectDetailCardProps } from '@/components/cards/project-detail.card'
import { AppCard } from '@/components/cards/app-card'
import TractusApp from '@/assets/images/project-images/tractus-app.png'
import FinancesApp from '@/assets/images/project-images/finances-app.png'

export function Apps({ theme }: { theme: string }) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [detailProject, setDetailProject] = useState<ProjectDetailCardProps>()
  
  const handleCloseModal = () => {
    setIsDetailModalOpen(false)
  }

  return (
    <section className='relative py-4 px-6 lg:px-[25%] w-full flex flex-col gap-3 text-justify pt-24 mb-16' id='projects-section'>
      <PageTitle>Aplicativos</PageTitle>
      <div className='grid grid-cols-2 gap-6'>
        <AppCard
          theme={theme}
          title='Tractus'
          description='Aplicativo para acompanhamento de treinos e exercícios.' 
          url='https://apptractus.com.br/'
          logoUrl={TractusApp}
          imageUrl='app-tractus.png'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
        <AppCard
          theme={theme}
          title='Finances'
          description='Aplicativo de Gestão Financeira.' 
          url='https://finances.pedroluca.dev.br/'
          logoUrl={FinancesApp}
          imageUrl='app-finances.png'
          setIsDetailModalOpen={setIsDetailModalOpen}
          setDetailProject={setDetailProject}
        />
      </div>
      
      {isDetailModalOpen && detailProject && (
        <ProjectDetailCard {...detailProject} onClose={handleCloseModal} />
      )}
    </section>
  )
}