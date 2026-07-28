import { ProjectDetailCardProps } from "./project-detail.card"

interface AppCardProps {
  title: string
  description: string
  url?: string
  logoUrl?: string
  imageUrl?: string
  theme: string
  setIsDetailModalOpen?: (isOpen: boolean) => void
  setDetailProject?: (project: ProjectDetailCardProps) => void
}

export function AppCard(props: AppCardProps) {

  const handleCardClick = () => {
    props.setDetailProject && props.setDetailProject({ title: props.title, fullWidthImage: false, description: props.description, projectUrl: props.url, imageUrl: props.imageUrl, theme: props.theme })
    props.setIsDetailModalOpen && props.setIsDetailModalOpen(true)
  }

  return (
    <div
      className={`project-card ${props.url ? 'cursor-pointer' : 'cursor-default'} rounded-xl overflow-hidden transition-all duration-300 ease-in-out`}
      onClick={handleCardClick}
    >
      <div className='p-2 flex flex-col items-center'>
        <img src={`${props.logoUrl}`} alt={props.title} className='w-full h-auto max-w-40 object-cover' />
        <h4 className='text-lg font-semibold mt-2 text-center'>{props.title}</h4>
      </div>
    </div>
  )
}