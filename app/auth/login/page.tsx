"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AppConfig } from "@/lib/config"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FormEventHandler, useMemo, useState } from "react"

export default function LoginPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({ username: "", password: "" })
  const [error, setError] = useState<string | undefined>()

  const formDisabled = useMemo(
    () => formData.username.length === 0 || formData.password.length === 0 || error?.length === 0,
    [formData, error],
  )

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault()

    const response = await signIn("credentials", {
      callbackUrl: AppConfig.auth.signInRedirectUrl,
      redirect: false,
      username: formData.username,
      password: formData.password,
    })
    if (response?.ok) {
      router.push("/home")
    } else {
      setError("authentication failed")
    }
  }

  return (
    <form action="login" onSubmit={handleSubmit}>
      <header className="bigtitle text-center">Sign In</header>
      {error && (
        <h1 className="undertitle text-red-500 font-bold uppercase text-center pt-2">{error}</h1>
      )}
      <main>
        <div className="grid grid-rows-3 gap-4 my-8">
          <div>
            <Input
              placeholder="username or email"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="***"
              onChange={(evt) => setFormData({ ...formData, password: evt.target.value })}
            />
          </div>
          <Button type="submit" disabled={formDisabled}>
            sign in
          </Button>
        </div>
      </main>
      <footer className="undertitle text-center">
        Don&apos;t have an account ?
        <a href="/auth/register" className="underline uppercase px-1">
          Sign Up
        </a>
      </footer>
    </form>
  )
}
