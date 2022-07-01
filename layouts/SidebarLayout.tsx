/** @jsx h */
import { h, ComponentChildren } from "preact";

// UI
import { Sidebar } from "../components/Sidebar.tsx";
import { SidebarTitle } from "../components/SidebarTitle.tsx";

// Utils
import { tw } from "@twind";

// Data
// import { navigationLists } from "../lib/navigation";
// import { SidebarLink } from "../components/SidebarLink";
// import cn from "classnames";

interface Props {
  children: ComponentChildren;
}

export const SidebarLayout = ({ children }: Props) => {
  return (
    <div
      className={tw`px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[repeat(16,minmax(0,1fr))]`}
    >
      <Sidebar className={tw`hidden lg:block`}>
        <a className={tw`px-2`}>
          <SidebarTitle>Julius Dockwarder</SidebarTitle>
        </a>

        {/* <nav className="mt-5">
          {navigationLists.map((navigationList) => (
            <React.Fragment key={navigationList.id}>
              {navigationList.label && (
                <span className="mt-10 px-2 mb-2 block text-xs font-medium text-neutral-400 uppercase tracking-wide">
                  {navigationList.label}
                </span>
              )}
              <div className="space-y-1">
                {navigationList.items.map((navigationLink) => (
                  <SidebarLink
                    key={navigationLink.id}
                    navigationLink={navigationLink}
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </nav> */}
      </Sidebar>
      {children}
    </div>
  );
};
