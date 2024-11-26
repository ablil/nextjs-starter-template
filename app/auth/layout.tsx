import { AppConfig } from "@/lib/config"
import { Metadata } from "next"
import { metadata as mainMetadata } from "../layout"

export const metadata: Metadata = {
  ...mainMetadata,
  title: `${AppConfig.metadata.defaultTitle} Authentication`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="mx-auto max-w-xl my-28">{children}</div>
}
