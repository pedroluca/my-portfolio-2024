import { ExternalLink, X } from "lucide-react"
import { useEffect } from "react"

export type ProjectDetailCardProps = {
  onClose?: () => void
  title: string
  description: string
  imageUrl?: string
  projectUrl?: string
  theme: string
}

export function ProjectDetailCard(props: ProjectDetailCardProps) {
  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onClose?.()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    // Previne scroll do body quando modal está aberto
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [props])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      props.onClose?.()
    }
  }

  const handleVisitProject = () => {
    if (props.projectUrl) {
      window.open(props.projectUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div 
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 animate-fadeIn backdrop-blur-sm'
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
    >
      <div className={`${props.theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-black'} relative rounded-lg shadow-2xl p-6 max-w-3xl w-full mx-4 animate-slideUp max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200 dark:scrollbar-track-zinc-800`}>
        <button
          className={`absolute top-4 right-4 transition-colors p-1 rounded-full ${props.theme === 'dark' ? 'text-gray-400 hover:text-gray-200 hover:bg-zinc-800' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
          onClick={props.onClose}
          aria-label='Fechar modal'
        >
          <X size={24} />
        </button>
        
        <h2 id='modal-title' className='text-3xl font-bold mb-4 text-left pr-10'>{props.title}</h2>
        
        {props.imageUrl && (
          <img 
            src={new URL(`../../assets/images/project-images/${props.imageUrl}`, import.meta.url).href} 
            alt={`Screenshot do projeto ${props.title}`} 
            className='w-full h-60 lg:h-96 object-fill rounded-lg mb-6 shadow-md' 
          />
        )}
        
        <p className={`${props.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6 text-left leading-relaxed text-lg`}>
          {props.description}
        </p>
        
        {props.projectUrl && (
          <button 
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 font-medium shadow-md hover:shadow-lg hover:scale-105'
            onClick={handleVisitProject}
          >
            Visitar Projeto
            <ExternalLink size={18} />
          </button>
        )}
      </div>
    </div>
  )
}