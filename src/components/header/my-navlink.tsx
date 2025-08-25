import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface MyNavLinkProps {
  to: string,
  children: React.ReactNode,
  onClick?: () => void
}

export function MyNavLink(props: MyNavLinkProps) {  
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          isActive
            ? 'text-white'
            : 'text-zinc-400',
          'font-semibold flex lg:hover:bg-white/20 transition px-2 py-1 lg:rounded-md text-left w-full'
        )
      }
      to={props.to}
    >
      {props.children}
    </NavLink>
  )
}