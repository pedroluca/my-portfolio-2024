import Instagram from '../../assets/images/instagram.png'
import Github from '../../assets/images/github.png'
import Linkedin from '../../assets/images/linkedin.png'
import Xtwitter from '../../assets/images/xtwitter.png'
import Youtube from '../../assets/images/youtube.png'
import Twitch from '../../assets/images/twitch.png'
import Outlook from '../../assets/images/outlook.png'
import Duolingo from '../../assets/images/duolingo.png'

interface LinkCardProps {
  src: string
  social: string
  user: string
  url: string
}

export function LinkCard(props: LinkCardProps) {
  const handleCardClick = () => window.open(props.url, 'blank')
  
  let imagePath
  if (props.src === 'instagram') imagePath = Instagram
  else if (props.src === 'github') imagePath = Github
  else if (props.src === 'linkedin') imagePath = Linkedin
  else if (props.src === 'xtwitter') imagePath = Xtwitter
  else if (props.src === 'youtube') imagePath = Youtube
  else if (props.src === 'twitch') imagePath = Twitch
  else if (props.src === 'outlook') imagePath = Outlook
  else if (props.src === 'duolingo') imagePath = Duolingo

  return (
    <div 
      className="flex flex-row items-center justify-between p-4 border rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <img className="w-12 h-12 sm:w-16 sm:h-16" src={imagePath} alt="Social media specified logo" />
      <div className="flex flex-col sm:items-center sm:ml-4 sm:mt-0 sm:text-right">
        <h4 className="text-xl font-semibold w-full">{props.social}</h4>
        <p className="hidden sm:block text-sm text-gray-600 sm:ml-2 w-full">{props.user}</p>
      </div>
      <img className="w-12 h-12 sm:w-16 sm:h-16 opacity-0 sm:hidden" src={imagePath} alt="Social media specified logo" />
    </div>
  )
}