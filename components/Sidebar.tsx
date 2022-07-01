/** @jsx h */
import { h, ComponentChildren } from "preact";

// Utils
import cn from "classnames";
import { tw } from "@twind";

interface Props {
  children: ComponentChildren;
  size?: "default" | "large";
  className?: string;
}

export const Sidebar = ({ size = "default", className, children }: Props) => {
  const additionalClasses = cn(className, {
    "col-span-3": size === "default",
    "col-span-4": size === "large",
  });

  return (
    <aside
      class={tw`${additionalClasses} bg-white dark:bg-black relative h-screen pt-3 px-2 border-r border-neutral-300 dark:border-neutral-700`}
    >
      {children}
    </aside>
  );
};
