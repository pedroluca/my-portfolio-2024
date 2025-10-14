import { PageTitle } from '../components/page-title/page-title'
import { LinkCard, LinkCardSkeleton } from '../components/cards/link-card'
import { useState } from 'react'

export function Links({ theme }: { theme: string }) {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => setIsLoading(false), 500)
  
  const links = [
    { src: 'instagram', social: 'Instagram', user: '@pedroluca.p', url: 'https://instagram.com/pedroluca.p' },
    { src: 'github', social: 'Github', user: '@pedroluca', url: 'https://github.com/pedroluca' },
    { src: 'linkedin', social: 'LinkedIn', user: 'Pedro Luca Prates', url: 'https://linkedin.com/in/pedrolucaofc' },
    { src: 'xtwitter', social: 'X (Twitter)', user: '@pedrolucaofc', url: 'https://twitter.com/pedrolucaofc' },
    { src: 'youtube', social: 'YouTube', user: 'Pedro Luca Prates', url: 'https://youtube.com/channel/@pedrolucaofc' },
    { src: 'twitch', social: 'Twitch', user: 'PedroLucaOFC', url: 'https://twitch.tv/PedroLucaOFC' },
    { src: 'duolingo', social: 'Duolingo', user: 'pedroluca.p', url: 'https://www.duolingo.com/profile/pedroluca.p' },
    { src: 'outlook', social: 'E-mail', user: 'pedrolucaofc@outlook.com', url: 'mailto:pedrolucaofc@outlook.com' },
  ]

  return (
    <section 
      className='py-4 px-6 lg:px-[25%] w-full flex flex-col gap-3 text-justify pt-24 mb-16 min-h-screen'
      style={{ minHeight: 'calc(100vh - 4rem - 4rem)' }}
    >
      <PageTitle>Links</PageTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {isLoading ? (
          <>
            <LinkCardSkeleton theme={theme} />
            <LinkCardSkeleton theme={theme} />
            <LinkCardSkeleton theme={theme} />
          </>
        ) : (
          links.map(link => (
            <LinkCard theme={theme} key={link.src} src={link.src} social={link.social} user={link.user} url={link.url} />
          ))
        )}
      </div>
    </section>
  )
}