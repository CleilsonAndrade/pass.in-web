import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavLinkPros extends ComponentProps<'a'> {
  children: string
}

export function NavLink(props: NavLinkPros) {
  return (
    <a {...props} className={twMerge('font-medium text-sm', props.className)}>
      {props.children}
    </a>
  )
}
