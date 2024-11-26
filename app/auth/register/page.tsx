import React from "react"

export default function RegisterPage() {
  return (
    <form action="register">
      <header className="text-center text-2xl">Sign Up</header>
      <main>
        <div className="auth-field">
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" placeholder="First name" />
        </div>
        <div className="auth-field">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" placeholder="Last name" />
        </div>
        <div className="auth-field">
          <label htmlFor="email">email</label>
          <input type="email" required={true} name="email" placeholder="email" />
        </div>
        <div className="auth-field">
          <label htmlFor="password">password</label>
          <input type="password" required={true} name="password" id="password" placeholder="********" />
        </div>
        <button className="auth-submit" type="submit">
          Sign Up
        </button>
      </main>
      <footer className="py-12 text-center">
        Already have an account ?{" "}
        <a href="/auth/login" className="underline">
          Sign In
        </a>
      </footer>
    </form>
  )
}
