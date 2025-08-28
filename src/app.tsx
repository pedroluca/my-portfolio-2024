import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Home } from "./pages/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Setup } from "./pages/setup"
import { Links } from "./pages/links"
import { NotFound } from "./pages/not-found"
import { Analytics } from "@vercel/analytics/react"
import { useState, useEffect } from 'react'

export function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    // Apply theme classes to body
    document.body.className = theme === 'dark' 
      ? 'bg-zinc-950 min-h-screen flex flex-col w-full text-zinc-300' 
      : 'bg-white min-h-screen flex flex-col w-full text-zinc-900'
    
    // Save theme to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/setup" element={<Setup theme={theme} />} />
        <Route path="/links" element={<Links theme={theme} />} />
        <Route path="*" element={<NotFound theme={theme} />} />
      </Routes>
      <Footer theme={theme} />
      <Analytics/>
    </BrowserRouter>
  )
}