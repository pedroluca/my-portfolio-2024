import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTopButton() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5
      if (window.scrollY > scrollThreshold) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={`fixed bottom-4 right-4 ${showScrollButton ? 'opacity-100' : 'opacity-0'} scroll-to-top`}>
      <button
        onClick={scrollToTop}
        className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  )
}