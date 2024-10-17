import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Home } from "./pages/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Setup } from "./pages/setup"
import { Links } from "./pages/links"
import { NotFound } from "./pages/not-found"
import { Analytics } from "@vercel/analytics/react"

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Analytics/>
    </BrowserRouter>
  )
}