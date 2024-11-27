"use client"
import { useAppSelector } from "@/lib/state/store"
import { FC, PropsWithChildren } from "react"

const PageLoader: FC<PropsWithChildren> = ({ children }) => {
  const initialized = useAppSelector((state) => state.default.initialized)

  if (initialized) {
    return <>{children}</>
  }

  return (
    <div className="fixed w-screen h-screen z-50 flex items-center justify-center animate-pulse">initializing ...</div>
  )
}

export default PageLoader
