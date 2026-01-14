import ButtonWithIcon from "@/components/common/ButtonWithIcon"
import InputWithIcon from "@/components/common/InputWithIcon"
import ScrollToTop from "@/components/common/ScrollToTop"
import SidebarNavigation, { NavigationRoute } from "@/components/common/SidebarNavigation"
import {
  Archive,
  AtSign,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  CreditCard,
  GraduationCap,
  House,
  Scale,
  Search,
  SearchCode,
} from "lucide-react"

const sidebarRoutes: NavigationRoute[] = [
  { label: "home", href: "/home", icon: <House className="size-5" /> },
  { label: "about", href: "/about", icon: <Archive className="size-5" /> },
  {
    label: "components",
    href: "/components",
    icon: <Scale className="size-5" />,
    subroutes: [
      {
        label: "inputs",
        href: "/components/inputs",
        icon: <SearchCode className="size-5" />,
      },
      { label: "button", href: "/components/buttons", icon: <Clipboard className="size-5" /> },
      { label: "titles", href: "/components/titles", icon: <CreditCard className="size-5" /> },
    ],
  },
  { label: "contact", href: "/contact", icon: <GraduationCap className="size-5" /> },
  { label: "faq", href: "/faq", icon: <AtSign className="size-5" /> },
]

const ComponentsPage = () => {
  return (
    <main className="flex">
      <div className="">
        <SidebarNavigation routes={sidebarRoutes} />
      </div>
      <div>
        <h1 className="uppercase text-xl">buttons</h1>
        <div className="flex gap-2 p-4 flex-wrap">
          <button>no style</button>
          <button className="filled">click me</button>
          <button className="filled" disabled={true}>
            disabled button
          </button>
          <button className="transparent">transparent button</button>
          <button className="outlined">outlined button</button>
          <button className="outlined" disabled={true}>
            outlined disabled
          </button>

          <ButtonWithIcon rightIcon={<ChevronRight className="size-4" />} className="filled">
            sign in
          </ButtonWithIcon>
          <ButtonWithIcon leftIcon={<ChevronLast className="size-4" />} className="filled">
            sign out
          </ButtonWithIcon>
          <ButtonWithIcon rightIcon={<ChevronLeft className="size-4" />} className="outlined">
            sign in
          </ButtonWithIcon>
          <ButtonWithIcon leftIcon={<ChevronRight className="size-4" />} className="outlined">
            sign out
          </ButtonWithIcon>
          <ButtonWithIcon rightIcon={<ChevronRight className="size-4" />} className="transparent">
            sign in
          </ButtonWithIcon>
          <ButtonWithIcon leftIcon={<ChevronLast className="size-4" />} className="transparent">
            sign out
          </ButtonWithIcon>
        </div>
        <h1 className="uppercase text-xl">inputs</h1>
        <div className="flex gap-2 p-4 flex-wrap">
          <input type="text" placeholder="no style" className="" />
          <input type="text" placeholder="underlined" className="underlined" />
          <input type="text" placeholder="filled underlined" className="underlined filled" />
          <input type="text" placeholder="bordered" className="bordered" />
          <input type="text" placeholder="bordered filled" className="bordered filled" />

          <InputWithIcon
            placeholder="underlined left icon"
            className="underlined"
            leftIcon={<Search className="size-4" />}
          />
          <InputWithIcon
            placeholder="underlined right icon"
            className="underlined"
            rightIcon={<Search className="size-4" />}
          />
          <InputWithIcon
            placeholder="underlined filled left icon"
            className="underlined filled"
            leftIcon={<Search className="size-4" />}
          />
          <InputWithIcon
            placeholder="underlined filled right icon"
            className="underlined filled"
            rightIcon={<Search className="size-4" />}
          />
          <InputWithIcon
            placeholder="bordered left icon"
            className="bordered"
            leftIcon={<Search className="size-4" />}
          />
          <InputWithIcon
            placeholder="bordered right icon"
            className="bordered"
            rightIcon={<Search className="size-4" />}
          />
          <InputWithIcon
            placeholder="bordered filled left icon"
            className="bordered filled"
            leftIcon={<Search className="size-4" />}
          />
          <InputWithIcon
            placeholder="bordered filled right icion"
            className="bordered filled"
            rightIcon={<Search className="size-4" />}
          />
        </div>
        <h1 className="uppercase text-xl">titles</h1>

        <div>
          <h1 className="bigtitle">big title Lorem, ipsum dolor.</h1>
          <h2 className="title">title Lorem ipsum dolor sit.</h2>
          <h3 className="subtitle">subtitle Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
          <p className="undertitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, possimus.
          </p>
        </div>
        <ScrollToTop />
      </div>
    </main>
  )
}

export default ComponentsPage
