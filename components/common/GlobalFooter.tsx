import { AppConfig } from "@/lib/config"
import React from "react"

const GlobalFooter = () => {
  return (
    <footer className="max-w-5xl mx-auto">
      <hr />
      <article className="flex items-center justify-between py-12">
        <span>
          Copyright &copy; {new Date().getFullYear()} {AppConfig.metadata.defaultTitle}
        </span>
        <article className="flex gap-4">
          {AppConfig.footerLinks.map((item) => (
            <a key={item.label} href={item.link}>
              {item.label}
            </a>
          ))}
        </article>
      </article>
    </footer>
  )
}

export default GlobalFooter
