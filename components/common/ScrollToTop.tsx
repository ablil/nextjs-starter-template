"use client"
import { ChevronUp } from "lucide-react"
import React, { useState, useEffect } from "react"

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY // Current scroll position from the top

      // Show button if scrolled more than 100px
      setIsVisible(scrollTop > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg transition"
      >
        <ChevronUp className="size-5" />
      </button>
    )
  )
}

export default ScrollToTop
