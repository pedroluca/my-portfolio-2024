import { ComponentProps } from "react"
import { NavLink } from "react-router-dom"

interface NavbarLinkProps extends ComponentProps<'a'> {
  to: string
}

export function NavbavLink(props: NavbarLinkProps) {
  return <NavLink {...props} to={props.to} className='text-zinc-400 font-semibold hover:text-white hover:border-b' />
}