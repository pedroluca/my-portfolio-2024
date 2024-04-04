import { PanelRight, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { NavbavLink } from './navlink'
import NewLogo from '../../assets/images/logo.svg'

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  const navbar = document.getElementById('navbar')

  navbar?.addEventListener('click', (e) => {
    if (e.target === navbar) {
      setIsMenuActive(false)
    }
  })

  return (
    <header className='flex px-3 py-1 w-full h-16 items-center justify-between bg-transparent border-b border-white/20'>
      <NavLink to="/">
        <img src={NewLogo} className='size-10' />
      </NavLink>
      <div className='flex'>
        <button onClick={handleMenu}>
          <PanelRight />
        </button>
        <nav id='navbar' className={
          twMerge(
            isMenuActive ? 'flex' : 'hidden',
            'absolute h-[100vh] w-[100vw] top-0 left-0 bg-black/80 flex-row-reverse transition'
          )
        }>
          <div className='py-4 px-5 bg-zinc-950 w-72 flex flex-col border-l border-white/20'>
            <button className='self-end' onClick={handleMenu}>
              <X />
            </button>
            <img src={NewLogo} className='size-10 self-center mb-2' />
            <hr className='border-white/20' />
            <ul className='flex flex-col gap-2 px-1 mt-4 text-lg'>
              <li>
                <NavbavLink to="/about">Sobre</NavbavLink>
              </li>
              <li>
                <NavbavLink to="/projects">Projetos</NavbavLink>
              </li>
              <li>
                <NavbavLink to="/setup">Setup</NavbavLink>
              </li>
              <li>
                <NavbavLink to="/links">Links</NavbavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}