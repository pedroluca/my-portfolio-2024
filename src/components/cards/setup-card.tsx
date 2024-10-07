import JetBrains from '../../assets/images/setup-images/jetbrains.png'
import MinTheme from '../../assets/images/setup-images/min.png'
import VesperppTheme from '../../assets/images/setup-images/vesper.png'
import VSCode from '../../assets/images/setup-images/vscode.png'
import Laptop from '../../assets/images/setup-images/laptop.png'
import Headset from '../../assets/images/setup-images/headset.png'
import Headphone from '../../assets/images/setup-images/headphone.png'
import Earpods1 from '../../assets/images/setup-images/earphone1.png'
import Earpods2 from '../../assets/images/setup-images/earphone2.png'
import Mouse1 from '../../assets/images/setup-images/mouse1.png'
import Mouse2 from '../../assets/images/setup-images/mouse2.png'
import Mousepad from '../../assets/images/setup-images/mousepad.png'
import CodigoLimpo from '../../assets/images/setup-images/codigo.png'
import Arquitetura from '../../assets/images/setup-images/arquitetura.png'
import PHP4 from '../../assets/images/setup-images/php4.jpg'
import DevAndroid from '../../assets/images/setup-images/dev_android.jpg'
import EstruturaDados from '../../assets/images/setup-images/estrutura_dados.jpg'
import Deschamps from '../../assets/images/setup-images/deschamps.png'
import TheNews from '../../assets/images/setup-images/the_news.png'
import Codecon from '../../assets/images/setup-images/codecon.png'
import Biro from '../../assets/images/setup-images/birobirobiro.png'
import Suporte from '../../assets/images/setup-images/suporte.png'
import GitBash from '../../assets/images/setup-images/git-bash.svg'
import Ohmyzsh from '../../assets/images/setup-images/ohmyzsh.jpeg'
import DesignDev from '../../assets/images/setup-images/design-dev-logo.svg'
import Smartphone from '../../assets/images/setup-images/smartphone.png'
import Smartwatch from '../../assets/images/setup-images/smartwatch.png'
import Alexa from '../../assets/images/setup-images/alexa.png'
import Hub from '../../assets/images/setup-images/hub-usbc.png'
import SuporteCabos from '../../assets/images/setup-images/suporte-mesa.png'

type ImageMapKeys = 'laptop' | 'mouse1' | 'mouse2' | 'earphone1' | 'earphone2' | 'headphone' | 'headset' | 'mousepad' | 'mintheme' | 'vesperpptheme' | 'jetbrains' | 'vscode' | 'codigo' | 'arquitetura' | 'php4' | 'estrutura' | 'android' | 'deschamps' | 'thenews' | 'codecon' | 'biro' | 'suporte' | 'ohmyzsh' | 'gitbash' | 'designdev' | 'smartphone' | 'smartwatch' | 'alexa' | 'hub' | 'suportecabos'

interface SetupCardProps {
  src: ImageMapKeys
  itemType: string
  itemName?: string
  url: string
}

const imageMap: Record<ImageMapKeys, string> = {
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
}

export function SetupCard(props: SetupCardProps) {
  const handleCardClick = () => window.open(props.url, '_blank')

  const imagePath = imageMap[props.src]

  return (
    <div className="setup-card p-3 bg-zinc-900 text-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105" onClick={handleCardClick}>
      <img className="img-contain p-1 w-full h-36 object-contain cursor-pointer" src={imagePath} alt={`${props.itemType} image`} />
      <div className="p-0.5">
        <h4 className="text-lg font-semibold mb-2 text-left">{props.itemType}</h4>
        <p className="text-sm text-gray-400">{props.itemName}</p>
      </div>
    </div>
  )
}