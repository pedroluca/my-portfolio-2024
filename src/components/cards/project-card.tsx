import { ProjectDetailCardProps } from "./project-detail.card"

interface ProjectCardProps {
  title: string
  description: string
  url?: string
  imageUrl?: string
  theme: string
  setIsDetailModalOpen?: (isOpen: boolean) => void
  setDetailProject?: (project: ProjectDetailCardProps) => void
}

export function ProjectCard(props: ProjectCardProps) {

  const handleCardClick = () => {
    props.setDetailProject && props.setDetailProject({ title: props.title, description: props.description, projectUrl: props.url, imageUrl: props.imageUrl, theme: props.theme })
    props.setIsDetailModalOpen && props.setIsDetailModalOpen(true)
  }

  return (
    <div
      className={`project-card ${props.url ? 'cursor-pointer' : 'cursor-default'} ${props.theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-black'} rounded-lg overflow-hidden transition-all duration-300 ease-in-out`}
      style={{ 
        boxShadow: '0 1px 4px rgba(30, 144, 255, 0.3)',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 8px rgba(30, 144, 255, 0.4), 0 0 16px rgba(30, 144, 255, 0.2)'
        e.currentTarget.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(30, 144, 255, 0.3)'
        e.currentTarget.style.transform = 'scale(1)'
      }}
      onClick={handleCardClick}
    >
      <div className='p-4'>
        <h4 className='text-lg font-semibold mb-2 text-left'>{props.title}</h4>
        <p className={`text-sm ${props.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{props.description}</p>
      </div>
    </div>
  )
}