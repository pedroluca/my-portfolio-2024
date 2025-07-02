import { About } from './about'
import { Projects } from './projects'
import { Link } from 'react-scroll'
import { ChevronDown } from 'lucide-react'
import { ScrollToTopButton } from '../components/scroll-to-top'

export function Home() {
  return (
    <>
      <main className='p-4 h-screen w-full flex flex-col items-center justify-center border-b border-zinc-800'>
        <div className='flex flex-col'>
          <h1 className='text-4xl text-white'>Pedro Luca Prates</h1>
          <h2 className='text-xl'>Fullstack Developer</h2>
          <h2 className='text-xl text-zinc-500'>Tecnólogo em Análise e Desenvolvimento de Sistemas</h2>
        </div>
        <Link to="about-section" smooth={true} duration={500} className="mt-8">
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </Link>
      </main>
      <About />
      <Projects />
      <ScrollToTopButton />
    </>
  )
}