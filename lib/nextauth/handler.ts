import { AppConfig } from "@/lib/config"
import NextAuth from "next-auth"
import { simpleCredentialsProvider } from "./provider"

export const handler = NextAuth({
  providers: [simpleCredentialsProvider],
  pages: {
    signIn: AppConfig.auth.signInPage,
  },
  debug: true,
})

export default handler
