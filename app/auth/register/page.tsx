import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  return (
    <form action="register">
      <header className="bigtitle text-center">sign up</header>
      <main>
        <div className="grid grid-rows-5 gap-4 my-8">
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" type="email" />
          <Input placeholder="****" type="password" />
          <Button type="submit" disabled={true}>
            sign up
          </Button>
        </div>
      </main>
      <footer className="undertitle text-center">
        Already have an account ?
        <a href="/auth/login" className="underline px-1 uppercase">
          Sign In
        </a>
      </footer>
    </form>
  )
}
