import { FooterButton } from './footer-button'
import { BrandIcon } from '../brand-icon/brand-icon'
import { siGithub, siInstagram, siYoutube, siThreads } from 'simple-icons'
import { Linkedin } from 'lucide-react'

const ICON_COLOR = '#888888'

export function Footer({ theme }: { theme: string }) {
  return (
    <footer className={`h-16 px-3 py-1 flex items-center justify-center gap-3 ${theme === 'dark' ? 'bg-neutral-950 border-white/20' : 'bg-white border-gray-200'}`}>
      <FooterButton href='https://linkedin.com/in/pedrolucaofc'>
        <Linkedin size={24} color={ICON_COLOR} />
      </FooterButton>
      <FooterButton href='https://github.com/pedroluca'>
        <BrandIcon icon={siGithub} color={ICON_COLOR} />
      </FooterButton>
      <FooterButton href='https://instagram.com/pedroluca.p'>
        <BrandIcon icon={siInstagram} color={ICON_COLOR} />
      </FooterButton>
      <FooterButton href='https://www.threads.net/@pedroluca.p'>
        <BrandIcon icon={siThreads} color={ICON_COLOR} />
      </FooterButton>
      <FooterButton href='https://youtube.com/channel/@pedrolucaofc'>
        <BrandIcon icon={siYoutube} color={ICON_COLOR} />
      </FooterButton>
    </footer>
  )
}
