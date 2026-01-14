"use client"
import { Button } from "@/components/ui/button"
import { AppConfig } from "@/lib/config"
import { signOut } from "next-auth/react"

const HomePage = () => {
  return (
    <div className="w-full text-center">
      <h1 className="py-12 text-4xl">This is a private route</h1>
      <Button
        variant="default"
        onClick={() => signOut({ callbackUrl: AppConfig.auth.signOutRedirectUrl, redirect: true })}
      >
        sign out
      </Button>
    </div>
  )
}

export default HomePage
