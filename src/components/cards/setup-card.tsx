import JetBrains from '@/images/setup-images/jetbrains.webp'
import MinTheme from '@/images/setup-images/min.webp'
import VesperppTheme from '@/images/setup-images/vesper.webp'
import VSCode from '@/images/setup-images/vscode.webp'
import Laptop from '@/images/setup-images/laptop.webp'
import Headset from '@/images/setup-images/headset.webp'
import Headphone from '@/images/setup-images/headphone.webp'
import Earpods from '@/images/setup-images/earpods.webp'
import Mouse1 from '@/images/setup-images/mouse1.webp'
import Mouse2 from '@/images/setup-images/mouse2.webp'
import Mousepad from '@/images/setup-images/mousepad.webp'
import Mousepad2 from '@/images/setup-images/mousepad2.webp'
import CodigoLimpo from '@/images/setup-images/codigo.webp'
import Arquitetura from '@/images/setup-images/arquitetura.webp'
import PHP4 from '@/images/setup-images/php4.webp'
import DevAndroid from '@/images/setup-images/dev_android.webp'
import EstruturaDados from '@/images/setup-images/estrutura_dados.webp'
import Deschamps from '@/images/setup-images/deschamps.webp'
import TheNews from '@/images/setup-images/the_news.webp'
import Codecon from '@/images/setup-images/codecon.webp'
import Biro from '@/images/setup-images/birobirobiro.webp'
import Suporte from '@/images/setup-images/suporte.webp'
import GitBash from '@/images/setup-images/git-bash.webp'
import Ohmyzsh from '@/images/setup-images/ohmyzsh.webp'
import DesignDev from '@/images/setup-images/design-dev-logo.webp'
import Smartphone from '@/images/setup-images/smartphone.webp'
import Smartwatch from '@/images/setup-images/smartwatch.webp'
import Alexa from '@/images/setup-images/alexa.webp'
import Hub from '@/images/setup-images/hub-usbc.webp'
import SuporteCabos from '@/images/setup-images/suporte-mesa.webp'
import LotrBox from '@/images/setup-images/lotr-box.webp'
import Hyper from '@/images/setup-images/hyper.webp'
import Monitor from '@/images/setup-images/monitor.webp'
import Monitor2 from '@/images/setup-images/monitor2.webp'
import Solasterion from '@/images/setup-images/solasterion.webp'
import Moleskine from '@/images/setup-images/moleskine.webp'
import Abajur from '@/images/setup-images/abajur.webp'
import Pinho from '@/images/setup-images/pinho.webp'

type ImageMapKeys = 'laptop' | 'mouse1' | 'mouse2' | 'earpods' | 'headphone' | 'headset' | 'mousepad' | 'mousepad2' | 'mintheme' | 'vesperpptheme' | 'jetbrains' | 'vscode' | 'codigo' | 'arquitetura' | 'php4' | 'estrutura' | 'android' | 'deschamps' | 'thenews' | 'codecon' | 'biro' | 'suporte' | 'ohmyzsh' | 'gitbash' | 'hyper' | 'designdev' | 'smartphone' | 'smartwatch' | 'alexa' | 'hub' | 'suportecabos' | 'lotrBox' | 'monitor' | 'monitor2' | 'solasterion' | 'moleskine' | 'abajur' | 'pinho'

interface SetupCardProps {
  src: ImageMapKeys
  itemType: string
  itemName?: string
  url: string
  theme: string
  roundImg?: boolean
}

const imageMap: Record<string, string> = {
  laptop: Laptop,
  mouse1: Mouse1,
  mouse2: Mouse2,
  earpods: Earpods,
  headphone: Headphone,
  headset: Headset,
  mousepad: Mousepad,
  mousepad2: Mousepad2,
  mintheme: MinTheme,
  vesperpptheme: VesperppTheme,
  jetbrains: JetBrains,
  vscode: VSCode,
  codigo: CodigoLimpo,
  arquitetura: Arquitetura,
  php4: PHP4,
  estrutura: EstruturaDados,
  android: DevAndroid,
  deschamps: Deschamps,
  thenews: TheNews,
  codecon: Codecon,
  biro: Biro,
  suporte: Suporte,
  ohmyzsh: Ohmyzsh,
  gitbash: GitBash,
  designdev: DesignDev,
  smartphone: Smartphone,
  smartwatch: Smartwatch,
  alexa: Alexa,
  hub: Hub,
  suportecabos: SuporteCabos,
  lotrBox: LotrBox,
  hyper: Hyper,
  solasterion: Solasterion,
  monitor: Monitor,
  monitor2: Monitor2,
  moleskine: Moleskine,
  abajur: Abajur,
  pinho: Pinho,
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
      <img className={`img-contain p-1 h-36 object-contain ${(props.src === 'jetbrains' || props.src === 'designdev') && props.theme === 'light' ? 'invert' : ''} ${props.roundImg ? 'rounded-xl' : ''}`} src={imagePath} alt={`${props.itemType} image`} />
      <div className='p-0.5 w-full'>
        <h4 className='text-lg font-semibold mb-2 text-left'>{props.itemType}</h4>
        <p className='text-sm text-left text-gray-400'>{props.itemName}</p>
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