"use client"
import { AppConfig } from "@/lib/config"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FormEventHandler, useState } from "react"

export default function LoginPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({ username: "", password: "" })
  const [error, setError] = useState<string | undefined>()

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
      <header className="text-center text-2xl">Sign In</header>
      {error && <h1 className="text-red-500 text-center capitalize py-4">{error}</h1>}
      <main>
        <div className="auth-field">
          <label htmlFor="username">
            username (<small>admin</small>)
          </label>
          <input
            type="text"
            required={true}
            name="username"
            placeholder="Username or password"
            value={formData.username}
            onChange={(evt) => setFormData({ ...formData, username: evt.target.value })}
          />
        </div>
        <div className="auth-field">
          <label htmlFor="password">
            password (<small>admin</small>)
          </label>
          <input
            type="password"
            required={true}
            name="password"
            id="password"
            placeholder="********"
            value={formData.password}
            onChange={(evt) => setFormData({ ...formData, password: evt.target.value })}
          />
        </div>
        <button className="auth-submit" type="submit">
          sign in
        </button>
      </main>
      <footer className="py-12 text-center">
        Don&apos;t have an account ?{" "}
        <a href="/auth/register" className="underline">
          Sign Up
        </a>
      </footer>
    </form>
  )
}
