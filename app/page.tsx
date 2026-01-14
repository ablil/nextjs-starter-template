import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const routes = [
  {
    title: "root",
    link: "/",
  },
  {
    title: "home",
    link: "/home",
  },
  {
    title: "login",
    link: "/auth/login",
  },
  {
    title: "register",
    link: "/auth/register",
  },
]
export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col gap-12 pt-12">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <div className="grid gap-4 grid-row-5">
        {routes.map((route) => (
          <div key={route.link}>
            <Link href={route.link} className="flex items-center gap-2">
              <span>{route.title}</span>
              <MoveRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
