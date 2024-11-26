import React from "react"

export default function LoginPage() {
  return (
    <form action="login">
      <header className="text-center text-2xl">Sign In</header>
      <main>
        <div className="auth-field">
          <label htmlFor="username">username</label>
          <input type="text" required={true} name="username" placeholder="Username or password" />
        </div>
        <div className="auth-field">
          <label htmlFor="password">password</label>
          <input type="password" required={true} name="password" id="password" placeholder="********" />
        </div>
        <button className="auth-submit" type="submit">
          Sign In
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
