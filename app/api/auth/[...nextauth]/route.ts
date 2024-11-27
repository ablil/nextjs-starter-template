import { AppConfig } from "@/lib/config"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "johndoe" },
        password: { label: "password", type: "password" },
      },
      // eslint-disable-next-line
      async authorize(credentials, _): Promise<any> {
        if (credentials?.username === "admin" && credentials.password === "admin") {
          return {
            token: "randomjwttoken",
            username: "amdin",
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: AppConfig.auth.signInPage,
  },
  debug: true,
})

export { handler as GET, handler as POST }
