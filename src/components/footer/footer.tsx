import { FooterButton } from './footer-button'
import LinkedinIcon from '../../assets/images/linkedin-color.svg'
import GithubIcon from '../../assets/images/github-color.svg'
import InstagramIcon from '../../assets/images/instagram-color.svg'
import YoutubeIcon from '../../assets/images/youtube-color.svg'
import TwitterIcon from '../../assets/images/x-color.svg'

export function Footer({ theme }: { theme: string }) {
  return (
    <footer className={`h-16 px-3 py-1 flex items-center justify-center gap-3 ${theme === 'dark' ? 'bg-neutral-950 border-white/20' : 'bg-white border-gray-200'}`}>
      <FooterButton href='https://linkedin.com/in/pedrolucaofc' src={LinkedinIcon} />
      <FooterButton href='https://github.com/pedroluca' src={GithubIcon} />
      <FooterButton href='https://instagram.com/pedroluca.p' src={InstagramIcon} />
      <FooterButton href='https://youtube.com/channel/@pedrolucaofc' src={YoutubeIcon} />
      <FooterButton href='https://x.com/pedrolucaofc' src={TwitterIcon} />
    </footer>
  )
}