import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function TableCell(props: ComponentProps<'td'>) {
  return (
    <td
      {...props}
      className={twMerge(
        'py-3 px-4 text-sm font-semibold text-zinc-300',
        props.className
      )}
    >
      {props.children}
    </td>
  )
}
