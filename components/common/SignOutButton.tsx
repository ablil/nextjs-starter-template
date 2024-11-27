"use client"
import { AppConfig } from "@/lib/config"
import { signOut } from "next-auth/react"
import { ButtonHTMLAttributes, FC } from "react"

const SignOutButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const handleSignOut = () => {
    signOut({ callbackUrl: AppConfig.auth.signOutRedirectUrl, redirect: true })
  }

  return (
    <button {...props} onClick={handleSignOut}>
      sign out
    </button>
  )
}

export default SignOutButton
