import { ComponentProps } from "react";

interface FooterButtonProps extends ComponentProps<'a'> {
  src: string
}

export function FooterButton(props: FooterButtonProps) {
  return (
    <a {...props} className='size-10' target="_blank" rel="noreferrer">
      <img src={props.src} className="fill-orange-500 p-2 rounded hover:bg-white/20" />
    </a>
  )
}