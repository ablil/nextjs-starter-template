import SignOutButton from "@/components/common/SignOutButton"

const HomePage = () => {
  return (
    <div className="w-full text-center">
      <h1 className="py-12 text-4xl">This is a private route</h1>
      <SignOutButton className="bg-black dark:bg-white text-white dark:text-black rounded-full" />
    </div>
  )
}

export default HomePage
