import type { SimpleIcon } from 'simple-icons'
import { siInstagram, siGithub, siX, siYoutube, siTwitch, siDuolingo, siThreads } from 'simple-icons'
import { Mail, Linkedin } from 'lucide-react'
import { BrandIcon } from '../brand-icon/brand-icon'

interface LinkCardProps {
  src: string
  social: string
  user?: string
  url: string
  theme: string
}

const BRAND_ICONS: Record<string, SimpleIcon> = {
  instagram: siInstagram,
  github: siGithub,
  xtwitter: siX,
  youtube: siYoutube,
  twitch: siTwitch,
  duolingo: siDuolingo,
  threads: siThreads,
}

// GitHub and Threads marks are near-black, so they'd vanish on the dark theme's card background
const THEME_ADAPTIVE_ICONS = new Set(['github', 'threads'])

function SocialIcon({ src, className }: { src: string, className: string }) {
  const shrinkableClassName = `${className} shrink-0`

  if (src === 'outlook') return <Mail className={shrinkableClassName} color='#5e95eb' />
  if (src === 'linkedin') return <Linkedin className={shrinkableClassName} color='#0a66c2' />

  const icon = BRAND_ICONS[src]
  if (!icon) return null
  const color = THEME_ADAPTIVE_ICONS.has(src) ? 'currentColor' : 'brand'
  return <BrandIcon icon={icon} color={color} className={shrinkableClassName} />
}

export function LinkCard(props: LinkCardProps) {
  const handleCardClick = () => window.open(props.url, 'blank')

  return (
    <div
      className={`flex flex-row items-center justify-between py-3 px-2.5 border rounded-3xl ${props.theme === 'dark' ? 'hover:bg-zinc-900 text-white' : 'hover:bg-zinc-100 text-black'} transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer`}
      onClick={handleCardClick}
    >
      <SocialIcon src={props.src} className='w-12 h-12' />
      <div className='flex flex-col sm:items-center sm:ml-4 sm:mt-0 sm:text-right'>
        <h4 className='text-xl font-semibold w-full'>{props.social}</h4>
        <p className='hidden sm:block text-sm text-gray-600 w-full'>{props.user}</p>
      </div>
      {/* Invisible icon for layout, only for non-outlook */}
      <SocialIcon src={props.src} className='w-12 h-12 sm:w-16 sm:h-16 opacity-0 sm:hidden' />
    </div>
  )
}

export function LinkCardSkeleton({ theme }: { theme: string }) {
  return (
    <div className={`flex flex-row items-center justify-between p-4 border rounded-3xl shadow-md animate-pulse ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}>
      <div className='w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 rounded-full'></div>
      <div className='flex flex-col sm:items-center sm:ml-4 sm:mt-0 sm:text-right'>
        <div className='h-6 bg-gray-400 rounded w-36 mt-2'></div>
        <div className='hidden sm:block text-sm text-gray-600 sm:ml-2 w-full'>
          <div className='h-4 bg-gray-400 rounded w-full mt-2'></div>
        </div>
      </div>
      <div className='w-12 h-12 sm:w-16 sm:h-16 opacity-0 sm:hidden bg-gray-200 rounded-full'></div>
    </div>
  )
}
