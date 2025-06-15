import InputWithIcon from "@/components/common/InputWithIcon"
import { AtSymbolIcon, LockClosedIcon, UserIcon } from "@heroicons/react/16/solid"

export default function RegisterPage() {
  return (
    <form action="register">
      <header className="bigtitle text-center">sign up</header>
      <main>
        <div className="grid grid-rows-5 gap-4 my-8">
          <InputWithIcon
            leftIcon={<UserIcon className="size-4" />}
            placeholder="first name"
            className="bordered filled"
          />
          <InputWithIcon
            leftIcon={<UserIcon className="size-4" />}
            placeholder="last name"
            className="bordered filled"
          />
          <InputWithIcon
            leftIcon={<AtSymbolIcon className="size-4" />}
            placeholder="email name"
            type="email"
            className="bordered filled"
            required={true}
          />
          <InputWithIcon
            leftIcon={<LockClosedIcon className="size-4" />}
            placeholder="password"
            type="password"
            className="bordered filled"
            required={true}
          />
          <button type="submit" className="filled" disabled={true}>
            sign up
          </button>
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
