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
import Antigravity from '@/images/setup-images/antigravity.webp'
import Brave from '@/images/setup-images/brave.webp'
import Arc from '@/images/setup-images/arc.webp'
import Chrome from '@/images/setup-images/chrome.webp'
import Helium from '@/images/setup-images/helium.webp'
import Notion from '@/images/setup-images/notion.webp'
import Spotify from '@/images/setup-images/spotify.webp'
import GoogleDrive from '@/images/setup-images/google-drive.webp'
import GitHub from '@/images/setup-images/github.webp'

export type ImageMapKeys =
  | 'laptop' | 'mouse1' | 'mouse2' | 'earpods' | 'headphone' | 'headset'
  | 'mousepad' | 'mousepad2' | 'mintheme' | 'vesperpptheme' | 'jetbrains' | 'vscode'
  | 'codigo' | 'arquitetura' | 'php4' | 'estrutura' | 'android' | 'deschamps'
  | 'thenews' | 'codecon' | 'biro' | 'suporte' | 'ohmyzsh' | 'gitbash' | 'hyper'
  | 'designdev' | 'smartphone' | 'smartwatch' | 'alexa' | 'hub' | 'suportecabos'
  | 'lotrBox' | 'monitor' | 'monitor2' | 'solasterion' | 'moleskine' | 'abajur'
  | 'pinho' | 'antigravity' | 'brave' | 'arc' | 'chrome' | 'helium' | 'notion'
  | 'spotify' | 'googleDrive' | 'github'

export const invertOnLightTheme: ImageMapKeys[] = [
  'jetbrains',
  'designdev',
]

export const invertOnDarkTheme: ImageMapKeys[] = [
  'notion',
  'github',
]

export const imageMap: Record<ImageMapKeys, string> = {
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
  antigravity: Antigravity,
  brave: Brave,
  arc: Arc,
  chrome: Chrome,
  helium: Helium,
  notion: Notion,
  spotify: Spotify,
  googleDrive: GoogleDrive,
  github: GitHub,
}
