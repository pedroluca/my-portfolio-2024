import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface MyNavLinkProps {
  to: string,
  children: React.ReactNode,
}

export function MyNavLink(props: MyNavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          isActive
            ? 'text-white border-b'
            : 'text-zinc-400',
          'font-semibold hover:text-white lg:hover:bg-white/20 transition px-2 py-1 lg:hover:rounded-md'
        )
      }
      to={props.to}
    >
      {props.children}
    </NavLink>
  )
}