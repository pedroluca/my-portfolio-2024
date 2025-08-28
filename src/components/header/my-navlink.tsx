import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface MyNavLinkProps {
  to: string
  children: React.ReactNode
  theme: string
  onClick?: () => void
}

export function MyNavLink(props: MyNavLinkProps) {  
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          isActive
            ? (props.theme === 'dark' ? 'text-white' : 'text-black')
            : (props.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'),
          `font-semibold flex ${props.theme === 'dark' ? 'lg:hover:bg-white/20' : 'lg:hover:bg-black/10'} transition px-2 py-1 lg:rounded-md text-left w-full`
        )
      }
      to={props.to}
    >
      {props.children}
    </NavLink>
  )
}