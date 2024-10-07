interface ProjectCardProps {
  title: string
  description: string
  url?: string
}

export function ProjectCard(props: ProjectCardProps) {
  const handleCardClick = () => {
    if (props.url) window.open(props.url, '_blank')
  }

  return (
    <div
      className={`project-card ${props.url ? 'cursor-pointer' : 'cursor-default'} bg-zinc-900 text-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105`}
      style={{ boxShadow: '0 1px 4px rgba(255, 255, 255, 0.3)' }}
      onClick={handleCardClick}
    >
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2">{props.title}</h4>
        <p className="text-sm text-gray-400">{props.description}</p>
      </div>
    </div>
  )
}