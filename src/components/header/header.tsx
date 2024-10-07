import { PanelRight, X } from 'lucide-react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import NewLogo from '../../assets/images/logo.svg'
import { MyNavLink } from './my-navlink'
import React, { useEffect } from 'react'

export function Header () {
  const [isMenuActive, setIsMenuActive] = React.useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive)
  }

  const handleNavLinkClick = (targetId: string, path: string = '/') => {
    setIsMenuActive(false)
    if (location.pathname !== path) {
      navigate(path)
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='flex px-3 py-1 w-full h-16 items-center fixed justify-between backdrop-blur-md border-b border-white/20 z-10'>
      <NavLink to="/">
        <img src={NewLogo} className='size-10' />
      </NavLink>
      <div className='flex'>
        <button onClick={handleMenu} className='lg:hidden'>
          <PanelRight />
        </button>
        <nav id='navbar' className={
          twMerge(
            isMenuActive ? '-translate-x-0' : 'translate-x-full',
            'absolute flex lg:relative h-screen lg:h-auto w-screen lg:w-auto top-0 right-0 bg-black/80 lg:bg-transparent flex-row-reverse lg:flex-row transition-transform duration-400 lg:-translate-x-0'
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
                <button onClick={() => handleNavLinkClick('about-section')} className='text-zinc-400 font-semibold hover:text-white lg:hover:bg-white/20 transition px-2 py-1 lg:hover:rounded-md w-full text-left'>
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => handleNavLinkClick('projects-section')} className='text-zinc-400 font-semibold hover:text-white lg:hover:bg-white/20 transition px-2 py-1 lg:hover:rounded-md w-full text-left'>
                  Projetos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavLinkClick('setup-section', '/setup')} className='w-full'>
                  <MyNavLink to='/setup'>
                    Setup
                  </MyNavLink>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavLinkClick('links-section', '/links')} className='w-full'>
                  <MyNavLink to='/links'>
                    Links
                  </MyNavLink>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}