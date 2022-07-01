/** @jsx h */
import { h, ComponentChildren } from "preact";

// Utils
import { tw } from "@twind";

interface Props {
  children: ComponentChildren;
}

export const SidebarTitle = ({ children }: Props) => {
  return <span className={tw`font-semibold tracking-tight`}>{children}</span>;
};
