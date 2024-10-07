import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface MyNavLinkProps {
  to: string,
  children: React.ReactNode,
}

export function MyNavLink(props: MyNavLinkProps) {
  const isInternalLink = props.to.startsWith("#");

  if (isInternalLink) {
    return (
      <a
        href={props.to}
        className={twMerge(
          'text-zinc-400 font-semibold hover:text-white lg:hover:bg-white/20 transition px-2 py-1 lg:hover:rounded-md'
        )}
      >
        {props.children}
      </a>
    )
  }
  
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          isActive
            ? 'text-white border-b'
            : 'text-zinc-400',
          'font-semibold flex hover:text-white lg:hover:bg-white/20 transition px-2 py-1 lg:hover:rounded-md w-full text-left'
        )
      }
      to={props.to}
    >
      {props.children}
    </NavLink>
  )
}