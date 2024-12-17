import JetBrains from '@/images/setup-images/jetbrains.png'
import MinTheme from '@/images/setup-images/min.png'
import VesperppTheme from '@/images/setup-images/vesper.png'
import VSCode from '@/images/setup-images/vscode.png'
import Laptop from '@/images/setup-images/laptop.png'
import Headset from '@/images/setup-images/headset.png'
import Headphone from '@/images/setup-images/headphone.png'
import Earpods1 from '@/images/setup-images/earphone1.png'
import Earpods2 from '@/images/setup-images/earphone2.png'
import Mouse1 from '@/images/setup-images/mouse1.png'
import Mouse2 from '@/images/setup-images/mouse2.png'
import Mousepad from '@/images/setup-images/mousepad.png'
import CodigoLimpo from '@/images/setup-images/codigo.png'
import Arquitetura from '@/images/setup-images/arquitetura.png'
import PHP4 from '@/images/setup-images/php4.jpg'
import DevAndroid from '@/images/setup-images/dev_android.jpg'
import EstruturaDados from '@/images/setup-images/estrutura_dados.jpg'
import Deschamps from '@/images/setup-images/deschamps.png'
import TheNews from '@/images/setup-images/the_news.png'
import Codecon from '@/images/setup-images/codecon.png'
import Biro from '@/images/setup-images/birobirobiro.png'
import Suporte from '@/images/setup-images/suporte.png'
import GitBash from '@/images/setup-images/git-bash.svg'
import Ohmyzsh from '@/images/setup-images/ohmyzsh.jpeg'
import DesignDev from '@/images/setup-images/design-dev-logo.svg'
import Smartphone from '@/images/setup-images/smartphone.png'
import Smartwatch from '@/images/setup-images/smartwatch.png'
import Alexa from '@/images/setup-images/alexa.png'
import Hub from '@/images/setup-images/hub-usbc.png'
import SuporteCabos from '@/images/setup-images/suporte-mesa.png'
import LotrBox from '@/images/setup-images/lotr-box.jpg'

type ImageMapKeys = 'laptop' | 'mouse1' | 'mouse2' | 'earphone1' | 'earphone2' | 'headphone' | 'headset' | 'mousepad' | 'mintheme' | 'vesperpptheme' | 'jetbrains' | 'vscode' | 'codigo' | 'arquitetura' | 'php4' | 'estrutura' | 'android' | 'deschamps' | 'thenews' | 'codecon' | 'biro' | 'suporte' | 'ohmyzsh' | 'gitbash' | 'designdev' | 'smartphone' | 'smartwatch' | 'alexa' | 'hub' | 'suportecabos' | 'lotrBox'

interface SetupCardProps {
  src: ImageMapKeys
  itemType: string
  itemName?: string
  url: string
}

const imageMap: Record<string, string> = {
  laptop: Laptop,
  mouse1: Mouse1,
  mouse2: Mouse2,
  earphone1: Earpods1,
  earphone2: Earpods2,
  headphone: Headphone,
  headset: Headset,
  mousepad: Mousepad,
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
  lotrBox: LotrBox
}

export function SetupCard(props: SetupCardProps) {
  const handleCardClick = () => window.open(props.url, '_blank')

  const imagePath = imageMap[props.src]

  return (
    <div className='setup-card p-3 bg-zinc-900 text-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105' onClick={handleCardClick}>
      <img className='img-contain p-1 w-full h-36 object-contain cursor-pointer' src={imagePath} alt={`${props.itemType} image`} />
      <div className='p-0.5'>
        <h4 className='text-lg font-semibold mb-2 text-left'>{props.itemType}</h4>
        <p className='text-sm text-gray-400'>{props.itemName}</p>
      </div>
    </div>
  )
}

export function SetupCardSkeleton() {
  return (
    <div className='setup-card p-3 bg-zinc-900 text-white shadow-md rounded-lg overflow-hidden transform transition-transform animate-pulse'>
      <div className='img-contain p-1 w-full h-36 bg-gray-600 rounded mb-2'></div>
      <div className='p-0.5'>
        <div className='h-4 bg-gray-500 rounded w-1/2 mb-4'></div>
        <div className='h-3 bg-gray-500 rounded w-3/4'></div>
      </div>
    </div>
  )
}