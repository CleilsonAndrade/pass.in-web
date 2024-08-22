import { ComponentProps } from "react";

interface NavLinkPros extends ComponentProps<'a'> {
  children: string;
}

export function NavLink(props: NavLinkPros) {
  return (
    <a {...props} className="font-medium text-sm text-zinc-300">{props.children}</a>
  )
}