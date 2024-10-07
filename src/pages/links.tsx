import { PageTitle } from "../components/page-title/page-title"
import { LinkCard } from "../components/cards/link-card"

export function Links() {
  const links = [
    { src: 'instagram', social: 'Instagram', user: '@pedroluca.p', url: 'https://instagram.com/pedroluca.p' },
    { src: 'github', social: 'Github', user: '@pedroluca', url: 'https://github.com/pedroluca' },
    { src: 'linkedin', social: 'LinkedIn', user: 'Pedro Luca Prates', url: 'https://linkedin.com/in/pedrolucaofc' },
    { src: 'xtwitter', social: 'X (Twitter)', user: '@pedrolucaofc', url: 'https://twitter.com/pedrolucaofc' },
    { src: 'youtube', social: 'YouTube', user: 'Pedro Luca Prates', url: 'https://youtube.com/channel/UC7qDaMEUS4MjhQ7UVxQQVMQ' },
    { src: 'twitch', social: 'Twitch', user: 'PedroLucaOFC', url: 'https://twitch.tv/PedroLucaOFC' },
    { src: 'outlook', social: 'Outlook', user: 'pedrolucaofc@outlook.com', url: 'mailto:pedrolucaofc@outlook.com' },
  ]

  return (
    <section className="py-4 px-6 lg:px-64 w-full flex flex-col gap-3 text-justify pt-24 mb-16">
      <PageTitle>Links</PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map(link => (
          <LinkCard key={link.src} src={link.src} social={link.social} user={link.user} url={link.url} />
        ))}
      </div>
    </section>
  )
}