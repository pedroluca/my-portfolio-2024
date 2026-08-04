import { ComponentProps, ReactNode } from "react";

interface FooterButtonProps extends ComponentProps<'a'> {
  children: ReactNode
}

export function FooterButton({ children, ...props }: FooterButtonProps) {
  return (
    <a {...props} className='size-10' target="_blank" rel="noreferrer">
      <span className="flex items-center justify-center p-2 rounded hover:bg-white/20">
        {children}
      </span>
    </a>
  )
}
