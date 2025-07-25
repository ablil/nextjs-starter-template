import CredentialsProvider from "next-auth/providers/credentials"

export const simpleCredentialsProvider = CredentialsProvider({
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
})
