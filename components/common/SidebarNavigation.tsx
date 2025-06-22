import Link from "next/link"
import { FC, ReactNode } from "react"

export type NavigationRoute = {
  label: string
  href: string
  icon?: ReactNode
  subroutes?: NavigationRoute[]
}

const SidebarNavigation: FC<{ routes: NavigationRoute[] }> = ({ routes }) => {
  return (
    <aside className="max-w-xs w-52" id="sidebar-navigation">
      {routes.map((route) =>
        route.subroutes ? (
          <details key={route.href}>
            <summary className="route cursor-pointer flex items-center gap-2">
              {route.icon} {route.label}
            </summary>
            <div className="ml-4">{route.subroutes?.map((r) => renderLink(r))}</div>
          </details>
        ) : (
          renderLink(route)
        ),
      )}
    </aside>
  )
}

const renderLink = (route: NavigationRoute) => (
  <Link
    className="route flex items-center gap-2"
    data-selected={route.href === "/home"}
    href={route.href}
    key={route.href}
  >
    {route.icon}
    {route.label}
  </Link>
)
export default SidebarNavigation
