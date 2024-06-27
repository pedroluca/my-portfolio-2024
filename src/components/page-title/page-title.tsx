import { ComponentProps } from "react"

interface PageTitleProps extends ComponentProps<'h1'> {
  children: React.ReactNode
}

export function PageTitle(props: PageTitleProps) {
  return (
    <h1 className="text-5xl font-bold mb-6 lg:mb-12">{props.children}</h1>
  )
}