import { PanelRight, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import NewLogo from '../../assets/images/logo.svg'
import { MyNavLink } from './my-navlink'

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
        <button onClick={handleMenu} className='lg:hidden'>
          <PanelRight />
        </button>
        <nav id='navbar' className={
          twMerge(
            isMenuActive ? 'flex' : 'hidden',
            'absolute lg:relative h-[100vh] lg:h-auto w-[100vw] lg:w-auto top-0 left-0 bg-black/80 lg:bg-transparent flex-row-reverse lg:flex-row transition lg:flex'
          )
        }>
          <div className='py-4 px-5 bg-zinc-950 w-72 flex flex-col border-l lg:border-0 border-white/20 lg:flex-row lg:items-center lg:w-auto lg:p-0 lg:bg-transparent'>
            <button className='self-end lg:hidden' onClick={handleMenu}>
              <X />
            </button>
            <img src={NewLogo} className='size-10 self-center mb-2 lg:hidden' />
            <hr className='border-white/20 lg:hidden' />
            <ul className='flex flex-col gap-2 px-1 mt-4 text-lg lg:flex-row lg:items-center lg:mt-0'>
              <li>
                <MyNavLink to="/about">Sobre</MyNavLink>
              </li>
              <li>
                <MyNavLink to="/projects">Projetos</MyNavLink>
              </li>
              <li>
                <MyNavLink to="/setup">Setup</MyNavLink>
              </li>
              <li>
                <MyNavLink to="/links">Links</MyNavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}