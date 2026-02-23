import { imageMap, ImageMapKeys, invertOnLightTheme, invertOnDarkTheme } from './setup-card-data'

interface SetupCardProps {
  src: ImageMapKeys
  itemType: string
  itemName?: string
  url: string
  theme: string
  roundImg?: boolean
}

export function SetupCard(props: SetupCardProps) {
  const handleCardClick = () => window.open(props.url, '_blank')

  const imagePath = imageMap[props.src]

  return (
    <div 
      className={`setup-card p-3 flex flex-col items-center ${props.theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-black'} shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer`} 
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
      <img className={`img-contain p-1 h-36 object-contain ${(invertOnLightTheme.includes(props.src) && props.theme === 'light') || (invertOnDarkTheme.includes(props.src) && props.theme === 'dark') ? 'invert' : ''} ${props.roundImg ? 'rounded-xl' : ''}`} src={imagePath} alt={`${props.itemType} image`} />
      <div className='p-0.5 w-full'>
        <h4 className={`text-lg font-semibold mb-2 text-left`}>{props.itemType}</h4>
        <p className={`text-sm text-left w-fit py-1 px-3 rounded-2xl ${props.theme === 'dark' ? 'text-gray-400 bg-zinc-800' : 'text-gray-600 bg-zinc-200'}`}>{props.itemName}</p>
      </div>
    </div>
  )
}

export function SetupCardSkeleton({ theme }: { theme: string }) {
  return (
    <div className={`setup-card p-3 ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-black'} shadow-md rounded-lg overflow-hidden transform transition-transform animate-pulse`}>
      <div className='img-contain p-1 w-full h-36 bg-gray-600 rounded mb-2'></div>
      <div className='p-0.5'>
        <div className='h-4 bg-gray-500 rounded w-1/2 mb-4'></div>
        <div className='h-3 bg-gray-500 rounded w-3/4'></div>
      </div>
    </div>
  )
}